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
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};
export default Chapter;
