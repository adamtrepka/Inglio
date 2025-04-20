'use client';

import React from 'react';

interface IntroductionProps {
  website: string;
  date: string;
  title: string;
  navigateToSection: (section: string) => void;
}

export default function Introduction({ website, date, title, navigateToSection }: IntroductionProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">{website} • {date}</div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">
        This lesson is based on an article from {website}. Learn new vocabulary and practice 
        English with our interactive exercises.
      </p>
      <button 
        onClick={() => navigateToSection('flashcards-intro')}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Start Learning
      </button>
    </div>
  );
}