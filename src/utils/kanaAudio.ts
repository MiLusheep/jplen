const audioCache = new Map<string, HTMLAudioElement>();
let currentAudio: HTMLAudioElement | null = null;

function getAudioUrl(romaji: string): string {
  return `${import.meta.env.BASE_URL}audio/kana/${romaji}.mp3`;
}

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

function getOrCreateAudio(romaji: string): HTMLAudioElement {
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

export function playKanaAudio(romaji: string): Promise<void> {
  return new Promise((resolve) => {
    stopCurrentAudio();

    const audio = getOrCreateAudio(romaji);
    currentAudio = audio;

    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      if (currentAudio === audio) {
        currentAudio = null;
      }
      resolve();
    };

    audio.onended = done;
    audio.onerror = () => {
      console.warn(`[KanaAudio] Failed to play: ${romaji}`);
      done();
    };

    audio.play().catch(() => {
      done();
    });

    setTimeout(done, 5000);
  });
}

export function stopKanaAudio() {
  stopCurrentAudio();
}

export function preloadKanaAudio(romajiList: string[]) {
  for (const romaji of romajiList) {
    if (!audioCache.has(romaji)) {
      const audio = new Audio(getAudioUrl(romaji));
      audio.preload = 'auto';
      audioCache.set(romaji, audio);
    }
  }
}

const KANA_ROMAJI_SET = new Set([
  'a', 'i', 'u', 'e', 'o',
  'ka', 'ki', 'ku', 'ke', 'ko',
  'sa', 'shi', 'su', 'se', 'so',
  'ta', 'chi', 'tsu', 'te', 'to',
  'na', 'ni', 'nu', 'ne', 'no',
  'ha', 'hi', 'fu', 'he', 'ho',
  'ma', 'mi', 'mu', 'me', 'mo',
  'ya', 'yu', 'yo',
  'ra', 'ri', 'ru', 're', 'ro',
  'wa', 'wo', 'n',
  'ga', 'gi', 'gu', 'ge', 'go',
  'za', 'ji', 'zu', 'ze', 'zo',
  'da', 'di', 'du', 'de', 'do',
  'ba', 'bi', 'bu', 'be', 'bo',
  'pa', 'pi', 'pu', 'pe', 'po',
  'kya', 'kyu', 'kyo',
  'sha', 'shu', 'sho',
  'cha', 'chu', 'cho',
  'nya', 'nyu', 'nyo',
  'hya', 'hyu', 'hyo',
  'mya', 'myu', 'myo',
  'rya', 'ryu', 'ryo',
  'gya', 'gyu', 'gyo',
  'ja', 'ju', 'jo',
  'bya', 'byu', 'byo',
  'pya', 'pyu', 'pyo',
]);

export function isKanaRomaji(romaji: string): boolean {
  return KANA_ROMAJI_SET.has(romaji);
}
