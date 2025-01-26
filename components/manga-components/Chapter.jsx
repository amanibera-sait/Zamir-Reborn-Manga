"use client";

import Image from "next/image";
import Link from "next/link";

const Chapter = ({
  chapter,
  volume,
  title,
  pages,
}) => {
  const icon = `Chapter_${chapter}_Icon.jpg`
  const imgPath = `/images/chapters/Volume_${volume}/Icons/${icon}`;

  return (
    <>
<<<<<<< HEAD
      <li className="border border-gray-300 shadow-md flex flex-col sm:flex-row justify-center items-center p-4 max-w-screen-md mx-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
        <Link
          href={`/chapter-list/chapter-viewer?volume=${volume}&chapter=${chapter}`}
        >
          <div className="flex flex-col sm:flex-row items-center w-full space-y-4 sm:space-x-4">
            <div className="flex-shrink-0 overflow-hidden rounded-lg w-32 h-32">
              <Image
                src={imgPath}
                alt={`Chapter ${chapter}`}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-start sm:ml-4 w-full">
              <p className="font-semibold text-lg sm:text-xl text-gray-800 truncate">
                Chapter {chapter}: {title}
              </p>
=======
      <li className="border-4 border-spacing-8 sm:flex-row justify-center items-center p-4 max-w-screen-sm mx-auto rounded-lg hover:bg-gray-400 hover:text-gray-100 active:bg-gray-500">
        <Link
          href={`/chapter-list/chapter-viewer?volume=${volume}&chapter=${chapter}`}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 text-start w-full">
            <div className="flex-shrink-0 bg-gray-200 rounded-md p-2">
              <Image
                src={imgPath}
                alt={`Icon of Chapter ${chapter}`}
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-start p-2 sm:p-4 w-full">
              <p className="font-black text-lg sm:text-2xl mb-2 sm:mb-4 whitespace-nowrap">
                Chapter {chapter} - {title}
              </p>
              {/*<p className="text-base sm:text-lg italic whitespace-nowrap">
                {releaseDate}
              </p>*/}
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
            </div>
          </div>
        </Link>
      </li>
<<<<<<< HEAD
=======
      {/* <div className="flex-row justify-center items-center mb-4 space-x-8 space-y-4 text-end w-full">
        <button
          value={"edit"}
          onClick={(e) => handleOption(e.target.value, chapter)}
          className="rounded-lg p-2 w-1/4 font-black bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-gray-100 active:bg-gray-200"
        >
          Edit
        </button>
        <button
          value={"delete"}
          onClick={(e) => handleOption(e.target.value, chapter)}
          className="rounded-lg p-2 w-1/4 font-black bg-red-700 text-gray-100 hover:bg-red-600 hover:text-gray-100 active:bg-red-200"
        >
          Delete
        </button>
      </div> */}
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
    </>
  );
};
export default Chapter;
