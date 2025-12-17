"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Carousel() {
    const projects = [
        { id: 1, src: "/projects/p4.png", alt: "Project 1", name: "Material Science x Future Fabrics", link: "/projects/platform4" },
        { id: 2, src: "/projects/nm4.png", alt: "Project 2", name: "Synthetic Cells", link: "/projects/newmedia4" },
        { id: 3, src: "/projects/p3.png", alt: "Project 3", name: "Robotics and Arts", link: "/projects/platform3" },
        { id: 4, src: "/projects/nm3.png", alt: "Project 4", name: "Quantum Art Development", link: "/projects/newmedia3" },
        { id: 5, src: "/projects/p2.png", alt: "Project 5", name: "Indifference", link: "/projects/platform2" },
        { id: 6, src: "/projects/nm2.png", alt: "Project 6", name: "What happens when no one is watching.", link: "/projects/newmedia2" },
        { id: 7, src: "/projects/p1.png", alt: "Project 7", name: "Enclosed ()", link: "/projects/platform1" },
        { id: 8, src: "/projects/nm1.png", alt: "Project 8", name: "Unseen Echoes", link: "/projects/newmedia1" },
    ];

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2.5}
            className="mySwiper"
        >
            {projects.map((project) => (
                <SwiperSlide key={project.id}>
                    <Link href={project.link}>
                        <div className="relative group cursor-pointer">
                            {/* Image */}
                            <img
                                src={project.src}
                                alt={project.alt}
                                className="rounded-lg object-cover w-[300px] h-[450px] shadow-md mx-auto"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">{project.name}</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
