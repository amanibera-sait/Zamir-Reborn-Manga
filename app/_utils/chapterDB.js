import storyJSON from "@/components/json-data/zamir-reborn-info.json";

export const getChapters = async (volumeIndex) => {
  try {
    let volumeNum = parseInt(volumeIndex);
    
    // Find the volume in the JSON data
    const volume = storyJSON.volumes.find(vol => vol.volume === volumeNum);
    
    if (!volume) {
      console.log(`Volume ${volumeNum} not found`);
      return [];
    }
    
    // Return the chapters for this volume
    return volume.chapters || [];
  } catch (error) {
    console.log("Error getting chapters:", error);
    return [];
  }
};

export const getChapterData = async (volumeIndex, chapterIndex) => {
  try {
    let volumeNum = parseInt(volumeIndex);
    let chapterNum = parseInt(chapterIndex);
    
    // Find the volume in the JSON data
    const volume = storyJSON.volumes.find(vol => vol.volume === volumeNum);
    
    if (!volume) {
      console.log(`Volume ${volumeNum} not found`);
      return null;
    }
    
    // Find the chapter in this volume
    const chapter = volume.chapters.find(ch => ch.chapter === chapterNum);
    
    if (!chapter) {
      console.log(`Chapter ${chapterNum} not found in volume ${volumeNum}`);
      return null;
    }
    
    return chapter;
  } catch (error) {
    console.log("Failed to retrieve chapter data:");
    console.error(error);
    return null;
  }
};

export const getChapterSize = () => {
  try {
    let totalChapters = 0;
    
    // Count all chapters across all volumes
    storyJSON.volumes.forEach(volume => {
      if (volume.chapters) {
        totalChapters += volume.chapters.length;
      }
    });
    
    console.log(`Total chapters: ${totalChapters}`);
    return totalChapters;
  } catch (error) {
    console.log("Failed to get chapter size:");
    console.log(error);
    return 0;
  }
};

export const getVolumeCount = () => {
  try {
    return storyJSON.volumes.length;
  } catch (error) {
    console.log("Failed to get volume count:");
    console.log(error);
    return 0;
  }
};
