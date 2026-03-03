"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative snap-start w-full h-screen overflow-hidden bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* 1. Background Split */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/2 h-full bg-white" />
        <div className="w-1/2 h-full bg-black" />
      </div>

      {/* 2. Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-10 py-8">
        <div className="text-2xl font-black tracking-tighter mix-difference random-color">
          {/* Ambar Mishra */}
        </div>
        <ul className="flex items-center gap-8 text-sm font-bold text-white">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">About</li>
          <li className="cursor-pointer hover:opacity-70">History</li>
          <li>
            <a
              href="/Ambar_Mishra_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-1 rounded-sm text-xs font-black bg-random-color hover:opacity-80 transition"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>

      {/* 3. Giant Background Text Layer */}
      <div className="absolute inset-0 flex items-center z-10 pointer-events-none overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-left">
          <h1 className="text-[16vw] font-black leading-none flex random-color">
            <span className="outline-text-black mr-10">SOFTWARE</span>
            <span className="outline-text-white mr-20">DEVELOPER</span>
          </h1>

          <h1 className="text-[16vw] font-black leading-none flex random-color">
            <span className="outline-text-black mr-10">SOFTWARE</span>
            <span className="outline-text-white mr-20">DEVELOPER</span>
          </h1>
        </div>
      </div>

      {/* 4. Character Image Layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="relative w-full h-[100vh] max-w-4xl">
          <Image
            src="/ambar-update.png"
            alt="Amandeep Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* 5. Content Overlay Layer */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col justify-between p-10 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {/* Top Text */}
        <div className="mt-24">
          <h2 className="text-5xl font-serif mix-difference random-color">
            I'm Ambar
          </h2>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end pb-10">
          {/* Quote */}
          <div className="max-w-[280px]">
            <span className="text-7xl font-serif block leading-none mix-difference random-color">
              “
            </span>
            <p className="text-sm text-gray-600 mt-[-10px] pointer-events-auto random-color-black">
              Ambar&apos;s Exceptional product design ensure our website&apos;s success. <br />
              <span className="font-extrabold text-black random-color-black">
                Highly Recommended
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="text-right text-white space-y-2 pointer-events-auto">
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
    </motion.section>
  );
};

export default Hero;