"use client";

import React from "react";
import { motion } from "framer-motion";
import Slides from "@/components/mission";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mission() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            <Header />

            {/* Main Content */}
            <main className="flex-grow pt-[100px] flex flex-col items-center justify-center min-h-screen w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <Slides />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
