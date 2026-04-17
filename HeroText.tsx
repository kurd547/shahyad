"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Animate3DText } from "@/components/ui/animations";
import { titles } from "@/data/sections/heroDatas";
import { useEffect, useState } from "react";

const HeroText: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center md:text-left flex-2 min-h-[150px]">
      <p className="text-xl">Hello, It&apos;s Me</p>
      <div className="">
        <Animate3DText
          text="Shahyad barzi"
          className="text-[16vw] md:text-[9vw] xl:text-[10vw] font-bold text-nowrap animate-shine text-start w-full"
          rotateDepth={10}
          translateDepth={10}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center sm:gap-2 text-[8vw] md:text-[2.5vw] lg:text-[3vw]  xl:text-[3.5vw] font-semibold mt-2">
        <span className="text-white">And I'm a</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.h2
            key={index}
            className="text-blue-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {titles[index].title}
          </motion.h2>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={index}
          className="mt-4 text-blue-200 max-w-xl text-[4vw] md:text-[2vw]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {titles[index].description}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default HeroText;
