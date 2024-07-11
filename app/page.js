//TODO
// - Build footer component with social links.
// - Add user system and login feature.


import BannerCarousel from "@/components/layout-components/BannerCarousel";
import Heading from "@/components/layout-components/Header";
import HomePage from "@/components/layout-components/HomePage";

export default function Home() {
  return (
    <>
      <div className="bg-white w-full min-h-screen justify-center items-center">
        <Heading/>
        <BannerCarousel/>
        <HomePage/>
      </div>
    </>
  );
}
