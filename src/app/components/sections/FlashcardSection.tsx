'use client';

import React from 'react';
import FlashcardDeck from '../flashcards/FlashcardDeck';
import { FlashcardData } from '@/app/types/flashcards';

interface FlashcardSectionProps {
  flashcards: FlashcardData[];
  isLoading: boolean;
  navigateToSection: (section: string) => void;
}

export default function FlashcardSection({ 
  flashcards, 
  isLoading, 
  navigateToSection 
}: FlashcardSectionProps) {
  return (
    <div className="animate-slide-up">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : flashcards.length > 0 ? (
        <div className="flex flex-col">

          <FlashcardDeck 
            cards={flashcards}
            onComplete={() => navigateToSection('post-flashcards')} 
          />

          <button 
            onClick={() => navigateToSection('post-flashcards')}
            className="w-full mt-4 py-2 bg-[#121212]/80 text-gray-300 rounded-lg text-sm hover:bg-[#121212] transition"
          >
            Skip Flashcards
          </button>
        </div>
      ) : (
        <div className="text-center py-12 bg-[#121212] rounded-xl">
          <p className="text-gray-400">No flashcards available.</p>
        </div>
      )}
    </div>
  );
}