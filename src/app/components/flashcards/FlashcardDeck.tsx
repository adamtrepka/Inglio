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
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-white">Learning Cards</h2>
          <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full text-white/80">
            {currentIndex + 1} / {flashcards.length}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-[#1E1E1E] rounded-full h-1.5 mb-2">
          <div 
            className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="relative overflow-hidden h-80 mb-6" style={{ perspective: "1000px" }}>
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
              <div className="mx-1">
                <Flashcard
                  key={`flashcard-${index}`}
                  data={card}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0 || isAnimating}
          className={`h-12 w-12 rounded-full flex items-center justify-center ${currentIndex === 0 ? 'bg-[#121212]/50 text-white/30' : 'bg-[#121212] text-white'}`}
          aria-label="Previous card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={currentIndex === flashcards.length - 1 ? handleComplete : handleNext}
          disabled={isAnimating}
          className="h-12 px-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium"
          aria-label={currentIndex === flashcards.length - 1 ? 'Complete' : 'Next card'}
        >
          {currentIndex === flashcards.length - 1 ? (
            <>Complete</>
          ) : (
            <>
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </>
          )}
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
      return `translateX(calc(-100% - ${gap})) rotateY(-10deg)`;
    } else if (direction === 'right' && isAnimating) {
      return `translateX(calc(100% + ${gap})) rotateY(10deg)`;
    } else {
      return 'translateX(0) rotateY(0)';
    }
  }
  
  // Next card
  if (index === currentIndex + 1) {
    if (direction === 'left' && isAnimating) {
      return 'translateX(0) rotateY(0)';
    } else {
      return `translateX(calc(100% + ${gap})) rotateY(10deg)`;
    }
  }
  
  // Previous card
  if (index === currentIndex - 1) {
    if (direction === 'right' && isAnimating) {
      return 'translateX(0) rotateY(0)';
    } else {
      return `translateX(calc(-100% - ${gap})) rotateY(-10deg)`;
    }
  }
  
  // Other cards, position off-screen with extra gap
  return index < currentIndex 
    ? `translateX(calc(-200% - ${gap} * 2)) rotateY(-15deg)` 
    : `translateX(calc(200% + ${gap} * 2)) rotateY(15deg)`;
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
    return 0.3;
  }
  
  // All other cards
  return 0;
}