'use client';

interface FlashcardTypeSwitcherProps {
  onTypeChange: (type: 'words' | 'phrasal_verbs' | 'all') => void;
  currentType: 'words' | 'phrasal_verbs' | 'all';
}

export default function FlashcardTypeSwitcher({
  onTypeChange,
  currentType
}: FlashcardTypeSwitcherProps) {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex rounded-lg overflow-hidden border border-gray-200">
        <button
          onClick={() => onTypeChange('words')}
          className={`flex-1 py-3 text-sm font-medium ${
            currentType === 'words'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Words
        </button>
        <button
          onClick={() => onTypeChange('phrasal_verbs')}
          className={`flex-1 py-3 text-sm font-medium ${
            currentType === 'phrasal_verbs'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Phrasal Verbs
        </button>
        <button
          onClick={() => onTypeChange('all')}
          className={`flex-1 py-3 text-sm font-medium ${
            currentType === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          All
        </button>
      </div>
    </div>
  );
}