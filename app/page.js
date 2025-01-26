//TODO
// - remake footer component with social links.
// - Add user system and login feature.

import BannerCarousel from "@/components/layout-components/BannerCarousel";
import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import Image from "next/image";
import ZamirRebornJSON from "@/components/json-data/zamir-reborn-info.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Heading />
      <div className="bg-blue-50 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <BannerCarousel />
        <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white w-full py-20 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-center p-4 mb-8">
            What if you could rewrite your past mistakes and start a new future?
          </h1>
          <p className="text-lg text-center max-w-3xl p-8 mb-6">
            {" "}
            In a world where magic defines your worth, Adriel Zamir, a boy whose
            choices led his life and relationships to ruin, goes back to the
            past to his childhood, still burning with a hatred for the society
            that wronged him back then. But as a new path in life unfolds before
            him, he’s left with a question lingering in his head, one that his
            past trauma prevents him from answering.
          </p>
          <Link href={`/chapter-list/chapter-viewer?volume=1&chapter=1`}>
            <button className="bg-orange-500 hover:bg-orange-400 text-white py-3 px-8 rounded-lg text-xl font-semibold transition-all">
              Start Reading
            </button>
          </Link>
        </section>

        {/* Latest Chapter Section */}
        <section className="w-full py-12 bg-white flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Latest Chapter
          </h2>
          <Link href={`/chapter-list/chapter-viewer?volume=1&chapter=2`}>
            <div className="bg-gray-200 p-6 min-w-full md:w-1/2 text-center rounded-lg shadow-lg hover:bg-gray-300 transition-all">
              <Image
                src="/images/chapters/Volume_1/Icons/Chapter_2_Icon.jpg"
                alt="Chapter 2 Cover"
                layout="responsive"
                width={1280}
                height={720}
                className="rounded-lg"
              />
              <button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all">
                Read Chapter 2
              </button>
            </div>
          </Link>
        </section>

        {/* Featured Artwork Section */}
        <section className="w-full py-12 bg-blue-200 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Featured Artwork
          </h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <div className="w-80 mb-6">
              <Image
                src="/images/featured/artwork-1.jpg"
                alt="Artwork 1"
                layout="responsive"
                width={640}
                height={960}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-80 mb-6">
              <Image
                src="/images/featured/artwork-2.jpg"
                alt="Artwork 2"
                layout="responsive"
                width={640}
                height={960}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Comments or Likes Section (Placeholder for Future Implementation) */}
        <section className="w-full py-12 bg-white flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the Conversation
          </h2>
          <p className="text-lg text-center max-w-3xl mb-6">
            Share your thoughts about the latest chapter, or leave a comment to
            interact with other readers.
          </p>
          <div className="w-full md:w-1/2 p-8">
            <textarea
              placeholder="Leave a comment..."
              className="w-full p-4 bg-gray-100 text-gray-700 border-2 border-gray-300 rounded-lg resize-none"
              rows="4"
            />
            <button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all">
              Post Comment
            </button>
          </div>
        </section>
      </div>
      <Footing />
    </>
  );
}
