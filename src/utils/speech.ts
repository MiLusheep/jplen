let _utteranceRef: SpeechSynthesisUtterance | null = null;
let _keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function getJapaneseVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === 'ja-JP') ||
    voices.find((v) => v.lang.startsWith('ja')) ||
    null
  );
}

function startKeepAlive() {
  stopKeepAlive();
  _keepAliveTimer = setInterval(() => {
    if (speechSynthesis.speaking) {
      speechSynthesis.resume();
    }
  }, 3000);
}

function stopKeepAlive() {
  if (_keepAliveTimer) {
    clearInterval(_keepAliveTimer);
    _keepAliveTimer = null;
  }
}

if ('speechSynthesis' in window) {
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener('voiceschanged', () => {
    speechSynthesis.getVoices();
  });
}

export function speakJapanese(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve();
      return;
    }

    stopKeepAlive();

    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voice = getJapaneseVoice();
    if (voice) {
      utterance.voice = voice;
    }

    _utteranceRef = utterance;

    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      stopKeepAlive();
      void _utteranceRef;
      _utteranceRef = null;
      resolve();
    };

    utterance.onstart = () => {
      startKeepAlive();
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
