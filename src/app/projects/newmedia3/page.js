// "use client";

import React from "react";
import Image from "next/image";

// import Carousel from "../components/carousel";
// import VerticalCarousel from "../components/vertical"; // Import the Vertical Carousel

export default function NewMedia3() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">

            {/* Main Content - video */}
            <main className="pt-[80px]">
                {/* Section 1 */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-center"
                    style={{
                        backgroundImage: `url('/projects/nm3.png')`,
                    }}>
                </section>

                {/* Section 2 - Projects */}
                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8">
                    {/* Left Text Section */}
                    <div className="lg:w-1/3 text-center lg:text-left space-y-6 mb-8 lg:mb-0 relative">
                        {/* Center the text */}
                        <div className="absolute -inset-12 flex flex-col items-center justify-center lg:justify-start">
                            <h1 className="text-5xl font-bold mb-4">Quantum Art Development</h1>
                            <p className="text-lg text-gray-400">The New Media Project of Emergence 3 (September 2024 till February 2025) aims to merge art and technology by developing an art installation that is inspired by quantum mechanics.</p>
                        </div>
                        <div className=" left-[-25] top-[-50] bottom-[-50] w-px bg-gray-600"></div>
                    </div>


                    {/* Vertical White Line Divider */}
                    <div className="w-[2px] bg-white h-[80%] mx-12 relative z-10"></div>


                    {/*/!* Right Carousel Section *!/*/}
                    {/*<div className="lg:w-2/3">*/}
                    {/*    <Carousel/>*/}
                    {/*</div>*/}
                </section>


                {/* Section 3 - Mission Vision */}
                <section
                    className="min-h-screen flex flex-col lg:flex-row items-center justify-between text-center px-8 lg:px-16 py-12 ">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <Image
                            src="/logo_white.png"
                            alt="Logo"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>

                    {/* Mission & Vision Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative">
                        {/* Horizontal Line Divider */}
                        <div className="absolute top-1/2 left-0 w-full border-t border-gray-600"></div>

                        {/* Mission Section */}
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-16">
                                <span className=" pl-2">Mission</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-64">
                                Facilitate an understanding of complex technology that has
                                been blackboxed.
                            </p>
                        </div>

                        {/* Vertical Line Divider */}
                        <div className="absolute left-[-25] top-[-50] bottom-[-50] w-px bg-gray-600"></div>

                        {/* Vision Section */}
                        <div className="relative z-10">

                            <p className="text-lg text-gray-300 mb-16">
                                Playful tinkering, experimentation, and collaboration
                                between different disciplines.
                            </p>
                            <h2 className="text-4xl font-bold mb-4">
                                <span className=" pl-2">Vision</span>
                            </h2>
                        </div>
                    </div>
                </section>


                {/* Section 4 - Events */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold mb-8">Events</h2>

                    {/*/!* Vertical Carousel Component *!/*/}
                    {/*<div className="w-full max-w-md">*/}
                    {/*    <VerticalCarousel/>*/}
                    {/*</div>*/}

                </section>

                {/* Section 5 - Contact */}
                <section className="min-h-screen flex flex-col justify-center text-center px-4 relative text-white">
                    {/* Title */}
                    <h2 className="top-0 text-4xl font-bold mb-16 self-center">Contact us</h2>

                    {/* Newsletter Subscription */}
                    <div className="flex flex-wrap justify-between items-center gap-8 max-w-5xl mx-auto mb-8">
                        <form className="flex flex-row gap-4 w-full justify-center">
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 text-black rounded-md focus:outline-none w-1/2"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-yellow-400 text-black rounded-md font-bold hover:bg-yellow-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/logo_white.png" alt="Instagram" className="w-8 h-8 hover:opacity-80"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/logo_white.png" alt="Twitter" className="w-8 h-8 hover:opacity-80"/>
                        </a>
                    </div>

                    {/* Contact Information (Bottom Right Corner) */}
                    <div className="absolute bottom-4 right-4 text-right text-gray-300">
                        <p>Emergence Delft</p>
                        <p>Email: info@emergencedelft.nl</p>
                        <p>Address: Stevinweg 4, 2628 CN, Delft, The Netherlands</p>
                    </div>

                    <div className="absolute bottom-0 self-center font-bold">
                        <Image src="/logo_white.png" alt="Logo" width={150} height={150}/>
                    </div>
                </section>
            </main>
        </div>
    );
}



