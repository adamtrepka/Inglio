// Types for the flashcard feature

export interface Word {
  word: string;
  source: string;
  explenation: string; // Note: keeping the original spelling from the data
  type: string;
}

export interface PhrasalVerb {
  phrasal_verb: string;
  source: string;
  explanation: string;
}

// Union type for flashcard content
export type FlashcardItem = Word | PhrasalVerb;

// Type to distinguish between word and phrasal verb
export interface FlashcardData {
  item: FlashcardItem;
  type: 'word' | 'phrasal_verb';
}

// Interface for the flashcard state
export interface FlashcardState {
  isFlipped: boolean;
  currentIndex: number;
  items: FlashcardData[];
}

// Shared type for section navigation
export type SectionName = 'article-index' | 'intro' | 'flashcards-intro' | 'flashcards' | 'post-flashcards' | 'tenses-intro' | 'tenses' | 'facts-intro' | 'facts';