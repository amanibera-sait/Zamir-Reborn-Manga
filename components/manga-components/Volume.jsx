"use client"

import Image from "next/image";
import ChapterList from "./ChapterList"
import { Suspense } from "react";
import Loading from "react-loading";

export default function Volume({ volumeNum, volume }) {
    if (!volume) {
        console.error(`Volume ${volumeNum} not found in story JSON.`);
        return null;
    }
    
    const chapters = volume.chapters || [];
    
    return (
        <div className="p-4 md:p-6 lg:p-8 lg:-mb-72 lg:-space-y-36">
            <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-12">
                {/* Cover Image Section */}
                <div className="flex flex-col items-center w-full lg:w-2/5 lg:ml-36">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-black italic my-4 lg:my-6">Volume {volumeNum}</p>
                    <Suspense
                        fallback={
                            <div className='flex justify-center items-center text-xl font-bold'>
                                <Loading type="spin" height={'10%'} width={'10%'} color="#deb018"/>
                            </div>
                        }>
                        <Image
                            src={`/images/covers/volume-${volumeNum}-cover.jpg`}
                            className="bg-gray-200 rounded m-4 p-4 drop-shadow-md"
                            alt={`Zamir Reborn Volume ${volumeNum} Cover`}
                            layout='responsive'
                            width={2480}
                            height={3508}
                        />
                    </Suspense>
                </div>

                {/* Chapter List Section */}
                <div className="flex flex-col items-center w-full lg:w-2/3">
                    <Suspense
                        fallback={
                            <div className='flex justify-center items-center text-xl font-bold'>
                                <Loading type="spin" height={'10%'} width={'10%'} color="#deb018"/>
                            </div>
                        }>
                        <ChapterList chapters={chapters}/>   
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
