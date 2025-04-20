'use client';

import React from 'react';

interface FactsIntroProps {
  navigateToSection: (section: string) => void;
}

export default function FactsIntro({ navigateToSection }: FactsIntroProps) {
  return (
    <div className="animate-slide-up">
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <span className="text-sm text-gray-400">Reading Module</span>
          <h1 className="text-3xl font-bold mt-1">Fact Checking</h1>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="bg-[#121212] rounded-xl overflow-hidden mb-6">
        <div className="p-5">
          <div className="flex items-center mb-4">
            <div className="h-9 w-9 rounded-full bg-green-600/30 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Critical Reading</h3>
          </div>

          <p className="text-gray-400 mb-4 pl-12">
            Test your understanding of the article by determining whether statements are true, 
            false, or not mentioned in the text.
          </p>

          <ul className="space-y-3 pl-12">
            <li className="flex items-center text-gray-300">
              <div className="absolute -ml-6 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              </div>
              Evaluate factual statements
            </li>
            <li className="flex items-center text-gray-300">
              <div className="absolute -ml-6 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              </div>
              Identify supported vs. unsupported claims
            </li>
            <li className="flex items-center text-gray-300">
              <div className="absolute -ml-6 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              </div>
              Improve critical reading skills
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Exercise Details</h3>
          <div className="flex items-center gap-1 text-sm text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <span>5 Statements</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#121212] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium">True</span>
              </div>
              <span className="text-sm text-gray-400">If confirmed by the article</span>
            </div>
          </div>

          <div className="bg-[#121212] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium">False</span>
              </div>
              <span className="text-sm text-gray-400">If contradicted by the article</span>
            </div>
          </div>

          <div className="bg-[#121212] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-yellow-400/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Not Given</span>
              </div>
              <span className="text-sm text-gray-400">If not mentioned in the article</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => navigateToSection('facts')}
        className="w-full py-4 bg-green-600 text-white rounded-xl font-medium flex items-center justify-center"
      >
        Start Exercise
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}