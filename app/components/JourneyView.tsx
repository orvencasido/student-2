"use client";

import { CheckSquare, TrendingUp, Trophy, Target, Star } from "lucide-react";

export default function JourneyView() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 p-8 pt-32 pb-32">
      <section className="flex flex-col items-center gap-12 rounded-[4rem] bg-white p-12 shadow-2xl border-4 border-white">
        <h2 className="text-6xl font-black text-black">My Journey</h2>

        <div className="flex w-full max-w-5xl justify-between gap-8">
          {[
            { title: "Lesson Done", val: "01/20", icon: <CheckSquare className="h-10 w-10 text-gray-600" /> },
            { title: "Days Streak", val: "1 DAYS", icon: <TrendingUp className="h-10 w-10 text-gray-600" /> },
            { title: "Accomplishment", val: "Explorer", icon: <Trophy className="h-10 w-10 text-gray-600" /> },
          ].map((card, i) => (
            <div key={i} className="relative flex-1 rounded-[2rem] bg-[#E9F3D3] p-8 shadow-xl overflow-hidden border-4 border-white">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-2 shadow-sm">{card.icon}</div>
                <div>
                  <p className="rounded-full bg-[#96B77D] px-3 py-1 text-[10px] font-black text-black">{card.title}</p>
                  <p className="mt-2 text-3xl font-black text-black">{card.val}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Mission Card */}
        <div className="relative w-full max-w-5xl rounded-full bg-[#E9F3D3] p-4 shadow-xl border-4 border-white">
          <div className="flex items-center gap-6 px-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
              <Target className="h-10 w-10 text-red-500" />
            </div>
            <div className="relative flex-1">
              <p className="absolute -top-6 left-0 text-sm font-black text-black">Today&apos;s Mission</p>
              <div className="h-8 w-full rounded-full bg-blue-100 overflow-hidden">
                <div className="h-full bg-[#718AF5]" style={{ width: '33%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-black">1/3</span>
              <Star className="h-10 w-10 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Progress Chart Placeholder / Additional Journey Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
        <div className="rounded-[3rem] bg-white p-10 shadow-xl border-4 border-[#E9F3D3]">
          <h3 className="text-2xl font-black mb-6 text-black">Recent Achievements</h3>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-16 rounded-full bg-[#FFE580] flex items-center justify-center shadow-md">
                <Trophy className="h-8 w-8 text-yellow-700" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[3rem] bg-white p-10 shadow-xl border-4 border-[#E9F3D3]">
          <h3 className="text-2xl font-black mb-6 text-black">Time Spent Reading</h3>
          <p className="text-4xl font-black text-[#5C7CFA]">12.5 Hours</p>
          <p className="text-sm font-bold text-gray-500 mt-2 tracking-widest uppercase">THIS MONTH</p>
        </div>
      </section>
    </main>
  );
}
