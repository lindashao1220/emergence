"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import UnseenCarousel from "@/components/nm1carousel";
import ImageSwitcher from "@/components/slides";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewMedia1() {
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
                            <source src="/nm1/nm1video.mp4" type="video/mp4" />
                        </video>

                        {/* Background Overlay */}
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-black/40 z-5"
                        ></div>

                        <div className="relative z-10 p-8 max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-6">
                                Unseen Echoes
                            </h1>
                        </div>
                    </section>

                    {/* Section 2 - Text */}
                    <section className="py-20 flex items-center justify-center px-8 bg-black">
                        {/* Centered Text Section */}
                        <div className="max-w-4xl text-center space-y-16">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                How often do you critically think about the information you consume and the way you form opinions on social media? What is the role of technology in this discussion?
                            </p>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Emergence reflects on new technologies becoming evermore complex and intangible. We call for transparent technologies, which we see as tools inseparably tied to humankind, and recognize a shared responsibility between engineers that develop them and everyone that uses them.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 - Gallery */}
                    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-900/20">
                        <h2 className="text-4xl font-bold mb-16 text-white">Gallery</h2>

                        <div className="w-full lg:w-2/3">
                            <UnseenCarousel
                                projects={[
                                    { id: 1, src: "/nm1/image1.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 2, src: "/nm1/image2.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 3, src: "/nm1/image3.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 4, src: "/nm1/image4.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 5, src: "/nm1/image5.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 6, src: "/nm1/image6.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 7, src: "/nm1/image7.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 8, src: "/nm1/image8.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 9, src: "/nm1/image9.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 10, src: "/nm1/image10.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                ]}
                            />
                        </div>
                    </section>

                    {/* Section 4 - Mission Vision */}
                    <section className="min-h-[50vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-24 bg-black">
                        {/* Image */}
                        <div className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0">
                            <div className="relative w-full max-w-md aspect-video">
                                <Image
                                    src="/nm1/image7.png"
                                    alt="Mission Image"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Mission & Vision Text */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative">
                            {/* Horizontal Line Divider */}
                            <div className="w-full border-t border-gray-800 mb-8"></div>

                            {/* Mission Section */}
                            <div className="relative z-10">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    On the internet, we are increasingly losing sight of what is real and what is not. Like the people we come across on social media, sometimes they are merely virtual. In the wrong hands, these so-called social bots can be used to manipulate our personal views by amplifying extremes and promoting polarisation.
                                </p>
                            </div>

                            {/* Vision Section */}
                            <div className="relative z-10">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    In Emergence’s work, social bots are embodied and projected in invisible infrared among the existing crowd of the Delft station. The visible/invisible are related to the real/virtual. From an online perspective, or through screens in the installation, there is no difference between these digital entities and ourselves. Physically we can’t see them, only notice their echoes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gray-900/20">
                        <div className="w-full lg:w-2/3">
                            <ImageSwitcher/>
                        </div>
                    </section>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
