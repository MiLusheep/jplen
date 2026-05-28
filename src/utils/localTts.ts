const KANA_TO_ROMAJI: Record<string, string> = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'di', 'づ': 'du', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
  'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
  'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
  'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
  'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
  'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
  'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
  'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
  'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
  'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
  'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
  'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
  'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
  'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
  'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
  'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
  'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
  'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
  'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
  'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
  'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
  'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
  'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
  'ダ': 'da', 'ヂ': 'di', 'ヅ': 'du', 'デ': 'de', 'ド': 'do',
  'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
  'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
  'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
  'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
  'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
  'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
  'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
  'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
  'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
  'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
  'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo',
  'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
  'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
};

const LONG_VOWEL_MARKS = new Set(['ー', '～']);

function getAudioUrl(romaji: string): string {
  return `${import.meta.env.BASE_URL}audio/kana/${romaji}.mp3`;
}

function isHiragana(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return code >= 0x3040 && code <= 0x309F;
}

function isKatakana(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return code >= 0x30A0 && code <= 0x30FF;
}

function isKana(ch: string): boolean {
  return isHiragana(ch) || isKatakana(ch);
}

function splitToKanaUnits(text: string): string[] {
  const units: string[] = [];
  const chars = Array.from(text);
  let i = 0;

  while (i < chars.length) {
    const ch = chars[i];

    if (!isKana(ch)) {
      i++;
      continue;
    }

    if (i + 1 < chars.length) {
      const next = chars[i + 1];
      const combined = ch + next;
      if (KANA_TO_ROMAJI[combined]) {
        units.push(combined);
        i += 2;
        continue;
      }
    }

    if (LONG_VOWEL_MARKS.has(ch) && units.length > 0) {
      const prev = units[units.length - 1];
      const prevR = KANA_TO_ROMAJI[prev];
      if (prevR) {
        const vowel = prevR.slice(-1);
        const vowelMap: Record<string, string> = {
          'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
        };
        const longVowel = vowelMap[vowel];
        if (longVowel) {
          units.push(longVowel);
        }
      }
      i++;
      continue;
    }

    units.push(ch);
    i++;
  }

  return units;
}

const audioCache = new Map<string, HTMLAudioElement>();

function getOrCreateAudio(romaji: string): HTMLAudioElement | null {
  const cached = audioCache.get(romaji);
  if (cached) {
    cached.currentTime = 0;
    return cached;
  }
  const audio = new Audio(getAudioUrl(romaji));
  audio.preload = 'auto';
  audioCache.set(romaji, audio);
  return audio;
}

let _currentQueue: string[] = [];
let _currentIndex = 0;
let _currentAudio: HTMLAudioElement | null = null;
let _resolved = false;
let _resolveFn: (() => void) | null = null;

function stopCurrent() {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
    _currentAudio.onended = null;
    _currentAudio.onerror = null;
    _currentAudio = null;
  }
  _currentQueue = [];
  _currentIndex = 0;
  _resolved = false;
  if (_resolveFn) {
    _resolveFn();
    _resolveFn = null;
  }
}

function playNext() {
  if (_resolved) return;
  if (_currentIndex >= _currentQueue.length) {
    stopCurrent();
    return;
  }

  const romaji = _currentQueue[_currentIndex];
  const audio = getOrCreateAudio(romaji);
  if (!audio) {
    _currentIndex++;
    playNext();
    return;
  }

  _currentAudio = audio;

  audio.onended = () => {
    _currentIndex++;
    playNext();
  };

  audio.onerror = () => {
    _currentIndex++;
    playNext();
  };

  audio.play().catch(() => {
    _currentIndex++;
    playNext();
  });
}

export function canSpeakLocally(text: string): boolean {
  const units = splitToKanaUnits(text);
  if (units.length === 0) return false;
  return units.every((u) => KANA_TO_ROMAJI[u]);
}

export function speakLocalTTS(text: string): Promise<void> {
  return new Promise((resolve) => {
    stopCurrent();

    const units = splitToKanaUnits(text);
    const romajiList = units
      .map((u) => KANA_TO_ROMAJI[u])
      .filter((r): r is string => !!r);

    if (romajiList.length === 0) {
      resolve();
      return;
    }

    _currentQueue = romajiList;
    _currentIndex = 0;
    _resolved = false;
    _resolveFn = resolve;

    playNext();

    setTimeout(() => {
      if (!_resolved) {
        stopCurrent();
      }
    }, Math.max(romajiList.length * 800, 3000));
  });
}

export function stopLocalTTS() {
  stopCurrent();
}
