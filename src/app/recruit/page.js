import React from "react";
import Image from "next/image";

export default function Contact() {
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
            <main className="pt-[100px] px-8 flex flex-col items-center space-y-12">
                <h1 className="text-4xl font-bold mb-8">Get in touch with us!</h1>
                {/* Contact Rows */}
                <div className="flex flex-col space-y-12 w-full max-w-5xl">
                    {/* Contact Person 1 */}
                    <div
                        className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                            <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                        </div>
                        <div className="text-center lg:text-left space-y-2">
                            <h3 className="text-xl font-bold">Babette van den Broek</h3>
                            <p className="text-lg text-gray-400">Questions, thoughts, or just want to chat? Our Team
                                Manager is your go-to person!</p>
                            <p className="text-lg">📞 +31 6 81895801</p>
                            <p className="text-lg">✉️ info@emergencedelft.nl</p>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-md">
                            <h4 className="text-xl font-bold">For General Info</h4>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-600"/>

                    {/* Contact Person 2 */}
                    <div
                        className="flex flex-col lg:flex-row-reverse items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                            <Image src="/logo_white.png" alt="Anouk Braakhuis" width={128} height={128}/>
                        </div>
                        <div className="text-center lg:text-left space-y-2">
                            <h3 className="text-xl font-bold">Anouk Braakhuis</h3>
                            <p className="text-lg text-gray-400">Want to partner up? Get in contact with our
                                Partnerships Coordinator!</p>
                            <p className="text-lg">📞 +31 6 38045234</p>
                            <p className="text-lg">✉️ a.braakhuis@emergencedelft.nl</p>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-md">
                            <h4 className="text-xl font-bold">For Partners</h4>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-600"/>

                    {/* Contact Person 3 */}
                    <div
                        className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                            <Image src="/logo_white.png" alt="Rixt Bouman" width={128} height={128}/>
                        </div>
                        <div className="text-center lg:text-left space-y-2">
                            <h3 className="text-xl font-bold">Rixt Bouman</h3>
                            <p className="text-lg text-gray-400">Any press-related questions or requests? Reach out to
                                our PR coordinator!</p>
                            <p className="text-lg">📞 +31 6 29117270</p>
                            <p className="text-lg">✉️ r.bouman@emergencedelft.nl</p>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-md">
                            <h4 className="text-xl font-bold">For Press</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
