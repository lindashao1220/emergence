"use client"; // Required for client-side components in Next.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const UnseenCarousel = ({ projects }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            className="mySwiper"
        >
            {projects.map((project) => (
                <SwiperSlide key={project.id}>
                    <div className="relative group">
                        {/* Image */}
                        <img
                            src={project.src}
                            alt={project.alt}
                            className="rounded-lg object-cover w-screen h-[450px] shadow-md mx-auto"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default UnseenCarousel;


// "use client"; // Required for client-side components in Next.js
//
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
//
// export default function UnseenCarousel() {
//     const projects = [
//         { id: 1, src: "/nm1/image1.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 2, src: "/nm1/image2.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 3, src: "/nm1/image3.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 4, src: "/nm1/image4.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 5, src: "/nm1/image5.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 6, src: "/nm1/image6.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 7, src: "/nm1/image7.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 8, src: "/nm1/image8.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 9, src: "/nm1/image9.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//         { id: 10, src: "/nm1/image10.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
//     ];
//
//     return (
//         <Swiper
//             navigation={true}
//             modules={[Navigation]}
//             spaceBetween={20}
//             slidesPerView={1}
//             className="mySwiper"
//         >
//             {projects.map((project) => (
//                 <SwiperSlide key={project.id}>
//                     <div className="relative group">
//                         {/* Image */}
//                         <img
//                             src={project.src}
//                             alt={project.alt}
//                             className="rounded-lg object-cover w-screen h-[450px] shadow-md mx-auto"
//                         />
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// }

