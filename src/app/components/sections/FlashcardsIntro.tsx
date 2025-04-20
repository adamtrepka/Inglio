'use client';

import React from 'react';

interface FlashcardsIntroProps {
  navigateToSection: (section: string) => void;
}

export default function FlashcardsIntro({ navigateToSection }: FlashcardsIntroProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Vocabulary Flashcards</h3>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-3">
          In this section, you'll review key vocabulary from the article through interactive flashcards.
        </p>
        
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-medium text-indigo-700 mb-2">How to use flashcards:</h4>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>Each card shows an English word or phrasal verb</li>
            <li>Tap on any card to flip it and see the definition</li>
            <li>Use the "Previous" and "Next" buttons to navigate</li>
            <li>Try to recall the meaning before flipping</li>
            <li>Complete the entire deck to improve your vocabulary</li>
          </ul>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button 
          onClick={() => navigateToSection('flashcards')}
          className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start Flashcards
        </button>
      </div>
    </div>
  );
}