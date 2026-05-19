import { create } from 'zustand';
import type { Recording, SpeakingProgress } from '../types/speaking';

interface SpeakingState {
  isRecording: boolean;
  currentRecording: Blob | null;
  recordings: Recording[];
  lessonProgress: Record<string, SpeakingProgress>;
  isPlaying: boolean;
  playingPhraseId: string | null;

  startRecording: () => void;
  stopRecording: (blob: Blob, phraseId: string, lessonId: string, duration: number) => void;
  discardRecording: () => void;
  setPlaying: (phraseId: string | null) => void;
  markPhrasePracticed: (lessonId: string, phraseId: string) => void;
}

export const useSpeakingStore = create<SpeakingState>((set) => ({
  isRecording: false,
  currentRecording: null,
  recordings: [],
  lessonProgress: {},
  isPlaying: false,
  playingPhraseId: null,

  startRecording: () => set({ isRecording: true, currentRecording: null }),

  stopRecording: (blob, phraseId, lessonId, duration) =>
    set((state) => {
      const recording: Recording = {
        id: `rec_${Date.now()}`,
        phraseId,
        lessonId,
        blob,
        timestamp: Date.now(),
        duration,
      };
      return {
        isRecording: false,
        currentRecording: blob,
        recordings: [...state.recordings, recording],
      };
    }),

  discardRecording: () => set({ isRecording: false, currentRecording: null }),

  setPlaying: (phraseId) =>
    set({ isPlaying: phraseId !== null, playingPhraseId: phraseId }),

  markPhrasePracticed: (lessonId, phraseId) =>
    set((state) => {
      const existing = state.lessonProgress[lessonId];
      return {
        lessonProgress: {
          ...state.lessonProgress,
          [lessonId]: {
            lessonId,
            practicedPhrases: existing
              ? [...new Set([...existing.practicedPhrases, phraseId])]
              : [phraseId],
            recordings: [],
            lastPracticed: Date.now(),
          },
        },
      };
    }),
}));
