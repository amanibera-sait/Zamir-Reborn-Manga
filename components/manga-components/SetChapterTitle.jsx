'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import storyJSON from '@/components/json-data/zamir-reborn-info.json';

const SetChapterTitle = () => {
  const searchParams = useSearchParams();
  const volume = searchParams.get('volume');
  const chapter = searchParams.get('chapter');
  
  function setTitle(){
    try {
      const title = storyJSON.volumes[volume - 1].chapters[chapter - 1]?.title;
      
      if (chapter && title) {
        document.title = `Chapter ${chapter} - ${title} | Zamir Reborn`;
        document.description = storyJSON.synopsis;
      }
    }
    catch (error) {
      document.title = `Not found`;
    }

  }

  useEffect(() => {
    setTitle();
  }, [chapter]);

  return null;
};

export default SetChapterTitle;
