export type LevelType = 'Pemula' | 'Junior' | 'Mid-Level' | 'Senior';

export type TrackId = 'dasar' | 'algoritma' | 'bahasa' | 'keamanan' | 'ai';

export interface SubTopic {
  id: string;
  title: string;
  casualExplanation: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CodeExample {
  language: string;
  title: string;
  code: string;
  takeaway: string;
  /** Contoh output saat kode dijalankan (opsional). */
  output?: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface VibeWarning {
  title: string;
  problem: string;
  fix: string;
  severity: 'info' | 'warning' | 'danger';
}

export interface BaseModule {
  id: number;
  stage: number;
  stageLabel: string;
  level: LevelType;
  title: string;
  subtitle: string;
  accentColor: string;
  iconName: string;
  analogyTitle: string;
  analogyContent: string;
  whyItMatters: string;
  subTopics: SubTopic[];
  codeSnippet: CodeExample;
  quiz: Quiz;
  /** Penjelasan alur kerja langkah demi langkah. */
  howItWorksTitle?: string;
  howItWorks?: HowItWorksStep[];
  /** Contoh kode tambahan di luar codeSnippet. */
  moreExamples?: CodeExample[];
  /** Jebakan umum yang sering terjadi pada vibe coding. */
  vibeWarnings?: VibeWarning[];
  /** Soal kuis tambahan di luar quiz utama. */
  moreQuizzes?: Quiz[];
}

export interface ModuleItem extends BaseModule {
  track: TrackId;
}

export const getQuizzes = (item: BaseModule): Quiz[] => [item.quiz, ...(item.moreQuizzes ?? [])];

export const getExamples = (item: BaseModule): CodeExample[] => [item.codeSnippet, ...(item.moreExamples ?? [])];

export interface StageInfo {
  step: number;
  title: string;
  level: string;
  description: string;
}

export interface OutcomeInfo {
  title: string;
  description: string;
}

export interface TrackInfo {
  id: TrackId;
  order: number;
  label: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  stages: StageInfo[];
  outcomes: OutcomeInfo[];
}
