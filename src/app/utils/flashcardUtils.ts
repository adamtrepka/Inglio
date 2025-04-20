// Utilities for handling flashcard data
import exerciseData from '../exercise.json';
import { FlashcardData, Word, PhrasalVerb } from '../types/flashcards';

/**
 * Loads word data from the exercise.json file
 */
export const loadWordFlashcards = (): FlashcardData[] => {
  return exerciseData.words.map((word: Word) => ({
    item: word,
    type: 'word'
  }));
};

/**
 * Loads phrasal verb data from the exercise.json file
 */
export const loadPhrasalVerbFlashcards = (): FlashcardData[] => {
  return exerciseData.phrasal_verbs.map((phrasal: PhrasalVerb) => ({
    item: phrasal,
    type: 'phrasal_verb'
  }));
};

/**
 * Loads both word and phrasal verb flashcards
 */
export const loadAllFlashcards = (): FlashcardData[] => {
  const words = loadWordFlashcards();
  const phrasalVerbs = loadPhrasalVerbFlashcards();
  return [...words, ...phrasalVerbs];
};

/**
 * Shuffles an array using the Fisher-Yates algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};