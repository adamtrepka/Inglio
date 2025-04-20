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
    <div className="grid grid-cols-1 gap-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">English Learning</h1>
        <p className="text-gray-400">Interactive modules to improve your language skills</p>
      </div>
      
      {/* Flashcards Module Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl overflow-hidden card-shadow animate-slide-up">
        <div className="p-5">
          <div className="flex items-center space-x-2 mb-1">
            <span className="inline-block h-3 w-3 rounded-full bg-white opacity-70"></span>
            <span className="text-sm text-white/80">Vocabulary</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Flashcards</h2>
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigateToSection('flashcards-intro')}
              className="flex items-center justify-center gap-2 bg-white text-indigo-600 rounded-full px-4 py-2 font-medium"
            >
              Start Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M11.25 5.25L14.25 8.25L11.25 11.25V5.25Z" />
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Module Card */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl overflow-hidden card-shadow animate-slide-up" style={{animationDelay: '100ms'}}>
        <div className="p-5">
          <div className="flex items-center space-x-2 mb-1">
            <span className="inline-block h-3 w-3 rounded-full bg-white opacity-70"></span>
            <span className="text-sm text-white/80">Grammar</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">English Tenses</h2>
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigateToSection('tenses-intro')}
              className="flex items-center justify-center gap-2 bg-white text-green-600 rounded-full px-4 py-2 font-medium"
            >
              Start Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reading Module Card */}
      <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl overflow-hidden card-shadow animate-slide-up" style={{animationDelay: '200ms'}}>
        <div className="p-5">
          <div className="flex items-center space-x-2 mb-1">
            <span className="inline-block h-3 w-3 rounded-full bg-white opacity-70"></span>
            <span className="text-sm text-white/80">Reading</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Fact Checking</h2>
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigateToSection('facts-intro')}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 rounded-full px-4 py-2 font-medium"
            >
              Start Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-8 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Your Progress</h3>
          <button className="text-sm text-gray-400">View all</button>
        </div>

        <div className="space-y-4">
          {/* Progress Card 1 */}
          <div className="bg-[#121212] rounded-xl p-4 animate-slide-up" style={{animationDelay: '300ms'}}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium mb-1">Vocabulary</h4>
                <p className="text-sm text-gray-400">Flashcards completed</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                <span className="text-xs font-medium text-indigo-400">25%</span>
              </div>
            </div>
            <div className="w-full bg-[#1E1E1E] rounded-full h-1.5">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>

          {/* Progress Card 2 */}
          <div className="bg-[#121212] rounded-xl p-4 animate-slide-up" style={{animationDelay: '400ms'}}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium mb-1">Grammar</h4>
                <p className="text-sm text-gray-400">Tenses exercises</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-600/20 flex items-center justify-center">
                <span className="text-xs font-medium text-green-400">40%</span>
              </div>
            </div>
            <div className="w-full bg-[#1E1E1E] rounded-full h-1.5">
              <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}