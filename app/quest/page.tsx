"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import RecordCameraCheck from "../components/RecordCameraCheck";
import StoryReadingView from "../components/StoryReadingView";
import VideoPreviewView from "../components/VideoPreviewView";
import Quiz from "../components/Quiz";
import CongratulationView from "../components/CongratulationView";

export default function QuestPage() {
  const router = useRouter();
  const [step, setStep] = useState<'quest' | 'reading' | 'preview' | 'quiz' | 'finish'>('quest');

  const renderContent = () => {
    switch (step) {
      case 'quest':
        return <RecordCameraCheck onStart={() => setStep('reading')} />;
      case 'reading':
        return <StoryReadingView onDone={() => setStep('preview')} onQuit={() => router.push('/dashboard')} />;
      case 'preview':
        return <VideoPreviewView onStartOver={() => setStep('quest')} onFinished={() => setStep('quiz')} />;
      case 'quiz':
        return <Quiz onComplete={() => setStep('finish')} />;
      case 'finish':
        return <CongratulationView onStartOver={() => setStep('quest')} onTurnItIn={() => router.push('/dashboard')} />;
      default:
        return <RecordCameraCheck onStart={() => setStep('reading')} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins">
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />

      {/* Only show header on the first step of quest if desired, or not at all during quest */}
      {step === 'quest' && <Header />}

      {renderContent()}
    </div>
  );
}
