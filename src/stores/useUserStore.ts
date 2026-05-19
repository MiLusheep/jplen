import { create } from 'zustand';
import type { JLPTLevel, UserSettings } from '../types/user';

interface UserState {
  name: string;
  currentLevel: JLPTLevel;
  streakDays: number;
  settings: UserSettings;
  setName: (name: string) => void;
  setCurrentLevel: (level: JLPTLevel) => void;
  incrementStreak: () => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: '学习者',
  currentLevel: 'N5',
  streakDays: 0,
  settings: {
    darkMode: false,
    autoPlayAudio: true,
    showFurigana: true,
    dailyGoalMinutes: 30,
  },

  setName: (name) => set({ name }),
  setCurrentLevel: (level) => set({ currentLevel: level }),
  incrementStreak: () =>
    set((state) => ({ streakDays: state.streakDays + 1 })),
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
}));
