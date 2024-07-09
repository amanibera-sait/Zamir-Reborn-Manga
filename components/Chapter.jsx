//TODO
// - Add Icon images to folder.

import Link from "next/link";

export default function Chapter({chapter, title, icon, releaseDate, files, likes}){  
    console.log("Chapter:", chapter);
    
    return (
        <>
            <li>
                <div>
                    <p>Chapter {chapter} - {title}</p>
                    <p>{likes} Likes</p>
                    <p>{files.length} Pages</p>
                    <p>Published Date: {releaseDate}</p>
                </div>
            </li>
        </>
    )
}
                    