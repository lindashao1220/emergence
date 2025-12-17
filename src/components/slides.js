'use client';

import { useState } from 'react';

const ImageSwitcher = () => {
    const [currentImage, setCurrentImage] = useState('/nm1/slide1.png');

    return (
        <section className="w-full flex flex-col items-center px-8 space-y-4">
            {/* Button Group */}
            <div className="flex space-x-4 mt-8">
                <button
                    onClick={() => setCurrentImage('/nm1/slide1.png')}
                    className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                    Research
                </button>
                <button
                    onClick={() => setCurrentImage('/nm1/slide2.png')}
                    className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                    Development
                </button>
                <button
                    onClick={() => setCurrentImage('/nm1/slide3.png')}
                    className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                    Execution
                </button>
            </div>

            {/* Image Display */}
            <div className="w-full bg-black mt-4">
                <img
                    src={currentImage}
                    alt="Slide Display"
                    className="w-3/5 mx-auto"
                />
            </div>
        </section>
    );
};

export default ImageSwitcher;
