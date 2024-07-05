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
                    <Link href={`/chapter-list/chapter-viewer/chapter-${chapter}`}><button className="rounded  bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Click to Read</button></Link>   
                </div>
            </li>
        </>
    )
}