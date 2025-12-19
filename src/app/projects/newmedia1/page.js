// "use client";

import React from "react";
import Image from "next/image";

import UnseenCarousel from "@/components/nm1carousel";
import ImageSwitcher from "@/components/slides";

export default function NewMedia1() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Main Content - video */}
            <main className="pt-[80px]">
                {/* Section 1 */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4"
                    style={{
                        position: 'relative',
                        overflow: 'visible',
                    }}
                >
                    {/* Video Background */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/nm1/nm1video.mp4" type="video/mp4" />
                    </video>

                    {/* Background Overlay (Optional) */}
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
                        style={{ zIndex: 5 }}
                    ></div>
                </section>

                {/* Section 2 - Text */}
                <section className="h-80 flex items-center justify-center px-8">
                    {/* Centered Text Section */}
                    <div className="max-w-4xl text-center space-y-16">
                        <p className="text-lg text-gray-300">
                            How often do you critically think about the information you consume and the way you form opinions on social media? What is the role of technology in this discussion?
                        </p>
                        <p className="text-lg text-gray-300">
                            Emergence reflects on new technologies becoming evermore complex and intangible. We call for transparent technologies, which we see as tools inseparably tied to humankind, and recognize a shared responsibility between engineers that develop them and everyone that uses them.
                        </p>
                    </div>
                </section>

                {/* Section 3 - Gallery */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold mb-8">Gallery</h2>


                    <div className="lg:w-2/3">
                        <UnseenCarousel
                            projects={[
                                { id: 1, src: "/nm1/image1.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 2, src: "/nm1/image2.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 3, src: "/nm1/image3.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 4, src: "/nm1/image4.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 5, src: "/nm1/image5.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 6, src: "/nm1/image6.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 7, src: "/nm1/image7.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 8, src: "/nm1/image8.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 9, src: "/nm1/image9.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 10, src: "/nm1/image10.png", alt: "Project 1", name: "Material Science x Future Fabrics" },
                            ]}
                        />
                    </div>

                </section>


                {/* Section 4 - Mission Vision */}
                <section
                    className="h-96 flex flex-col lg:flex-row items-center justify-between text-center px-8 lg:px-16 py-12 ">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <Image
                            src="/nm1/image7.png"
                            alt="Logo"
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                    </div>

                    {/* Mission & Vision Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative">
                        {/* Horizontal Line Divider */}
                        <div className="absolute top-1/2 left-0 w-full border-t border-gray-600"></div>

                        {/* Mission Section */}
                        <div className="relative z-10">
                            {/*<h2 className="text-4xl font-bold mb-16">*/}
                            {/*    <span className=" pl-2">Mission</span>*/}
                            {/*</h2>*/}
                            <p className="text-lg text-gray-300 mb-8">
                                On the internet, we are increasingly losing sight of what is real and what is not. Like the people we come across on social media, sometimes they are merely virtual. In the wrong hands, these so-called social bots can be used to manipulate our personal views by amplifying extremes and promoting polarisation.
                            </p>
                        </div>

                        {/*/!* Vertical Line Divider *!/*/}
                        {/*<div className="absolute left-[-25] top-[-50] bottom-[-50] w-px bg-gray-600"></div>*/}

                        {/* Vision Section */}
                        <div className="relative z-10">

                            <p className="text-lg text-gray-300 mb-8">
                                In Emergence’s work, social bots are embodied and projected in invisible infrared among the existing crowd of the Delft station. The visible/invisible are related to the real/virtual. From an online perspective, or through screens in the installation, there is no difference between these digital entities and ourselves. Physically we can’t see them, only notice their echoes.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="min-h-screen flex flex-col items-center justify-center px-8 space-y-16">
                    <div className="lg:w-2/3">
                        <ImageSwitcher/>
                    </div>
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



