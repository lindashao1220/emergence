"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
    return (
        <div id="team" className="bg-black text-white flex flex-col font-sans py-20">
            <div className="px-4 md:px-6">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black text-center mb-10 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400"
                >
                    Team
                </motion.h1>

                {/* Team Picture */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center mb-16 md:mb-24"
                >
                    <div className="w-full max-w-5xl relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                            <Image
                                src="/teampics/em4.png"
                                alt="Emergence 4 Team"
                                width={1200}
                                height={600}
                                className="rounded-lg mx-auto border-2 border-zinc-800"
                            />
                        </div>
                    </div>
                    <p className="mt-6 text-xl md:text-2xl font-bold text-gray-300">Emergence 4</p>
                </motion.div>

                {/* Management Section */}
                <section className="mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-pink-500"
                    >
                        Management
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-12">
                        {/* TEAM MEMBER */}
                        {[
                            { name: "Babette van den Broek", role: "Team Manager", img: "babs.jpg" },
                            { name: "Emma Sanders", role: "New Media Manager", img: "emma.jpg" },
                            { name: "Britt Maes", role: "Platform Manager", img: "britt.jpg" },
                            { name: "Willemijn van den Berg", role: "Operations Manager", img: "will.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>
                </section>

                {/* Operations Section */}
                <section className="mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-yellow-400"
                    >
                        Operations
                    </motion.h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Anouk Braakhuis", role: "Partnerships", img: "anouk.jpg" },
                            { name: "Laurens Sprenger", role: "Partnerships & PR", img: "laurens.jpg" },
                            { name: "Fleur Hagen", role: "Public Relations", img: "fleur.jpg" },
                            { name: "Liza Verdonk", role: "Graphic Design", img: "liza.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Pauline Sluijs", role: "Curator of Events", img: "pau.jpg" },
                            { name: "Louison Jacoby", role: "Event Designer", img: "louison.jpg" },
                            { name: "Tom Hoevers", role: "Scalability", img: "tom.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>


                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: "Aaron Dantuma", role: "Osaka Producer", img: "aron.jpg" },
                            { name: "Wouter Schuit", role: "Osaka Curator", img: "wouter.jpg" },
                            { name: "Famke Gerritsen", role: "Osaka Programmer", img: "famke.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>
                </section>


                {/* New Media Section */}
                <section className="mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-pink-500"
                    >
                        New Media
                    </motion.h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Nora Donders", role: "Chief Fabrication", img: "nora.jpg" },
                            { name: "Floor van Heist", role: "Mechanical Engineer", img: "floor.jpg" },
                            { name: "Jeroen Wesselingh", role: "Mechanical Engineer", img: "jeron.jpg" },
                            { name: "Jochem Broshuis", role: "Embedded Engineer", img: "jochem.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Emilie Benneker", role: "Chief Concept", img: "emily.jpg" },
                            { name: "Tamar Hollman", role: "Concept Designer", img: "tamar.jpg" },
                            { name: "Davide Forlani", role: "Concept Artist", img: "davide.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: "Avin Nayeri", role: "Bio-Tech Concept", img: "avin.jpg" },
                            { name: "Marco Lepore", role: "Documentation", img: "marco.jpg" },
                            { name: "Yookyung Jun", role: "Visual Designer", img: "jun.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>
                </section>


                {/* Platform Section */}
                <section className="mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-yellow-400"
                    >
                        Platform
                    </motion.h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Simon Leclercq", role: "Concept Designer", img: "simon.jpg" },
                            { name: "Connor Sesink Clee", role: "Concept Artist", img: "connor.jpg" },
                            { name: "Amarte Artist", role: "Topic Specialist", img: "logo_white.png" }, 
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Radu Mihălăchiuță", role: "Fabrication Software", img: "me.jpg" },
                            { name: "Tomas Steenman", role: "Fabrication Hardware", img: "tomas.jpg" },
                            { name: "Marcos Francos", role: "Fabrication Hardware", img: "marcos.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: "Arianne Riegen", role: "Documentation", img: "ari.jpg" },
                            { name: "Yi Quan", role: "Science Communication", img: "yi.jpg" },
                        ].map((member, idx) => (
                            <TeamMember key={idx} member={member} delay={idx * 0.1} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function TeamMember({ member, delay }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center group"
        >
            <div className="w-44 h-44 rounded-full border-4 border-zinc-800 overflow-hidden relative shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-pink-500 transition-colors duration-300">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={member.name === "Tom Hoevers" ? { top: "-45px" } : {}}
                >
                    <Image
                        src={`/teampics/emergers/${member.img}`}
                        alt={member.name}
                        width={176}
                        height={176}
                        className="transform scale-110 transition-transform duration-500 group-hover:scale-125 group-hover:blur-sm"
                    />
                </div>
                
                {/* Overlay Logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <Image
                        src="/logo_white.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </div>
            </div>
            <h3 className="mt-5 font-bold text-lg text-white group-hover:text-pink-400 transition-colors">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
        </motion.div>
    );
}
