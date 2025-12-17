"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectFilter from "@/components/projectfilter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PKB() {
    const projects = [
        { id: 1, title: "Quantum Art Development", description: "Exploring creativity at the intersection of quantum computing and art.", category: "old", image: "/projects/nm3.png", link: "/projects/newmedia3" },
        { id: 2, title: "Robotics & Arts", description: "Combining robotics and artistic expression to create interactive experiences.", category: "old", image: "/projects/p3.png", link: "/projects/platform3" },
        { id: 3, title: "Synthetic Cells", description: "Description.", category: "current", image: "/projects/nm4.png", link: "/projects/newmedia4" },
        { id: 4, title: "Material Science X Future Fabrics", description: "Description.", category: "current", image: "/projects/p4.png", link: "/projects/platform4" },
        { id: 5, title: "What happens when no one is watching?", description: "Description.", category: "old", image: "/projects/nm2.png", link: "/projects/newmedia2" },
        { id: 6, title: "Indifference", description: "Description.", category: "old", image: "/projects/p2.png", link: "/projects/platform2" },
        { id: 7, title: "Unseen Echoes", description: "Description.", category: "old", image: "/projects/nm1.png", link: "/projects/newmedia1" },
        { id: 8, title: "Enclosed ()", description: "Description.", category: "old", image: "/projects/p1.png", link: "/projects/platform1" },
        { id: 9, title: "The Power of Water", description: "Description.", category: "future", image: "/projects/nm5.jpg", link: "/projects/newmedia5" },
        { id: 10, title: "Film x Neuroscience", description: "Description.", category: "future", image: "/projects/pp5.jpg", link: "/projects/platform5" },
    ];

    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            <Header />

            {/* Main Content */}
            <main className="flex-grow pt-28 px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ProjectFilter projects={projects} />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
