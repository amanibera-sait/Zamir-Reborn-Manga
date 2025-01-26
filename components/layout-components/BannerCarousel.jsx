"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import Image from "next/image";

const BannerCarousel = () => {
  const banners = [
    { src: "/images/banners/banner-1.jpg", alt: "Banner 1" },
    { src: "/images/banners/banner-2.jpg", alt: "Banner 2" },
    { src: "/images/banners/banner-3.jpg", alt: "Banner 3" },
    { src: "/images/banners/banner-4.jpg", alt: "Banner 4" },
    { src: "/images/banners/banner-5.jpg", alt: "Banner 5" },
    { src: "/images/banners/banner-6.jpg", alt: "Banner 6" },
    { src: "/images/banners/banner-7.jpg", alt: "Banner 7" },
  ];

  return (
    <Carousel
      showThumbs={false}
      emulateTouch={false}
      showArrows={false}
      showIndicators={false}
      autoPlay
      infiniteLoop
      interval={5000}
      transitionTime={1000}
    >
      {banners.map((banner, index) => (
        <div
          key={index}
          className=" h-full flex justify-center items-center p-4"
        >
          <div className="relative md:w-3/4 lg:w-2/3 mx-auto">
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover min-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
