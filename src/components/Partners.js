"use client";

import React from "react";
import Image from "next/image";

export default function Partners() {
    return (
        <div id="partners" className="bg-black text-white flex flex-col py-20">
            <div className="px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Partners</h1>

                {/* Management Section */}
                <section className="mb-16">
                    <h2 className="text-lg md:text-2xl font-semibold text-center mb-16 max-w-4xl mx-auto">Emergence Delft aims to bring engineers, designers and artists together and create interactive installations to reflect on our evermore digital society. Our partners are essential to achieve this. They offer us knowledge, opportunities, experience, materials, financial resources, and more.
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
            </div>
        </div>
    );
}
