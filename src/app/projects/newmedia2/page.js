"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import UnseenCarousel from "@/components/nm1carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewMedia2() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            <Header />

            {/* Main Content - video */}
            <main className="pt-[100px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Section 1 */}
                    <section
                        className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
                    >
                        {/* Video Background */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        >
                            <source src="/nm2/nm2video.mp4" type="video/mp4" />
                        </video>

                        {/* Background Overlay */}
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-black/40 z-5"
                        ></div>

                        <div className="relative z-10 p-8 max-w-4xl">
                             <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-6">
                                Quantum Art
                            </h1>
                        </div>
                    </section>

                    {/* Section 2 - Text */}
                    <section className="py-20 flex items-center justify-center px-8 bg-black">
                        {/* Centered Text Section */}
                        <div className="max-w-4xl text-center space-y-8">
                            <h2 className="text-3xl font-bold text-white">New Media Project 2</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Our team from TU Delft and KABK, in collaboration with QuTech, Laurens Feije, and Gerben Timmer, is crafting a revolutionary artistic medium. Seamlessly blending advanced technology and profound messaging, our creation promises to demystify quantum concepts for all.
                            </p>
                        </div>
                    </section>

                    <section
                        className="h-96 w-full bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('/nm2/profile1.jpg')`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/30"></div>
                    </section>

                    {/* Section 3 - Gallery */}
                    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-900/20">
                        <h2 className="text-4xl font-bold mb-16 text-white">Gallery</h2>

                        <div className="w-full lg:w-2/3">
                            <UnseenCarousel
                                projects={[
                                    { id: 1, src: "/nm2/image1.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 2, src: "/nm2/image2.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 3, src: "/nm2/image3.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 4, src: "/nm2/image4.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 5, src: "/nm2/image5.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 6, src: "/nm2/image6.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 8, src: "/nm2/image7.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                ]}
                            />
                        </div>
                    </section>

                    {/* Mission & Vision Section */}
                    <section className="py-24 px-8 bg-black">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-16">
                            {/* Mission Section (Left) */}
                            <div className="w-full lg:w-1/2 text-left space-y-6">
                                <h3 className="text-2xl font-bold text-pink-500 border-b border-pink-500 pb-2 inline-block">Mission</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    The New Media Project 2 Research team is developing a groundbreaking artistic medium, rooted in the depths of quantum tech theory and ethics. This medium will not only push the boundaries of artistic expression but also serve as a conduit for science communication.
                                    Through conceptualisation and execution, the team aims to create a platform that not only educates but also inspires a broad public, bridging the gap between art and science.
                                    By unblackboxing quantum phenomena, the medium will provide users with a more intuitive grasp of Quantum Mechanics, fostering curiosity and exploration, leaving a lasting impact on both the art world and the realm of quantum physics.
                                </p>
                            </div>

                            {/* Vision Section (Right) */}
                            <div className="w-full lg:w-1/2 text-left space-y-6">
                                <h3 className="text-2xl font-bold text-yellow-400 border-b border-yellow-400 pb-2 inline-block">Vision</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    The project revolves around creating a physical hologram rooted in quantum principles, designed to be scalable and versatile. Through interdisciplinary collaboration, the team merges art and technology perspectives to inspire and innovate throughout the research, ideation, fabrication, and testing phases. Central to the initiative is the development of a Quantum NAM (New Artistic Medium) for future artists, physicists, engineers and researchers  to program and shape narratives. This medium aims to explore the intriguing question: "What happens when no one is watching?" across various contexts.
                                    The project's essence lies in conveying narratives about Quantum Information Technology and it also serves as a platform for broader artistic expression.
                                </p>
                            </div>
                        </div>
                    </section>

                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
