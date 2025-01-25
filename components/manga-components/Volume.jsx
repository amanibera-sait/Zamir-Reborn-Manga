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
    <div className="p-4 md:p-6 lg:p-8 lg:-mb-72 lg:-space-y-36">
      <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-12">
        {/* Cover Image Section */}
        <div className="flex flex-col items-center w-full lg:w-2/5 lg:ml-36">
          <p className="text-3xl md:text-4xl lg:text-5xl font-black italic my-4 lg:my-6">
            Volume {volumeNum}
          </p>
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl font-bold">
                <Loading
                  type="spin"
                  height={"10%"}
                  width={"10%"}
                  color="#deb018"
                />
              </div>
            }
          >
            <Image
              src={`/images/covers/volume-${volumeNum}-cover.jpg`}
              className="bg-gray-200 rounded m-4 p-4 drop-shadow-md"
              alt={`Zamir Reborn Volume ${volumeNum} Cover`}
              layout="responsive"
              width={2480}
              height={3508}
            />
          </Suspense>
        </div>

        {/* Chapter List Section */}
        <div className="flex flex-col items-center w-full lg:w-2/3">
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl font-bold">
                <Loading
                  type="spin"
                  height={"10%"}
                  width={"10%"}
                  color="#deb018"
                />
              </div>
            }
          >
            <ChapterList chapters={chapters} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
