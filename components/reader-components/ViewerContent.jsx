// Import necessary modules

"use client";

import { useSearchParams } from 'next/navigation';
import ComicViewer from './ComicViewer';
import React, { useEffect, useState } from 'react';
import storyJSON from '@/components/json-data/zamir-reborn-info.json';

const Viewer = () => {
    const searchParams = useSearchParams();
    const volume = searchParams.get('volume');
    const chapter = searchParams.get('chapter');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (volume && chapter) {
            fetchComicData(volume, chapter);
        }
    }, [volume, chapter]);

    function fetchComicData(volume, chapter) {
        const data = storyJSON.volumes[volume - 1].chapters[chapter - 1] || [];
        setLoading(false);
    }

    if (loading) {
        return <p className='flex justify-center items-center text-xl font bold'>Loading...</p>;
    }

    return (
        <div>
            {/* Render ComicViewer with fetched volume and chapter */}
            <ComicViewer volume={volume} chapter={chapter}/>
        </div>
    );
};

export default Viewer;
