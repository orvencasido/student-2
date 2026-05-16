"use client";

import { useState } from "react";
import Header from "./Header";
import HomeView from "./HomeView";
import InformationView from "./InformationView";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'info'>('home');

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />

      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'home' ? (
        <HomeView />
      ) : (
        <InformationView onLogout={onLogout} />
      )}
    </div>
  );
}
