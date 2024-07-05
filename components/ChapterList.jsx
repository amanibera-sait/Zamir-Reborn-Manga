import Chapter from "./Chapter"
import storyJSON from "./zamir-reborn-info.json"


export default function ChapterList({chapters}){
    //console.log("Chapters:", chapters);
    
    return(
        <ul>
            {chapters.map((chapter, index) => (
                <Chapter key={index} {...chapter}/>
            ))}
        </ul>
        
    )
}