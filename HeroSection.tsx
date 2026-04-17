"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";
import HeroText from "./HeroText";
import HeroSocialIcons from "./HeroSocialIcons";
import DownloadCVButton from "./DownloadCVButton";
import {AnimatedHeroImage} from "@/components/Hero/AnimatedHeroImage"


export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-700/48 opacity-80" />

      <div className="relative w-full z-10 flex flex-col-reverse md:flex-row items-center p-12">
        {/* Left content */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-[60%] py-5">
          <HeroText />
          <HeroSocialIcons />
          <DownloadCVButton />
        </div>

        {/* Right image */}
        <motion.div
          className="relative flex-2 md:w-[40%]"
          style={{ willChange: "transform" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex justify-center items-center">
            <AnimatedHeroImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
