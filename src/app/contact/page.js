    "use client";

    import React from "react";
    import Image from "next/image";
    import { Phone, Mail } from "lucide-react";

    const contacts = [
        {
            name: "Babette van den Broek",
            title: "Team Manager",
            info: "Questions, thoughts, or just want to chat?",
            phone: "+31 6 81895801",
            email: "info@emergencedelft.nl",
            label: "General Info",
            image: "/teampics/emergers/babs.jpg",
        },
        {
            name: "Anouk Braakhuis",
            title: "Partnerships Coordinator",
            info: "Want to partner up?",
            phone: "+31 6 38045234",
            email: "a.braakhuis@emergencedelft.nl",
            label: "For Partners",
            image: "/teampics/emergers/anouk.jpg",
        },
        {
            name: "Laurens Sprenger",
            title: "PR Coordinator",
            info: "Any press-related questions or requests?",
            phone: "+31 6 34874404",
            email: "l.sprenger@emergencedelft.nl",
            label: "For Press",
            image: "/teampics/emergers/laurens.jpg", // You mentioned Laurens, but Rixt is listed—adjust as needed
        },
        {
            name: "Foundation Contact",
            title: "Board Representative",
            info: "Want to talk to a foundation member?",
            phone: "",
            email: "",
            label: "Foundation",
            image: "/logo_white.png",
        },
    ];


    export default function Contact() {
        return (
            <div className="bg-black text-white min-h-screen">
                {/* Fixed Header */}
                {/* <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-black z-10">
                    <div className="text-2xl font-bold">
                        <Image src="/logo_white.png" alt="Logo" width={50} height={50} />
                    </div>
                    <nav className="flex space-x-4">
                        <a href="/" className="hover:text-gray-400">Home</a>

                        <div className="relative group">
                            <a href="#" className="flex items-center space-x-1 hover:text-gray-400">
                                <span>About</span>
                                <span className="text-sm">&#9662;</span>
                            </a>

                            <div
                                className="absolute left-0 top-full mt-2 w-40 bg-black border border-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                            >
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
                </header> */}

                {/* Main Content */}
                <main className="pt-32 px-6 py-20 flex justify-center">
                    <div className="w-full max-w-5xl space-y-24">
                        <h1 className="text-5xl font-bold text-center mb-16">Get in touch with us!</h1>

                        {contacts.map((person, idx) => {
                            const alignRight = idx % 2 === 1;

                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-${alignRight ? "end" : "start"} w-full`}
                                >
                                    <div className="flex flex-col md:flex-row items-center gap-10">
                                        <div
                                            className={`flex flex-col md:flex-row items-center ${
                                                alignRight ? "md:flex-row-reverse" : ""
                                            } gap-10 w-full`}
                                        >
                                            {/* Image */}
                                            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white">
                                                <Image src={person.image} alt={person.name} width={144} height={144} />
                                            </div>

                                            {/* Text */}
                                            <div className={`max-w-md ${alignRight ? "md:text-right" : ""}`}>
                                                <h2 className="text-2xl font-bold">{person.name}</h2>
                                                <p className="text-yellow-400 italic">{person.title}</p>
                                                <p className="text-gray-300 mt-1">{person.info}</p>

                                                {person.phone && (
                                                    <p className="flex items-center mt-2 gap-2 justify-start">
                                                        <Phone size={18} className="text-yellow-400" /> {person.phone}
                                                    </p>
                                                )}

                                                {person.email && (
                                                    <p className="flex items-center gap-2 justify-start">
                                                        <Mail size={18} className="text-yellow-400" /> {person.email}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Box */}
                                            <div className="w-44 h-44 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-700 text-center text-lg font-semibold">
                                                {person.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        );
    }