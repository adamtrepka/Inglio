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

  return (
    <div 
      className="relative w-full max-w-sm mx-auto h-64 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={toggleFlip}
    >
      <div 
        className={`relative w-full h-full transition-all duration-500`}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full rounded-xl p-6 
            bg-gradient-to-br from-blue-500 to-purple-600 text-white
            flex flex-col justify-center items-center shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-3 left-3 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
            {cardTypeLabel}
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">{frontContent}</h2>
          
          {additionalInfo && (
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full mt-2">
              {additionalInfo}
            </div>
          )}
          
          <div className="absolute bottom-4 text-sm text-white/70">
            Tap to flip
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full rounded-xl p-6 
            bg-gradient-to-br from-purple-600 to-indigo-700 text-white
            flex flex-col justify-center items-center shadow-lg"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="absolute top-3 left-3 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
            {cardTypeLabel}
          </div>
          
          <p className="text-lg text-center">{backContent}</p>
          
          {isWord && (
            <div className="mt-4 text-sm bg-white/20 px-3 py-1 rounded-full">
              {(item as Word).type}
            </div>
          )}
          
          <div className="absolute bottom-4 text-sm text-white/70">
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}