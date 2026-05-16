"use client";

import Image from "next/image";
import { Mail, LockIcon } from "lucide-react";

interface LandingPageProps {
  onLogin: () => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden font-poppins py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />

      <main className="flex flex-col items-center justify-center px-4">
        {/* Logo Section */}
        <div className="flex h-80 w-120 items-center justify-center">
          <div className="relative h-full w-full">
            <Image
              src="/img/logo.png"
              alt="ReadBloom Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center">
          <h1 
            className="text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] md:text-6xl"
          >
            Welcome little one!
          </h1>
          <p className="text-sm font-bold tracking-[0.2em] text-white drop-shadow-md">
            WHERE WORDS BLOOM, MINDS GROW
          </p>
        </div>

        {/* Login Form */}
        <form className="flex w-full max-w-md flex-col space-y-6 px-4 py-10">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-black tracking-widest text-white drop-shadow-md">
              EMAIL
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-[#A5C94C]">
                <Mail className="h-5 w-5" />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-[#F0FFD4]/90 py-4 pl-12 pr-6 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:ring-4 focus:ring-[#A5C94C]/30"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-black tracking-widest text-white drop-shadow-md">
              PASSWORD
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-[#A5C94C]">
                <LockIcon className="h-5 w-5" />
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-full bg-[#F0FFD4]/90 py-4 pl-12 pr-6 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:ring-4 focus:ring-[#A5C94C]/30"
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={onLogin}
              type="button"
              className="group relative flex w-48 cursor-pointer items-center justify-center overflow-hidden rounded-full border-b-4 border-yellow-700 bg-gradient-to-b from-[#FFE580] via-[#FFD700] to-[#FFC107] px-8 py-3 text-xl font-black tracking-widest text-black transition-all hover:scale-105 active:scale-95 active:border-b-0 active:translate-y-[2px]"
            >
              LOG IN
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
