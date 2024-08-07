"use client"

import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import Volume from "@/components/manga-components/Volume";
import VolumeList from "@/components/manga-components/VolumeList";

export default function Page() {

  
  return (
    <>
        <main className="bg-white w-full min-h-screen justify-center items-center">
          <Heading/>
          <VolumeList/>
          <Footing/>
        </main>
    </>
  );
}
