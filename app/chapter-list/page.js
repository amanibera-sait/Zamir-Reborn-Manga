"use client";

import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import Volume from "@/components/manga-components/Volume";
import { useState } from "react";
import { getChapterSize } from "../_utils/chapterDB";
import VolumeList from "@/components/manga-components/VolumeList";

export default function Page() {
  const [volumeNum, setVolumeNum] = useState(1);

  let amount = getChapterSize();
<<<<<<< HEAD
  let nums = [];
  for (let i = 1; i < amount; i++) {
    nums.push(i);
  }
=======
  let nums = []
  for (let i = 1; i < amount; i++) {
    nums.push(i)
    
  }

>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f

  return (
    <>
<<<<<<< HEAD
      <Heading />
      <main className="bg-white min-h-screen flex flex-col justify-center items-center">
        <Volume volumeNum={volumeNum} />
      </main>
      <Footing />
=======
        <main className="bg-white w-full min-h-screen justify-center items-center">
          <Heading/>
          <VolumeList volumes={nums}/>
          <Volume volumeNum={volumeNum}/>
          <Footing/>
        </main>
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
    </>
  );
}
