"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroOne = () => {
  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden bg-black snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-full flex">
          <div className="w-1/2 bg-white h-full" />
          <div className="w-1/2 bg-black h-full" />
        </div>
      </div>

      {/* Character Image Layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <div className="relative w-full h-[100vh] max-w-4xl">
          <Image
            src="/hero-img.png"
            alt="Amandeep Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black z-20" />

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col justify-between p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <div className="flex justify-between items-end pb-10">
          {/* Quote */}
          <div className="max-w-[280px]">
            <span className="text-7xl font-serif block leading-none mix-difference">
              “
            </span>
            <p className="text-sm text-gray-600 mt-[-10px]">
              Ambar&apos;s exceptional product design ensures our website&apos;s success. <br />
              <span className="font-extrabold text-black">
                Highly Recommended
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="text-right text-white space-y-2">
            <div className="flex justify-end gap-1 text-zinc-700 text-xl">★★★★★</div>
            <div>
              <div className="text-7xl font-light leading-none">+1 Years</div>
              <div className="text-xs tracking-[0.3em] text-zinc-400 mt-2">
                EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[35%] bg-black z-20 flex flex-col items-center justify-end px-10 pb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <p className="text-white text-lg mb-2">GET STARTED</p>
        <p className="text-[16vw] font-black leading-none h-[7vh]">
          PROJECTS
        </p>
      </motion.div>
    </motion.section>
  );
};

export default HeroOne;