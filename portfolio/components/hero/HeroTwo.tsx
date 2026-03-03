"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroTwo = () => {
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
        className="absolute inset-0 flex items-center justify-center z-10 mb-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
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

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[65%] bg-black z-20" />

      {/* Bottom Text Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[50%] bg-black z-20 flex flex-col items-center justify-end px-10 pb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <p className="text-white text-lg mb-2">GET STARTED</p>
        <p className="text-[16vw] font-black leading-none flex h-[100vh]">
          PROJECTS
        </p>
      </motion.div>
    </motion.section>
  );
};

export default HeroTwo;