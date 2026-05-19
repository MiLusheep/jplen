let japaneseVoice: SpeechSynthesisVoice | null = null;
let _utteranceRef: SpeechSynthesisUtterance | null = null;
let voiceLoaded = false;

function findJapaneseVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === 'ja-JP') ||
    voices.find((v) => v.lang.startsWith('ja')) ||
    null
  );
}

function ensureVoiceLoaded(): Promise<void> {
  if (voiceLoaded && japaneseVoice) return Promise.resolve();

  return new Promise((resolve) => {
    const voice = findJapaneseVoice();
    if (voice) {
      japaneseVoice = voice;
      voiceLoaded = true;
      resolve();
      return;
    }

    const handler = () => {
      const v = findJapaneseVoice();
      if (v) {
        japaneseVoice = v;
        voiceLoaded = true;
      }
      resolve();
    };

    speechSynthesis.addEventListener('voiceschanged', handler, { once: true });
    setTimeout(handler, 3000);
  });
}

if ('speechSynthesis' in window) {
  ensureVoiceLoaded();
  speechSynthesis.getVoices();
}

export function speakJapanese(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve();
      return;
    }

    if (!japaneseVoice) {
      const v = findJapaneseVoice();
      if (v) japaneseVoice = v;
    }

    speechSynthesis.cancel();
    _utteranceRef = null;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }

    _utteranceRef = utterance;

    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      void _utteranceRef;
      _utteranceRef = null;
      resolve();
    };

    utterance.onend = done;
    utterance.onerror = (e) => {
      const err = (e as SpeechSynthesisErrorEvent).error;
      if (err === 'interrupted' || err === 'canceled') {
        done();
        return;
      }
      console.warn('[Speech] Error:', err);
      done();
    };

    speechSynthesis.speak(utterance);
    speechSynthesis.resume();

    const checkTimer = setInterval(() => {
      if (resolved) {
        clearInterval(checkTimer);
        return;
      }
      if (speechSynthesis.speaking) {
        speechSynthesis.resume();
      } else if (!speechSynthesis.pending) {
        clearInterval(checkTimer);
        done();
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(checkTimer);
      done();
    }, 10000);
  });
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith('ja'));
}
