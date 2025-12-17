"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import UnseenCarousel from "@/components/nm1carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Platform4() {
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
                        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-center bg-cover relative"
                        style={{
                            backgroundImage: `url('/projects/p4.png')`,
                        }}
                    >
                         <div className="absolute inset-0 bg-black/40"></div>
                         <div className="relative z-10 p-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-6">
                                Material Science x Future Fabrics
                            </h1>
                         </div>
                    </section>

                    {/* Section 2 - Text */}
                    <section className="py-20 flex items-center justify-center px-8 bg-black">
                        {/* Centered Text Section */}
                        <div className="max-w-4xl text-center space-y-8">
                             <div className="text-xl text-gray-300 leading-relaxed font-semibold space-y-4">
                                <p>What are meta materials, and can we design and fabricate them?</p>
                                <p>Can we create materials that breathe and grow?</p>
                                <p>Should craftsmanship be automated, or can technology empower it without replacing it?</p>
                                <p>How might techniques like 4D printing or programmable materials lead to garments that adapt in real time?</p>
                                <p>Can we design sustainable, bio-based textiles that leave zero impact?</p>
                                <p>How can we integrate sensors into fabrics to make them “smart”?</p>
                                <p>What is the future of wearable technology?</p>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed pt-8">
                                Entering its fourth edition, Platform Project 4 from Emergence Delft will delve into the exciting intersection of Material Science and Future Fabrics. This semester, we’ll unlock new potential at the intersection of technology and craftsmanship, inviting students to explore, experiment, and rethink textiles in bold, groundbreaking ways. From weaving and knitting to advanced technologies, we’ll push beyond tradition to discover what’s possible in the future of fabrics.
                            </p>
                        </div>
                    </section>

                    <section
                        className="h-96 w-full bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('/p2/Dreams.png')`,
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
                                    { id: 1, src: "/p2/image1.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 2, src: "/p2/image2.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 3, src: "/p2/image3.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 4, src: "/p2/image4.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 6, src: "/p2/image6.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 8, src: "/p2/image7.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                ]}
                            />
                        </div>
                    </section>

                    <section
                        className="h-96 w-full bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('/p2/Dreams_Blur.png')`,
                        }}
                    >
                         <div className="absolute inset-0 bg-black/30"></div>
                    </section>

                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
