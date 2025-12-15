"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Loading from "react-loading";
import PageCarousel from "./PageCarousel";
import { getChapterData } from "@/app/_utils/chapterDB";

function MangaReader({ volume, chapter }) {
  const router = useRouter();
  const chapterFolder = `/images/chapters/Volume_${volume}/Chapter_${chapter}`;
  const [loading, setLoading] = useState(true);
  const [chapterSource, setChapterSource] = useState(null); // Holds the resolved chapter data

  function formatNumber(num) {
    return num.toString().padStart(3, "0");
  }

  // Fetch chapter data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getChapterData(volume, chapter);
        setChapterSource(data); // Set resolved data
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [volume, chapter]);

  // Memoize the pages once the chapterSource is available
  const pages = useMemo(() => {
    if (!chapterSource) return []; // No pages if chapterSource is not loaded
    const result = [];
    for (let i = 1; i <= chapterSource.pages; i++) {
      result.push({
        src: `${chapterFolder}/Chapter_${chapter}_${formatNumber(i)}.jpg`,
        alt: `Chapter ${chapter} Page ${formatNumber(i)}`,
      });
    }
    return result;
  }, [chapterFolder, chapterSource]);

  function handleNextChapter() {
    if (chapter == 1) {
      router.push(`/chapter-list/chapter-viewer?volume=${volume}&chapter=${2}`);
    } else {
      let nextChapter = parseInt(chapter);
      nextChapter++;

      router.push(
        `/chapter-list/chapter-viewer?volume=${volume}&chapter=${nextChapter}`
      );
    }
  }
  function handlePreviousChapter() {
    let prevChapter = chapter;
    prevChapter--;
    router.push(
      `/chapter-list/chapter-viewer?volume=${volume}&chapter=${prevChapter}`
    );
  }
  function handleExit() {
    router.back();
  }
  function handleExitToList() {
    router.push(`/chapter-list`);
  }

  try {
    return (
      <>
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center h-screen bg-black bg-opacity-75">
            <Loading type="spin" height={"10%"} width={"10%"} color="#deb018" />
          </div>
        )}
        <div className="w-full lg:w-2/4 mx-auto my-12">
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
            <div className="p-4 flex justify-end">
              <button
                onClick={handleExitToList}
                className="rounded-lg px-4 py-2 text-sm font-bold bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800 transition"
              >
                Back to List
              </button>
            </div>
            <PageCarousel
              handleNextChapter={handleNextChapter}
              handlePreviousChapter={handlePreviousChapter}
              handleExit={handleExit}
              handleExitToList={handleExitToList}
              loading={loading}
              setLoading={setLoading}
            >
              {pages.map((page, index) => (
                <>
                  <img key={page.src} src={page.src} alt={page.alt} />
                </>
              ))}
            </PageCarousel>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return (
      <div className="fixed inset-0 flex justify-center items-center h-screen transition-opacity duration-500">
        <div className=" m-7 text-2xl justify-center items-center">
          There was an error!
        </div>
        <div className=" m-7 text-2xl justify-center items-center">{error}</div>
      </div>
    );
  }
}

export default MangaReader;
