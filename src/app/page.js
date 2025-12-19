"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Carousel from "../components/carousel";
import VerticalCarousel from "../components/VerticalCarousel";

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            
            <main className="pt-[0px]">
                {/* Section 1 - Hero */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative"
                    style={{
                        backgroundImage: `url('/mainpage.png')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-4xl"
                    >
                        <h2 className="text-white text-3xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">
                            Developing <span className="text-pink-500">New Media Art</span> to Reflect on <span className="text-yellow-300">Complex Technologies</span>
                        </h2>
                    </motion.div>
                </section>

                {/* Section 2 - Projects */}
                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-20 bg-black">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 text-center lg:text-left space-y-6 mb-8 lg:mb-0 relative w-full"
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="text-5xl lg:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                                Current Projects
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-400">Explore our latest innovations and installations.</p>
                        </div>
                    </motion.div>

                    <div className="w-[1px] bg-gradient-to-b from-transparent via-pink-500 to-transparent h-[400px] mx-12 hidden lg:block"></div>

                    <motion.div 
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         className="lg:w-2/3 w-full"
                    >
                        <Carousel/>
                    </motion.div>
                </section>

                {/* Section 3 - Mission Vision */}
                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-20 bg-gradient-to-b from-black to-zinc-900">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full"></div>
                            <Image
                                src="/logo_white.png"
                                alt="Logo"
                                width={400} 
                                height={400}
                                className="object-contain relative z-10"
                            />
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-16 relative">
                         <div className="absolute top-1/2 left-0 w-full border-t border-gray-700 hidden lg:block"></div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10 bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20"
                        >
                            <h2 className="text-4xl font-bold mb-4 text-pink-500">Mission</h2>
                            <p className="text-lg text-gray-300">
                                Facilitate an understanding of complex technology that has been blackboxed through artistic expression.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative z-10 bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/20 text-right self-end lg:self-auto"
                        >
                             <p className="text-lg text-gray-300 mb-4">
                                Playful tinkering, experimentation, and collaboration between different disciplines to create meaningful experiences.
                            </p>
                            <h2 className="text-4xl font-bold text-yellow-400">Vision</h2>
                        </motion.div>
                    </div>
                </section>

                {/* Section 4 - Events */}
                <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black py-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-10"></div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-black mb-16 text-white"
                    >
                        Upcoming <span className="text-pink-500">Events</span>
                    </motion.h2>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full overflow-visible max-w-6xl"
                    >
                        <VerticalCarousel/>
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="relative bg-zinc-950 text-white py-20 px-4 border-t border-zinc-900">
                    <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: 0.8 }}
                         className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-5xl font-bold mb-10">Contact Us</h2>

                        <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mb-12">
                            <form className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="px-6 py-3 text-black rounded-full focus:outline-none w-full sm:w-2/3 bg-gray-100 border-2 border-transparent focus:border-pink-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-500 transition-all hover:scale-105 shadow-[0_0_15px_rgba(236,72,153,0.5)] w-full sm:w-auto"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className="flex justify-center space-x-8 mb-16">
                            <a href="https://www.instagram.com/emergencedelft/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img src="/insta.png" alt="Instagram" className="w-10 h-10 hover:opacity-80"/>
                            </a>
                        </div>
                    </motion.div>

                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-t border-gray-800 pt-8 mt-8">
                        <div className="mb-4 md:mb-0">
                             <img src="/logo_white.png" alt="Logo" className="w-12 h-12 opacity-50 hover:opacity-100 transition-opacity"/>
                        </div>
                        <div className="text-right text-gray-500 text-sm space-y-1">
                            <p className="font-bold text-gray-300">Emergence Delft</p>
                            <p>Email: info@emergencedelft.nl</p>
                            <p>Stevinweg 4, 2628 CN, Delft, The Netherlands</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
