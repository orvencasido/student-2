"use client";

import Image from "next/image";
import { Pencil } from "lucide-react";

interface InformationViewProps {
  onLogout: () => void;
}

export default function InformationView({ onLogout }: InformationViewProps) {
  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center gap-8 p-8 pt-40 pb-12">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-6">
        <div className="h-48 w-48 overflow-hidden rounded-[2.5rem] border-8 border-[#10B981] bg-white shadow-2xl">
          <div className="relative h-full w-full">
            <Image
              src="/img/logo.png"
              alt="Kai Adamson"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-black text-black">Kai Adamson</h1>
          <p className="mt-2 text-xl font-bold text-gray-700">Grade 4 Student Level 1 EXPLORER</p>
        </div>
      </div>

      {/* Personal Information Card */}
      <div className="relative w-full max-w-2xl rounded-[2.5rem] bg-[#E1F1F6] p-8 shadow-2xl border-4 border-white">
        <button className="absolute right-8 top-8 text-gray-900 transition-transform hover:scale-110 cursor-pointer">
          <Pencil className="h-6 w-6" />
        </button>
        <h2 className="mb-6 text-3xl font-black text-black">Personal Information</h2>
        <div className="space-y-4 text-xl font-bold text-black">
          <div className="flex">
            <span className="w-40">Email:</span>
            <span>adamson@read.bloom</span>
          </div>
          <div className="flex">
            <span className="w-40">Section:</span>
            <span>Mabini</span>
          </div>
          <div className="flex">
            <span className="w-40">Last Log In:</span>
            <span>4/19/2026</span>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="w-full max-w-2xl rounded-full bg-[#EF4444] py-4 text-3xl font-black text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95"
      >
        Logout
      </button>
    </main>
  );
}
