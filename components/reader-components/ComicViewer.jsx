"use client";

import { useState, useEffect, useMemo } from "react";
import storyJSON from '@/components/json-data/zamir-reborn-info.json';
import Image from "next/image";
import ComicFilter from "./ComicFilter";

export default function ComicViewer({ volume, chapter }) {
  const chapterFolder = `/images/chapters/Volume_${volume}/Chapter_${chapter}`;
  //const volumeIndex = volume - 1;
  //const validVolume = storyJSON.volumes[volumeIndex];
  //if (!validVolume) {
  //  console.error(`Volume ${volume} not found.`);
  //  return <p>Volume not found</p>;
  //}

  function formatNumber(num) {
    if (num < 10) {
      return `00${num}`;
    } else if (num < 100) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  const chapterSource = useMemo(() =>  ComicFilter(volume, chapter), [volume, chapter])
  const [chapterPages, setChapterPages] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [firstPage, setFirstPage] = useState("");

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= chapterSource.pages; i++) {
      pages.push(`Chapter_${chapter}_${formatNumber(i)}.jpg`);
    }
    setChapterPages(pages);
    setFirstPage(pages[0]);
  }, [chapter, chapterSource]);

  const pageImgPath = `${chapterFolder}/${firstPage}`;

  function handleNext() {
    if (firstIndex < chapterPages.length - 1) {
      setFirstIndex(prevIndex => prevIndex + 1);
      setFirstPage(chapterPages[firstIndex + 1]);
    }
  }

  function handleBack() {
    if (firstIndex > 0) {
      setFirstIndex(prevIndex => prevIndex - 1);
      setFirstPage(chapterPages[firstIndex - 1]);
    }
  }

  return (
    <>
      <div className="flex flex-row-reverse justify-center content-center m-2">
        <Image src={pageImgPath} priority={true} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + firstPage} />
      </div>
      <div className="flex flex-row-reverse justify-center content-center m-2">
        {(firstIndex > 0) && (
          <button onClick={handleBack} className="rounded m-2 w-1/4 bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Back</button>
        )}
        {(firstIndex < chapterPages.length - 1) && (
          <button onClick={handleNext} className="rounded m-2 w-1/4 bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Next</button>
        )}
      </div>
    </>
  );
}
