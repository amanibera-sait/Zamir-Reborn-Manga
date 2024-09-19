//TODO
// - Build footer component with social links.
// - Add user system and login feature.


import BannerCarousel from "@/components/layout-components/BannerCarousel";
import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import HomePage from "@/components/layout-components/HomePage";
import ChapterList from "@/components/manga-components/ChapterList";

export default function Home() {
  return (
    <>
      <div className="bg-white w-full min-h-screen justify-center items-center">
        <Heading/>
        <ChapterList/>
        <Footing/>
      </div>
    </>
  );
}
