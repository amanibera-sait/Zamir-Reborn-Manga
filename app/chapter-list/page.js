"use client"

import Heading from "@/components/Header";
import Volume from "@/components/Volume";
import Chapter from "@/components/Chapter"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

  
  return (
    <>
      <div className="bg-blue-800 min-h-screen flex justify-center">
        <main className="bg-white w-full max-w-7xl p-8">
          <Heading/>
          <h2>Zamir Reborn</h2>
          <Volume volumeNum={1}/>
        </main>
      </div>
    </>
  );
}
