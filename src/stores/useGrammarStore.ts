import { create } from 'zustand';
import type { JLPTLevel, GrammarProgress, GrammarPoint, GrammarLesson } from '../types/grammar';
import { grammarData as n5Data } from '../data/grammar/n5';
import { n4GrammarData } from '../data/grammar/n4';
import { n3GrammarData } from '../data/grammar/n3';
import { n2GrammarData } from '../data/grammar/n2';
import { n1GrammarData } from '../data/grammar/n1';

const allLessons: GrammarLesson[] = [...n5Data, ...n4GrammarData, ...n3GrammarData, ...n2GrammarData, ...n1GrammarData];

interface GrammarState {
  currentLevel: JLPTLevel;
  lessons: GrammarLesson[];
  progress: Record<string, GrammarProgress>;
  currentPoint: GrammarPoint | null;
  setCurrentLevel: (level: JLPTLevel) => void;
  setCurrentPoint: (point: GrammarPoint | null) => void;
  markCompleted: (pointId: string, score: number) => void;
  getProgressForLevel: (level: JLPTLevel) => { completed: number; total: number };
}

export const useGrammarStore = create<GrammarState>((set, get) => ({
  currentLevel: 'N5',
  lessons: allLessons,
  progress: {},
  currentPoint: null,

  setCurrentLevel: (level) => set({ currentLevel: level }),

  setCurrentPoint: (point) => set({ currentPoint: point }),

  markCompleted: (pointId, score) =>
    set((state) => ({
      progress: {
        ...state.progress,
        [pointId]: {
          pointId,
          completed: true,
          quizScore: score,
          lastVisited: Date.now(),
        },
      },
    })),

  getProgressForLevel: (level) => {
    const state = get();
    const levelLessons = state.lessons.filter((l) => l.level === level);
    const total = levelLessons.reduce((acc, l) => acc + l.points.length, 0);
    const completed = levelLessons.reduce(
      (acc, l) =>
        acc + l.points.filter((p) => state.progress[p.id]?.completed).length,
      0
    );
    return { completed, total };
  },
}));
