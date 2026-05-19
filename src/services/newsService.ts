import type { NewsArticle, NewsFetchResult } from '../types/news';

const CACHE_KEY = 'jplen_news_cache';
const CACHE_DURATION = 30 * 60 * 1000;

let cachedData: NewsFetchResult | null = null;

async function loadNewsData(): Promise<NewsFetchResult> {
  if (cachedData) return cachedData;

  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    try {
      const parsed = JSON.parse(cached) as NewsFetchResult;
      const age = Date.now() - new Date(parsed.fetchedAt).getTime();
      if (age < CACHE_DURATION) {
        cachedData = parsed;
        return parsed;
      }
    } catch {}
  }

  try {
    const data = (await import('../data/news/articles.json')) as unknown as NewsFetchResult;
    cachedData = data;
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    return data;
  } catch {
    if (cached) {
      const parsed = JSON.parse(cached) as NewsFetchResult;
      cachedData = parsed;
      return parsed;
    }
    return { articles: [], fetchedAt: new Date().toISOString(), sources: [], totalCount: 0 };
  }
}

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const data = await loadNewsData();
  return data.articles;
}

export async function getNewsByLevel(level: string): Promise<NewsArticle[]> {
  const articles = await getNewsArticles();
  return articles.filter((a) => a.level === level);
}

export async function getNewsBySource(source: string): Promise<NewsArticle[]> {
  const articles = await getNewsArticles();
  return articles.filter((a) => a.source === source);
}

export async function getNewsFetchInfo(): Promise<{ fetchedAt: string; sources: string[]; totalCount: number }> {
  const data = await loadNewsData();
  return { fetchedAt: data.fetchedAt, sources: data.sources, totalCount: data.totalCount };
}
