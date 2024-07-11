"use client"

import { useSearchParams } from 'next/navigation';
import ComicViewer from '@/components/reader-components/ComicViewer';
import React, { useEffect, useState } from 'react';
import storyJSON from '@/components/zamir-reborn-info.json'

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
    
        if (!volume || !chapter) {
            return <p>Loading...</p>;
        }
    }

    return (
        <div>
            <h1>Chapter Viewer</h1>
            <ComicViewer volume={volume} chapter={chapter} />
        </div>
    );
};

export default Viewer;