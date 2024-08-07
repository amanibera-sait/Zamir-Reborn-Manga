//TODO
// - Add Icon images to folder.
"use client"

import Image from "next/image";
import Link from "next/link";

const Chapter = ({chapter, volume, title, icon, releaseDate, pages, likes}) => {  
    const imgPath = `/images/chapters/Volume_${volume}/Icons/${icon}`;
    return (
        <>
            <li className="flex justify-center items-center p-4 max-w-screen-sm mx-auto my-4 bg-slate-300 rounded-lg hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                <Link href={`/chapter-list/chapter-viewer?volume=${volume}&chapter=${chapter}`}>
                    <div className="flex flex-row justify-center items-center space-x-0 text-start pl-0 mr-40 pr-16">
                        <div className="flex justify-center items-center bg-gray-200 rounded-md p-2">
                            <Image src={imgPath} alt={`Icon of Chapter ${chapter}`} width={300} height={300} />
                        </div>
                        <div className="flex flex-col flex-grow justify-center items-start min-w-72 max-w-72 min-h-24 max-h-24 rounded-md p-4">
                            <p className="font-black text-3xl mb-4 whitespace-nowrap">Chapter {chapter} - {title}</p>
                            <p className="text-2xl italic whitespace-nowrap">{releaseDate}</p>
                            <p className="text-1xl italic whitespace-nowrap">{likes} Likes</p>
                        </div>
                    </div>
                </Link>   
            </li>
        </>
    )
}
export default Chapter;                    