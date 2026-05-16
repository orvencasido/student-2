"use client";

import Image from "next/image";
import {
  Star,
  Lock,
  Book,
  Brain,
  Search
} from "lucide-react";

interface HomeViewProps {
  onStartQuest: () => void;
}

export default function HomeView({ onStartQuest }: HomeViewProps) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 p-8 pt-32 pb-32">
      {/* Welcome Banner */}
      <section className="flex w-full items-center justify-between rounded-[3rem] bg-white p-8 shadow-xl">
        <div className="flex items-center gap-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-[1.5rem] border-4 border-[#10B981] bg-white p-2">
            <Image src="/img/logo.png" alt="Logo" width={100} height={100} className="object-contain" />
          </div>
          <div>
            <h1 className="text-5xl font-black text-gray-900">Welcome, Kai!</h1>
            <p className="mt-2 text-lg font-bold tracking-widest text-gray-500 uppercase">LEVEL 1 READING EXPLORER</p>
          </div>
        </div>
        <button 
          onClick={onStartQuest}
          className="rounded-full bg-[#5C7CFA] px-12 py-6 text-4xl font-black text-white shadow-lg cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          Start Quest
        </button>
      </section>

      {/* Books and Progress Cards */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Books List Card */}
        <div className="lg:col-span-2 rounded-[2.5rem] bg-white p-6 shadow-xl">
          <div className="space-y-4">
            {[
              { title: "The Two Best Friends", sub: "BOOK 1", active: true },
              { title: "The Little Red Riding Hood", sub: "BOOK 2", locked: true },
              { title: "The Three Little Pigs", sub: "BOOK 3", locked: true },
              { title: "The Turtle and the Rabbit", sub: "BOOK 4", locked: true },
            ].map((book, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-3xl p-6 ${book.active ? 'bg-[#C1E1D2]' : 'bg-[#E5F6F0]'}`}
              >
                <div>
                  <h3 className="text-xl font-black text-gray-800">{book.title}</h3>
                  <p className="text-xs font-bold text-gray-500">{book.sub}</p>
                </div>
                {book.active ? (
                  <span className="text-[10px] font-black text-gray-500 leading-none">CURRENTLY<br />READING</span>
                ) : (
                  <Lock className="h-6 w-6 text-gray-800" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Cards */}
        <div className="lg:col-span-3 flex gap-4">
          {[
            { title: "Reading", icon: <Book className="h-8 w-8 text-orange-400" />, stars: 3, status: "Outstanding", color: "bg-[#718AF5]" },
            { title: "Vocabulary", icon: <Brain className="h-8 w-8 text-pink-400" />, stars: 2, status: "Growing", color: "bg-[#718AF5]" },
            { title: "Comprehension", icon: <Search className="h-8 w-8 text-blue-400" />, stars: 1, status: "Exploring", color: "bg-[#718AF5]" },
          ].map((card, i) => (
            <div key={i} className="flex-1 flex flex-col items-center rounded-[2.5rem] border-4 border-white bg-[#E9F3D3] p-6 shadow-xl">
              <div className="mb-2">{card.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">{card.title}</h3>
              <div className="mb-4 flex gap-1">
                {[...Array(3)].map((_, j) => (
                  <Star key={j} className={`h-6 w-6 fill-yellow-400 ${j < card.stars ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <div className="mb-2 h-2 w-full rounded-full bg-blue-100 overflow-hidden">
                <div className={`${card.color} h-full`} style={{ width: `${(card.stars / 3) * 100}%` }}></div>
              </div>
              <p className="mb-4 font-bold text-gray-800">{card.status}</p>
              <button className="w-full rounded-full bg-[#FFE580] py-2 text-sm font-black text-gray-800 shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95">
                READ
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
