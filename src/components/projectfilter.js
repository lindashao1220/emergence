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
            <section className="flex flex-col space-y-12">
                {filteredProjects.map((project, index) => (
                    <React.Fragment key={project.id}>
                        <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between space-y-12 lg:space-y-0`}>
                            <div className={`text-center ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} space-y-2`}>
                                <h2 className="text-4xl font-bold">{project.title}</h2>
                                <p className="text-lg text-gray-400">{project.description}</p>
                            </div>
                            <div className="cursor-pointer hover:opacity-80 transition-opacity">
                                <Link href={project.link}>
                                    <Image src={project.image} alt={project.title} width={400} height={300} className="rounded-lg shadow-md" />
                                </Link>
                            </div>
                        </div>

                        {/* Diagonal Divider */}
                        {index < filteredProjects.length - 1 && (
                            <div className="relative w-full flex justify-center">
                                <div className={`absolute w-[120%] border-t-2 border-gray-600 transform ${index % 2 === 0 ? "-rotate-3" : "rotate-3"} lg:${index % 2 === 0 ? "-rotate-6" : "rotate-6"}`}></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
}
