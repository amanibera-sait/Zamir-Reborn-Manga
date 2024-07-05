//TODO
// - Impliment a previous page function.
// - Impliment a side bar of the chapters.
// - Add Tailwind Styling.
// - Impliment commenting system.


"use client";

import { useState, useEffect } from "react"
import storyJSON from '@/components/zamir-reborn-info.json'

export default function ComicViewer({volumeNum, chapterNum}) {
  
  console.log("volumeNum:", volumeNum);
  console.log("chapterNum:", chapterNum);

  // Check if volumes exist in the storyJSON
  if (!storyJSON.volumes || storyJSON.volumes.length === 0) {
    console.error("No volumes found in story JSON.");
    return <p>No volumes found.</p>;
  }
  
  // Validate volumeNum and chapterNum
  const volumeIndex = volumeNum - 1;
  const validVolume = storyJSON.volumes[volumeIndex];
  
  if (!validVolume) {
    console.error(`Volume ${volumeNum} not found.`);
    return <p>Volume not found</p>;
  }
  
  const chapterSource = validVolume.chapters;
  console.log("Chapter Source:", chapterSource);
  
  if (!chapterSource || chapterSource.length < chapterNum) {
    console.error(`Chapter ${chapterNum} not found in Volume ${volumeNum}.`);
    return <p>Chapter not found</p>;
  }
  
  const chapter = chapterSource[chapterNum - 1].files;
  console.log("Chapters:", chapter);
  
  const chapterFolder = `/images/chapters/Chapter_${chapterNum}`;

  useEffect(() => {
    // Preload all images
    chapter.forEach(page => {
      const img = new Image();
      img.src = `${chapterFolder}/${page}`;
    });
  }, [chapter, chapterFolder]);


  const [isFirstLastPage, setFirstLastPage] = useState(true);

  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(2);
  
  const [firstPage, setFirstPage] = useState(chapter[firstIndex]);
  const [secondPage, setSecondPage] = useState(chapter[secondIndex]);

  const pageImgPath_1 = `${chapterFolder}/${firstPage}`
  const pageImgPath_2 = `${chapterFolder}/${secondPage}`

  function handleNext(){
    if (isFirstLastPage == true && firstIndex + 2 < chapter.length){
      setFirstLastPage(false)
      setFirstIndex(prevIndex => prevIndex + 1);
      setFirstPage(chapter[firstIndex + 1]);
    }    
    else if (firstIndex + 1 < chapter.length && secondIndex + 1 < chapter.length) {
      setFirstIndex(prevIndex => prevIndex + 2);
      setSecondIndex(prevIndex => prevIndex + 2);
      setFirstPage(chapter[firstIndex]);
      setSecondPage(chapter[secondIndex]);
    }
    else if (secondIndex + 2 >= chapter.length) {
      setFirstLastPage(true)
      setFirstIndex(prevIndex => prevIndex + 2);
      setFirstPage(chapter[firstIndex]);
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
            <img src={pageImgPath_1} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + firstPage}/>
          </>
        )}
        {!isFirstLastPage && (
          <>
            <img src={pageImgPath_1} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + firstPage}/>
            <img src={pageImgPath_2} width={350} height={350} className="my-2 size-1/4" alt={"Image of " + secondPage}/>
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

