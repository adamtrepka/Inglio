// Utilities for handling flashcard data
import exerciseData from '../exercise.json';
import { FlashcardData, Word, PhrasalVerb } from '../types/flashcards';

/**
 * Loads word data from the exercise.json file for a specific article
 */
export const loadWordFlashcards = (articleIndex: number = 0): FlashcardData[] => {
  const article = exerciseData.exercises[articleIndex];
  return article.words.map((word: Word) => ({
    item: word,
    type: 'word'
  }));
};

/**
 * Loads phrasal verb data from the exercise.json file for a specific article
 */
export const loadPhrasalVerbFlashcards = (articleIndex: number = 0): FlashcardData[] => {
  const article = exerciseData.exercises[articleIndex];
  return article.phrasal_verbs.map((phrasal: PhrasalVerb) => ({
    item: phrasal,
    type: 'phrasal_verb'
  }));
};

/**
 * Loads both word and phrasal verb flashcards for a specific article
 */
export const loadAllFlashcards = (articleIndex: number = 0): FlashcardData[] => {
  const words = loadWordFlashcards(articleIndex);
  const phrasalVerbs = loadPhrasalVerbFlashcards(articleIndex);
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