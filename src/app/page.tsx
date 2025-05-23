'use client';

import { useState, useEffect } from 'react';
import { loadAllFlashcards } from './utils/flashcardUtils';
import { FlashcardData, SectionName } from './types/flashcards';
import exerciseData from './exercise.json';

// Import section components
import Introduction from './components/sections/Introduction';
import ArticleIndex from './components/sections/ArticleIndex';
import FlashcardsIntro from './components/sections/FlashcardsIntro';
import FlashcardSection from './components/sections/FlashcardSection';
import PostFlashcardsOptions from './components/sections/PostFlashcardsOptions';
import TensesIntro from './components/sections/TensesIntro';
import TensesExercise from './components/sections/TensesExercise';
import FactsIntro from './components/sections/FactsIntro';
import FactsExercise from './components/sections/FactsExercise';

// Define the Fact type to match the exact requirement of the FactsExercise component
// We're intentionally importing it from the component to avoid type mismatches
import { Fact as ComponentFact } from './components/sections/FactsExercise';

export default function Home() {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState<SectionName>('article-index');
  const [selectedArticleIndex, setSelectedArticleIndex] = useState<number>(0);
  const [userName] = useState<string>('User'); // Example username

  useEffect(() => {
    setIsLoading(true);
    // Load all flashcards for the selected article
    const cards = loadAllFlashcards(selectedArticleIndex);
    setFlashcards(cards);
    setIsLoading(false);
  }, [selectedArticleIndex]);

  const navigateToSection = (section: SectionName) => {
    setCurrentSection(section);
  };

  const selectArticle = (index: number) => {
    setSelectedArticleIndex(index);
  };

  // Get the selected article data
  const selectedArticle = exerciseData.exercises[selectedArticleIndex];
  // Source information from selected article
  const { url, title, website, date } = selectedArticle ? selectedArticle.source : { url: '', title: '', website: '', date: '' };
  
  // Process facts data to ensure it matches the expected Fact type
  const processedFacts: ComponentFact[] = selectedArticle ? selectedArticle.facts.map((fact) => ({
    statement: fact.statement,
    answer: fact.answer as 'True' | 'False' | 'Not Given',
    evidence: fact.evidence || '',  // Convert null to empty string to satisfy the type
    explanation: fact.explanation
  })) : [];

  const renderContent = () => {
    switch (currentSection) {
      case 'article-index':
        return <ArticleIndex 
          navigateToSection={navigateToSection} 
          selectArticle={selectArticle} 
        />;
      case 'intro':
        return <Introduction 
          url={url}
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
          tenses={selectedArticle.tenses} 
          navigateToSection={navigateToSection} 
        />;
      case 'facts-intro':
        return <FactsIntro navigateToSection={navigateToSection} />;
      case 'facts':
        return <FactsExercise 
          facts={processedFacts} 
          navigateToSection={navigateToSection} 
        />;
      default:
        return <ArticleIndex 
          navigateToSection={navigateToSection} 
          selectArticle={selectArticle} 
        />;
    }
  };

  const renderHeader = () => {
    if (currentSection === 'article-index') {
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
    } else if (currentSection === 'intro') {
      return (
        <div className="px-4 py-5 flex justify-between items-center">
          <button 
            onClick={() => navigateToSection('article-index')}
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
