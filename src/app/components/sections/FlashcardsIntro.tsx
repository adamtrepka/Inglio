'use client';

import React from 'react';
import { SectionName } from '../../types/flashcards';

interface FlashcardsIntroProps {
  navigateToSection: (section: SectionName) => void;
}

export default function FlashcardsIntro({ navigateToSection }: FlashcardsIntroProps) {
  return (
    <div className="animate-slide-up w-80">
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <span className="text-sm text-gray-400">Vocabulary Module</span>
          <h1 className="text-3xl font-bold mt-1">Flashcards</h1>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.25 5.25L14.25 8.25L11.25 11.25V5.25Z" />
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
            <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="bg-[#121212] rounded-xl overflow-hidden mb-6">
        <div className="p-5">
          <div className="flex items-center mb-4">
            <div className="h-9 w-9 rounded-full bg-indigo-600/30 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-400">
                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Vocabulary Flashcards</h3>
          </div>

          <p className="text-gray-400 mb-4 pl-12">
            Expand your vocabulary through interactive flashcards. Practice recognizing and recalling 
            words in different contexts.
          </p>

          <ul className="space-y-3 pl-12">
            <li className="flex items-center text-gray-300">
              <div className="absolute -ml-6 h-4 w-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              </div>
              Learn new words and phrases
            </li>
            <li className="flex items-center text-gray-300">
              <div className="absolute -ml-6 h-4 w-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              </div>
              Test your recall ability
            </li>
            <li className="flex items-center text-gray-300">
              <div className="absolute -ml-6 h-4 w-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              </div>
              Track your progress over time
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Exercise Details</h3>
          <div className="flex items-center gap-1 text-sm text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <span>10 Flashcards</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#121212] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-indigo-600/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-400">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Word Recognition</span>
              </div>
              <span className="text-sm text-gray-400">Front side of card</span>
            </div>
          </div>

          <div className="bg-[#121212] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-purple-600/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-400">
                    <path fillRule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Translation</span>
              </div>
              <span className="text-sm text-gray-400">Back side of card</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => navigateToSection('flashcards')} 
        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-medium flex items-center justify-center"
      >
        Start Practice
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}