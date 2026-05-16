"use client";

import { useEffect, useRef, useState } from "react";
import { Video, VideoOff, Mic, MicOff, Play } from "lucide-react";

interface RecordCameraCheckProps {
  onStart: () => void;
}

export default function RecordCameraCheck({ onStart }: RecordCameraCheckProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  useEffect(() => {
    async function startMedia() {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
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

  const toggleVideo = () => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoOn(videoTrack.enabled);
      }
    }
  };

  const toggleMic = () => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    }
  };

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 p-8 pt-40 pb-32">
      {/* Video Container */}
      <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-[3rem] border-8 border-white bg-black shadow-2xl">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`h-full w-full object-cover ${isVideoOn ? 'opacity-100' : 'opacity-0'}`}
        />

        {!isVideoOn && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
            <VideoOff className="h-32 w-32 opacity-20" />
            <p className="mt-4 text-2xl font-black text-gray-500">CAMERA OFF</p>
          </div>
        )}

        {/* Controls Overlay */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6 rounded-full bg-white/20 p-4 backdrop-blur-xl border border-white/30 shadow-2xl">
          <button
            onClick={toggleMic}
            className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 ${isMicOn ? 'bg-white text-black' : 'bg-red-500 text-white'
              }`}
          >
            {isMicOn ? <Mic className="h-8 w-8" /> : <MicOff className="h-8 w-8" />}
          </button>

          <button
            onClick={toggleVideo}
            className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 ${isVideoOn ? 'bg-white text-black' : 'bg-red-500 text-white'
              }`}
          >
            {isVideoOn ? <Video className="h-8 w-8" /> : <VideoOff className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Start Button with Subtitle */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onStart}
          className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] px-20 py-6 text-5xl font-black text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95 active:translate-y-1"
        >
          <Play className="h-10 w-10 fill-white" />
          START
        </button>
        <p className="text-2xl font-black tracking-widest text-white drop-shadow-md">
          3 MINUTE READ
        </p>
      </div>
    </main>
  );
}
