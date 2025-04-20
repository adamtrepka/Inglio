'use client';

import React from 'react';

interface TensesIntroProps {
  navigateToSection: (section: string) => void;
}

export default function TensesIntro({ navigateToSection }: TensesIntroProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Grammar Tenses Exercise</h3>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-3">
          In this section, you'll improve your understanding of English grammar by identifying 
          and learning about different tenses used in the article.
        </p>
        
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-medium text-indigo-700 mb-2">How to complete the tenses exercise:</h4>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>Read each sentence carefully</li>
            <li>Select the correct tense being used</li>
            <li>Review the explanation to understand how each tense works</li>
            <li>See your results at the end to track your progress</li>
            <li>Try again to improve your score if needed</li>
          </ul>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button 
          onClick={() => navigateToSection('tenses')}
          className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start Tenses Exercise
        </button>
      </div>
    </div>
  );
}