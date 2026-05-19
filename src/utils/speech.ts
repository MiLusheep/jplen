let japaneseVoice: SpeechSynthesisVoice | null = null;
let voiceLoadAttempted = false;

function initVoices() {
  if (!('speechSynthesis' in window)) return;

  const tryLoad = () => {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      japaneseVoice =
        voices.find((v) => v.lang === 'ja-JP') ||
        voices.find((v) => v.lang.startsWith('ja')) ||
        null;
      voiceLoadAttempted = true;
    }
  };

  tryLoad();

  if (!voiceLoadAttempted) {
    speechSynthesis.addEventListener('voiceschanged', tryLoad, { once: true });
    setTimeout(tryLoad, 2000);
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

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    } else {
      const voices = speechSynthesis.getVoices();
      const jaVoice =
        voices.find((v) => v.lang === 'ja-JP') ||
        voices.find((v) => v.lang.startsWith('ja')) ||
        null;
      if (jaVoice) {
        utterance.voice = jaVoice;
        japaneseVoice = jaVoice;
      }
    }

    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      resolve();
    };

    utterance.onend = done;
    utterance.onerror = (e) => {
      console.warn('[Speech] Error:', e);
      done();
    };

    speechSynthesis.speak(utterance);

    setTimeout(() => {
      if (!resolved && !speechSynthesis.speaking) {
        done();
      }
    }, 5000);

    setTimeout(done, 10000);
  });
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith('ja'));
}
