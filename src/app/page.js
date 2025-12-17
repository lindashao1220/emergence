"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Carousel from "../components/carousel";
import VerticalCarousel from "../components/vertical";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    // Variants for animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-brand-black text-white min-h-screen flex flex-col font-sans selection:bg-brand-pink selection:text-white">
            <Header />

            <main className="flex-grow">
                {/* Section 1 - Hero */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative overflow-hidden"
                >
                    {/* Background Image with Parallax-like effect */}
                    <div className="absolute inset-0 z-0">
                         <Image
                            src="/mainpage.png"
                            alt="Background"
                            fill
                            className="object-cover opacity-60"
                            priority
                         />
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
                    </div>

                    {/* Animated Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="relative z-10 max-w-4xl mx-auto"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-7xl font-extrabold leading-tight mb-6"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                Developing New Media Art
                            </span>
                            <br />
                            <span className="text-brand-pink">to Reflect on</span>
                            <br />
                            <span className="text-brand-yellow">Complex Technologies</span>
                        </motion.h2>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex justify-center gap-4"
                        >
                            <Link href="/projects" className="px-8 py-3 rounded-full bg-brand-pink text-white font-bold text-lg hover:bg-pink-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                                Explore Work
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                            <div className="w-1 h-3 bg-white rounded-full"></div>
                        </div>
                    </motion.div>
                </section>

                {/* Section 2 - Projects */}
                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 py-20 bg-black relative">
                     {/* Background Elements */}
                     <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-brand-yellow/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="container mx-auto flex flex-col lg:flex-row items-center">
                        {/* Left Text Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12 relative z-10"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                Current <span className="text-brand-yellow">Projects</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Dive into our latest explorations at the intersection of art, science, and technology.
                            </p>
                            <div className="hidden lg:block w-24 h-1 bg-brand-pink mb-8"></div>
                        </motion.div>


                        {/* Vertical Line Divider (Desktop) */}
                        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-gray-600 to-transparent h-[400px] mx-8"></div>


                        {/* Right Carousel Section */}
                        <motion.div
                             initial={{ opacity: 0, x: 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                             className="lg:w-2/3 w-full relative z-10"
                        >
                            <Carousel/>
                        </motion.div>
                    </div>
                </section>



                {/* Section 3 - Mission Vision */}
                <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-pink/20 blur-[60px] rounded-full"></div>
                                <Image
                                    src="/logo_white.png"
                                    alt="Logo"
                                    width={400}
                                    height={400}
                                    className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                />
                            </div>
                        </motion.div>

                        {/* Mission & Vision Text */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="w-full lg:w-1/2 flex flex-col justify-center relative pl-0 lg:pl-12"
                        >
                             {/* Horizontal Line Divider */}
                             <div className="hidden lg:block absolute top-1/2 left-0 w-full border-t border-gray-700"></div>

                            {/* Mission Section */}
                            <motion.div variants={fadeInUp} className="relative z-10 mb-16 lg:mb-24 bg-black/80 lg:bg-transparent p-6 lg:p-0 rounded-xl">
                                <h2 className="text-4xl font-bold mb-4 text-brand-pink">
                                    Mission
                                </h2>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                    Facilitate an understanding of complex technology that has
                                    been <span className="text-white font-semibold">blackboxed</span>.
                                </p>
                            </motion.div>

                            {/* Vision Section */}
                            <motion.div variants={fadeInUp} className="relative z-10 bg-black/80 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:text-right self-end">
                                <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-lg ml-auto">
                                    Playful tinkering, experimentation, and collaboration
                                    between different disciplines.
                                </p>
                                <h2 className="text-4xl font-bold text-brand-yellow">
                                    Vision
                                </h2>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>


                {/* Section 4 - Events */}
                <section
                    id="events-section"
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-black relative"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                         <h2 className="text-5xl md:text-6xl font-bold mb-16">
                            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-yellow">Events</span>
                        </h2>
                    </motion.div>


                    {/* Vertical Carousel Component */}
                    <div className="w-full max-w-6xl overflow-visible">
                        <VerticalCarousel/>
                    </div>

                </section>

                <Footer />
            </main>
        </div>
    );
}
