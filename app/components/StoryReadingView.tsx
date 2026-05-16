"use client";

import { useEffect, useRef } from "react";

interface StoryReadingViewProps {
  onDone: () => void;
  onQuit: () => void;
}

export default function StoryReadingView({ onDone, onQuit }: StoryReadingViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    async function startMedia() {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        streamRef.current = localStream;
        if (videoRef.current) {
          videoRef.current.srcObject = localStream;
        }
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    }

    startMedia();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center pt-10 px-8 pb-12">
      {/* Recording Indicator */}
      <div className="flex items-center gap-4 rounded-full bg-white/20 px-6 py-2 backdrop-blur-md border border-white/30 mb-8">
        <div className="h-4 w-4 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
        <span className="text-xl font-black tracking-widest text-black">Recording</span>
      </div>
      <div className="flex w-full max-w-7xl items-start gap-8">
        {/* Left Side: Camera Preview */}
        <div className="flex flex-col gap-4">
          <div className="relative h-64 w-80 overflow-hidden rounded-[2rem] border-8 border-[#96B77D] bg-black shadow-2xl">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md bg-red-600/80 px-2 py-0.5">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-[10px] font-bold text-white">REC</span>
            </div>
          </div>
        </div>

        {/* Center: Story Card */}
        <div className="flex-1 rounded-[3rem] bg-[#E9F3D3]/90 p-12 shadow-2xl border-4 border-white backdrop-blur-sm min-h-[500px]">
          <h1 className="text-center text-4xl font-black text-black mb-12 tracking-widest uppercase">
            THE TWO BEST FRIENDS
          </h1>

          <div className="space-y-8 text-2xl font-bold leading-relaxed text-gray-800">
            <p>
              Once there were two friends a squirrel and a puppy. They used to live and play
              together. The squirrel was very sporty and always won the game. The puppy
              used to feel bad and thought that it was of no use.
            </p>
            <p>
              One day, it started raining heavily. The squirrel was in high spirits. He started
              doing antics but suddenly, lost his balance and fell in the rain water.
            </p>
            <p>
              He called his friend, the puppy for help. The puppy came to his rescue. The
              squirrel climbed on its back and reached a safe place. He thanked his friend for
              saving his life.
            </p>
          </div>

          {/* Buttons inside card */}
          <div className="mt-12 flex justify-end gap-6">
            <button
              onClick={onQuit}
              className="rounded-full bg-[#96B77D] px-12 py-4 text-3xl font-black text-white shadow-xl cursor-pointer transition-all hover:scale-105 active:scale-95 border-b-4 border-[#7A9665]"
            >
              QUIT
            </button>
            <button
              onClick={onDone}
              className="rounded-full bg-[#96B77D] px-12 py-4 text-3xl font-black text-white shadow-xl cursor-pointer transition-all hover:scale-105 active:scale-95 border-b-4 border-[#7A9665]"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
