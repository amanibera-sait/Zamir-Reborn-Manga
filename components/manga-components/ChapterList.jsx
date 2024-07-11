import Chapter from './Chapter';

export default function ChapterList({chapters}) {  
    return (
        <ul>
            {chapters.map((chapter, index) => (
                <Chapter key={index} {...chapter}/>
            ))}
        </ul>
    );
}