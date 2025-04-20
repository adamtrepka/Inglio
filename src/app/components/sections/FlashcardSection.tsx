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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard Tutorial</h1>
        <button className="h-8 w-8 rounded-full flex items-center justify-center bg-yellow-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="bg-blue-600/20 text-blue-500 text-sm px-3 py-1 rounded-md">
          3 Free videos
        </div>
        <button className="flex items-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : flashcards.length > 0 ? (
        <div className="flex flex-col">
          <div className="bg-[#121212] rounded-xl overflow-hidden mb-4">
            <div className="aspect-video relative">
              {/* Video player placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Part 1</span>
                  <span className="mx-2 text-gray-500">·</span>
                  <span className="text-sm text-gray-400">Introduction</span>
                </div>
                <span className="text-sm text-gray-400">05:20</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Part 2</span>
                  <span className="mx-2 text-gray-500">·</span>
                  <span className="text-sm text-gray-400">Dashboard Hierarcy</span>
                </div>
                <span className="text-sm text-gray-400">15:20</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Part 3</span>
                  <span className="mx-2 text-gray-500">·</span>
                  <span className="text-sm text-gray-400">Basic Tutorial</span>
                </div>
                <span className="text-sm text-gray-400">24:20</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center my-4">
            <button className="text-sm text-gray-400">View more</button>
          </div>

          <FlashcardDeck 
            cards={flashcards}
            onComplete={() => navigateToSection('post-flashcards')} 
          />

          <div className="bg-indigo-600 rounded-xl p-4 flex justify-between items-center mt-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Unlock More Video</h3>
              <p className="text-sm text-indigo-200">Get access to all educational content</p>
            </div>
            <button className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

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