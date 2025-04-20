'use client';

import React from 'react';

interface PostFlashcardsOptionsProps {
  url: string;
  navigateToSection: (section: string) => void;
}

export default function PostFlashcardsOptions({ url, navigateToSection }: PostFlashcardsOptionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">What would you like to do next?</h3>
      <p className="text-gray-600 mb-6">
        Great job completing the flashcards! You're making excellent progress with your vocabulary learning.
      </p>
      <div className="flex flex-col space-y-4">
        <button 
          onClick={() => navigateToSection('tenses-intro')}
          className="py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Continue to Grammar Exercises
        </button>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="py-4 text-center bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Go to Article
        </a>
      </div>
    </div>
  );
}