import React from "react";
import Spotlight from "@/components/ui/effects/Spotlight"; 
import Navbar from "@/components/Navbar/Navbar";
import MatrixScroller from "./MatrixScroller";
// import AnimatedText from "../ui/AnimatedText";

function Hero() {
  return (
    <div
      className="relative py-20 w-full flex justify-center items-center h-[500px] sm:h-[100vh] bg-cover bg-top"
      style={{ backgroundImage: "url('/images/hero_bg.webp')" }}
    >
      <Navbar />
      <MatrixScroller />
      <div
        className="relative w-full flex justify-center items-center h-[500px] sm:h-[100vh] bg-cover bg-top p-2 z-10"
        style={{ backgroundImage: "url('/images/aj_wo_bg.webp')" }}
      >
        <div className="flex flex-col absolute bottom-10 gap-2 font-bold text-white">
          {/* <AnimatedText 
            text={[
              "Building the future.",
              "Scaling ideas to billions.",
              "Powered by Next.js + Framer Motion."
            ]}
            el="h1"
            className="text-4xl font-bold"
            repeatDelay={2000} 
          /> */}
        </div>

        <Spotlight />
      </div>
    </div>
  );
}

export default Hero;
