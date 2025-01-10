"use client";

import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import storyJSON from "@/components/json-data/zamir-reborn-info.json";
import { useEffect, useState } from "react";
import Chapter from "@/components/manga-components/Chapter";
import Link from "next/link";

export default function Page() {
  const [index, setIndex] = useState(0);

  const volume = storyJSON.volumes[index];
  const chapters = volume.chapters || [];
  const [chapterList, setChapterList] = useState(chapters);

  async function handleDelete(chapterNum) {
    console.log(`Deleting Index: ${chapterNum - 1}`);

    chapters.splice(chapterNum - 1, 1);

    const list = [];
    for (let i = 0; i <= chapters.length; i++) {
      if (i == chapters.length) {
        console.log(list);
      } else {
        const chapter = chapters[i];
        const title = chapter.title;
        list.push(title);
      }
      const updatedChapters = chapterList.filter(
        (_, idx) => idx !== chapterNum - 1
      );
      setChapterList(chapters);
    }
  }

  async function handleEdit(chapterNum) {
    console.log(`Editing Chapter:  ${chapterNum}`);
  }

  return (
    <>
      <div className="bg-white w-full min-h-screen justify-center items-center">
        <Heading />
        <Link href={`/admin/upload`}>
          <button className="flex justify-center items-center rounded p-3 my-4 md:my-10 w-full bg-gray-400 font-bold text-gray-900 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
            Add Chapter
          </button>
        </Link>
        <div className="flex justify-center items-center">
          <ul className="bg-slate-300 rounded-lg overflow-y-auto sm:overflow-y-scroll md:overflow-y-scroll h-2/4 my-28">
            {chapterList.map((chapter, index) => (
              <Chapter
                key={index}
                {...chapter}
                admin={true}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </ul>
        </div>
        <Footing />
      </div>
    </>
  );
}
