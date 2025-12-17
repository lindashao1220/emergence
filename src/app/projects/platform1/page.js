// "use client";

import React from "react";
import Image from "next/image";

import UnseenCarousel from "@/components/nm1carousel";
import ImageSwitcher from "@/components/slides";

export default function Platform1() {
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
                        <source src="/p1/p1video.mp4" type="video/mp4" />
                    </video>

                    {/* Background Overlay (Optional) */}
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
                        style={{ zIndex: 5 }}
                    ></div>
                </section>

                {/* Section 2 - Text */}
                <section className="h-96 flex items-center justify-center px-8">
                    {/* Centered Text Section */}
                    <div className="max-w-4xl text-center space-y-8">
                        <p className="text-lg text-gray-300">
                            How humane is a world without human connection? What is this feeling of complete powerlessness? What is profound isolation when you lose all your ways of interacting with the world around you?                        </p>
                        <p className="text-lg text-gray-300">
                            In our daily lives, it is sometimes easy to forget how we connect with the world around us. We use our bodies and voices to express our thoughts and ourselves. It is easy to take for granted. But what if you were to lose all this, left only to converse with yourself? Your thoughts are trapped within your own body. You still understand the world, but the world can no longer understand you.



                            This is the narrative of patients with locked-in syndrome, a condition where individuals become completely paralyzed, making communication impossible. enclosed () seeks to tell this story. It’s about the feeling of isolation, of loneliness. Our work emulates this feeling of being misunderstood. Being present in physical space, but profoundly detached from reality. Showing the importance of communication through showing a world without it.                        </p>
                    </div>
                </section>

                <section
                    className="h-96 flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/p1/profile1.jpg')`,
                    }}>
                </section>

                {/* Section 3 - Gallery */}
                <section
                    className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold mb-8">Gallery</h2>

                    <div className="lg:w-2/3">
                        <UnseenCarousel
                            projects={[
                                { id: 1, src: "/p1/image1.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 2, src: "/p1/image2.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 3, src: "/p1/image3.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 4, src: "/p1/image4.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 5, src: "/p1/image5.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 6, src: "/p1/image6.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                                { id: 8, src: "/p1/image8.jpg", alt: "Project 1", name: "Material Science x Future Fabrics" },
                            ]}
                        />
                    </div>

                </section>

                {/* Mission & Vision Section */}
                <section className="h-96 flex flex-col items-center justify-center text-center px-4">

                    {/* Content Wrapper */}
                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-8">

                        {/* Mission Section (Left) */}
                        <div className="w-full lg:w-1/2 text-left relative">
                            <div className="relative z-10">
                                <p className="text-lg text-gray-300">
                                    In our work, we are relating the waterfall to the barrier that those with locked-in-system experience. A barrier that, from one day to the next, suddenly appeared, closing you off from the outside world. The inability to move past the barrier - the waterfall - illustrates the frustration to be so close, yet far from the people around you. The water obstructs your view of reality, hindering interaction and disrupting our human connection.

                                    The waterfall’s movement is driven by the brain activity of a recovered locked-in patient, reflecting on her isolated experience. Using EEG, a device which measures brain activity, we connected this data to specific emotions. Employing an in-house developed machine learning model, EEG data was classified into four different emotional states. The waterfall visually expresses her response in the only language she had at that time—her thoughts and emotions.
                                </p>
                            </div>
                        </div>

                        {/* Vision Section (Right) */}
                        <div className="w-full lg:w-1/2 text-left relative">


                            <div className="relative z-10">
                                <p className="text-lg text-gray-300">
                                    Emergence aims to participate and reflect on new technologies. Through this artwork, we explore the neuroscientific phenomenon of locked-in syndrome, reflecting on how our perception and cognition make us who we are. Additionally, the artwork pictures the development of neuroscientific technology. EEG technology has rapidly developed in recent years, appearing as a way to control games, create art and help people with motor impairments. We envision its potential application for locked-in patients as a way for them to express themselves and their emotions. Using brain-computer interfaces as an artistic medium is a great playground to experiment with specific use cases of this innovative technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="h-96 flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/p1/profile2.jpg')`,
                    }}>
                </section>


                {/* Section 4 - Mission Vision */}
                <section
                    className="h-screen flex flex-col lg:flex-row items-center justify-between text-center px-8 lg:px-16 py-12 ">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <Image
                            src="/p1/interview.jpg"
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
                            <h2 className="text-4xl font-bold mb-8">
                                <span className=" pl-2">Recovered locked-in patient</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                “After four hours, I was allowed to go to the room where my parents, sister, brother-in-law, and boyfriend were. But it was there that things went wrong. In the room, in the presence of everyone, I suffered a stroke. I was swiftly taken to get a CT scan, surrounded by stressful activity. Confusion and panic took over; I had no idea what was happening to me. They rushed me to the emergency room, where I tried to sit but realised my body wouldn’t respond to my commands. Then, I was given morphine and an intubation tube. From that moment, everything faded to black…” - Anne Cox (translated)                            </p>
                        </div>

                        {/*/!* Vertical Line Divider *!/*/}
                        {/*<div className="absolute left-[-25] top-[-50] bottom-[-50] w-px bg-gray-600"></div>*/}

                        {/* Vision Section */}
                        <div className="relative z-10">

                            <p className="text-lg text-gray-300 mb-8">
                                "'A few weeks ago I was approached by a Dream Team from the TU Delft, they were looking for someone who had experienced Locked in Syndrome. They wanted to measure my emotions with an EEG.

                                The entire dream team came to Someren. At home I was interviewed while wearing a cap that measured my brainwaves.

                                Today was the exhibition! They had created a waterfall with real water, the way this water fell was the speed of my brainwaves. Behind this waterfall, shadows could be seen and you could hear my answers I gave in the interview. The rest of the room was completely dark and filled with smoke. When you walked into the room you got a 'peek into my Locked-In syndrome.'"

                                "When you see water in your dreams, this is a transition from the conscious to the subconscious." - Anne                            </p>
                        </div>
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



