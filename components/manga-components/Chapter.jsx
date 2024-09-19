
"use client"

import Image from "next/image";
import Link from "next/link";

const Chapter = ({chapter, volume, title, icon, releaseDate, pages, likes}) => {  
    const imgPath = `/images/chapters/Volume_${volume}/Icons/${icon}`;
    return (
        <li className="border-4 border-spacing-8 sm:flex-row justify-center items-center p-4 max-w-screen-sm mx-auto rounded-lg hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
            <Link href={`/chapter-list/chapter-viewer?volume=${volume}&chapter=${chapter}`}>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 text-start w-full">
                    <div className="flex-shrink-0 bg-gray-200 rounded-md p-2">
                        <Image src={imgPath} alt={`Icon of Chapter ${chapter}`} width={150} height={150} className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center items-start p-2 sm:p-4 w-full">
                        <p className="font-black text-lg sm:text-2xl mb-2 sm:mb-4 whitespace-nowrap">Chapter {chapter} - {title}</p>
                        <p className="text-base sm:text-lg italic whitespace-nowrap">{releaseDate}</p>
                        <p className="text-sm sm:text-base italic whitespace-nowrap">{likes} Likes</p>
                    </div>
                </div>
            </Link>   
        </li>
    )
}
export default Chapter;                    