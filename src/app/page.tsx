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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">Inglio</h1>
          <p className="text-sm text-gray-600">Learn English with interactive exercises</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 text-center text-sm text-gray-500">
          © 2025 Inglio - Mobile English Learning App
        </div>
      </footer>
    </div>
  );
}
