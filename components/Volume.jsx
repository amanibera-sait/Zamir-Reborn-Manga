
import ChapterList from "./ChapterList"
import Link from "next/link";
import storyJSON from "./zamir-reborn-info.json"


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
            <li>
                <div>
                    <p>Volume {volumeNum}</p>
                    <ChapterList chapters={chapters}/>   
                </div>
            </li>
        </>
    )
}
