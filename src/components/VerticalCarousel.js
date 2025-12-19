"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import { Mousewheel } from "swiper/modules";

export default function VerticalCarousel() {
    const [isSwiperEnabled, setIsSwiperEnabled] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            const section = document.getElementById("events-section");
            const rect = section.getBoundingClientRect();

            // Enable Swiper only when the section is in view
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                setIsSwiperEnabled(false);
            } else {
                setIsSwiperEnabled(true);
            }

            // If we're at the end of the Swiper, release the scroll
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiper = swiperRef.current.swiper;
                if ((swiper.isEnd && e.deltaY > 0) || (swiper.isBeginning && e.deltaY < 0)) {
                    setIsSwiperEnabled(false);
                } else {
                    setIsSwiperEnabled(true);
                }
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: true });
        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <section
            id="events-section"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        >
            <div className="w-full overflow-visible">
                <Swiper
                    ref={swiperRef}
                    direction="vertical"
                    mousewheel={{
                        releaseOnEdges: true,
                        forceToAxis: true,
                    }}
                    modules={[Mousewheel]}
                    spaceBetween={15}
                    slidesPerView={1.5}
                    className="myVerticalSwiper w-full"
                    style={{ height: "600px" }}
                    allowTouchMove={isSwiperEnabled}
                >
                    {[
                        { id: 1, src: "/onder.jpg", alt: "EM4 Event", date: "25-06-2025", name: "EM4 Event" },
                        { id: 2, src: "/japan.png", alt: "HTDX Mission to Japan", date: "22-05-2025", name: "HTDX Mission to Japan" },
                        { id: 3, src: "/em3.png", alt: "EM3 Event", date: "30-01-2025", name: "EM3 Event" },
                    ].map((event) => (
                        <SwiperSlide key={event.id} className="relative">
                            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-4 md:px-16 gap-4 md:gap-8">
                                <div className="text-gray-300 text-lg md:text-xl font-semibold w-full md:w-1/6 text-center md:text-right">
                                    {event.date}
                                </div>
                                <div className="overflow-hidden relative flex items-center justify-center w-full max-w-[500px] h-[200px] md:h-[300px]">
                                    <img src={event.src} alt={event.alt} className="rounded-lg object-contain w-full h-full"/>
                                </div>
                                <div className="text-gray-300 text-lg md:text-xl font-semibold w-full md:w-1/6 text-center md:text-left">
                                    {event.name}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
