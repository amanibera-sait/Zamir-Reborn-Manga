"use client";

import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import { getChapters, addChapter } from "../../_utils/chapterDB";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

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

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete all pages?")) {
      const emptyFile = [];
      setPages(emptyFile);
      setPagesPreview(emptyFile.map((file) => URL.createObjectURL(file))); // Generate preview URLs for each page
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (confirm("Are you sure you want to upload this chapter?")) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("volume", volume);
      formData.append("chapter", chapter);
      formData.append("icon", icon);
      const pageNum = pages.length;
      const volumeInt = parseInt(volume);
      const chapterInt = parseInt(chapter);

      //pages.forEach((page) => formData.append("pages", page));

      try {
        await addChapter({ volumeInt, chapterInt, title, pageNum });
        alert(`Chapter ${chapter} succesfully!`);
        router.push("/admin");
      } catch (error) {
        alert("Upload Failed!");
        console.error(`Upload Failed: ${error}`);
      }
    }
  }

  return (
    <>
      <Heading />
      <div className="bg-blue-50 py-12 px-4 min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 space-y-8"
        >
          <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
            Upload New Comic Chapter
          </h2>

          {/* Section: Icon Upload and Basic Details */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Icon Upload with Preview */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <label className="block w-full text-center">
                <span className="text-lg font-semibold text-gray-700">
                  Upload Icon
                </span>
                <div className="bg-blue-100 hover:bg-blue-200 w-full aspect-square rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center mt-4">
                  {iconPreview ? (
                    <img
                      src={iconPreview}
                      alt="Icon Preview"
                      className="rounded-md object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-500">No Icon Uploaded</span>
                  )}
                </div>
                <input
                  type="file"
                  onChange={handleIconChange}
                  className="mt-4 block w-full text-sm"
                  accept="image/*"
                  required
                />
              </label>
            </div>

            {/* Chapter Details */}
            <div className="flex-1">
              <label className="block mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Title
                </span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-2 border rounded-lg p-3 text-gray-700"
                  placeholder="Enter the chapter title"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Volume Number
                </span>
                <input
                  type="number"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full mt-2 border rounded-lg p-3 text-gray-700"
                  placeholder="Enter the volume number"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Chapter Number
                </span>
                <input
                  type="number"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  className="w-full mt-2 border rounded-lg p-3 text-gray-700"
                  placeholder="Enter the chapter number"
                  required
                />
              </label>
            </div>
          </div>

          {/* Section: Pages Upload */}
          <div className="border-t-2 border-gray-200 pt-8">
            <label className="block">
              <span className="text-lg font-semibold text-gray-700">
                Upload Comic Pages
              </span>
              <input
                type="file"
                onChange={handlePagesChange}
                className="mt-4 block w-full text-sm"
                accept="image/*"
                multiple
                required
              />
            </label>
            <div className="bg-blue-100 rounded-lg mt-8 p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">
                Pages Preview
              </h3>
              <div className="grid grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {pagesPreview.map((page, idx) => (
                  <img
                    key={idx}
                    src={page}
                    alt={`Page Preview ${idx + 1}`}
                    className="rounded-lg shadow-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Section: Actions */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleDelete}
              type="button"
              className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-600 transition-all"
            >
              Delete Pages
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Upload Chapter
            </button>
          </div>
        </form>
      </div>
      <Footing />
    </>
  );
}
