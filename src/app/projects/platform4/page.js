// "use client";

import React from "react";
import Image from "next/image";

import UnseenCarousel from "@/components/nm1carousel";

export default function Platform4() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">

            {/* Main Content - video */}
            <main className="pt-[80px]">
                {/* Section 1 */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-center"
                    style={{
                        backgroundImage: `url('/projects/p4.png')`,
                    }}>
                </section>

                {/* Section 2 - Text */}
                <section className="h-96 flex items-center justify-center px-8">
                    {/* Centered Text Section */}
                    <div className="max-w-4xl text-center space-y-8">
                        <p className="text-lg text-gray-300">
                            What are meta materials, and can we design and fabricate them?

                            Can we create materials that breathe and grow?

                            Should craftsmanship be automated, or can technology empower it without replacing it?

                            How might techniques like 4D printing or programmable materials lead to garments that adapt in real time?

                            Can we design sustainable, bio-based textiles that leave zero impact?

                            How can we integrate sensors into fabrics to make them “smart”?

                            What is the future of wearable technology?</p>
                        <p className="text-lg text-gray-300">
                            Entering its fourth edition, Platform Project 4 from Emergence Delft will delve into the exciting intersection of Material Science and Future Fabrics. This semester, we’ll unlock new potential at the intersection of technology and craftsmanship, inviting students to explore, experiment, and rethink textiles in bold, groundbreaking ways. From weaving and knitting to advanced technologies, we’ll push beyond tradition to discover what’s possible in the future of fabrics.
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



