"use client";

import Image from "next/image";

interface CongratulationViewProps {
  onStartOver: () => void;
  onTurnItIn: () => void;
}

export default function CongratulationView({ onStartOver, onTurnItIn }: CongratulationViewProps) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center px-8 pb-12">
      {/* Celebration Logo */}
      <div className="mb-8 flex flex-col items-center">
        <div className="relative h-64 w-64 animate-bounce duration-[2000ms]">
          <Image
            src="/img/icon.png"
            alt="Congratulations"
            fill
            className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
            priority
          />
        </div>
      </div>

      {/* Main Text */}
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] md:text-8xl">
          Congratulations Bloomer
        </h1>
        <p className="text-2xl font-black tracking-[0.3em] text-white drop-shadow-md">
          CURIOSITY IS THE KEY TO DISCOVERING NEW THINGS.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-16 flex gap-8">
        <button
          onClick={onStartOver}
          className="rounded-full bg-[#5C7CFA] px-12 py-5 text-3xl font-black text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95"
        >
          Start Over
        </button>
        <button
          onClick={onTurnItIn}
          className="rounded-full bg-[#10B981] px-12 py-5 text-3xl font-black text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95"
        >
          Turn it In
        </button>
      </div>
    </main>
  );
}
