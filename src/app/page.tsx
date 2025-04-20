'use client';

import { useState, useEffect } from 'react';
import { loadAllFlashcards } from './utils/flashcardUtils';
import { FlashcardData } from './types/flashcards';
import exerciseData from './exercise.json';

// Import section components
import Introduction from './components/sections/Introduction';
import FlashcardsIntro from './components/sections/FlashcardsIntro';
import FlashcardSection from './components/sections/FlashcardSection';
import PostFlashcardsOptions from './components/sections/PostFlashcardsOptions';
import TensesIntro from './components/sections/TensesIntro';
import TensesExercise from './components/sections/TensesExercise';
import FactsIntro from './components/sections/FactsIntro';
import FactsExercise from './components/sections/FactsExercise';

export default function Home() {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState<'intro' | 'flashcards-intro' | 'flashcards' | 'post-flashcards' | 'tenses-intro' | 'tenses' | 'facts-intro' | 'facts'>('intro');
  const [userName, setUserName] = useState<string>('Adam'); // Example username

  useEffect(() => {
    setIsLoading(true);
    // Load all flashcards by default without type filtering
    const cards = loadAllFlashcards();
    setFlashcards(cards);
    setIsLoading(false);
  }, []);

  const navigateToSection = (section: 'intro' | 'flashcards-intro' | 'flashcards' | 'post-flashcards' | 'tenses-intro' | 'tenses' | 'facts-intro' | 'facts') => {
    setCurrentSection(section);
  };

  // Source information from exercise data
  const { url, title, website, date } = exerciseData.source;

  const renderContent = () => {
    switch (currentSection) {
      case 'intro':
        return <Introduction 
          website={website} 
          date={date} 
          title={title} 
          navigateToSection={navigateToSection} 
        />;
      case 'flashcards-intro':
        return <FlashcardsIntro navigateToSection={navigateToSection} />;
      case 'flashcards':
        return <FlashcardSection 
          flashcards={flashcards} 
          isLoading={isLoading} 
          navigateToSection={navigateToSection} 
        />;
      case 'post-flashcards':
        return <PostFlashcardsOptions 
          url={url} 
          navigateToSection={navigateToSection} 
        />;
      case 'tenses-intro':
        return <TensesIntro navigateToSection={navigateToSection} />;
      case 'tenses':
        return <TensesExercise 
          tenses={exerciseData.tenses} 
          navigateToSection={navigateToSection} 
        />;
      case 'facts-intro':
        return <FactsIntro navigateToSection={navigateToSection} />;
      case 'facts':
        return <FactsExercise 
          facts={exerciseData.facts} 
          navigateToSection={navigateToSection} 
        />;
      default:
        return <Introduction 
          website={website} 
          date={date} 
          title={title} 
          navigateToSection={navigateToSection} 
        />;
    }
  };

  const renderHeader = () => {
    if (currentSection === 'intro') {
      return (
        <div className="px-4 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gradient">Hello, {userName}</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-0.5 rounded-full">Basic member</span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
            {userName.charAt(0)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="px-4 py-5 flex justify-between items-center">
          <button 
            onClick={() => navigateToSection('intro')}
            className="h-8 w-8 rounded-full flex items-center justify-center bg-[#121212]/80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
            {userName.charAt(0)}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white max-w-md mx-auto relative">
      {renderHeader()}
      
      <main className="flex-grow px-4 pb-8">
        {renderContent()}
      </main>
    </div>
  );
}
