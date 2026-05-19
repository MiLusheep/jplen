import https from 'node:https';
import http from 'node:http';
import { URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'news');
const OUTPUT_FILE = path.join(DATA_DIR, 'articles.json');
const MAX_ARTICLES_PER_SOURCE = 15;
const MAX_TOTAL_ARTICLES = 500;
const MAX_ARTICLE_AGE_DAYS = 30;

const cookieJar = {};

function fetchRaw(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const mod = parsedUrl.protocol === 'https:' ? https : http;
    const cookieHeader = Object.entries(cookieJar).map(([k, v]) => `${k}=${v}`).join('; ');

    const reqOptions = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      rejectUnauthorized: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/html, application/xml, */*',
        ...(cookieHeader ? { Cookie: cookieHeader } : {}),
        ...options.headers,
      },
    };

    const req = mod.request(reqOptions, (res) => {
      const setCookieHeaders = res.headers['set-cookie'];
      if (setCookieHeaders) {
        const cookies = Array.isArray(setCookieHeaders) ? setCookieHeaders : [setCookieHeaders];
        for (const c of cookies) {
          const [nameValue] = c.split(';');
          const eqIdx = nameValue.indexOf('=');
          if (eqIdx > 0) {
            cookieJar[nameValue.substring(0, eqIdx).trim()] = nameValue.substring(eqIdx + 1).trim();
          }
        }
      }

      if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}${redirectUrl}`;
        }
        res.resume();
        resolve({ status: res.statusCode, location: redirectUrl, cookies: setCookieHeaders });
        return;
      }

      let data = '';
      res.setEncoding('utf-8');
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, data, _data: data });
        } else {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
      });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error(`Timeout: ${url}`)); });
    req.end();
  });
}

async function fetchUrl(url, options = {}) {
  const result = await fetchRaw(url, options);
  return result.data;
}

async function fetchWithRedirects(url, maxRedirects = 5) {
  let currentUrl = url;
  for (let i = 0; i < maxRedirects; i++) {
    const result = await fetchRaw(currentUrl);
    if (result.status === 301 || result.status === 302) {
      currentUrl = result.location;
      continue;
    }
    return result;
  }
  throw new Error(`Too many redirects for ${url}`);
}

function stripHtml(html) {
  return html
    .replace(/<ruby>.*?<rb>(.*?)<\/rb>.*?<\/ruby>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractRubyHtml(html) {
  return html
    .replace(/<ruby>.*?<rb>(.*?)<\/rb>.*?<rt>(.*?)<\/rt>.*?<\/ruby>/g, '<ruby>$1<rt>$2</rt></ruby>')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
}

function countJapaneseChars(text) {
  const matches = text.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\uFF00-\uFFEF]/g);
  return matches ? matches.length : 0;
}

function estimateLevel(text) {
  const charCount = countJapaneseChars(text);
  const kanjiCount = (text.match(/[\u4E00-\u9FFF]/g) || []).length;
  const kanjiRatio = charCount > 0 ? kanjiCount / charCount : 0;

  if (kanjiRatio < 0.15 && charCount < 300) return 'N5';
  if (kanjiRatio < 0.2 && charCount < 500) return 'N4';
  if (kanjiRatio < 0.3 && charCount < 800) return 'N3';
  if (kanjiRatio < 0.4) return 'N2';
  return 'N1';
}

function estimateReadingTime(wordCount) {
  return Math.max(1, Math.ceil(wordCount / 300));
}

function generateId(source, index) {
  return `news-${source}-${Date.now()}-${index}`;
}

async function fetchNhkEasyNews() {
  console.log('[NHK Easy] Fetching with authentication...');
  const articles = [];

  try {
    const authParams = new URLSearchParams({
      idp: 'a-alaz',
      profileType: 'abroad',
      redirect_uri: 'https://news.web.nhk/news/easy/',
      entity: 'none',
      area: '130',
      pref: '13',
      jisx0402: '13101',
      postal: '1000001',
    });

    const step1 = await fetchRaw(`https://news.web.nhk/tix/build_authorize?${authParams.toString()}`);
    if (!step1.location) {
      throw new Error('No redirect location from build_authorize');
    }

    const step2 = await fetchRaw(step1.location);
    if (!step2.location) {
      throw new Error('No redirect location from authorize');
    }

    const step3 = await fetchRaw(step2.location);

    const newsListResult = await fetchWithRedirects('https://news.web.nhk/news/easy/news-list.json');
    const data = JSON.parse(newsListResult._data || newsListResult.data);

    const dateGroups = Array.isArray(data) ? data[0] : data;
    const entries = [];

    if (Array.isArray(dateGroups)) {
      for (const group of dateGroups) {
        if (group && typeof group === 'object') {
          const dateKey = Object.keys(group)[0];
          if (dateKey && Array.isArray(group[dateKey])) {
            entries.push(...group[dateKey]);
          }
        }
      }
    }

    const recentEntries = entries.slice(0, MAX_ARTICLES_PER_SOURCE);

    for (let i = 0; i < recentEntries.length; i++) {
      const entry = recentEntries[i];
      try {
        const newsId = entry.news_id || entry.id || `easy-${i}`;
        const title = entry.title || '';
        const titleWithRuby = entry.title_with_ruby || title;
        const contentHtml = entry.content_with_ruby || entry.content || '';
        const content = stripHtml(contentHtml);
        const pubDate = entry.news_prearranged_time || entry.news_publication_time || new Date().toISOString();
        const image = entry.news_web_image_uri || (entry.image_path ? `https://www3.nhk.or.jp${entry.image_path}` : undefined);
        const link = newsId ? `https://www3.nhk.or.jp/news/easy/${newsId}/${newsId}.html` : '';

        if (!title || !content) continue;

        const wordCount = countJapaneseChars(content);
        const level = estimateLevel(content);

        articles.push({
          id: generateId('nhk-easy', i),
          title: title,
          titleJp: titleWithRuby,
          content: content,
          contentHtml: contentHtml,
          link: link,
          pubDate: pubDate,
          image: image,
          level: level,
          category: 'news',
          wordCount: wordCount,
          estimatedTime: estimateReadingTime(wordCount),
          source: 'nhk-easy',
          sourceLabel: 'NHK News Web Easy',
        });
      } catch (e) {
        console.error(`[NHK Easy] Error processing entry ${i}:`, e.message);
      }
    }

    console.log(`[NHK Easy] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[NHK Easy] Fetch failed:', e.message);
  }

  return articles;
}

async function fetchNhkEasier() {
  console.log('[NHK Easier] Fetching RSS...');
  const articles = [];

  try {
    const xmlStr = await fetchUrl('https://nhkeasier.com/feed/');
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    const titleRegex = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>/;
    const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
    const descRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/;
    const contentRegex = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>|<content:encoded>([\s\S]*?)<\/content:encoded>/;

    let match;
    let count = 0;
    while ((match = itemRegex.exec(xmlStr)) !== null && count < MAX_ARTICLES_PER_SOURCE) {
      const itemStr = match[0];
      const titleMatch = titleRegex.exec(itemStr);
      const linkMatch = linkRegex.exec(itemStr);
      const dateMatch = dateRegex.exec(itemStr);
      const descMatch = descRegex.exec(itemStr);
      const contentMatch = contentRegex.exec(itemStr);

      const title = (titleMatch ? (titleMatch[1] || titleMatch[2]) : '').trim();
      const link = (linkMatch ? linkMatch[1] : '').trim();
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
      const desc = (descMatch ? (descMatch[1] || descMatch[2]) : '').trim();
      const contentEncoded = contentMatch ? (contentMatch[1] || contentMatch[2] || '').trim() : '';

      if (!title) { count++; continue; }

      const content = stripHtml(contentEncoded || desc);
      const contentHtml = extractRubyHtml(contentEncoded || `<p>${desc}</p>`);

      if (countJapaneseChars(content) < 20) { count++; continue; }

      const wordCount = countJapaneseChars(content);
      const level = estimateLevel(content);

      articles.push({
        id: generateId('nhk-easier', count),
        title: title,
        titleJp: title,
        content: content,
        contentHtml: contentHtml,
        link: link,
        pubDate: pubDate,
        level: level,
        category: 'news',
        wordCount: wordCount,
        estimatedTime: estimateReadingTime(wordCount),
        source: 'nhk-easier',
        sourceLabel: 'NHK Easier',
      });
      count++;
    }

    console.log(`[NHK Easier] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[NHK Easier] Fetch failed:', e.message);
  }

  return articles;
}

async function fetchNhkSokuho() {
  console.log('[NHK Sokuho] Fetching...');
  const articles = [];

  try {
    const xmlStr = await fetchUrl('https://api.web.nhk/sokuho/news/sokuho_news.xml');
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    const titleRegex = /<title>([\s\S]*?)<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>/;
    const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
    const descRegex = /<description>([\s\S]*?)<\/description>/;

    let match;
    let count = 0;
    while ((match = itemRegex.exec(xmlStr)) !== null && count < MAX_ARTICLES_PER_SOURCE) {
      const itemStr = match[0];
      const titleMatch = titleRegex.exec(itemStr);
      const linkMatch = linkRegex.exec(itemStr);
      const dateMatch = dateRegex.exec(itemStr);
      const descMatch = descRegex.exec(itemStr);

      const title = (titleMatch ? titleMatch[1] : '').trim();
      const link = (linkMatch ? linkMatch[1] : '').trim();
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
      const desc = (descMatch ? descMatch[1] : '').trim();

      if (!title) { count++; continue; }

      const content = stripHtml(desc) || title;
      const wordCount = countJapaneseChars(content);
      if (wordCount < 10) { count++; continue; }

      const level = estimateLevel(content);

      articles.push({
        id: generateId('nhk-sokuho', count),
        title: title,
        titleJp: title,
        content: content,
        contentHtml: `<p>${content}</p>`,
        link: link,
        pubDate: pubDate,
        level: level,
        category: 'news',
        wordCount: wordCount,
        estimatedTime: estimateReadingTime(wordCount),
        source: 'nhk-sokuho',
        sourceLabel: 'NHKニュース速報',
      });
      count++;
    }

    console.log(`[NHK Sokuho] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[NHK Sokuho] Fetch failed:', e.message);
  }

  return articles;
}

const YAHOO_RSS_FEEDS = [
  { url: 'https://news.yahoo.co.jp/rss/topics/top-picks.xml', category: 'top' },
  { url: 'https://news.yahoo.co.jp/rss/topics/domestic.xml', category: 'domestic' },
  { url: 'https://news.yahoo.co.jp/rss/topics/world.xml', category: 'world' },
  { url: 'https://news.yahoo.co.jp/rss/topics/science.xml', category: 'science' },
  { url: 'https://news.yahoo.co.jp/rss/topics/entertainment.xml', category: 'entertainment' },
];

async function fetchYahooNews() {
  console.log('[Yahoo News] Fetching RSS feeds...');
  const articles = [];

  for (const feed of YAHOO_RSS_FEEDS) {
    try {
      const xmlStr = await fetchUrl(feed.url);
      const itemRegex = /<item[\s\S]*?<\/item>/g;
      const titleRegex = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/;
      const linkRegex = /<link>([\s\S]*?)<\/link>/;
      const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
      const descRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/;

      let match;
      let count = 0;
      while ((match = itemRegex.exec(xmlStr)) !== null && count < 5) {
        const itemStr = match[0];
        const titleMatch = titleRegex.exec(itemStr);
        const linkMatch = linkRegex.exec(itemStr);
        const dateMatch = dateRegex.exec(itemStr);
        const descMatch = descRegex.exec(itemStr);

        const title = (titleMatch ? (titleMatch[1] || titleMatch[2]) : '').trim();
        const link = (linkMatch ? linkMatch[1] : '').trim();
        const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
        const desc = (descMatch ? (descMatch[1] || descMatch[2]) : '').trim();

        if (!title) { count++; continue; }

        const content = desc || title;
        const wordCount = countJapaneseChars(content);
        if (wordCount < 10) { count++; continue; }

        const level = estimateLevel(content);

        articles.push({
          id: generateId(`yahoo-${feed.category}`, count),
          title: title,
          titleJp: title,
          content: content,
          contentHtml: `<p>${content}</p>`,
          link: link,
          pubDate: pubDate,
          level: level,
          category: feed.category === 'domestic' ? 'society' : feed.category === 'world' ? 'news' : feed.category,
          wordCount: wordCount,
          estimatedTime: estimateReadingTime(wordCount),
          source: 'yahoo',
          sourceLabel: 'Yahoo!ニュース',
        });
        count++;
      }
    } catch (e) {
      console.error(`[Yahoo News] Feed ${feed.category} failed:`, e.message);
    }
  }

  console.log(`[Yahoo News] Got ${articles.length} articles`);
  return articles;
}

async function fetchCnnJapan() {
  console.log('[CNN Japan] Fetching RSS...');
  const articles = [];

  try {
    const xmlStr = await fetchUrl('http://feeds.cnn.co.jp/rss/cnn/cnn.rdf');
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    const titleRegex = /<title>([\s\S]*?)<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>|<rdf:li rdf:resource="([^"]+)"\/>/;
    const dateRegex = /<dc:date>([\s\S]*?)<\/dc:date>/;
    const descRegex = /<description>([\s\S]*?)<\/description>/;

    let match;
    let count = 0;
    while ((match = itemRegex.exec(xmlStr)) !== null && count < MAX_ARTICLES_PER_SOURCE) {
      const itemStr = match[0];
      const titleMatch = titleRegex.exec(itemStr);
      const linkMatch = linkRegex.exec(itemStr);
      const dateMatch = dateRegex.exec(itemStr);
      const descMatch = descRegex.exec(itemStr);

      const title = (titleMatch ? titleMatch[1] : '').trim();
      const link = (linkMatch ? (linkMatch[1] || linkMatch[2]) : '').trim();
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
      const desc = (descMatch ? descMatch[1] : '').trim();

      if (!title) { count++; continue; }

      const content = stripHtml(desc) || title;
      const wordCount = countJapaneseChars(content);
      if (wordCount < 10) { count++; continue; }

      const level = estimateLevel(content);
      const imgMatch = desc.match(/<img[^>]+src="([^"]+)"/);
      const image = imgMatch ? imgMatch[1] : undefined;

      articles.push({
        id: generateId('cnn-japan', count),
        title: title,
        titleJp: title,
        content: content,
        contentHtml: `<p>${content}</p>`,
        link: link,
        pubDate: pubDate,
        image: image,
        level: level,
        category: 'world',
        wordCount: wordCount,
        estimatedTime: estimateReadingTime(wordCount),
        source: 'cnn-japan',
        sourceLabel: 'CNN.co.jp',
      });
      count++;
    }

    console.log(`[CNN Japan] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[CNN Japan] Fetch failed:', e.message);
  }

  return articles;
}

async function fetchAfpbbNews() {
  console.log('[AFPBB News] Fetching RSS...');
  const articles = [];

  try {
    const xmlStr = await fetchUrl('http://feeds.afpbb.com/rss/afpbb/afpbbnews');
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    const titleRegex = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>/;
    const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>|<dc:date>([\s\S]*?)<\/dc:date>/;
    const descRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/;
    const contentRegex = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>|<content:encoded>([\s\S]*?)<\/content:encoded>/;

    let match;
    let count = 0;
    while ((match = itemRegex.exec(xmlStr)) !== null && count < MAX_ARTICLES_PER_SOURCE) {
      const itemStr = match[0];
      const titleMatch = titleRegex.exec(itemStr);
      const linkMatch = linkRegex.exec(itemStr);
      const dateMatch = dateRegex.exec(itemStr);
      const descMatch = descRegex.exec(itemStr);
      const contentMatch = contentRegex.exec(itemStr);

      const title = (titleMatch ? (titleMatch[1] || titleMatch[2]) : '').trim();
      const link = (linkMatch ? linkMatch[1] : '').trim();
      const pubDate = dateMatch ? (dateMatch[1] || dateMatch[2] || '').trim() : new Date().toISOString();
      const desc = (descMatch ? (descMatch[1] || descMatch[2]) : '').trim();
      const contentEncoded = contentMatch ? (contentMatch[1] || contentMatch[2] || '').trim() : '';

      if (!title) { count++; continue; }

      const content = stripHtml(contentEncoded || desc) || title;
      const wordCount = countJapaneseChars(content);
      if (wordCount < 10) { count++; continue; }

      const contentHtml = contentEncoded ? extractRubyHtml(contentEncoded) : `<p>${desc}</p>`;
      const level = estimateLevel(content);
      const imgMatch = (contentEncoded || desc).match(/<img[^>]+src="([^"]+)"/);
      const image = imgMatch ? imgMatch[1] : undefined;

      articles.push({
        id: generateId('afpbb', count),
        title: title,
        titleJp: title,
        content: content,
        contentHtml: contentHtml,
        link: link,
        pubDate: pubDate,
        image: image,
        level: level,
        category: 'world',
        wordCount: wordCount,
        estimatedTime: estimateReadingTime(wordCount),
        source: 'afpbb',
        sourceLabel: 'AFPBB News',
      });
      count++;
    }

    console.log(`[AFPBB News] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[AFPBB News] Fetch failed:', e.message);
  }

  return articles;
}

async function fetchNhkWorld() {
  console.log('[NHK World] Fetching RSS...');
  const articles = [];

  const feeds = [
    { url: 'https://www3.nhk.or.jp/rss/news/cat0.xml', category: 'top' },
    { url: 'https://www3.nhk.or.jp/rss/news/cat4.xml', category: 'world' },
  ];

  for (const feed of feeds) {
    try {
      const xmlStr = await fetchUrl(feed.url);
      const itemRegex = /<item[\s\S]*?<\/item>/g;
      const titleRegex = /<title>([\s\S]*?)<\/title>/;
      const linkRegex = /<link>([\s\S]*?)<\/link>/;
      const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
      const descRegex = /<description>([\s\S]*?)<\/description>/;

      let match;
      let count = 0;
      while ((match = itemRegex.exec(xmlStr)) !== null && count < 8) {
        const itemStr = match[0];
        const titleMatch = titleRegex.exec(itemStr);
        const linkMatch = linkRegex.exec(itemStr);
        const dateMatch = dateRegex.exec(itemStr);
        const descMatch = descRegex.exec(itemStr);

        const title = (titleMatch ? titleMatch[1] : '').trim();
        const link = (linkMatch ? linkMatch[1] : '').trim();
        const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
        const desc = (descMatch ? descMatch[1] : '').trim();

        if (!title) { count++; continue; }

        const content = stripHtml(desc) || title;
        const wordCount = countJapaneseChars(content);
        if (wordCount < 10) { count++; continue; }

        const level = estimateLevel(content);

        articles.push({
          id: generateId(`nhk-world-${feed.category}`, count),
          title: title,
          titleJp: title,
          content: content,
          contentHtml: `<p>${content}</p>`,
          link: link,
          pubDate: pubDate,
          level: level,
          category: feed.category,
          wordCount: wordCount,
          estimatedTime: estimateReadingTime(wordCount),
          source: 'nhk-world',
          sourceLabel: 'NHK NEWS',
        });
        count++;
      }
    } catch (e) {
      console.error(`[NHK World] Feed ${feed.category} failed:`, e.message);
    }
  }

  console.log(`[NHK World] Got ${articles.length} articles`);
  return articles;
}

async function fetchYomiuri() {
  console.log('[読売新聞] Fetching RSS...');
  const articles = [];

  const feeds = [
    { url: 'https://www.yomiuri.co.jp/rss/yoltop.xml', category: 'top' },
    { url: 'https://www.yomiuri.co.jp/rss/world.xml', category: 'world' },
  ];

  for (const feed of feeds) {
    try {
      const xmlStr = await fetchUrl(feed.url);
      const itemRegex = /<item[\s\S]*?<\/item>/g;
      const titleRegex = /<title>([\s\S]*?)<\/title>/;
      const linkRegex = /<link>([\s\S]*?)<\/link>/;
      const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
      const descRegex = /<description>([\s\S]*?)<\/description>/;

      let match;
      let count = 0;
      while ((match = itemRegex.exec(xmlStr)) !== null && count < 8) {
        const itemStr = match[0];
        const titleMatch = titleRegex.exec(itemStr);
        const linkMatch = linkRegex.exec(itemStr);
        const dateMatch = dateRegex.exec(itemStr);
        const descMatch = descRegex.exec(itemStr);

        const title = (titleMatch ? titleMatch[1] : '').trim();
        const link = (linkMatch ? linkMatch[1] : '').trim();
        const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
        const desc = (descMatch ? descMatch[1] : '').trim();

        if (!title) { count++; continue; }

        const content = stripHtml(desc) || title;
        const wordCount = countJapaneseChars(content);
        if (wordCount < 10) { count++; continue; }

        const level = estimateLevel(content);

        articles.push({
          id: generateId(`yomiuri-${feed.category}`, count),
          title: title,
          titleJp: title,
          content: content,
          contentHtml: `<p>${content}</p>`,
          link: link,
          pubDate: pubDate,
          level: level,
          category: feed.category,
          wordCount: wordCount,
          estimatedTime: estimateReadingTime(wordCount),
          source: 'yomiuri',
          sourceLabel: '読売新聞',
        });
        count++;
      }
    } catch (e) {
      console.error(`[読売新聞] Feed ${feed.category} failed:`, e.message);
    }
  }

  console.log(`[読売新聞] Got ${articles.length} articles`);
  return articles;
}

async function fetchMainichi() {
  console.log('[毎日新聞] Fetching RSS...');
  const articles = [];

  try {
    const xmlStr = await fetchUrl('https://mainichi.jp/rss/etc/mainichi-flash.xml');
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    const titleRegex = /<title>([\s\S]*?)<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>/;
    const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
    const descRegex = /<description>([\s\S]*?)<\/description>/;

    let match;
    let count = 0;
    while ((match = itemRegex.exec(xmlStr)) !== null && count < MAX_ARTICLES_PER_SOURCE) {
      const itemStr = match[0];
      const titleMatch = titleRegex.exec(itemStr);
      const linkMatch = linkRegex.exec(itemStr);
      const dateMatch = dateRegex.exec(itemStr);
      const descMatch = descRegex.exec(itemStr);

      const title = (titleMatch ? titleMatch[1] : '').trim();
      const link = (linkMatch ? linkMatch[1] : '').trim();
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
      const desc = (descMatch ? descMatch[1] : '').trim();

      if (!title) { count++; continue; }

      const content = stripHtml(desc) || title;
      const wordCount = countJapaneseChars(content);
      if (wordCount < 10) { count++; continue; }

      const level = estimateLevel(content);

      articles.push({
        id: generateId('mainichi', count),
        title: title,
        titleJp: title,
        content: content,
        contentHtml: `<p>${content}</p>`,
        link: link,
        pubDate: pubDate,
        level: level,
        category: 'news',
        wordCount: wordCount,
        estimatedTime: estimateReadingTime(wordCount),
        source: 'mainichi',
        sourceLabel: '毎日新聞',
      });
      count++;
    }

    console.log(`[毎日新聞] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[毎日新聞] Fetch failed:', e.message);
  }

  return articles;
}

async function fetchItmediaNews() {
  console.log('[ITmedia] Fetching RSS...');
  const articles = [];

  const feeds = [
    { url: 'https://rss.itmedia.co.jp/rss/2.0/topstory.xml', category: 'tech' },
    { url: 'https://rss.itmedia.co.jp/rss/2.0/news_bursts.xml', category: 'news' },
  ];

  for (const feed of feeds) {
    try {
      const xmlStr = await fetchUrl(feed.url);
      const itemRegex = /<item[\s\S]*?<\/item>/g;
      const titleRegex = /<title>([\s\S]*?)<\/title>/;
      const linkRegex = /<link>([\s\S]*?)<\/link>/;
      const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>|<dc:date>([\s\S]*?)<\/dc:date>/;
      const descRegex = /<description>([\s\S]*?)<\/description>/;

      let match;
      let count = 0;
      while ((match = itemRegex.exec(xmlStr)) !== null && count < 8) {
        const itemStr = match[0];
        const titleMatch = titleRegex.exec(itemStr);
        const linkMatch = linkRegex.exec(itemStr);
        const dateMatch = dateRegex.exec(itemStr);
        const descMatch = descRegex.exec(itemStr);

        const title = (titleMatch ? titleMatch[1] : '').trim();
        const link = (linkMatch ? linkMatch[1] : '').trim();
        const pubDate = dateMatch ? (dateMatch[1] || dateMatch[2] || '').trim() : new Date().toISOString();
        const desc = (descMatch ? descMatch[1] : '').trim();

        if (!title) { count++; continue; }

        const content = stripHtml(desc) || title;
        const wordCount = countJapaneseChars(content);
        if (wordCount < 10) { count++; continue; }

        const level = estimateLevel(content);

        articles.push({
          id: generateId(`itmedia-${feed.category}`, count),
          title: title,
          titleJp: title,
          content: content,
          contentHtml: `<p>${content}</p>`,
          link: link,
          pubDate: pubDate,
          level: level,
          category: feed.category,
          wordCount: wordCount,
          estimatedTime: estimateReadingTime(wordCount),
          source: 'itmedia',
          sourceLabel: 'ITmedia',
        });
        count++;
      }
    } catch (e) {
      console.error(`[ITmedia] Feed ${feed.category} failed:`, e.message);
    }
  }

  console.log(`[ITmedia] Got ${articles.length} articles`);
  return articles;
}

async function fetchJijiPress() {
  console.log('[時事通信] Fetching RSS...');
  const articles = [];

  try {
    const xmlStr = await fetchUrl('https://feeds.jiji.com/jiji/rss.xml');
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    const titleRegex = /<title>([\s\S]*?)<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>/;
    const dateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
    const descRegex = /<description>([\s\S]*?)<\/description>/;

    let match;
    let count = 0;
    while ((match = itemRegex.exec(xmlStr)) !== null && count < MAX_ARTICLES_PER_SOURCE) {
      const itemStr = match[0];
      const titleMatch = titleRegex.exec(itemStr);
      const linkMatch = linkRegex.exec(itemStr);
      const dateMatch = dateRegex.exec(itemStr);
      const descMatch = descRegex.exec(itemStr);

      const title = (titleMatch ? titleMatch[1] : '').trim();
      const link = (linkMatch ? linkMatch[1] : '').trim();
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();
      const desc = (descMatch ? descMatch[1] : '').trim();

      if (!title) { count++; continue; }

      const content = stripHtml(desc) || title;
      const wordCount = countJapaneseChars(content);
      if (wordCount < 10) { count++; continue; }

      const level = estimateLevel(content);

      articles.push({
        id: generateId('jiji', count),
        title: title,
        titleJp: title,
        content: content,
        contentHtml: `<p>${content}</p>`,
        link: link,
        pubDate: pubDate,
        level: level,
        category: 'news',
        wordCount: wordCount,
        estimatedTime: estimateReadingTime(wordCount),
        source: 'jiji',
        sourceLabel: '時事通信',
      });
      count++;
    }

    console.log(`[時事通信] Got ${articles.length} articles`);
  } catch (e) {
    console.error('[時事通信] Fetch failed:', e.message);
  }

  return articles;
}

async function main() {
  console.log('=== News Crawler Started ===');
  console.log(`Time: ${new Date().toISOString()}`);

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const allArticles = [];
  const sources = [];

  const results = await Promise.allSettled([
    fetchNhkEasyNews(),
    fetchNhkEasier(),
    fetchNhkSokuho(),
    fetchYahooNews(),
    fetchCnnJapan(),
    fetchAfpbbNews(),
    fetchNhkWorld(),
    fetchYomiuri(),
    fetchMainichi(),
    fetchItmediaNews(),
    fetchJijiPress(),
  ]);

  const sourceNames = ['nhk-easy', 'nhk-easier', 'nhk-sokuho', 'yahoo', 'cnn-japan', 'afpbb', 'nhk-world', 'yomiuri', 'mainichi', 'itmedia', 'jiji'];
  for (let i = 0; i < results.length; i++) {
    if (results[i].status === 'fulfilled' && results[i].value.length > 0) {
      allArticles.push(...results[i].value);
      sources.push(sourceNames[i]);
    }
  }

  allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const seen = new Set();
  const deduped = allArticles.filter((a) => {
    const key = a.titleJp;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const newArticles = deduped;

  let existingArticles = [];
  let existingSources = [];
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      const existing = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      existingArticles = existing.articles || [];
      existingSources = existing.sources || [];
    } catch (e) {
      console.log('[Merge] Could not read existing file, starting fresh');
    }
  }

  const existingIds = new Set(existingArticles.map((a) => a.id));
  const existingTitles = new Set(existingArticles.map((a) => a.titleJp));
  const mergedSources = [...new Set([...existingSources, ...sources])];

  for (const article of newArticles) {
    if (!existingIds.has(article.id) && !existingTitles.has(article.titleJp)) {
      existingArticles.push(article);
    }
  }

  existingArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - MAX_ARTICLE_AGE_DAYS);
  const finalArticles = existingArticles
    .filter((a) => {
      const articleDate = new Date(a.pubDate);
      return !isNaN(articleDate.getTime()) && articleDate >= cutoffDate;
    })
    .slice(0, MAX_TOTAL_ARTICLES);

  const removedCount = existingArticles.length - finalArticles.length;
  const addedCount = newArticles.length;

  const result = {
    articles: finalArticles,
    fetchedAt: new Date().toISOString(),
    sources: mergedSources,
    totalCount: finalArticles.length,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2), 'utf-8');

  console.log(`=== News Crawler Complete ===`);
  console.log(`Added: ${addedCount} new articles`);
  console.log(`Removed: ${removedCount} expired articles`);
  console.log(`Total: ${finalArticles.length} articles from ${mergedSources.length} sources`);
  console.log(`Sources: ${mergedSources.join(', ')}`);
  console.log(`Output: ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error('Crawler failed:', err);
  process.exit(1);
});
