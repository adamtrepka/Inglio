'use client';

import React from 'react';

interface FactsIntroProps {
  navigateToSection: (section: string) => void;
}

export default function FactsIntro({ navigateToSection }: FactsIntroProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Fact Checking Exercise</h3>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-3">
          In this section, you'll test your understanding of the article by determining whether statements are true, false, or not supported by the text.
        </p>
        
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-medium text-indigo-700 mb-2">How to complete the fact checking exercise:</h4>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>Read each statement carefully</li>
            <li>Select "True" if the statement is confirmed by the article</li>
            <li>Select "False" if the statement contradicts information in the article</li>
            <li>Select "Not Given" if the information isn't mentioned in the article</li>
            <li>Review the explanation to improve your critical reading skills</li>
          </ul>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button 
          onClick={() => navigateToSection('facts')}
          className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start Fact Checking
        </button>
      </div>
    </div>
  );
}