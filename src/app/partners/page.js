import React from "react";
import Image from "next/image";

export default function About() {
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
            <main className="pt-[80px] px-6">
                <h1 className="text-5xl font-bold text-center mb-12">Partners</h1>

                {/* Management Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-16">Emergence Delft aims to bring engineers, designers and artists together and create interactive installations to reflect on our evermore digital society. Our partners are essential to achieve this. They offer us knowledge, opportunities, experience, materials, financial resources, and more.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 bg-white overflow-hidden">
                                <Image src="/partners/tno-logo-1484x835_003_.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Willemijn van den Berg" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Willemijn van den Berg</h3>
                            <p className="text-gray-400">Operations Manager</p>
                        </div>
                    </div>
                </section>

                {/* Operations Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Operations</h2>
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                </section>

                {/* Operations Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">New Media</h2>
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>
                </section>

                {/* Operations Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Platform</h2>
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Babette van den Broek</h3>
                            <p className="text-gray-400">Team Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Emma Sanders" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Emma Sanders</h3>
                            <p className="text-gray-400">New Media Manager</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                                <Image src="/logo_white.png" alt="Britt Maes" width={128} height={128}/>
                            </div>
                            <h3 className="mt-4 font-bold">Britt Maes</h3>
                            <p className="text-gray-400">Platform Manager</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
