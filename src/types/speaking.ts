export interface SpeakingLesson {
  id: string;
  title: string;
  titleJp: string;
  level: string;
  phrases: SpeakingPhrase[];
  order: number;
}

export interface SpeakingPhrase {
  id: string;
  japanese: string;
  reading: string;
  chinese: string;
  audioUrl?: string;
}

export interface Recording {
  id: string;
  phraseId: string;
  lessonId: string;
  blob: Blob;
  timestamp: number;
  duration: number;
}

export interface SpeakingProgress {
  lessonId: string;
  practicedPhrases: string[];
  recordings: Recording[];
  lastPracticed: number;
}
