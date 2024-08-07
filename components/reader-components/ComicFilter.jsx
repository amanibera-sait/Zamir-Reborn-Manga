import storyJSON from '@/components/json-data/zamir-reborn-info.json'

export default function ComicFilter(volume, chapterNumber) {
    const volumeIndex = volume - 1;
    const validVolume = storyJSON.volumes[volumeIndex];
    if (!validVolume) {
        console.error(`Volume ${volume} not found.`);
        return <p>Volume not found</p>;
    }

    const chapters = validVolume.chapters

    console.log(chapters)
    
    function FindChapterIndex() {
        for (let index = 0; index < chapters.length; index++) {
            if (chapters[index].chapter == chapterNumber) {
                return chapters[index]
            }
        }
        
    }

    const comicChapter = FindChapterIndex();

   //const comicChapter = chapters.filter((obj) => obj.title === title);

    console.log(comicChapter)

    return comicChapter;  
}
