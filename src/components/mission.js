"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const images = [
    { src: "/why.png", alt: "WHY" },
    { src: "/how.png", alt: "HOW" },
    { src: "/what.png", alt: "WHAT" },
];

const Slides = () => {
    return (
        <div className="relative w-full h-screen">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                className="w-full h-full"
                slidesPerView={1}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slides;
