import React from "react";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Main Content */}
            <main className="pt-28 px-4 md:px-8 flex flex-col items-center space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in touch with us!</h1>
                {/* Contact Rows */}
                <div className="flex flex-col space-y-12 w-full max-w-5xl">
                    {/* Contact Person 1 */}
                    <div
                        className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                                <Image src="/logo_white.png" alt="Babette van den Broek" width={128} height={128}/>
                            </div>
                            <div className="text-center lg:text-left space-y-2 flex-grow">
                                <h3 className="text-xl font-bold">Babette van den Broek</h3>
                                <p className="text-base md:text-lg text-gray-400">Questions, thoughts, or just want to chat? Our Team
                                    Manager is your go-to person!</p>
                                <p className="text-base md:text-lg">📞 +31 6 81895801</p>
                                <p className="text-base md:text-lg break-all">✉️ info@emergencedelft.nl</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-md flex-shrink-0 w-full lg:w-auto text-center">
                            <h4 className="text-xl font-bold">For General Info</h4>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-600"/>

                    {/* Contact Person 2 */}
                    <div
                        className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 w-full">
                         <div className="flex flex-col lg:flex-row-reverse items-center gap-8 w-full">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                                <Image src="/logo_white.png" alt="Anouk Braakhuis" width={128} height={128}/>
                            </div>
                            <div className="text-center lg:text-right space-y-2 flex-grow">
                                <h3 className="text-xl font-bold">Anouk Braakhuis</h3>
                                <p className="text-base md:text-lg text-gray-400">Want to partner up? Get in contact with our
                                    Partnerships Coordinator!</p>
                                <p className="text-base md:text-lg">📞 +31 6 38045234</p>
                                <p className="text-base md:text-lg break-all">✉️ a.braakhuis@emergencedelft.nl</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-md flex-shrink-0 w-full lg:w-auto text-center">
                            <h4 className="text-xl font-bold">For Partners</h4>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-600"/>

                    {/* Contact Person 3 */}
                    <div
                        className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                                <Image src="/logo_white.png" alt="Rixt Bouman" width={128} height={128}/>
                            </div>
                            <div className="text-center lg:text-left space-y-2 flex-grow">
                                <h3 className="text-xl font-bold">Rixt Bouman</h3>
                                <p className="text-base md:text-lg text-gray-400">Any press-related questions or requests? Reach out to
                                    our PR coordinator!</p>
                                <p className="text-base md:text-lg">📞 +31 6 29117270</p>
                                <p className="text-base md:text-lg break-all">✉️ r.bouman@emergencedelft.nl</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-md flex-shrink-0 w-full lg:w-auto text-center">
                            <h4 className="text-xl font-bold">For Press</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
