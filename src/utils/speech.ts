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
  }, 3000);
}

function stopKeepAlive() {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

initVoices();

function createUtterance(text: string, rate: number, onDone: () => void): SpeechSynthesisUtterance {
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
    onDone();
  };

  utterance.onstart = () => {
    startKeepAlive();
  };

  utterance.onend = done;
  utterance.onerror = (e) => {
    const err = e as SpeechSynthesisErrorEvent;
    if (err.error === 'canceled') {
      done();
      return;
    }
    console.warn('[Speech] Error:', err.error);
    done();
  };

  return utterance;
}

export function speakJapanese(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn('[Speech] Not supported');
      resolve();
      return;
    }

    stopKeepAlive();

    const isSpeaking = speechSynthesis.speaking || speechSynthesis.pending;

    if (isSpeaking) {
      speechSynthesis.cancel();
      setTimeout(() => {
        const utterance = createUtterance(text, rate, resolve);
        speechSynthesis.speak(utterance);
        speechSynthesis.resume();
      }, 150);
    } else {
      const utterance = createUtterance(text, rate, resolve);
      speechSynthesis.speak(utterance);
      speechSynthesis.resume();
    }

    setTimeout(() => {
      if (!speechSynthesis.speaking) {
        stopKeepAlive();
        resolve();
      }
    }, 8000);

    setTimeout(() => {
      stopKeepAlive();
      resolve();
    }, 15000);
  });
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith('ja'));
}
