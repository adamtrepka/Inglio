'use client';

import React, { useState } from 'react';
import { SectionName } from '../../types/flashcards';

export interface Fact {
  statement: string;
  answer: 'True' | 'False' | 'Not Given';
  evidence: string;
  explanation: string;
}

interface FactsExerciseProps {
  facts: Fact[];
  navigateToSection: (section: SectionName) => void;
}

export default function FactsExercise({ facts, navigateToSection }: FactsExerciseProps) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'True' | 'False' | 'Not Given' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [factsCompleted, setFactsCompleted] = useState(false);

  // Function to handle user's answer in fact checking
  const handleFactAnswer = (answer: 'True' | 'False' | 'Not Given') => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    const currentFact = facts[currentFactIndex];
    if (answer === currentFact.answer) {
      setUserScore(prev => prev + 1);
    }
  };

  // Function to move to the next fact
  const goToNextFact = () => {
    if (currentFactIndex < facts.length - 1) {
      setCurrentFactIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setFactsCompleted(true);
    }
  };

  // Function to restart the fact checking exercise
  const restartFactChecking = () => {
    setCurrentFactIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setUserScore(0);
    setFactsCompleted(false);
  };

  // Progress percentage calculation
  const progressPercentage = Math.floor(((currentFactIndex + 1) / facts.length) * 100);

  return (
    <div className="animate-slide-up w-80">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Fact Checking</h1>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-medium">
          {factsCompleted ? facts.length : currentFactIndex + 1}
        </div>
      </div>

      {!factsCompleted && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
            <span>Question {currentFactIndex + 1} of {facts.length}</span>
            <span>{progressPercentage}% complete</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-[#1E1E1E] rounded-full h-1.5">
            <div 
              className="bg-green-600 h-1.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {factsCompleted ? (
          <div className="animate-slide-up">
            <div className="bg-[#121212] rounded-xl overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Exercise Completed!</h3>
                    <p className="text-gray-400 text-sm">You&apos;ve completed all questions</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium">Your score</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white mr-1">{userScore}</span>
                      <span className="text-gray-400">/ {facts.length}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-gray-300">
                      {userScore === facts.length ? 
                        "Perfect score! You&apos;ve mastered fact checking for this article." : 
                        userScore >= Math.floor(facts.length * 0.7) ?
                        "Great job! You have a good understanding of the article content." :
                        "Keep practicing! Reading carefully and analyzing text is a skill that improves with practice."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => navigateToSection('intro')}
                className="bg-green-600 text-white p-4 rounded-xl flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold">Complete Course</span>
                    <span className="text-xs text-green-200">Return to home screen</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              <button 
                onClick={restartFactChecking}
                className="bg-[#121212] text-white p-4 rounded-xl flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold">Try Again</span>
                    <span className="text-xs text-gray-400">Restart the exercise</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-[#121212] rounded-xl p-5">
              <div className="text-white mb-6 text-lg">{facts[currentFactIndex].statement}</div>
              
              {!showExplanation ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <button 
                    onClick={() => handleFactAnswer('True')}
                    className="px-4 py-3 text-sm font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-green-600/30 hover:border-green-600/50 transition flex justify-center items-center"
                  >
                    <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                    </div>
                    True
                  </button>
                  <button 
                    onClick={() => handleFactAnswer('False')}
                    className="px-4 py-3 text-sm font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-red-600/30 hover:border-red-600/50 transition flex justify-center items-center"
                  >
                    <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                    False
                  </button>
                  <button 
                    onClick={() => handleFactAnswer('Not Given')}
                    className="px-4 py-3 text-sm font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-yellow-600/30 hover:border-yellow-600/50 transition flex justify-center items-center"
                  >
                    <div className="h-6 w-6 rounded-full bg-yellow-400/10 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Not Given
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <div className={`p-3 rounded-xl text-sm ${
                      selectedAnswer === facts[currentFactIndex].answer
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {selectedAnswer === facts[currentFactIndex].answer ? (
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="font-semibold mb-1">Correct!</p>
                            <p className="text-green-300/80">You&apos;ve correctly evaluated this statement.</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="font-semibold mb-1">Incorrect</p>
                            <p className="text-red-300/80">The correct answer is <span className="font-medium">{facts[currentFactIndex].answer}</span>.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-gray-300 mb-4">
                    <p className="font-medium mb-2 text-white">Evidence from the article:</p>
                    <p className="italic">&quot;{facts[currentFactIndex].evidence}&quot;</p>
                  </div>
                  
                  <div className="bg-green-600/20 border border-green-600/30 p-4 rounded-xl text-sm text-green-300">
                    <p className="font-medium mb-2">Explanation:</p>
                    <p>{facts[currentFactIndex].explanation}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-between">   
              {showExplanation && (
                <button 
                  onClick={goToNextFact}
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-medium flex items-center justify-center"
                >
                  {currentFactIndex < facts.length - 1 ? (
                    <>
                      Next Question
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      See Results
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}