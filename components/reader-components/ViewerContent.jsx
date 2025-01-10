// Import necessary modules

"use client";

import { useSearchParams } from "next/navigation";
import ComicViewer from "./ComicViewer";
import React, { useEffect, useState } from "react";
import storyJSON from "@/components/json-data/zamir-reborn-info.json";
import { getChapters } from "@/app/_utils/chapterDB";
import MangaReader from "./MangaReader";

const Viewer = () => {
  const searchParams = useSearchParams();
  const volume = searchParams.get("volume");
  const chapter = searchParams.get("chapter");

  const [loading, setLoading] = useState(true);

  /*if (loading) {
    return (
      <p className="flex m-72 justify-center items-center text-xl font bold">
        Loading...
      </p>
    );
  }*/

  return (
    <div>
      {/* Render ComicViewer with fetched volume and chapter */}
      <MangaReader volume={volume} chapter={chapter} />
    </div>
  );
};

export default Viewer;
