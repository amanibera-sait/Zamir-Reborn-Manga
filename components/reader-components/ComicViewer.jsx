"use client";

import { useState, useEffect, useMemo } from "react";
import storyJSON from '@/components/json-data/zamir-reborn-info.json';
import Image from "next/image";
import ComicFilter from "./ComicFilter";
import Loading from 'react-loading'

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= chapterSource.pages; i++) {
      pages.push(`Chapter_${chapter}_${formatNumber(i)}.jpg`);
    }
    setChapterPages(pages);
    setFirstPage(pages[0]);
  }, [chapter, chapterSource]);

  const handleNext = async () => {
    if (firstIndex < chapterPages.length - 1) {
      setLoading(true);
      const nextIndex = firstIndex + 1;
      const nextPage = chapterPages[nextIndex];
      setFirstIndex(nextIndex);
      setFirstPage(nextPage);
    }
  };

  const handleBack = async () => {
    if (firstIndex > 0) {
      setLoading(true);
      const prevIndex = firstIndex - 1;
      const prevPage = chapterPages[prevIndex];
      setFirstIndex(prevIndex);
      setFirstPage(prevPage);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500">
          <Loading type="spin" height={'10%'} width={'10%'} color="#deb018"/>
        </div>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex flex-col justify-center items-center w-full max-w-9xl space-x-4">
          <div className="flex justify-center items-center w-full max-w-4xl">
            <Image
              onClick={handleNext} 
              src={`${chapterFolder}/${firstPage}`}
              quality={1}
              onLoadingComplete={() => setLoading(false)} 
              priority={true} 
              layout="intrinsic"
              width={2268} 
              height={3154} 
              className="active:opacity-90 mb-12 p-2 max-w-full h-auto rounded-lg bg-slate-900 drop-shadow-white-sm" 
              alt={"Image of " + firstPage} 
            />
          </div>
          <div className="flex flex-row-reverse justify-center items-center w-1/4">
            {(firstIndex > 0) && (
              <button 
                onClick={handleBack} 
                className="rounded-lg p-4 w-1/2 ml-8 flex justify-center items-center text-2xl font-black bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                &raquo;
              </button>
            )}
            {(firstIndex < chapterPages.length - 1) && (
              <button 
                onClick={handleNext} 
                className="rounded-lg p-4 w-1/2 mr-8 flex justify-center items-center text-2xl font-black bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                &laquo;
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
