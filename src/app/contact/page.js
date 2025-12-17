"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contacts = [
    {
        name: "Babette van den Broek",
        title: "Team Manager",
        info: "Questions, thoughts, or just want to chat?",
        phone: "+31 6 81895801",
        email: "info@emergencedelft.nl",
        label: "General Info",
        image: "/teampics/emergers/babs.jpg",
    },
    {
        name: "Anouk Braakhuis",
        title: "Partnerships Coordinator",
        info: "Want to partner up?",
        phone: "+31 6 38045234",
        email: "a.braakhuis@emergencedelft.nl",
        label: "For Partners",
        image: "/teampics/emergers/anouk.jpg",
    },
    {
        name: "Laurens Sprenger",
        title: "PR Coordinator",
        info: "Any press-related questions or requests?",
        phone: "+31 6 34874404",
        email: "l.sprenger@emergencedelft.nl",
        label: "For Press",
        image: "/teampics/emergers/laurens.jpg",
    },
    {
        name: "Foundation Contact",
        title: "Board Representative",
        info: "Want to talk to a foundation member?",
        phone: "",
        email: "",
        label: "Foundation",
        image: "/logo_white.png",
    },
];

export default function Contact() {
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
                    <h1 className="text-5xl font-bold text-center mb-16 text-yellow-400">Get in touch with us!</h1>

                    {contacts.map((person, idx) => {
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

                                            {person.phone && (
                                                <p className={`flex items-center mt-2 gap-2 ${alignRight ? "md:justify-end" : "justify-start"}`}>
                                                    <Phone size={18} className="text-pink-500" /> {person.phone}
                                                </p>
                                            )}

                                            {person.email && (
                                                <p className={`flex items-center gap-2 ${alignRight ? "md:justify-end" : "justify-start"}`}>
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
