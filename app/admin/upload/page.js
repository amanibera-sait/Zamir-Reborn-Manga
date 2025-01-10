"use client";

import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import { getChapters, addChapter } from '../../_utils/chapterDB'
import { useState } from "react";

export default function Page() {
  //const keyFileName = process.env.KEYFILE_NAME;
  //const projectID = process.env.PROJECT_ID;

  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState("");
  const [chapter, setChapter] = useState("");
  const [icon, setIcon] = useState(null);
  const [iconPreview, setIconPreview] = useState(null); // For icon preview
  const [pages, setPages] = useState([]);
  const [pagesPreview, setPagesPreview] = useState([]); // For pages previews

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    setIcon(file);
    setIconPreview(URL.createObjectURL(file)); // Generate preview URL for the icon
  };

  const handlePagesChange = (event) => {
    const files = Array.from(event.target.files);
    setPages(files);
    setPagesPreview(files.map((file) => URL.createObjectURL(file))); // Generate preview URLs for each page
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("volume", volume);
    formData.append("chapter", chapter);
    formData.append("icon", icon);
    const pageNum = pages.length
    const volumeInt = parseInt(volume);
    const chapterInt = parseInt(chapter);

    //pages.forEach((page) => formData.append("pages", page));

    try {
      await addChapter({volumeInt, chapterInt, title, pageNum});

    } catch (error) {
      console.error(`Upload Failed: ${error}`);
    }
  }

  return (
    <>
      <div className="bg-white w-full min-h-screen flex flex-col items-center">
        <Heading />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-slate-100 rounded-lg shadow-lg p-8 mt-10"
        >
          <h2 className="text-2xl font-bold mb-6">Upload New Comic Chapter</h2>

          {/* Title Input */}
          <label className="block mb-4">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="Enter the chapter title"
              required
            />
          </label>

          {/* Volume Number Input */}
          <label className="block mb-4">
            <span className="text-gray-700">Volume Number</span>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="Enter the volume number"
              required
            />
          </label>

          {/* Chapter Number Input */}
          <label className="block mb-4">
            <span className="text-gray-700">Chapter Number</span>
            <input
              type="number"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="Enter the chapter number"
              required
            />
          </label>

          {/* Icon Upload with Preview */}
          <label className="block mb-4">
            <span className="text-gray-700">Chapter Icon</span>
            <input
              type="file"
              onChange={handleIconChange}
              className="mt-1 block w-full"
              accept="image/*"
              required
            />
            {iconPreview && (
              <img
                src={iconPreview}
                alt="Icon Preview"
                className="mt-4 w-24 h-24 object-cover rounded"
              />
            )}
          </label>

          {/* Pages Upload with Preview */}
          <label className="block mb-6">
            <span className="text-gray-700">Comic Pages</span>
            <input
              type="file"
              onChange={handlePagesChange}
              className="mt-1 block w-full"
              accept="image/*"
              multiple
              required
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {pagesPreview.map((page, idx) => (
                <img
                  key={idx}
                  src={page}
                  alt={`Page Preview ${idx + 1}`}
                  className="w-24 h-32 object-cover rounded"
                />
              ))}
            </div>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
          >
            Upload Chapter
          </button>
        </form>
        <Footing />
      </div>
    </>
  );
}
