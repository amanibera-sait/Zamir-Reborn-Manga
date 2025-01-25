import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  updateDoc,
  where,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";

export const getChapters = async (volumeIndex) => {
  try {
    let volumeNum = parseInt(volumeIndex);
    let chaptersData = [];
    const q = query(
      collection(db, `chapters`),
      where("volume", "==", volumeNum)
    );
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      chaptersData.push(doc.data());
    });
    return chaptersData;
  } catch (error) {
    console.log(error);
  }
};

export const getChapterData = async (volumeIndex, chapterIndex) => {
  try {
    let chapterNum = parseInt(chapterIndex);
    let chapterData;
    
    const docSnapshot = await getDoc(doc(db, "chapters", `Chapter_${chapterNum}`));
    console.log(docSnapshot)
    
    chapterData = docSnapshot.data();
    //console.log("Data:")
    //console.log(chapterData)
    return chapterData;

  } catch (error) {
    console.log("Failed to retrive chapter data:");
    console.error(error);
    
    
  }
  
};

export const getChapterSize = async () => {
  try {
    let numbers = 0;
    const q = query(collection(db, `chapters`));
    const querySnapshot = await getDocs(q);
    numbers = querySnapshot.size;
    console.log(numbers);
    return numbers;
  } catch (error) {
    console.log("Failed to to get chapter size:");
    console.log(error);
  }
};

export const addChapter = async (chapterObj) => {
  try {
    await setDoc(doc(db, "chapters", `Chapter_${chapterObj.chapterInt}`), {
      title: `${chapterObj.title}`,
      volume: chapterObj.volumeInt,
      chapter: chapterObj.chapterInt,
      pages: chapterObj.pageNum,
    });
    console.log("Added chapter: ", chapterObj.chapterInt);
  } catch (error) {
    console.log(error);
  }

};
