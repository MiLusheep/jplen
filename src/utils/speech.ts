let japaneseVoice: SpeechSynthesisVoice | null = null;
let voiceLoadAttempted = false;
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function findJapaneseVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === 'ja-JP') ||
    voices.find((v) => v.lang.startsWith('ja')) ||
    null
  );
}

function initVoices() {
  if (!('speechSynthesis' in window)) return;

  const tryLoad = () => {
    const voice = findJapaneseVoice();
    if (voice) {
      japaneseVoice = voice;
      voiceLoadAttempted = true;
    }
  };

  tryLoad();

  if (!voiceLoadAttempted) {
    speechSynthesis.addEventListener('voiceschanged', tryLoad, { once: true });
    setTimeout(tryLoad, 2000);
  }
}

function startKeepAlive() {
  if (keepAliveTimer) return;
  keepAliveTimer = setInterval(() => {
    if (speechSynthesis.speaking) {
      speechSynthesis.resume();
    }
  }, 5000);
}

function stopKeepAlive() {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

initVoices();

export function speakJapanese(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn('[Speech] Not supported');
      resolve();
      return;
    }

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    if (!japaneseVoice) {
      const voice = findJapaneseVoice();
      if (voice) japaneseVoice = voice;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }

    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      stopKeepAlive();
      resolve();
    };

    utterance.onstart = () => {
      startKeepAlive();
    };

    utterance.onend = done;
    utterance.onerror = (e) => {
      console.warn('[Speech] Error:', e);
      done();
    };

    speechSynthesis.speak(utterance);
    speechSynthesis.resume();

    setTimeout(() => {
      if (!resolved && !speechSynthesis.speaking) {
        done();
      }
    }, 8000);

    setTimeout(done, 15000);
  });
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith('ja'));
}
