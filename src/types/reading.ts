export type ReadingDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type ReadingCategory = 'news' | 'story' | 'daily' | 'culture' | 'travel' | 'society';

export interface ReadingMaterial {
  id: string;
  title: string;
  titleJp: string;
  category: ReadingCategory;
  difficulty: ReadingDifficulty;
  level: string;
  content: ReadingSegment[];
  comprehension: ComprehensionQuestion[];
  wordCount: number;
  estimatedTime: number;
  tags: string[];
}

export interface ReadingSegment {
  text: string;
  reading?: string;
  annotations?: Annotation[];
}

export interface Annotation {
  word: string;
  reading: string;
  meaning: string;
  startIndex: number;
  endIndex: number;
}

export interface ComprehensionQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ReadingProgress {
  materialId: string;
  completed: boolean;
  comprehensionScore: number;
  lastRead: number;
  readingTime: number;
}
