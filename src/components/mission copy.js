"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const slidesData = [
    {
        title: "WHY?",
        color: "text-pink-500",
        content: (
            <>
                <p className="mb-4">
                    As technology advances, its inner workings become increasingly difficult to comprehend. Our artworks do more than facilitate in the understanding of the technology; they are made to inspire and spark dialogue which enables reflection on potential opportunities and issues of technologies in our digital society.
                </p>
            </>
        )
    },
    {
        title: "HOW?",
        color: "text-yellow-400",
        content: (
            <>
                <p className="mb-4">
                    We bring artists and engineers together in Emergence Delft, an interdisciplinary research and development team consisting of students from the TU Delft and nearby art schools like the Royal Academy of Art in The Hague. Through this structure, we explore the untapped potential in the intersection of their fields.
                </p>
                <p className="mb-4">
                    For a semester, we voluntarily commit part- or fulltime to our Dream Team. The New Media Project adopts a mission-driven focus, following the traditional Dream Team approach, while the Platform Project is taking a curiosity-driven focus. The Operations department forms the backbone of the Dream Team, while the Management department provides oversight and guidance to the rest of the team.
                </p>
                <p>
                    To test and expand our knowledge we are in close contact with established artists, institutes, and/or professionals.
                </p>
            </>
        )
    },
    {
        title: "WHAT?",
        color: "text-pink-500",
        content: (
            <>
                <p className="mb-4">
                    We are dedicated to create new media art.
                </p>
                <p className="mb-4">
                    We pursue this through two projects: the Platform Project and the New Media Project. Each project serves as a communication form for certain elements of a complex technology, This gives the people the opportunity to reflect on it. In addition to the two projects, we document findings, methods, and theories encountered during our research in our Public Knowledge Bank.
                </p>
                <p>
                    To expand our reach we showcase our projects at our own events and we participate in relevant competitions and exhibitions.
                </p>
            </>
        )
    }
];

const Slides = () => {
    return (
        <div className="relative w-full h-[calc(100vh-100px)] md:h-screen flex items-center justify-center">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                className="w-full h-full max-w-6xl"
                slidesPerView={1}
                spaceBetween={50}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center p-4 md:p-12">
                        <div className="w-full h-full flex flex-col justify-center items-center text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-16 shadow-2xl">
                            <h2 className={`text-6xl md:text-8xl font-black mb-8 md:mb-12 ${slide.color}`}>
                                {slide.title}
                            </h2>
                            <div className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-4xl text-left md:text-center overflow-y-auto max-h-[60vh] md:max-h-none pr-2 md:pr-0 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                                {slide.content}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slides;
