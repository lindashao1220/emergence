"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative text-white py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                {/* Title - Contact Us */}
                <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
                <p className="text-gray-400 mb-12 text-lg">Stay updated with our latest projects and events.</p>

                {/* Newsletter Subscription */}
                <div className="flex flex-col items-center gap-6 mb-16 w-full">
                    <form className="flex flex-col md:flex-row gap-4 w-full justify-center items-stretch">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-brand-pink w-full md:w-96 transition-all"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-brand-pink text-white rounded-full font-bold hover:bg-pink-600 transition-all hover:scale-105 shadow-lg shadow-pink-500/30"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8 mb-16">
                    <a href="https://www.instagram.com/emergencedelft/" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="p-3 bg-gray-800 rounded-full group-hover:bg-brand-pink transition-colors duration-300">
                             <img src="/insta.png" alt="Instagram" className="w-6 h-6 invert filter group-hover:invert-0"/>
                        </div>
                    </a>
                </div>
            </motion.div>

            {/* Contact Information & Logo */}
            <div className="container mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="mb-4 md:mb-0">
                    <Image src="/logo_white.png" alt="Logo" width={40} height={40} className="opacity-50 hover:opacity-100 transition-opacity"/>
                </div>

                <div className="text-center md:text-right space-y-1">
                    <p>© {new Date().getFullYear()} Emergence Delft</p>
                    <p>info@emergencedelft.nl</p>
                    <p>Stevinweg 4, 2628 CN, Delft, The Netherlands</p>
                </div>
            </div>
        </footer>
    );
}
