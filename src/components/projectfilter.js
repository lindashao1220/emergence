"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectFilter({ projects }) {
    const [filter, setFilter] = useState("current");

    const filteredProjects = projects.filter(p => p.category === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
                {["current", "old", "future"].map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-2 rounded-full ${filter === category ? "bg-yellow-400 text-black" : "bg-gray-700 text-white hover:bg-gray-600"}`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Projects */}
            <section className="flex flex-col space-y-12 pb-20">
                {filteredProjects.map((project, index) => (
                    <React.Fragment key={project.id}>
                        <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-8 lg:gap-16`}>
                            <div className={`text-center ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} space-y-4 max-w-lg`}>
                                <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                                <p className="text-base md:text-lg text-gray-400">{project.description}</p>
                            </div>
                            <div className="cursor-pointer hover:opacity-80 transition-opacity w-full max-w-md">
                                <Link href={project.link}>
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image src={project.image} alt={project.title} fill className="object-cover rounded-lg shadow-md" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Diagonal Divider */}
                        {index < filteredProjects.length - 1 && (
                            <div className="relative w-full flex justify-center py-8 lg:py-0">
                                <div className={`absolute w-[120%] border-t-2 border-gray-600 transform ${index % 2 === 0 ? "-rotate-3" : "rotate-3"} lg:${index % 2 === 0 ? "-rotate-6" : "rotate-6"}`}></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
}
