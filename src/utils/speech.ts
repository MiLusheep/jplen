let japaneseVoice: SpeechSynthesisVoice | null = null;
let voiceLoaded = false;

function loadJapaneseVoice(): Promise<SpeechSynthesisVoice | null> {
  return new Promise((resolve) => {
    const findJapanese = () => {
      const voices = speechSynthesis.getVoices();
      const jaVoice = voices.find((v) => v.lang.startsWith('ja')) || null;
      voiceLoaded = true;
      japaneseVoice = jaVoice;
      resolve(jaVoice);
    };

    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      findJapanese();
    } else {
      speechSynthesis.addEventListener('voiceschanged', findJapanese, { once: true });
      setTimeout(() => {
        if (!voiceLoaded) {
          findJapanese();
        }
      }, 2000);
    }
  });
}

loadJapaneseVoice();

export function speakJapanese(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = 1;

    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }

    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e);

    speechSynthesis.speak(utterance);
  });
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}
