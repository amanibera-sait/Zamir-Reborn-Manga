"use client";

import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import Volume from "@/components/manga-components/Volume";
import { useState } from "react";
import { getVolumeCount } from "../_utils/chapterDB";
import VolumeList from "@/components/manga-components/VolumeList";

export default function Page() {
  const [volumeNum, setVolumeNum] = useState(1);
  
  // Get the number of volumes available
  const volumeCount = getVolumeCount();

  return (
    <>
      <Heading />
      <main className="bg-white min-h-screen flex flex-col justify-center items-center">
        {volumeCount > 1 && (
          <div className="mb-6">
            <select 
              value={volumeNum} 
              onChange={(e) => setVolumeNum(parseInt(e.target.value))}
              className="px-4 py-2 border rounded-lg text-gray-700"
            >
              {Array.from({ length: volumeCount }, (_, i) => i + 1).map(vol => (
                <option key={vol} value={vol}>Volume {vol}</option>
              ))}
            </select>
          </div>
        )}
        <Volume volumeNum={volumeNum} />
      </main>
      <Footing />
    </>
  );
}
