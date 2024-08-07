"use client"

import Image from "next/image";
import ChapterList from "./ChapterList"

export default function Volume({ volumeNum, volume }) {
    if (!volume) {
        console.error(`Volume ${volumeNum} not found in story JSON.`);
        return null;
    }
    
    const chapters = volume.chapters || [];
    
    return (
        <div>
            <div className="flex flex-row justify-center space-x-24">
                <div style={{width: '32%'}} className="flex flex-col items-center">
                    <p className="flex justify-center font-black text-5xl italic my-6">Volume {volumeNum}</p>
                    <Image src={`/images/covers/volume-${volumeNum}-cover.jpg`} className="bg-gray-200 rounded m-4 p-10 drop-shadow-md" alt={`Zamir Reborn Volume ${volumeNum} Cover`} layout='responsive' width={2480} height={3508}/>
                </div>
                <div className="flex flex-col justify-start items-center">
                    <ChapterList chapters={chapters}/>   

                </div>
            </div>
        </div>
    )
}
