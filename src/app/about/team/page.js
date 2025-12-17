"use client";

import React from "react";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";

export default function Team() {
    return (
        <div className="bg-brand-black text-white min-h-screen flex flex-col font-sans selection:bg-brand-pink selection:text-white">
            <Header />

            {/* Main Content */}
            <main className="pt-[120px] px-6 m-4 md:m-16 flex-grow">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold text-center mb-12 text-brand-pink"
                >
                    Team
                </motion.h1>

                {/* Team Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-16"
                >
                    <div className="w-full max-w-4xl relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink to-brand-yellow rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <Image
                            src="/teampics/em4.png"
                            alt="Emergence 4 Team"
                            width={1200}
                            height={600}
                            className="rounded-lg mx-auto relative z-10"
                        />
                    </div>
                    <p className="mt-4 text-xl text-gray-300 font-bold">Emergence 4</p>
                </motion.div>

                {/* Management Section */}
                <section className="mb-16">
                    <motion.h2
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="text-3xl font-semibold text-center mb-12 text-brand-yellow"
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
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Operations Section */}
                <section className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold text-center mb-12 text-brand-yellow"
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
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Pauline Sluijs", role: "Curator of Events", img: "pau.jpg" },
                            { name: "Louison Jacoby", role: "Event Designer", img: "louison.jpg" },
                            { name: "Tom Hoevers", role: "Scalability", img: "tom.jpg" },
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group relative hover:border-brand-yellow transition-colors duration-300">
                                    {/* Wrapper div for image positioning */}
                                    <div
                                        className="absolute top-0 left-0 w-full h-full"
                                        style={member.name === "Tom Hoevers" ? { top: "-45px" } : {}}
                                    >
                                        <Image
                                            src={`/teampics/emergers/${member.img}`}
                                            alt={member.name}
                                            width={160}
                                            height={160}
                                            className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                        />
                                    </div>
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex relative z-10">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>


                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: "Aaron Dantuma", role: "Osaka Producer", img: "aron.jpg" },
                            { name: "Wouter Schuit", role: "Osaka Curator", img: "wouter.jpg" },
                            { name: "Famke Gerritsen", role: "Osaka Programmer", img: "famke.jpg" },
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">

                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* New Media Section */}
                <section className="mb-16">
                    <motion.h2
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="text-3xl font-semibold text-center mb-12 text-brand-yellow"
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
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Emilie Benneker", role: "Chief Concept", img: "emily.jpg" },
                            { name: "Tamar Hollman", role: "Concept Designer", img: "tamar.jpg" },
                            { name: "Davide Forlani", role: "Concept Artist", img: "davide.jpg" },
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: "Avin Nayeri", role: "Bio-Tech Concept", img: "avin.jpg" },
                            { name: "Marco Lepore", role: "Documentation", img: "marco.jpg" },
                            { name: "Yookyung Jun", role: "Visual Designer", img: "jun.jpg" },
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* Platform Section */}
                <section className="mb-16">
                    <motion.h2
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="text-3xl font-semibold text-center mb-12 text-brand-yellow"
                    >
                        Platform
                    </motion.h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Simon Leclercq", role: "Concept Designer", img: "simon.jpg" },
                            { name: "Connor Sesink Clee", role: "Concept Artist", img: "connor.jpg" },
                            { name: "Amarte Artist", role: "Topic Specialist", img: "logo_white.png" }, // Placeholder image for logo
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-12 mb-12">
                        {[
                            { name: "Radu Mihălăchiuță", role: "Fabrication Software", img: "me.jpg" },
                            { name: "Tomas Steenman", role: "Fabrication Hardware", img: "tomas.jpg" },
                            { name: "Marcos Francos", role: "Fabrication Hardware", img: "marcos.jpg" },
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { name: "Arianne Riegen", role: "Documentation", img: "ari.jpg" },
                            { name: "Yi Quan", role: "Science Communication", img: "yi.jpg" },
                        ].map((member, idx) => (
                           <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-40 h-40 rounded-full border-4 border-brand-pink/50 overflow-hidden group hover:border-brand-yellow transition-colors duration-300">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                     <div className="w-full h-full bg-black flex items-center justify-center hidden group-hover:flex">
                                         <Image
                                            src="/logo_white.png"
                                            alt={member.name}
                                            width={100}
                                            height={100}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
