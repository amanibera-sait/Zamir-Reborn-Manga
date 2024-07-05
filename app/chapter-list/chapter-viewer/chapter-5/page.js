"use client";

import { useState } from "react"
import storyJSON from '@/components/zamir-reborn-info.json'
import ComicViewer from '@/components/ComicViewer'


export default function Page() {
  const volume = 1
  const chapter = 5
  

  return (
    <>
      <div>
        <ComicViewer chapterNum={chapter} volumeNum={volume}/>
      </div>
    </>
  )
}
