"use client";

import { useEffect, useRef, useState } from "react";
import { Check, RotateCcw, CheckCircle2 } from "lucide-react";

interface VideoPreviewViewProps {
  onStartOver: () => void;
  onFinished: () => void;
}

export default function VideoPreviewView({ onStartOver, onFinished }: VideoPreviewViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    async function startMedia() {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false, // Just for preview
        });
        if (videoRef.current) {
          videoRef.current.srcObject = localStream;
        }
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    }

    const currentVideo = videoRef.current;
    startMedia();

    return () => {
      if (currentVideo && currentVideo.srcObject) {
        const stream = currentVideo.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full font-poppins flex flex-col">
      {/* Background Image (Shared) */}
      {/* Handled by Dashboard, but we ensure layout is clean */}

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8 min-h-screen">
        {/* Title */}
        <div className="flex items-center gap-4 rounded-xl bg-white px-8 py-3 shadow-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]">
            <Check className="h-6 w-6 text-white stroke-[4]" />
          </div>
          <h1 className="text-3xl font-black text-[#1F2937]">Preview your Video</h1>
        </div>

        {/* Video Preview Container */}
        <div className="relative group">
          <div className="h-[450px] w-[600px] overflow-hidden rounded-[3rem] border-[12px] border-[#1F2937] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-[1.02]">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-12 mt-4">
          <button
            onClick={onStartOver}
            className="group flex items-center gap-4 rounded-3xl bg-[#5C7CFA] px-10 py-5 text-2xl font-black text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <RotateCcw className="h-8 w-8 transition-transform group-hover:rotate-180" />
            Start Over
          </button>

          <button
            onClick={() => setIsUploading(true)}
            className="group flex items-center gap-4 rounded-3xl bg-[#10B981] px-10 py-5 text-2xl font-black text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <CheckCircle2 className="h-8 w-8" />
            I&apos;m Done
          </button>
        </div>
      </main>

      {/* Uploading Popup Overlay */}
      {isUploading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="flex w-[500px] flex-col items-center gap-8 rounded-[3rem] bg-white p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-4 border-[#10B981]/20">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                <div className="absolute inset-0 rounded-full border-8 border-[#10B981] border-t-transparent animate-spin"></div>
              </div>
              <h2 className="text-4xl font-black text-[#1F2937]">Uploading...</h2>
              <p className="text-xl font-bold text-gray-500 text-center px-4">Please wait while we save your quest video!</p>
            </div>

            <div className="flex w-full gap-4 pt-4">
              <button
                onClick={() => setIsUploading(false)}
                className="flex-1 rounded-2xl bg-gray-100 py-4 text-2xl font-black text-gray-500 transition-all hover:bg-gray-200 cursor-pointer active:scale-95"
              >
                CANCEL
              </button>
              <button
                onClick={onFinished}
                className="flex-1 rounded-2xl bg-[#10B981] py-4 text-2xl font-black text-white shadow-lg shadow-[#10B981]/30 transition-all hover:scale-105 cursor-pointer active:scale-95"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
