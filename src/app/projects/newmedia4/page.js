// "use client";

import React from "react";
import Image from "next/image";

import UnseenCarousel from "@/components/nm1carousel";

export default function NewMedia4() {
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

            {/* Main Content - video */}
            <main className="pt-[80px]">
                {/* Section 1 */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-center"
                    style={{
                        backgroundImage: `url('/projects/nm4.png')`,
                    }}>
                </section>

                {/* Section 2 - Text */}
                <section className="h-96 flex items-center justify-center px-8">
                    {/* Centered Text Section */}
                    <div className="max-w-4xl text-center space-y-8">
                        <p className="text-lg text-gray-300">
                            How could synthetic biology impact society?
                            How can we create living cells from lifeless particles?
                            What is life?</p>
                        <p className="text-lg text-gray-300">
                            New Media Project 4 will develop a New Artistic Medium that can be used as tool to open up dialogs about the present and future of synthetic cells.
                        </p>
                    </div>
                </section>

                <section
                    className="h-96 flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/p2/Dreams.png')`,
                    }}>
                </section>

                {/* Section 3 - Gallery */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold mb-8">Gallery</h2>

                    <div className="lg:w-2/3">
                        <UnseenCarousel
                            projects={[
                                { id: 1, src: "/p2/image1.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 2, src: "/p2/image2.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 3, src: "/p2/image3.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 4, src: "/p2/image4.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                // { id: 5, src: "/p2/image5.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 6, src: "/p2/image6.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 8, src: "/p2/image7.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                            ]}
                        />
                    </div>

                </section>

                {/*/!* Mission & Vision Section *!/*/}
                {/*<section className="h-96 flex flex-col items-center justify-center text-center px-4">*/}

                {/*    /!* Content Wrapper *!/*/}
                {/*    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-8">*/}

                {/*        /!* Mission Section (Left) *!/*/}
                {/*        <div className="w-full lg:w-1/2 text-left relative">*/}
                {/*            <div className="relative z-10">*/}
                {/*                <p className="text-lg text-gray-300">*/}
                {/*                    The New Media Project 2 Research team is developing a groundbreaking artistic medium, rooted in the depths of quantum tech theory and ethics. This medium will not only push the boundaries of artistic expression but also serve as a conduit for science communication.*/}
                {/*                    Through conceptualisation and execution, the team aims to create a platform that not only educates but also inspires a broad public, bridging the gap between art and science.*/}
                {/*                    By unblackboxing quantum phenomena, the medium will provide users with a more intuitive grasp of Quantum Mechanics, fostering curiosity and exploration, leaving a lasting impact on both the art world and the realm of quantum physics.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        /!* Vision Section (Right) *!/*/}
                {/*        <div className="w-full lg:w-1/2 text-left relative">*/}
                {/*            <div className="relative z-10">*/}
                {/*                <p className="text-lg text-gray-300">*/}
                {/*                    The project revolves around creating a physical hologram rooted in quantum principles, designed to be scalable and versatile. Through interdisciplinary collaboration, the team merges art and technology perspectives to inspire and innovate throughout the research, ideation, fabrication, and testing phases. Central to the initiative is the development of a Quantum NAM (New Artistic Medium) for future artists, physicists, engineers and researchers  to program and shape narratives. This medium aims to explore the intriguing question: "What happens when no one is watching?" across various contexts.*/}
                {/*                    The project's essence lies in conveying narratives about Quantum Information Technology and it also serves as a platform for broader artistic expression.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section
                    className="h-96 flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/p2/Dreams_Blur.png')`,
                    }}>
                </section>


                {/* Section 5 - Contact */}
                <footer className="relative text-white py-12 px-4">
                    {/* Title - Contact Us */}
                    <h2 className="text-4xl font-bold mb-8 text-center">Contact us</h2>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <a href="https://www.instagram.com/emergencedelft/" target="_blank" rel="noopener noreferrer">
                            <img src="/insta.png" alt="Instagram" className="w-8 h-8 hover:opacity-80"/>
                        </a>
                        {/*<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">*/}
                        {/*    <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:opacity-80"/>*/}
                        {/*</a>*/}
                    </div>

                    {/* Contact Information (Bottom Right Corner) */}
                    <div className="absolute bottom-4 right-4 text-right text-gray-300 text-sm">
                        <p>Emergence Delft</p>
                        <p>Email: info@emergencedelft.nl</p>
                        <p>Address: Stevinweg 4, 2628 CN, Delft, The Netherlands</p>
                    </div>

                    {/* Logo (Centered at Bottom) */}
                    <div className="absolute bottom-4 left-8 transform -translate-x-1/2">
                        <img src="/logo_white.png" alt="Logo" className="w-10 h-10"/>
                    </div>
                </footer>
            </main>
        </div>
    );
}



