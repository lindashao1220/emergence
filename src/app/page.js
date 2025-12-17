// "use client";

import React from "react";
import Image from "next/image";

import Carousel from "../components/carousel";
import VerticalCarousel from "../components/vertical";

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-black z-10">
                <div className="text-2xl font-bold">
                    <Image src="/logo_white.png" alt="Logo" width={50} height={50}/>
                </div>
                <nav className="flex space-x-4">
                    {/* About Dropdown */}
                    <div className="relative group">
                        <a href="#" className="flex items-center space-x-1 hover:text-gray-400">
                            <span>About</span>
                            <span className="text-sm">&#9662;</span> {/* Down arrow */}
                        </a>
                        {/* Dropdown Menu */}
                        <div
                            className="absolute left-0 top-full mt-2 w-40 bg-black border border-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <a href="/about/team" className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-600">
                                Team
                            </a>
                            <a href="/about/mission" className="block px-4 py-2 hover:bg-gray-800 border-b border-gray-600">
                                Mission
                            </a>
                            <a href="/about/partners" className="block px-4 py-2 hover:bg-gray-800">
                                Partners
                            </a>
                        </div>

                    </div>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                    <a href="/projects" className="bg-yellow-400 text-black px-4 py-2 rounded-full">Projects</a>
                    <a href="/recruit" className="bg-blue-600 text-black px-4 py-2 rounded-full">Join Us</a>
                    <a href="/pkb" className="bg-pink-600 text-white px-4 py-2 rounded-full">PKB</a>
                </nav>
            </header>

            {/* Main Content - video */
            }
            <main className="pt-[80px]">
                {/* Section 1 */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative"
                    style={{
                        backgroundImage: `url('/mainpage.png')`,
                    }}
                >
                    {/* Dark overlay for better readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Text Content */}
                    <h2 className="relative text-white text-3xl md:text-6xl font-bold max-w-3xl leading-tight">
                        Developing New Media Art to Reflect on Complex Technologies
                    </h2>
                </section>

                {/* Section 2 - Projects */}
                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8">
                    {/* Left Text Section */}
                    <div className="lg:w-1/3 text-center lg:text-left space-y-6 mb-8 lg:mb-0 relative">
                        {/* Center the text */}
                        <div className="absolute -inset-12 flex flex-col items-center justify-center lg:justify-start">
                            <h1 className="text-5xl font-bold mb-4"> Current Projects</h1>
                            <p className="text-lg text-gray-400">Take a look at our projects</p>
                        </div>
                        <div className=" left-[-25] top-[-50] bottom-[-50] w-px bg-gray-600"></div>
                    </div>


                    {/* Vertical White Line Divider */}
                    <div className="w-[2px] bg-white h-[80%] mx-12 relative z-10"></div>


                    {/* Right Carousel Section */}
                    <div className="lg:w-2/3">
                        <Carousel/>
                    </div>
                </section>



                {/* Section 3 - Mission Vision */}
                <section
                    className="min-4 flex lg:flex-row items-center justify-between text-center px-4 lg:px-8 py-8">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <Image
                            src="/logo_white.png"
                            alt="Logo"
                            width={500} // Reduced width for a smaller image
                            height={500}
                            className="object-contain"
                        />
                    </div>

                    {/* Mission & Vision Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 relative">
                        {/* Horizontal Line Divider */}
                        <div className="absolute top-1/2 left-0 w-full border-t-2 border-gray-600"></div>

                        {/* Mission Section */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="pl-2">Mission</span>
                            </h2>
                            <p className="text-base text-gray-300 mb-16">
                                Facilitate an understanding of complex technology that has
                                been blackboxed.
                            </p>
                        </div>

                        {/*/!* Vertical Line Divider *!/*/}
                        {/*<div className="absolute left-[-25] top-[-35] bottom-[-5] w-px bg-gray-600"></div>*/}

                        {/* Vision Section */}
                        <div className="relative z-10">
                            <p className="text-base text-gray-300 mb-8">
                                Playful tinkering, experimentation, and collaboration
                                between different disciplines.
                            </p>
                            <h2 className="text-3xl font-bold mb-2">
                                <span className="pl-2">Vision</span>
                            </h2>
                        </div>
                    </div>
                </section>


                {/* Section 4 - Events */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold mb-8">Events</h2>

                    {/* Vertical Carousel Component */}
                    <div className="w-full overflow-visible">
                        <VerticalCarousel/>
                    </div>

                </section>


                {/* Section 5 - Contact */}
                <footer className="relative text-white py-12 px-4">
                    {/* Title - Contact Us */}
                    <h2 className="text-4xl font-bold mb-8 text-center">Contact us</h2>

                    {/* Newsletter Subscription */}
                    <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto mb-8">
                        <form className="flex flex-row gap-4 w-full max-w-md justify-center">
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 text-black rounded-md focus:outline-none w-2/3"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-pink-500 text-white rounded-md font-bold hover:bg-pink-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

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



