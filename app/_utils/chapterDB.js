import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  updateDoc,
  where,
  setDoc,
  doc,
} from "firebase/firestore";

export const getChapters = async (volumeIndex) => {
  let volumeNum = parseInt(volumeIndex);
  let chaptersData = [];
  const q = query(
    collection(db, `chapters`),
    where("volume", "==", volumeNum)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    chaptersData.push(doc.data());
  });
  return chaptersData;
};

export const getChapterSize = async () => {
  let numbers = 0;
  const q = query(collection(db, `chapters`));
  const querySnapshot = await getDocs(q);
  numbers = querySnapshot.size;
  console.log(numbers);

  return numbers;
};

export const addChapter = async (chapterObj) => {
  await setDoc(doc(db, "chapters", `Chapter_${chapterObj.chapterInt}`), {
    title: `${chapterObj.title}`,
    volume: chapterObj.volumeInt,
    chapter: chapterObj.chapterInt,
    pages: chapterObj.pageNum,
  });

  console.log("Added chapter: ", chapterObj.chapterInt);
};
