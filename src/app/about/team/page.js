import React from "react";
import Image from "next/image";

export default function Team() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-black z-10">
                <div className="text-2xl font-bold">
                    <Image src="/logo_white.png" alt="Logo" width={50} height={50}/>
                </div>
                <nav className="flex space-x-4">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    {/* About Dropdown */}
                    <div className="relative group">
                        <a href="#" className="flex items-center space-x-1 hover:text-gray-400">
                            <span>About</span>
                            <span className="text-sm">&#9662;</span> {/* Down arrow */}
                        </a>
                        {/* Dropdown Menu */}
                        <div
                            className="absolute left-0 top-full mt-2 w-40 bg-black border border-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href="/about/team"
                               className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-600">
                                Team
                            </a>
                            <a href="/about/mission" className="block px-4 py-2 hover:bg-gray-800">
                                Mission
                            </a>
                        </div>
                    </div>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                    <a href="/projects" className="bg-yellow-400 text-black px-4 py-2 rounded-full">Projects</a>
                    <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-full">PKB</a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-[80px] px-6 m-16">
                <h1 className="text-5xl font-bold text-center mb-12">Team</h1>

                {/* Team Picture */}
                <div className="flex flex-col items-center mb-16">
                    <div className="w-full max-w-4xl">
                        <Image
                            src="/teampics/em4.png"
                            alt="Emergence 4 Team"
                            width={1200}
                            height={600}
                            className="rounded-lg mx-auto"
                        />
                    </div>
                    <p className="mt-4 text-xl text-gray-300">Emergence 4</p>
                </div>

                {/* Management Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Management</h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* TEAM MEMBER */}
                        {[
                            { name: "Babette van den Broek", role: "Team Manager", img: "babs.jpg" },
                            { name: "Emma Sanders", role: "New Media Manager", img: "emma.jpg" },
                            { name: "Britt Maes", role: "Platform Manager", img: "britt.jpg" },
                            { name: "Willemijn van den Berg", role: "Operations Manager", img: "will.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Operations Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Operations</h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {[
                            { name: "Anouk Braakhuis", role: "Partnerships", img: "anouk.jpg" },
                            { name: "Laurens Sprenger", role: "Partnerships & PR", img: "laurens.jpg" },
                            { name: "Fleur Hagen", role: "Public Relations", img: "fleur.jpg" },
                            { name: "Liza Verdonk", role: "Graphic Design", img: "liza.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {[
                            { name: "Pauline Sluijs", role: "Curator of Events", img: "pau.jpg" },
                            { name: "Louison Jacoby", role: "Event Designer", img: "louison.jpg" },
                            { name: "Tom Hoevers", role: "Scalability", img: "tom.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group relative">
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
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>


                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Aaron Dantuma", role: "Osaka Producer", img: "aron.jpg" },
                            { name: "Wouter Schuit", role: "Osaka Curator", img: "wouter.jpg" },
                            { name: "Famke Gerritsen", role: "Osaka Programmer", img: "famke.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">

                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* New Media Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">New Media</h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {[
                            { name: "Nora Donders", role: "Chief Fabrication", img: "nora.jpg" },
                            { name: "Floor van Heist", role: "Mechanical Engineer", img: "floor.jpg" },
                            { name: "Jeroen Wesselingh", role: "Mechanical Engineer", img: "jeron.jpg" },
                            { name: "Jochem Broshuis", role: "Embedded Engineer", img: "jochem.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {[
                            { name: "Emilie Benneker", role: "Chief Concept", img: "emily.jpg" },
                            { name: "Tamar Hollman", role: "Concept Designer", img: "tamar.jpg" },
                            { name: "Davide Forlani", role: "Concept Artist", img: "davide.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Avin Nayeri", role: "Bio-Tech Concept", img: "avin.jpg" },
                            { name: "Marco Lepore", role: "Documentation", img: "marco.jpg" },
                            { name: "Yookyung Jun", role: "Visual Designer", img: "jun.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Platform Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Platform</h2>

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {[
                            { name: "Simon Leclercq", role: "Concept Designer", img: "simon.jpg" },
                            { name: "Connor Sesink Clee", role: "Concept Artist", img: "connor.jpg" },
                            { name: "Amarte Artist", role: "Topic Specialist", img: "logo_white.png" }, // Placeholder image for logo
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {[
                            { name: "Radu Mihălăchiuță", role: "Fabrication Software", img: "me.jpg" },
                            { name: "Tomas Steenman", role: "Fabrication Hardware", img: "tomas.jpg" },
                            { name: "Marcos Francos", role: "Fabrication Hardware", img: "marcos.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Arianne Riegen", role: "Documentation", img: "ari.jpg" },
                            { name: "Yi Quan", role: "Science Communication", img: "yi.jpg" },
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden group">
                                    <Image
                                        src={`/teampics/emergers/${member.img}`}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="transform scale-110 transition-transform duration-300 group-hover:hidden"
                                    />
                                    <Image
                                        src="/logo_white.png"
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <h3 className="mt-4 font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
