import React from "react";
import Image from "next/image";

import Slides from "@/components/mission";

export default function Mission() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Main Content */}
            <main className="pt-28 flex flex-col items-center justify-center min-h-screen w-full px-4">
                <Slides />
            </main>
        </div>
    );
}
