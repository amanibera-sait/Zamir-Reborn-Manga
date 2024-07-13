//TODO
// - Impliment a previous page function.
// - Impliment a side bar of the chapters.
// - Add Tailwind Styling.
// - Impliment commenting system.


"use client";

import { useState } from "react"
import storyJSON from '@/components/json-data/zamir-reborn-info.json'
import Image from "next/image";


export default function ComicViewer ({volume, chapter}) {
  const chapterFolder = `/images/chapters/Chapter_${chapter}`;
  const volumeIndex = volume - 1;
  const validVolume = storyJSON.volumes[volumeIndex];
  const chapterSource = validVolume.chapters;
  const chapterPages = chapterSource[chapter - 1].files;
  
  const [isFirstLastPage, setFirstLastPage] = useState(true);
  
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(2);
  
  const [firstPage, setFirstPage] = useState(chapterPages[firstIndex]);
  const [secondPage, setSecondPage] = useState(chapterPages[secondIndex]);
  
  const pageImgPath_1 = `${chapterFolder}/${firstPage}`
  const pageImgPath_2 = `${chapterFolder}/${secondPage}`
  

  // Check if volumes exist in the storyJSON
  if (!storyJSON.volumes || storyJSON.volumes.length === 0) {
    console.error("No volumes found in story JSON.");
    return <p>No volumes found.</p>;
  }
  
  
  if (!validVolume) {
    console.error(`Volume ${volume} not found.`);
    return <p>Volume not found</p>;
  }
  
  if (!chapterSource || chapterSource.length < chapter) {
    console.error(`Chapter ${chapter} not found in Volume ${volume}.`);
    return <p>Chapter not found</p>;
  }
  
  
  
  
  function handleNext(){
    if (isFirstLastPage == true && firstIndex + 2 < chapterPages.length){
      setFirstLastPage(false)
      setFirstIndex(prevIndex => prevIndex + 1);
      setFirstPage(chapterPages[firstIndex + 1]);
    }    
    else if (firstIndex + 1 < chapterPages.length && secondIndex + 1 < chapterPages.length) {
      setFirstIndex(prevIndex => prevIndex + 2);
      setSecondIndex(prevIndex => prevIndex + 2);
      setFirstPage(chapterPages[firstIndex]);
      setSecondPage(chapterPages[secondIndex]);
    }
    else if (secondIndex + 2 >= chapterPages.length) {
      setFirstLastPage(true)
      setFirstIndex(prevIndex => prevIndex + 2);
      setFirstPage(chapterPages[firstIndex]);
    }
  }

  //function handleBack(){
  //  if (isFirstLastPage == true && firstIndex + 2 < chapter.length){
  //    setFirstLastPage(false)
  //    setFirstIndex(prevIndex => prevIndex + 1);
  //    setFirstPage(chapter[firstIndex + 1]);
  //  }    
  //  else if (firstIndex + 1 < chapter.length && secondIndex + 1 < chapter.length) {
  //    setFirstIndex(prevIndex => prevIndex + 2);
  //    setSecondIndex(prevIndex => prevIndex + 2);
  //    setFirstPage(chapter[firstIndex]);
  //    setSecondPage(chapter[secondIndex]);
  //  }
  //  else if (secondIndex + 2 >= chapter.length) {
  //    setFirstLastPage(true)
  //    setFirstIndex(prevIndex => prevIndex + 2);
  //    setFirstPage(chapter[firstIndex]);
  //  }
  //}

  
  return (
    <>
      <div className="flex flex-row-reverse justify-center content-center m-2">
        {isFirstLastPage && (
          <>
            <Image src={pageImgPath_1} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + firstPage}/>
          </>
        )}
        {!isFirstLastPage && (
          <>
            <Image src={pageImgPath_1} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + firstPage}/>
            <Image src={pageImgPath_2} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + secondPage}/>
          </>
        )}
      </div>
      <div className="flex flex-row-reverse justify-center content-center m-2">
        <button onClick={handleNext} className="rounded m-2 w-1/4 bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Back</button>
        <button onClick={handleNext} className="rounded m-2 w-1/4 bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Next</button>
      </div>
    </>
  )
  }

