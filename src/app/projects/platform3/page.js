"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Platform3() {
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
                        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('/arm3.JPG')`,
                        }}
                    >
                         <div className="absolute inset-0 bg-black/40"></div>
                         <div className="relative z-10 p-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-6">
                                Robotics and Drawing
                            </h1>
                         </div>
                    </section>

                    {/* Section 2 - Projects */}
                    <section className="min-h-screen flex flex-col items-center justify-center px-8 bg-black">
                         <div className="max-w-4xl text-center space-y-8">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                The third Platform Project will last from September 2024 till February 2025 and will be in collaboration with artist Jorrit Paaijmans. The project will involve (soft) robotics and drawing.
                            </p>
                        </div>
                    </section>


                    {/* Section 3 - Mission Vision */}
                    <section className="py-24 px-8 bg-gray-900/20">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">
                            {/* Image */}
                            <div className="w-full lg:w-1/2 flex justify-center items-center">
                                <div className="w-64 h-64 relative">
                                    <Image
                                        src="/logo_white.png"
                                        alt="Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Mission & Vision Text */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-pink-500 border-b border-pink-500 pb-2 inline-block">Mission</h2>
                                    <p className="text-lg text-gray-300">
                                        Facilitate an understanding of complex technology that has
                                        been blackboxed.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-yellow-400 border-b border-yellow-400 pb-2 inline-block">Vision</h2>
                                    <p className="text-lg text-gray-300">
                                        Playful tinkering, experimentation, and collaboration
                                        between different disciplines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Section 4 - Events */}
                    <section
                        className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-black">
                        <h2 className="text-4xl font-bold mb-8 text-white">Events</h2>
                        <p className="text-gray-400">Events coming soon...</p>
                    </section>

                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
