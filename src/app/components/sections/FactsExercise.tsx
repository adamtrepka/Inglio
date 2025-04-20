'use client';

import React, { useState } from 'react';

interface FactsExerciseProps {
  facts: any[];
  navigateToSection: (section: string) => void;
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

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Fact Checking Exercise</h3>
      <p className="text-gray-600 mb-4">
        Determine whether these statements are true, false, or not given based on the article.
      </p>
      
      {/* Display progress indicator */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-gray-600">
            {currentFactIndex + 1} of {facts.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600" 
            style={{ width: `${((currentFactIndex + 1) / facts.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        {factsCompleted ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <div className="inline-block p-4 rounded-full bg-indigo-100">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">Fact Checking completed!</p>
            <div className="mb-6">
              <p className="text-gray-600 mb-1">Your score:</p>
              <p className="text-2xl font-bold text-indigo-600">{userScore} / {facts.length}</p>
              
              {/* Personalized feedback based on score */}
              <p className="mt-4 text-gray-600">
                {userScore === facts.length ? 
                  "Perfect score! You've mastered fact checking for this article." : 
                  userScore >= Math.floor(facts.length * 0.7) ?
                  "Great job! You have a good understanding of the article content." :
                  "Keep practicing! Reading carefully and analyzing text is a skill that improves with practice."}
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => navigateToSection('intro')}
                className="py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Finish
              </button>
              <button 
                onClick={restartFactChecking}
                className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-gray-900 mb-5 text-lg font-medium">{facts[currentFactIndex].statement}</div>
              
              {!showExplanation ? (
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 mb-3">
                  <button 
                    onClick={() => handleFactAnswer('True')}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 
                      hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition"
                  >
                    True
                  </button>
                  <button 
                    onClick={() => handleFactAnswer('False')}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300
                      hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition"
                  >
                    False
                  </button>
                  <button 
                    onClick={() => handleFactAnswer('Not Given')}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300
                      hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-700 transition"
                  >
                    Not Given
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <div className={`px-3 py-2 rounded-lg text-sm inline-flex items-center ${
                      selectedAnswer === facts[currentFactIndex].answer
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedAnswer === facts[currentFactIndex].answer ? (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Correct! Well done.</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>The correct answer is {facts[currentFactIndex].answer}.</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-gray-700 mb-4">
                    <p className="text-sm font-medium mb-1">Evidence from the article:</p>
                    <p className="text-sm bg-gray-50 p-3 rounded-md italic">"{facts[currentFactIndex].evidence}"</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-3 rounded-lg text-sm text-gray-700">
                    <p className="font-medium mb-1">Explanation:</p>
                    <p>{facts[currentFactIndex].explanation}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-between">   
              {showExplanation && (
                <button 
                  onClick={goToNextFact}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium"
                >
                  {currentFactIndex < facts.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}