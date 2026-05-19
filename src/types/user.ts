export type { JLPTLevel } from './grammar';
import type { JLPTLevel } from './grammar';

export interface UserProfile {
  id: string;
  name: string;
  currentLevel: JLPTLevel;
  streakDays: number;
  totalStudyTime: number;
  createdAt: number;
  lastActiveAt: number;
  settings: UserSettings;
}

export interface UserSettings {
  darkMode: boolean;
  autoPlayAudio: boolean;
  showFurigana: boolean;
  dailyGoalMinutes: number;
}

export interface StudyStats {
  date: string;
  grammarPoints: number;
  wordsLearned: number;
  readingTime: number;
  speakingTime: number;
}
