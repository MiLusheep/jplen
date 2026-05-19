let japaneseVoice: SpeechSynthesisVoice | null = null;
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function findJapaneseVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === 'ja-JP') ||
    voices.find((v) => v.lang.startsWith('ja')) ||
    null
  );
}

function loadVoices(): Promise<void> {
  return new Promise((resolve) => {
    const voice = findJapaneseVoice();
    if (voice) {
      japaneseVoice = voice;
      resolve();
      return;
    }

    const onVoicesChanged = () => {
      const v = findJapaneseVoice();
      if (v) japaneseVoice = v;
      resolve();
    };

    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged, { once: true });
    setTimeout(onVoicesChanged, 3000);
  });
}

function warmUpEngine(): Promise<void> {
  return new Promise((resolve) => {
    speechSynthesis.cancel();

    const warmup = new SpeechSynthesisUtterance('\u3053');
    warmup.lang = 'ja-JP';
    warmup.rate = 10;
    warmup.volume = 0.01;

    if (japaneseVoice) warmup.voice = japaneseVoice;

    const done = () => {
      speechSynthesis.cancel();
      resolve();
    };

    warmup.onend = done;
    warmup.onerror = done;

    speechSynthesis.speak(warmup);
    speechSynthesis.resume();

    setTimeout(done, 1500);
  });
}

function startKeepAlive() {
  if (keepAliveTimer) return;
  keepAliveTimer = setInterval(() => {
    speechSynthesis.resume();
  }, 5000);
}

if ('speechSynthesis' in window) {
  loadVoices()
    .then(() => warmUpEngine())
    .then(() => {
      startKeepAlive();
    });
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

    let attempts = 0;
    const maxAttempts = 3;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;
    let startCheckTimer: ReturnType<typeof setTimeout> | null = null;

    function trySpeak() {
      attempts++;

      if (retryTimer) {
        clearTimeout(retryTimer);
        retryTimer = null;
      }
      if (startCheckTimer) {
        clearTimeout(startCheckTimer);
        startCheckTimer = null;
      }

      const needsCancel = speechSynthesis.speaking || speechSynthesis.pending;
      if (needsCancel) {
        speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = rate;
      utterance.pitch = 1;
      utterance.volume = 1;

      if (japaneseVoice) {
        utterance.voice = japaneseVoice;
      }

      let started = false;
      let resolved = false;

      const done = () => {
        if (resolved) return;
        resolved = true;
        if (retryTimer) clearTimeout(retryTimer);
        if (startCheckTimer) clearTimeout(startCheckTimer);
        resolve();
      };

      utterance.onstart = () => {
        started = true;
      };

      utterance.onend = done;

      utterance.onerror = (e) => {
        const err = (e as SpeechSynthesisErrorEvent).error;
        if (err === 'canceled') {
          return;
        }
        if (!started && attempts < maxAttempts) {
          retryTimer = setTimeout(trySpeak, 300);
        } else {
          done();
        }
      };

      speechSynthesis.speak(utterance);
      speechSynthesis.resume();

      startCheckTimer = setTimeout(() => {
        if (!started && !resolved) {
          if (attempts < maxAttempts) {
            trySpeak();
          } else {
            speechSynthesis.cancel();
            done();
          }
        }
      }, 2000);
    }

    trySpeak();
  });
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith('ja'));
}
