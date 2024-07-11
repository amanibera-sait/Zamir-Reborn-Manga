"use client"

import { useSearchParams } from 'next/navigation';
import ComicViewer from '@/components/reader-components/ComicViewer';
import React, { useEffect, Suspense  } from 'react';
import storyJSON from '@/components/json-data/zamir-reborn-info.json'

const Viewer = () => {
    const searchParams = useSearchParams();
    const volume = searchParams.get('volume');
    const chapter = searchParams.get('chapter');

    console.log(`${volume} & ${chapter}`)
    useEffect(() => {
        if (!volume, chapter){
            fetchComicData(volume, chapter)
        }
    }, [volume, chapter])

    function fetchComicData(volume, chapter) {
        const data = storyJSON.volumes[volume - 1].chapters[chapter - 1].pages;
        console.log(`Data: ${data}}`);
    }

    return (
        <div>
            <Suspense fallback={<p className='flex justify-center items-center text-lg font bold'>Loading...</p>}>
                <ComicViewer volume={volume} chapter={chapter} />
            </Suspense>
        </div>
    );
};

export default Viewer;