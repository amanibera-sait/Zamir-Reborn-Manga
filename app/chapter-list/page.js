"use client"

import Heading from "@/components/layout-components/Header";
import Volume from "@/components/manga-components/Volume";

export default function Page() {

  
  return (
    <>
        <main className="bg-white w-full min-h-screen justify-center items-center">
          <Heading/>
          <h2>Zamir Reborn</h2>
          <Volume volumeNum={1}/>
        </main>
    </>
  );
}
