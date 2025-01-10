"use client";

import { Carousel } from "react-responsive-carousel";
import ComicFilter from "./ComicFilter";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Loading from "react-loading";

function MangaReader({ volume, chapter }) {
  const chapterFolder = `/images/chapters/Volume_${volume}/Chapter_${chapter}`;
  const [loading, setLoading] = useState(true);

  function formatNumber(num) {
    return num.toString().padStart(3, "0");
  }

  const chapterSource = useMemo(
    () => ComicFilter(volume, chapter),
    [volume, chapter]
  );

  const pages = useMemo(() => {
    const result = [];
    for (let i = 1; i <= chapterSource.pages; i++) {
      result.push({
        src: `${chapterFolder}/Chapter_${chapter}_${formatNumber(i)}.jpg`,
        alt: `Chapter ${chapter} Page ${formatNumber(i)}`,
      });
    }
    return result;
  }, [chapterFolder, chapterSource]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center h-screen transition-opacity duration-500">
          <Loading type="spin" height={"10%"} width={"10%"} color="#deb018" />
        </div>
      )}
      <Carousel
        showThumbs={true}
        thumbWidth={250}
        showArrows={true}
        useKeyboardArrows={true}
        emulateTouch={true}
        autoPlay={false}
        transitionTime={700}
        infiniteLoop={false}
        renderArrowPrev={(clickHandler, hasPrev, label) => (
          <button
            onClick={clickHandler}
            disabled={!hasPrev}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-700 text-white ${
              !hasPrev ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
            }`}
            aria-label={label}
          >
            &laquo; {/* Left arrow */}
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext, label) => (
          <button
            onClick={clickHandler}
            disabled={!hasNext}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-700 text-white ${
              !hasNext ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
            }`}
            aria-label={label}
          >
            &raquo; {/* Right arrow */}
          </button>
        )}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 mb-24 drop-shadow-md"
          >
            <div
              className="relative w-full"
              style={{ width: "40%", height: "auto" }}
            >
              <Image
                src={page.src}
                alt={page.alt}
                quality={1}
                onLoadingComplete={() => setLoading(false)}
                priority={true}
                layout="intrinsic"
                width={1920}
                height={1080}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default MangaReader;
