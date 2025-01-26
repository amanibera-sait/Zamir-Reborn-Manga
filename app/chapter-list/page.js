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
  let nums = [];
  for (let i = 1; i < amount; i++) {
    nums.push(i);
  }

  return (
    <>
      <Heading />
      <main className="bg-white min-h-screen flex flex-col justify-center items-center">
        <Volume volumeNum={volumeNum} />
      </main>
      <Footing />
    </>
  );
}
