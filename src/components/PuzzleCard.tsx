'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PuzzleCardProps {
  riddle: string;
  answer: string;
  hint: string;
  puzzleNumber: number;
  totalPuzzles: number;
  nextPuzzleUrl: string | null;
  imageUrl?: string;
}

export default function PuzzleCard({
  riddle,
  answer,
  hint,
  puzzleNumber,
  totalPuzzles,
  nextPuzzleUrl,
  imageUrl,
}: PuzzleCardProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.toLowerCase().trim() === answer.toLowerCase()) {
      setIsCorrect(true);
      setError('');
    } else {
      setError('That\'s not quite right. Try again!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Puzzle {puzzleNumber} of {totalPuzzles}
        </h2>
        {imageUrl && (
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Puzzle ${puzzleNumber} image`}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
        <p className="text-gray-600">{riddle}</p>
      </div>

      {!isCorrect ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Enter your answer..."
            />
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Answer
            </button>
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-blue-600 hover:text-blue-700"
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-600 text-xl font-bold mb-4">Correct! 🎉</p>
          {nextPuzzleUrl ? (
            <Link
              href={nextPuzzleUrl}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Next Puzzle
            </Link>
          ) : (
            <Link
              href="/completion"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              See Your Message
            </Link>
          )}
        </div>
      )}

      {showHint && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">{hint}</p>
        </div>
      )}
    </div>
  );
} 