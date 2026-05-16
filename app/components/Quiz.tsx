"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface QuizProps {
  onComplete: () => void;
}

const QUESTIONS = [
  {
    id: 1,
    question: "Who are the two best friends in the Story?",
    options: ["Squirrel and Puppy", "Cat and Donkey", "Turtle and Rabbit"],
    answer: "Squirrel and Puppy",
  },
  {
    id: 2,
    question: "Who saved the squirrel?",
    options: ["Puppy", "Cat", "Rabbit", "Turtle"],
    answer: "Puppy",
  },
];

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      onComplete();
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center px-8">
      {/* Progress Section */}
      <div className="mb-12 flex flex-col items-center gap-4">
        <div className="h-4 w-64 overflow-hidden rounded-full bg-white/30 backdrop-blur-sm">
          <div 
            className="h-full bg-[#5C7CFA] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="rounded-full bg-black px-6 py-1 text-xs font-black tracking-widest text-white uppercase">
          EXERCISE 1
        </div>
      </div>

      {/* Question */}
      <h2 className="mb-16 max-w-4xl text-center text-5xl font-black leading-tight text-black drop-shadow-sm">
        {currentQuestion.question}
      </h2>

      {/* Options */}
      <div className="mb-16 flex flex-wrap justify-center gap-8">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`group relative flex min-w-[280px] cursor-pointer items-center justify-center rounded-[2rem] border-4 px-10 py-8 text-3xl font-black transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)] active:shadow-none ${
              selectedOption === option
                ? 'border-[#5C7CFA] bg-[#5C7CFA] text-white'
                : 'border-black bg-white text-black'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!selectedOption}
        className={`group flex items-center gap-4 rounded-full px-16 py-5 text-3xl font-black text-white shadow-2xl transition-all ${
          selectedOption 
            ? 'bg-[#5C7CFA] cursor-pointer hover:scale-105 active:scale-95' 
            : 'bg-gray-400 cursor-not-allowed opacity-50'
        }`}
      >
        Next
        <ChevronRight className="h-8 w-8" />
      </button>
    </main>
  );
}
