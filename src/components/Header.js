"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 w-full z-50 pointer-events-none"
    >
      <div className="flex justify-center pointer-events-auto">
        <motion.div
          className="flex items-center bg-black/80 backdrop-blur-md border border-pink-500/30 rounded-full px-6 py-3 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-shadow duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logo */}
          <Link href="/" className="mr-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
                <Image src="/logo_white.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
            </motion.div>
          </Link>

          {/* Nav Items */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-pink-400 transition-colors">
                <span>About</span>
                <span className="text-xs">▼</span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 bg-black/90 border border-pink-500/30 rounded-xl overflow-hidden backdrop-blur-md shadow-xl"
                  >
                    <div className="py-1">
                      <Link href="/about/team" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-pink-900/30 transition-colors">
                        Team
                      </Link>
                      <Link href="/about/mission" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-pink-900/30 transition-colors">
                        Mission
                      </Link>
                      <Link href="/about/partners" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-pink-900/30 transition-colors">
                        Partners
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="text-white hover:text-pink-400 transition-colors">
              Contact
            </Link>

            <Link href="/projects" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              Projects
            </Link>

            <Link href="/recruit" className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-1.5 rounded-full font-bold transition-colors shadow-[0_0_10px_rgba(250,204,21,0.4)]">
              Join Us
            </Link>

            <Link href="/pkb" className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-1.5 rounded-full font-bold transition-colors shadow-[0_0_10px_rgba(236,72,153,0.4)]">
              PKB
            </Link>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
