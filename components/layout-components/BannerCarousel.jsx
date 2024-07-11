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
    ];

    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={20000}>
            {banners.map((banner, index) => (
                <div key={index} className="flex justify-center items-center bg-gray-200 py-10 w-full mb-10 drop-shadow-md">
                <div className="relative w-full" style={{width: '50%', maxWidth: '1920px', height: 'auto' }}>
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
