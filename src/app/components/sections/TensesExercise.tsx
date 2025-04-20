'use client';

import React, { useState } from 'react';

interface TensesExerciseProps {
  tenses: any[];
  navigateToSection: (section: string) => void;
}

export default function TensesExercise({ tenses, navigateToSection }: TensesExerciseProps) {
  const [currentTenseIndex, setCurrentTenseIndex] = useState(0);
  const [selectedTense, setSelectedTense] = useState<string | null>(null);
  const [showTenseExplanation, setShowTenseExplanation] = useState(false);
  const [tensesUserScore, setTensesUserScore] = useState(0);
  const [tensesCompleted, setTensesCompleted] = useState(false);

  // Function to handle user's answer in tenses exercise
  const handleTenseAnswer = (tense: string) => {
    setSelectedTense(tense);
    setShowTenseExplanation(true);
    
    const currentTense = tenses[currentTenseIndex];
    if (tense === currentTense.tense) {
      setTensesUserScore(prev => prev + 1);
    }
  };

  // Function to move to the next tense
  const goToNextTense = () => {
    if (currentTenseIndex < tenses.length - 1) {
      setCurrentTenseIndex(prev => prev + 1);
      setSelectedTense(null);
      setShowTenseExplanation(false);
    } else {
      setTensesCompleted(true);
    }
  };

  // Function to restart the tenses exercise
  const restartTensesExercise = () => {
    setCurrentTenseIndex(0);
    setSelectedTense(null);
    setShowTenseExplanation(false);
    setTensesUserScore(0);
    setTensesCompleted(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Grammar Tenses Exercise</h3>
      <p className="text-gray-600 mb-4">
        Identify and learn about different tenses used in the article.
      </p>
      <div className="space-y-6">
        {tensesCompleted ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <div className="inline-block p-4 rounded-full bg-indigo-100">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">Tenses Exercise completed!</p>
            <div className="mb-6">
              <p className="text-gray-600 mb-1">Your score:</p>
              <p className="text-2xl font-bold text-indigo-600">{tensesUserScore} / {tenses.length}</p>
              
              {/* Personalized feedback based on score */}
              <p className="mt-4 text-gray-600">
                {tensesUserScore === tenses.length ? 
                  "Perfect score! You've mastered the tenses used in this article." : 
                  tensesUserScore >= Math.floor(tenses.length * 0.7) ?
                  "Great job! You have a good understanding of the tenses used in the article." :
                  "Keep practicing! Understanding tenses is a skill that improves with practice."}
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => navigateToSection('facts-intro')}
                className="py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Continue to Fact Checking Exercise
              </button>
              <button 
                onClick={restartTensesExercise}
                className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-gray-900 mb-5 text-lg font-medium">{tenses[currentTenseIndex].sentence}</div>
              
              {!showTenseExplanation ? (
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 mb-3">
                  <button 
                    onClick={() => handleTenseAnswer(tenses[currentTenseIndex].tense)}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 
                      hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition"
                  >
                    {tenses[currentTenseIndex].tense}
                  </button>
                  <button 
                    onClick={() => handleTenseAnswer(tenses[currentTenseIndex].alternative)}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300
                      hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition"
                  >
                    {tenses[currentTenseIndex].alternative}
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <div className={`px-3 py-2 rounded-lg text-sm inline-flex items-center ${
                      selectedTense === tenses[currentTenseIndex].tense
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedTense === tenses[currentTenseIndex].tense ? (
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
                          <span>The correct answer is {tenses[currentTenseIndex].tense}.</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-3 rounded-lg text-sm text-gray-700">
                    <p className="font-medium mb-1">Explanation:</p>
                    <p>{tenses[currentTenseIndex].explanation}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-between">
              {showTenseExplanation && (
                <button 
                  onClick={goToNextTense}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium"
                >
                  {currentTenseIndex < tenses.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}