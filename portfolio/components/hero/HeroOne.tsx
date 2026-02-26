
import React from 'react';
import Image from 'next/image';

const HeroOne = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">

  {/* 1. Background Split (Row 1 only) */}
  <div className="absolute inset-0 flex flex-col z-0">
      <div className="h-[65%] flex">
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
  <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black z-20" />

  {/* 4. Content Overlay */}
  <div className="absolute inset-0 z-30 flex flex-col justify-between p-10 pointer-events-none mt-25">
      {/* Bottom Row */}
      <div className="flex justify-between items-end pb-10">
          {/* Quote */}
          <div className="max-w-[280px]">
              <span className="text-7xl font-serif block leading-none mix-difference">“</span>
              <p className="text-sm text-gray-600 mt-[-10px] pointer-events-auto">
                  Ambar&apos;s Exceptional product design ensure our website&apos;s success. <br />
                  <span className="font-extrabold text-black">Highly Recommended</span>
              </p>
          </div>

          {/* Stats */}
          <div className="text-right text-white space-y-2 pointer-events-auto">
              <div className="flex justify-end gap-1 text-zinc-700 text-xl">★★★★★</div>
              <div>
                  <div className="text-7xl font-light leading-none">+1 Years</div>
                  <div className="text-xs tracking-[0.3em] text-zinc-400 mt-2">EXPERIENCE</div>
              </div>
          </div>
      </div>
  </div>

 {/* Row 2 (Bottom overlay with stacked text) */}
<div className="absolute bottom-0 left-0 w-full h-[35%] bg-black z-20 flex flex-col items-center justify-end px-10 pb-6">
    <p className="text-white text-lg mb-2">GET STARTED</p>
    <p className="text-white text-lg">Highly Recommended</p>
</div>

</section>
    );
};

export default HeroOne;