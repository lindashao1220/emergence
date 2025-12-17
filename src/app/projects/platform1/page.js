"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import UnseenCarousel from "@/components/nm1carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Platform1() {
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
                            backgroundImage: `url('/p1/profile3.jpg')`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                         <div className="relative z-10 p-8">
                             <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-6">
                                Enclosed ()
                            </h1>
                        </div>
                    </section>

                    {/* Section 2 - Text */}
                    <section className="py-20 flex items-center justify-center px-8 bg-black">
                        {/* Centered Text Section */}
                        <div className="max-w-4xl text-center space-y-8">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Our project aims to create an artistic medium that uses EEG technology and Brain-Computer Interfaces (BCI) as a communication channel for locked-in patients.
                                We aim to create awareness about the functioning of BCI technology and the importance of communication through showing a world without it.
                            </p>
                        </div>
                    </section>

                    <section
                        className="h-96 w-full bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('/p1/profile1.jpg')`,
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
                                    { id: 1, src: "/p1/image1.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 2, src: "/p1/image2.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 3, src: "/p1/image3.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 4, src: "/p1/image4.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 5, src: "/p1/image5.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 6, src: "/p1/image6.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                    { id: 8, src: "/p1/image8.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                ]}
                            />
                        </div>
                    </section>

                    {/* Mission & Vision Section */}
                    <section className="py-24 px-8 bg-black">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-16">
                             {/* Mission Section (Left) */}
                            <div className="w-full lg:w-1/2 text-left space-y-6">
                                <h3 className="text-2xl font-bold text-pink-500 border-b border-pink-500 pb-2 inline-block">The Barrier</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    In our work, we are relating the waterfall to the barrier that those with locked-in-system experience. A barrier that, from one day to the next, suddenly appeared, closing you off from the outside world. The inability to move past the barrier - the waterfall - illustrates the frustration to be so close, yet far from the people around you. The water obstructs your view of reality, hindering interaction and disrupting our human connection.
                                    The waterfall’s movement is driven by the brain activity of a recovered locked-in patient, reflecting on her isolated experience. Using EEG, a device which measures brain activity, we connected this data to specific emotions. Employing an in-house developed machine learning model, EEG data was classified into four different emotional states. The waterfall visually expresses her response in the only language she had at that time—her thoughts and emotions.
                                </p>
                            </div>

                            {/* Vision Section (Right) */}
                            <div className="w-full lg:w-1/2 text-left space-y-6">
                                <h3 className="text-2xl font-bold text-yellow-400 border-b border-yellow-400 pb-2 inline-block">Reflection</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Emergence aims to participate and reflect on new technologies. Through this artwork, we explore the neuroscientific phenomenon of locked-in syndrome, reflecting on how our perception and cognition make us who we are. Additionally, the artwork pictures the development of neuroscientific technology. EEG technology has rapidly developed in recent years, appearing as a way to control games, create art and help people with motor impairments. We envision its potential application for locked-in patients as a way for them to express themselves and their emotions. Using brain-computer interfaces as an artistic medium is a great playground to experiment with specific use cases of this innovative technology.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section
                        className="h-96 w-full bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('/p1/profile2.jpg')`,
                        }}
                    >
                         <div className="absolute inset-0 bg-black/30"></div>
                    </section>


                    {/* Section 4 - Mission Vision */}
                    <section className="py-24 px-8 bg-gray-900/20">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">
                            {/* Image */}
                            <div className="w-full lg:w-1/2 flex justify-center items-center">
                                <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src="/p1/interview.jpg"
                                        alt="Interview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Mission & Vision Text */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 relative">
                                <h2 className="text-4xl font-bold text-white">
                                    Recovered locked-in patient
                                </h2>
                                <div className="p-6 bg-white/5 rounded-xl border-l-4 border-pink-500 italic text-gray-300">
                                    “After four hours, I was allowed to go to the room where my parents, sister, brother-in-law, and boyfriend were. But it was there that things went wrong. In the room, in the presence of everyone, I suffered a stroke. I was swiftly taken to get a CT scan, surrounded by stressful activity. Confusion and panic took over; I had no idea what was happening to me. They rushed me to the emergency room, where I tried to sit but realised my body wouldn’t respond to my commands. Then, I was given morphine and an intubation tube. From that moment, everything faded to black…”
                                    <span className="block mt-4 text-pink-500 font-bold not-italic">- Anne Cox (translated)</span>
                                </div>

                                <div className="text-gray-300 space-y-4">
                                    <p>
                                        "'A few weeks ago I was approached by a Dream Team from the TU Delft, they were looking for someone who had experienced Locked in Syndrome. They wanted to measure my emotions with an EEG."
                                    </p>
                                    <p>
                                        "When you see water in your dreams, this is a transition from the conscious to the subconscious." - Anne
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
