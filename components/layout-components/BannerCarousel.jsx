'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import Image from 'next/image';

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
        <Carousel showThumbs={true} emulateTouch={false} autoPlay={true} infiniteLoop={true} interval={5000}>
            {banners.map((banner, index) => (
                <div key={index} className="flex justify-center items-center p-4 mb-24 drop-shadow-md">
                <div className="relative w-full" style={{width: '90%', height: 'auto' }}>
                    <Image
                        src={banner.src} 
                        alt={banner.alt} 
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className="object-contain"
                    />
                </div>
                </div>
            ))}
        </Carousel>
    );
};

export default BannerCarousel;
