// Import necessary modules

"use client";

import { useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import MangaReader from "./MangaReader";
import dynamic from "next/dynamic";

const Reader = () => {
  const searchParams = useSearchParams();
  const volume = searchParams.get("volume");
  const chapter = searchParams.get("chapter");


  const DynamicMangaReader = dynamic(() => import("./MangaReader"), {
    ssr: false, // Disable SSR for this component
  });

  return (
    <div>
      {/* Render ComicViewer with fetched volume and chapter */}
      <DynamicMangaReader volume={volume} chapter={chapter} />
    </div> 
  );
};

export default Reader;
