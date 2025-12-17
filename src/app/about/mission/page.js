import React from "react";
import Image from "next/image";

import Slides from "@/components/mission";

export default function Mission() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-black z-10">
                <div className="text-2xl font-bold">
                    <Image src="/logo_white.png" alt="Logo" width={50} height={50} />
                </div>
                <nav className="flex space-x-4">
                    <a href="/" className="hover:text-gray-400"></a>
                    {/* About Dropdown */}
                    <div className="relative group">
                        <a href="#" className="flex items-center space-x-1 hover:text-gray-400">
                            <span>About</span>
                            <span className="text-sm">&#9662;</span>
                        </a>
                        <div className="absolute left-0 top-full mt-2 w-40 bg-black border border-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href="/about/team" className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-600">Team</a>
                            <a href="/about/mission" className="block px-4 py-2 hover:bg-gray-800">Mission</a>
                        </div>
                    </div>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                    <a href="/projects" className="bg-yellow-400 text-black px-4 py-2 rounded-full">Projects</a>
                    <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-full">PKB</a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-[100px] flex flex-col items-center justify-center min-h-screen w-full">
                <Slides />
            </main>
        </div>
    );
}
