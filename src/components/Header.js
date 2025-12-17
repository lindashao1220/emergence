"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300 pointer-events-none">
            {/* pointer-events-none allows clicking through the empty parts of the header,
                but we need to re-enable pointer-events on the interactive elements */}
            <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl font-bold pointer-events-auto"
                >
                    <Link href="/">
                        <Image src="/logo_white.png" alt="Logo" width={50} height={50} className="hover:scale-110 transition-transform duration-300"/>
                    </Link>
                </motion.div>

                {/* Centered Navigation */}
                <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 items-center pointer-events-auto">
                    {/* About Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center space-x-1 text-white hover:text-brand-pink transition-colors font-medium focus:outline-none">
                            <span>About</span>
                            <span className="text-sm transition-transform group-hover:rotate-180">&#9662;</span>
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 visible group-hover:visible transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                            <Link href="/about/team" className="block px-6 py-3 hover:bg-brand-pink/20 hover:text-brand-pink border-b border-gray-800 transition-colors text-white">
                                Team
                            </Link>
                            <Link href="/about/mission" className="block px-6 py-3 hover:bg-brand-pink/20 hover:text-brand-pink border-b border-gray-800 transition-colors text-white">
                                Mission
                            </Link>
                            <Link href="/about/partners" className="block px-6 py-3 hover:bg-brand-pink/20 hover:text-brand-pink transition-colors text-white">
                                Partners
                            </Link>
                        </div>
                    </div>

                    <Link href="/contact" className="text-white hover:text-brand-pink transition-colors font-medium">
                        Contact
                    </Link>

                    <Link href="/projects" className="relative px-6 py-2 rounded-full border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-all duration-300 font-bold overflow-hidden group">
                        <span className="relative z-10">Projects</span>
                        <div className="absolute inset-0 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </Link>

                    <Link href="/recruit" className="relative px-6 py-2 rounded-full border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white transition-all duration-300 font-bold overflow-hidden group">
                        <span className="relative z-10">Join Us</span>
                        <div className="absolute inset-0 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </Link>
                     <Link href="/pkb" className="relative px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold overflow-hidden group">
                        <span className="relative z-10">PKB</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </Link>
                </nav>

                 {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden pointer-events-auto">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 p-6 flex flex-col space-y-4 shadow-2xl pointer-events-auto"
                >
                     <Link href="/about/team" className="text-lg text-white hover:text-brand-pink">About</Link>
                     <Link href="/contact" className="text-lg text-white hover:text-brand-pink">Contact</Link>
                     <Link href="/projects" className="text-lg text-brand-yellow">Projects</Link>
                     <Link href="/recruit" className="text-lg text-brand-pink">Join Us</Link>
                     <Link href="/pkb" className="text-lg text-white">PKB</Link>
                </motion.div>
            )}
        </header>
    );
}
