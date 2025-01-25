import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PageCarousel({
  children: pages,
  handleNextChapter,
  handlePreviousChapter,
  handleExit,
}) {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  // Adjusted for RTL: 'Next' goes to the previous slide in LTR
  const navigate = (direction) => {
    if (direction == 1 && current == pages.length - 1) {
      handleNextChapter();
    } else if (direction == -1 && current == 0) {
      handleExit();
    } else {
      setCurrent(
        (current) => (current + direction + pages.length) % pages.length
      );
    }
  };

  function handleNextButton() {
    handleNextChapter();
  }
  function handlePrevButton() {
    handlePreviousChapter();
  }

  const Next = () =>
    setCurrent((current) => (current === 0 ? pages.length - 1 : current - 1));

  // Adjusted for RTL: 'Prev' goes to the next slide in LTR
  const Prev = () =>
    setCurrent((current) => (current === pages.length - 1 ? 0 : current + 1));

  return (
    <>
      <div className="flex flex-col">
        <div className="relative h-screen mb-28 mt-14" >
          {/* Display only the current page */}
          <div className="flex justify-center items-center">
            {pages[current]}
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={() => navigate(1)} // Navigate to the next slide
              className="opacity-0 active:opacity-10 rounded-lg p-4 w-screen h-screen flex justify-center items-center text-2xl font-black bg-gray-700 text-white hover:bg-gray-500 hover:text-white active:bg-gray-300"
            >
              &laquo;
            </button>

            <button
              onClick={() => navigate(-1)} // Navigate to the previous slide
              className="opacity-0 active:opacity-10 rounded-lg p-4 w-screen h-screen flex justify-center items-center text-2xl font-black bg-gray-700 text-white hover:bg-gray-500 hover:text-white active:bg-gray-300"
            >
              &raquo;
            </button>
          </div>
        </div>

        {/* Pagination indicators (dots) */}
        <div className="flex flex-row-reverse justify-center items-center m-28">
          {pages.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 mx-1 rounded-full ${
                current === i ? "bg-gray-700" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-row-reverse justify-center items-center gap-x-16 m-10 w-1/3">
          <button
            onClick={handlePrevButton}
            className="rounded-lg p-4 w-1/2 flex justify-center items-center text-2xl font-black bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200"
          >
            Prev Chapter
          </button>
          <button
            onClick={handleNextButton}
            className="rounded-lg p-4 w-1/2 flex justify-center items-center text-2xl font-black bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200"
          >
            Next Chapter
          </button>
        </div>
      </div>
    </>
  );
}

export default PageCarousel;
