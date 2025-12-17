"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partners() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-[120px] pb-20 px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto space-y-20"
                >
                    <section className="text-center space-y-4">
                        <h1 className="text-5xl font-bold text-yellow-400 mb-8">Partners</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            We collaborate with industry leaders and innovative organizations to bring our vision to life.
                        </p>
                    </section>

                    {/* Section 1 - Highlight */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="w-full max-w-sm h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-8 hover:border-pink-500 transition-colors duration-300">
                                <Image
                                    src="/partners/x.png"
                                    alt="X Partner"
                                    width={300}
                                    height={150}
                                    className="object-contain max-h-full"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-pink-500">X</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Moonshot Factory. X is a diverse group of inventors and entrepreneurs who build and launch technologies that aim to improve the lives of millions, even billions, of people.
                            </p>
                            <a href="#" className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold border-b border-yellow-400 hover:border-yellow-300 pb-1 transition-colors">
                                Learn more about X &rarr;
                            </a>
                        </div>
                    </section>

                    {/* Section 2 - TU Delft */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="space-y-6 md:order-1">
                            <h2 className="text-3xl font-bold text-pink-500">TU Delft</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Delft University of Technology. A top-tier university combining science, engineering, and design.
                            </p>
                        </div>
                        <div className="flex justify-center md:order-2">
                            <div className="w-full max-w-sm h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-8 hover:border-pink-500 transition-colors duration-300">
                                <Image
                                    src="/partners/tudelft.png"
                                    alt="TU Delft"
                                    width={300}
                                    height={150}
                                    className="object-contain max-h-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Partner Grid */}
                    <section className="space-y-12 pt-12">
                         <h2 className="text-3xl font-bold text-center text-white">Our Network</h2>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center p-4 hover:bg-white/10 transition-colors">
                                    <span className="text-gray-500 font-mono text-sm">Partner Logo {i}</span>
                                </div>
                            ))}
                         </div>
                    </section>

                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
