"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname.includes("/journey")) return "journey";
    if (pathname.includes("/information")) return "info";
    return "home";
  };

  const activeTab = getActiveTab();

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-white/30 backdrop-blur-md border-b border-white/20 px-8 shadow-lg overflow-visible">
      <div className="flex items-center gap-2 relative">
        <div className="absolute -top-4 left-0 h-32 w-32">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={128}
            height={128}
            className="object-contain drop-shadow-lg"
          />
        </div>
        <span className="ml-28 text-3xl font-bold text-[#10B981]">
          Read<span className="text-[#EF4444]">Bloom</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-12 pr-4">
        <Link
          href="/dashboard"
          className={`text-xl font-black cursor-pointer transition-all hover:text-[#10B981] ${activeTab === "home" ? "text-[#10B981] scale-110" : "text-gray-700"}`}
        >
          Home
        </Link>
        <Link
          href="/journey"
          className={`text-xl font-black cursor-pointer transition-all hover:text-[#10B981] ${activeTab === "journey" ? "text-[#10B981] scale-110" : "text-gray-700"}`}
        >
          My Journey
        </Link>
        <Link
          href="/information"
          className={`text-xl font-black cursor-pointer transition-all hover:text-[#10B981] ${activeTab === "info" ? "text-[#10B981] scale-110" : "text-gray-700"}`}
        >
          Information
        </Link>
      </div>
    </nav>
  );
}
