"use client";

import Header from "../components/Header";
import JourneyView from "../components/JourneyView";

export default function JourneyPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins">
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />
      <Header />
      <JourneyView />
    </div>
  );
}
