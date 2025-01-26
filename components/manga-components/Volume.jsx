"use client";

import Image from "next/image";
import ChapterList from "./ChapterList";
import { Suspense, useEffect, useState } from "react";
import Loading from "react-loading";
import { getChapters } from "@/app/_utils/chapterDB";

export default function Volume({ volumeNum }) {
  /*if (!volume) {
    console.error(`Volume ${volumeNum} not found in database.`);
    return null;
  }*/
  const [chapters, setChapters] = useState([]); // State to store chapter data
  const [isLoading, setIsLoading] = useState(true); // State to handle loading status

  const fetchChapters = async () => {
    try {
      const fetchedChapters = await getChapters(volumeNum); // Wait for data
      setChapters(fetchedChapters); // Update the state
    } catch (error) {
      console.error("Error fetching chapters:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    // Guard: Fetch chapters only if not already fetched
    if (chapters.length === 0) {
      fetchChapters();
    }
  }, [chapters, volumeNum]); // Dependencies ensure it only re-runs if `volumeNum` or `chapters` changes

  return (
    <div className="p-6 lg:p-8 bg-white rounded-xl shadow-lg space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Cover Image Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3 mb-6 lg:mb-0">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 italic">
            Volume {volumeNum}
          </p>
          <Suspense
            fallback={
              <div className="flex justify-center items-center">
                <Loading type="spin" height={50} width={50} color="#00bfa5" />
              </div>
            }
          >
            <Image
              src={`/images/covers/volume-${volumeNum}-cover.jpg`}
              alt={`Volume ${volumeNum} Cover`}
              layout="responsive"
              width={2480}
              height={3508}
              className="rounded-lg border border-gray-300 shadow-md"
            />
          </Suspense>
        </div>

        {/* Chapter List Section */}
        <div className="flex-1 lg:pl-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4 ">Chapters:</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner max-h-[400px]">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loading type="spin" height={50} width={50} color="#00bfa5" />
              </div>
            ) : (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center">
                    <Loading type="spin" height={50} width={50} color="#00bfa5" />
                  </div>
                }
              >
                <ChapterList chapters={chapters} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
