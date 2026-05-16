"use client";

import { useState } from "react";
import Header from "./Header";
import HomeView from "./HomeView";
import InformationView from "./InformationView";
import RecordCameraCheck from "./RecordCameraCheck";
import StoryReadingView from "./StoryReadingView";
import VideoPreviewView from "./VideoPreviewView";
import Quiz from "./Quiz";
import CongratulationView from "./CongratulationView";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'info' | 'quest' | 'reading' | 'preview' | 'quiz' | 'finish'>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onStartQuest={() => setActiveTab('quest')} />;
      case 'info':
        return <InformationView onLogout={onLogout} />;
      case 'quest':
        return <RecordCameraCheck onStart={() => setActiveTab('reading')} />;
      case 'reading':
        return <StoryReadingView onDone={() => setActiveTab('preview')} onQuit={() => setActiveTab('home')} />;
      case 'preview':
        return <VideoPreviewView onStartOver={() => setActiveTab('quest')} onFinished={() => setActiveTab('quiz')} />;
      case 'quiz':
        return <Quiz onComplete={() => setActiveTab('finish')} />;
      case 'finish':
        return <CongratulationView onStartOver={() => setActiveTab('quest')} onTurnItIn={() => setActiveTab('home')} />;
      default:
        return <HomeView onStartQuest={() => setActiveTab('quest')} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />

      {!['reading', 'preview', 'quiz', 'finish'].includes(activeTab) && (
        <Header
          activeTab={activeTab === 'info' ? 'info' : 'home'}
          onTabChange={(tab: 'home' | 'info') => setActiveTab(tab)}
        />
      )}

      {renderContent()}
    </div>
  );
}
