'use client';

import { useState } from 'react';
import { FlashcardData, Word, PhrasalVerb } from '@/app/types/flashcards';

interface FlashcardProps {
  data: FlashcardData;
}

export default function Flashcard({ data }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Determine if the data is a Word or PhrasalVerb
  const isWord = data.type === 'word';
  const item = data.item;
  
  // Content for the front of the card
  const frontContent = isWord 
    ? (item as Word).word
    : (item as PhrasalVerb).phrasal_verb;
    
  // Content for the back of the card
  const backContent = isWord
    ? (item as Word).explenation
    : (item as PhrasalVerb).explanation;
    
  // Additional info (word type for words)
  const additionalInfo = isWord ? (item as Word).type : null;
  
  // Format the card type for display
  const cardTypeLabel = isWord ? 'Word' : 'Phrasal Verb';

  // Get a random background color based on the word (consistent for same words)
  const getBackgroundColor = () => {
    const colors = ['bg-indigo-600', 'bg-purple-600', 'bg-blue-600', 'bg-red-500', 'bg-amber-500'];
    const hash = frontContent.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const bgColor = getBackgroundColor();

  return (
    <div 
      className="h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={toggleFlip}
    >
      <div 
        className={`h-full transition-all duration-500`}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front of card */}
        <div 
          className={`absolute w-full h-full rounded-2xl p-6 ${bgColor}
            flex flex-col justify-center items-center shadow-lg overflow-hidden`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute top-10 -left-6 w-20 h-20 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5"></div>
          
          <div className="absolute top-6 left-6 text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {cardTypeLabel}
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-3 text-white">{frontContent}</h2>
          
          {additionalInfo && (
            <div className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mt-2 text-white/90">
              {additionalInfo}
            </div>
          )}
          
          <div className="absolute bottom-6 text-sm text-white/70 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            Tap to flip
          </div>
        </div>

        {/* Back of card */}
        <div 
          className={`absolute w-full h-full rounded-2xl p-6 
            bg-[#121212] text-white border border-white/10
            flex flex-col justify-center items-center shadow-lg overflow-hidden`}
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5"></div>
          
          <div className="absolute top-6 left-6 text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            {cardTypeLabel}
          </div>
          
          <div className="max-w-xs">
            <p className="text-lg text-center">{backContent}</p>
          </div>
          
          {isWord && (
            <div className="mt-4 text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/90">
              {(item as Word).type}
            </div>
          )}
          
          <div className="absolute bottom-6 text-sm text-white/70 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}