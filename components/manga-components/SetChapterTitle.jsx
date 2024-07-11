'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import storyJSON from '@/components/zamir-reborn-info.json';

const SetChapterTitle = () => {
  const searchParams = useSearchParams();
  const volume = searchParams.get('volume');
  const chapter = searchParams.get('chapter');
  const title = storyJSON.volumes[volume - 1].chapters[chapter - 1]?.title;

  useEffect(() => {
    if (chapter && title) {
      document.title = `Chapter ${chapter} - ${title} | Zamir Reborn`;
    }
  }, [chapter, title]);

  return null;
};

export default SetChapterTitle;
