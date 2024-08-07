import Chapter from './Chapter';

export default function ChapterList({chapters}) {  
    return (
        <ul className='overflow-y-auto h-2/4 my-28'>
            {chapters.map((chapter, index) => (
                <Chapter key={index} {...chapter}/>
            ))}
        </ul>
    );
}