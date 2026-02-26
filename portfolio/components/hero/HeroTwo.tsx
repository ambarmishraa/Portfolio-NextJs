
import React from 'react';
import Image from 'next/image';

const HeroTwo = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">

            {/* 1. Background Split (Row 1 only) */}
            <div className="absolute inset-0 flex flex-col z-0">
                <div className="h-[100%] flex">
                    <div className="w-1/2 bg-white h-full" />
                    <div className="w-1/2 bg-black h-full" />
                </div>
            </div>

            {/* 2. Character Image Layer (Behind Row 2) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 mb-50">
                <div className="relative w-full h-[100vh] max-w-4xl">
                    <Image
                        src="/hero-img.png"
                        alt="Amandeep Illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>


            {/* 3. Row 2 (Bottom overlay) */}
            <div className="absolute bottom-0 left-0 w-full h-[65%] bg-black z-20" />


            {/* Row 2 (Bottom overlay with stacked text) */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-black z-20 flex flex-col items-center justify-end px-10 pb-6">
                <p className="text-white text-lg mb-2 ">GET STARTED</p>
                <p className="text-[16vw] font-black leading-none flex  h-[100vh]">PROJECTS</p>
            </div>

        </section>
    );
};

export default HeroTwo;