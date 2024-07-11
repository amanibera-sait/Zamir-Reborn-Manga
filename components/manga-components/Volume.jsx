
"use client"

import ChapterList from "./ChapterList"
import storyJSON from "@/components/json-data/zamir-reborn-info.json"

export default function Volume({volumeNum}) {

    volumeNum = 1
    const volumeIndex = volumeNum - 1;
    console.log("Volume Index:",volumeIndex)
    const volume = storyJSON.volumes[volumeIndex]
    //console.log("Volumes:", volume)
    if (!volume) {
        console.error(`Volume ${volumeIndex} not found in story JSON.`);
        return null;
    }
    
    const chapters = volume.chapters || [];
    
    return (
        <>
            <div>
                <div>
                    <p className="font-black text-2xl my-6">Volume {volumeNum}</p>
                    <ChapterList volumeNum={volumeNum} chapters={chapters}/>   
                </div>
            </div>
        </>
    )
}
