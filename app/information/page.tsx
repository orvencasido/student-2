"use client";

import Header from "../components/Header";
import InformationView from "../components/InformationView";
import { useRouter } from "next/navigation";

export default function InformationPage() {
  const router = useRouter();
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins">
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />
      <Header />
      <InformationView onLogout={() => router.push("/")} />
    </div>
  );
}
