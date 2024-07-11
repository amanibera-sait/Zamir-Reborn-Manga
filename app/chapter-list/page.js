"use client"

import Heading from "@/components/layout-components/Header";
import Volume from "@/components/manga-components/Volume";

export default function Page() {

  
  return (
    <>
      <div className="bg-blue-800 min-h-screen flex justify-center">
        <main className="bg-white w-full max-w-7xl">
          <Heading/>
          <h2>Zamir Reborn</h2>
          <Volume volumeNum={1}/>
        </main>
      </div>
    </>
  );
}
