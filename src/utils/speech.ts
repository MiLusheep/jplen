let _utteranceRef: SpeechSynthesisUtterance | null = null;

function getJapaneseVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === 'ja-JP') ||
    voices.find((v) => v.lang.startsWith('ja')) ||
    null
  );
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

    const voice = getJapaneseVoice();
    if (voice) {
      utterance.voice = voice;
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
      console.warn('[Speech] Error:', (e as SpeechSynthesisErrorEvent).error);
      done();
    };

    speechSynthesis.speak(utterance);
    speechSynthesis.resume();

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
