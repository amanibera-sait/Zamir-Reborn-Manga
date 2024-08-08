import Chapter from './Chapter';

export default function ChapterList({chapters}) {  
    return (
        <ul className=' bg-slate-300 rounded-lg overflow-y-auto sm:overflow-y-scroll md:overflow-y-scroll h-2/4 my-28'>
            {chapters.map((chapter, index) => (
                <Chapter key={index} {...chapter}/>
            ))}
        </ul>
    );
}