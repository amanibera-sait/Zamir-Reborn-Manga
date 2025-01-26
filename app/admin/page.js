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
        <Heading />
        <div className="bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen flex flex-col items-center">
            {/* Admin Section Header */}
            <section className="w-full max-w-screen-lg bg-blue-500 text-white rounded-lg shadow-lg p-6 mt-12">
                <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
                <p className="text-center text-lg mt-2">
                    Manage chapters and add new content to your manga series.
                </p>
            </section>

            {/* Main Admin Actions */}
            <section className="flex flex-col md:flex-row justify-between items-start w-full max-w-screen-lg bg-white rounded-lg shadow-md p-6 mt-8 space-y-6 md:space-y-0 md:space-x-6">
                {/* Add Chapter Button */}
                <Link href={`/admin/upload`}>
                    <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-3 px-6 rounded-md shadow-md transition-all">
                        + Add Chapter
                    </button>
                </Link>

                {/* Chapter List Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Chapters</h2>
                    <div className="bg-blue-50 rounded-lg shadow-md p-4 border border-blue-200 overflow-y-auto max-h-96">
                        {chapterList.length > 0 ? (
                            <ul className="space-y-4">
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
                        ) : (
                            <p className="text-gray-500 text-center">
                                No chapters available. Add one to get started!
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Placeholder for Future Features */}
            <section className="w-full max-w-screen-lg bg-blue-600 text-white rounded-lg shadow-md p-6 mt-8 text-center">
                <p className="text-lg font-semibold">
                    Future Feature Placeholder: User Management or Analytics
                </p>
            </section>

            <Footing />
        </div>
    </>
);

}
