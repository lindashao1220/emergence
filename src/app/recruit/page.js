"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Example recruitment data - matching the contact page structure but for recruitment purposes
const recruiters = [
    {
        name: "Recruitment Team",
        title: "Join Us",
        info: "Interested in becoming part of Emergence? We are always looking for new talent.",
        phone: "",
        email: "recruit@emergencedelft.nl",
        label: "Apply Now",
        image: "/logo_white.png",
    },
     // Added a duplicate/placeholder to match the alternating style if needed, or just keep one.
];

export default function Recruit() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            <Header />

            {/* Main Content */}
            <main className="flex-grow pt-32 px-6 py-20 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl space-y-24"
                >
                    <h1 className="text-5xl font-bold text-center mb-16 text-yellow-400">Join our Team!</h1>

                    {recruiters.map((person, idx) => {
                         const alignRight = idx % 2 === 1;
                         return (
                            <div
                                key={idx}
                                className={`flex flex-col items-${alignRight ? "end" : "start"} w-full`}
                            >
                                <div className="flex flex-col md:flex-row items-center gap-10">
                                    <div
                                        className={`flex flex-col md:flex-row items-center ${
                                            alignRight ? "md:flex-row-reverse" : ""
                                        } gap-10 w-full`}
                                    >
                                        {/* Image */}
                                        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                                            <Image
                                                src={person.image}
                                                alt={person.name}
                                                width={144}
                                                height={144}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className={`max-w-md ${alignRight ? "md:text-right" : ""}`}>
                                            <h2 className="text-2xl font-bold text-white">{person.name}</h2>
                                            <p className="text-yellow-400 italic font-medium">{person.title}</p>
                                            <p className="text-gray-300 mt-1">{person.info}</p>

                                            {person.email && (
                                                <p className={`flex items-center gap-2 ${alignRight ? "md:justify-end" : "justify-start"} mt-2`}>
                                                    <Mail size={18} className="text-pink-500" /> {person.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Box */}
                                        <div className="w-44 h-44 bg-gray-900/80 rounded-xl flex items-center justify-center shadow-lg border border-gray-700 text-center text-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300">
                                            {person.label}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
