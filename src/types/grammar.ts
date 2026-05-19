export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface GrammarPoint {
  id: string;
  level: JLPTLevel;
  title: string;
  titleJp: string;
  pattern: string;
  explanation: string;
  examples: GrammarExample[];
  quiz: GrammarQuiz[];
  order: number;
}

export interface GrammarExample {
  japanese: string;
  reading: string;
  chinese: string;
}

export interface GrammarQuiz {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GrammarLesson {
  id: string;
  level: JLPTLevel;
  title: string;
  description: string;
  points: GrammarPoint[];
  order: number;
}

export interface GrammarProgress {
  pointId: string;
  completed: boolean;
  quizScore: number;
  lastVisited: number;
}
