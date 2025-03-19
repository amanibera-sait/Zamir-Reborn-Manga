//TODO
// - remake footer component with social links.
// - Add user system and login feature.

import BannerCarousel from "@/components/layout-components/BannerCarousel";
import Footing from "@/components/layout-components/Footer";
import Heading from "@/components/layout-components/Header";
import Image from "next/image";
import ZamirRebornJSON from "@/components/json-data/zamir-reborn-info.json";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Heading />
      <div className="bg-blue-50 min-h-screen flex flex-col items-center">
        
      </div>
      <Footing />
    </>
  );
}
