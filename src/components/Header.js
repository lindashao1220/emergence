"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 w-full z-50 pointer-events-none"
    >
      <div className="flex justify-center pointer-events-auto px-4">
        <motion.div
          className="relative flex items-center justify-between bg-black/0 backdrop-blur-md border-pink-500 rounded-full px-6 py-3 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-shadow duration-300 w-full max-w-[600px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logo & About Dropdown */}
          <div 
            className="relative group mr-6 flex-shrink-0"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/logo_white.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
              </motion.div>
              <span className="text-white font-medium hover:text-pink-400 transition-colors">About</span>
            </Link>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-4 w-40 bg-black/90 border border-pink-500/30 rounded-xl overflow-hidden backdrop-blur-md shadow-xl"
                >
                  <div className="py-1">
                    <Link href="/#team" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-pink-900/30 transition-colors">
                      Team
                    </Link>
                    <Link href="/#mission" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-pink-900/30 transition-colors">
                      Mission
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">

            <Link href="/contact" className="text-white hover:text-pink-400 transition-colors">
              Contact
            </Link>

            <Link href="/projects" className="text-white hover:text-yellow-300 transition-colors">
              Projects
            </Link>

            <Link href="/partners" className="text-white hover:text-yellow-300 transition-colors">
              Partners
            </Link>

            <Link href="/recruit" className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-1.5 rounded-full font-bold transition-colors shadow-[0_0_10px_rgba(250,204,21,0.4)]">
              Join Us
            </Link>

            <Link href="/pkb" className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-1.5 rounded-full font-bold transition-colors shadow-[0_0_10px_rgba(236,72,153,0.4)]">
              PKB
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden fixed top-24 left-0 w-full max-w-wxl px-4 z-40 pointer-events-auto"
           >
              <div className="bg-black/90 backdrop-blur-md border border-pink-500/30 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 text-center">
                 <div className="flex flex-col space-y-2">
                    <p className="text-pink-400 font-bold border-b border-gray-700 pb-2 mb-2">About</p>
                    <Link href="/#team" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white">Team</Link>
                    <Link href="/#mission" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white">Mission</Link>
                 </div>
                 
                 <Link href="/contact" onClick={toggleMobileMenu} className="text-white text-lg hover:text-pink-400 font-medium border-t border-gray-800 pt-4">Contact</Link>
                 <Link href="/projects" onClick={toggleMobileMenu} className="text-yellow-400 text-lg hover:text-yellow-300 font-medium">Projects</Link>
                 <Link href="/partner" onClick={toggleMobileMenu} className="text-white text-lg hover:text-pink-400 font-medium border-t border-gray-800 pt-4">Partners</Link>
                 
                 <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                    <Link href="/recruit" onClick={toggleMobileMenu} className="bg-yellow-400 text-black py-2 rounded-full font-bold shadow-[0_0_10px_rgba(250,204,21,0.4)]">Join Us</Link>
                    <Link href="/pkb" onClick={toggleMobileMenu} className="bg-pink-600 text-white py-2 rounded-full font-bold shadow-[0_0_10px_rgba(236,72,153,0.4)]">Public Knowledge Bank</Link>
                 </div>
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
