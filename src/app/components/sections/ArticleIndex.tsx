'use client';

import React from 'react';
import exerciseData from '../../exercise.json';

interface ArticleIndexProps {
  navigateToSection: (section: string) => void;
  selectArticle: (index: number) => void;
}

export default function ArticleIndex({ navigateToSection, selectArticle }: ArticleIndexProps) {
  const { exercises } = exerciseData;

  const handleArticleSelect = (index: number) => {
    selectArticle(index);
    navigateToSection('intro');
  };

  return (
    <div className="grid grid-cols-1 gap-6 w-80">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-3xl overflow-hidden card-shadow animate-slide-up">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Welcome to Inglio</h2>
          <p className="text-white/70 text-sm mb-5">
            Improve your English skills by learning vocabulary and grammar from real-world articles. Select an article below to begin learning.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mt-2 mb-3">Available Articles</h3>
      
      {/* Article List */}
      <div className="grid grid-cols-1 gap-4">
        {exercises.map((article, index) => (
          <div 
            key={index}
            className="bg-[#121212] rounded-xl p-5 border border-indigo-900/50 hover:border-indigo-700/50 transition-all animate-slide-up cursor-pointer" 
            style={{animationDelay: `${index * 100}ms`}}
            onClick={() => handleArticleSelect(index)}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-white opacity-70 mr-2"></span>
                <span className="text-sm text-white/80">{article.source.website} · {article.source.date}</span>
              </div>
              <h4 className="font-medium text-lg text-white">{article.source.title}</h4>
              <div className="flex justify-between items-center mt-2">
                <button 
                  className="text-indigo-400 text-sm font-medium flex items-center gap-1 hover:text-indigo-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArticleSelect(index);
                  }}
                >
                  Start Learning
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="text-xs text-gray-600">
                  {article.words.length} words · {article.tenses?.length || 0} tenses
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}