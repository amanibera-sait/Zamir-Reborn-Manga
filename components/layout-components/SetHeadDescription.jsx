'use client';

import { useEffect } from 'react';
import storyJSON from '@/components/json-data/zamir-reborn-info.json';

const SetHeadDescription = () => {
  
  function setDescription(){
    try {
      document.description = storyJSON.synopsis;
    }
    catch (error) {
      document.description = `Not found`;
    }

  }

  useEffect(() => {
    setDescription();
  }, []);

  return null;
};

export default SetHeadDescription;
