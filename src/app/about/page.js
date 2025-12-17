"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
    const sections = [
        { title: "Team", href: "/about/team", description: "Meet the people behind Emergence." },
        { title: "Mission", href: "/about/mission", description: "Learn about our goals and vision." },
        { title: "Partners", href: "/about/partners", description: "See who we work with." },
    ];

    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-[100px] flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl w-full text-center space-y-16"
                >
                    <h1 className="text-5xl font-bold text-yellow-400">About Emergence</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <Link href={section.href} key={idx} className="group block p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-pink-500 transition-colors">{section.title}</h2>
                                <p className="text-gray-400">{section.description}</p>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
