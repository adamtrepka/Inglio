'use client';

import { useState, useEffect } from 'react';
import { FlashcardData } from '@/app/types/flashcards';
import Flashcard from './Flashcard';
import { shuffleArray } from '@/app/utils/flashcardUtils';

interface FlashcardDeckProps {
  cards: FlashcardData[];
  shuffleOnStart?: boolean;
  onComplete?: () => void;
}

export default function FlashcardDeck({ 
  cards, 
  shuffleOnStart = true,
  onComplete 
}: FlashcardDeckProps) {
  
  // Shuffle the cards if requested
  const initialCards = shuffleOnStart ? shuffleArray(cards) : cards;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards] = useState(initialCards);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCard, setActiveCard] = useState(currentIndex);

  // Define the gap between cards
  const cardGap = 20; // in pixels

  // Calculate progress percentage
  const progressPercentage = flashcards.length > 0 
    ? Math.floor(((currentIndex + 1) / flashcards.length) * 100) 
    : 0;

  // Handle next card
  const handleNext = () => {
    if (isAnimating || currentIndex >= flashcards.length - 1) return;
    
    setDirection('left');
    setIsAnimating(true);
    
    // Wait for animation to complete before updating the current index
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setIsAnimating(false);
      setDirection(null);
    }, 300);
  };

  // Handle previous card
  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    
    setDirection('right');
    setIsAnimating(true);
    
    // Wait for animation to complete before updating the current index
    setTimeout(() => {
      setCurrentIndex(currentIndex - 1);
      setIsAnimating(false);
      setDirection(null);
    }, 300);
  };

  // Update active card when current index changes
  useEffect(() => {
    setActiveCard(currentIndex);
  }, [currentIndex]);

  // Complete when finished
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Flashcards</h2>
          <div className="text-sm font-medium">
            {currentIndex + 1} / {flashcards.length}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 text-right">
          {progressPercentage}% complete
        </div>
      </div>
      
      <div className="relative overflow-hidden h-72" style={{ perspective: "1000px" }}>
        {/* Card Carousel */}
        <div className="w-full h-full relative">
          {flashcards.map((card, index) => (
            <div
              key={`card-${index}`}
              className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out"
              style={{
                transform: getCardTransform(index, currentIndex, direction, isAnimating, cardGap),
                opacity: getCardOpacity(index, currentIndex, direction, isAnimating),
                zIndex: index === currentIndex ? 10 : 5,
                pointerEvents: index === currentIndex ? 'auto' : 'none'
              }}
            >
              <div className="mx-2">
                <Flashcard
                  key={`flashcard-${index}`}
                  data={card}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0 || isAnimating}
          className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button 
          onClick={currentIndex === flashcards.length - 1 ? handleComplete : handleNext}
          disabled={isAnimating}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentIndex === flashcards.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}

// Helper functions for card positioning and animation
function getCardTransform(
  index: number, 
  currentIndex: number, 
  direction: 'left' | 'right' | null,
  isAnimating: boolean,
  cardGap: number = 20
): string {
  // Calculate the base position with the gap
  const gap = `${cardGap}px`;
  
  // Current card
  if (index === currentIndex) {
    if (direction === 'left' && isAnimating) {
      return `translateX(calc(-100% - ${gap}))`;
    } else if (direction === 'right' && isAnimating) {
      return `translateX(calc(100% + ${gap}))`;
    } else {
      return 'translateX(0)';
    }
  }
  
  // Next card
  if (index === currentIndex + 1) {
    if (direction === 'left' && isAnimating) {
      return 'translateX(0)';
    } else {
      return `translateX(calc(100% + ${gap}))`;
    }
  }
  
  // Previous card
  if (index === currentIndex - 1) {
    if (direction === 'right' && isAnimating) {
      return 'translateX(0)';
    } else {
      return `translateX(calc(-100% - ${gap}))`;
    }
  }
  
  // Other cards, position off-screen with extra gap
  return index < currentIndex 
    ? `translateX(calc(-200% - ${gap} * 2))` 
    : `translateX(calc(200% + ${gap} * 2))`;
}

function getCardOpacity(
  index: number, 
  currentIndex: number, 
  direction: 'left' | 'right' | null,
  isAnimating: boolean
): number {
  // Current card
  if (index === currentIndex) {
    return 1;
  }
  
  // Next card coming in
  if (index === currentIndex + 1 && direction === 'left' && isAnimating) {
    return 1;
  }
  
  // Previous card coming in
  if (index === currentIndex - 1 && direction === 'right' && isAnimating) {
    return 1;
  }
  
  // Cards that are adjacent but not animating
  if (index === currentIndex + 1 || index === currentIndex - 1) {
    return 0;
  }
  
  // All other cards
  return 0;
}