//TODO
// - Add Icon images to folder.
"use client"

import Link from "next/link";
import { useState } from "react";

const Chapter = ({chapter, volume, title, icon, releaseDate, files, likes}) => {  
    const [selectedChapter, setSelectedChapter] = useState(null)
    
    console.log("Chapter:", chapter);
    
    function handleClick(){
        setSelectedChapter(chapter);
    }

    return (
        <>
            <li className="flex justify-center items-start p-2 space-x-10 w-full max-w-screen-md mx-auto my-5 bg-slate-300 rounded-lg">
                <div className="flex flex-row justify-center space-x-10 items-center text-center">
                    <p className="font-black text-md my-6">Chapter {chapter} - {title}</p>
                    <p>{likes} Likes</p>
                    <p>{files.length} Pages</p>
                    <p>{releaseDate}</p>
                    <Link href={`/chapter-list/chapter-viewer?volume=${volume}&chapter=${chapter}`}>
                        <button className="rounded bg-gray-400 mx-2 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Click to Read</button>
                    </Link>   
                </div>
            </li>
        </>
    )
}
export default Chapter;                    