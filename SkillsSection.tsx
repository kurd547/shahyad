"use client";

import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { createRoot } from "react-dom/client";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Animate3DDiv } from "../ui/animations";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { skills } from "@/data";

export default function SkillsSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const getRadius = () => {
      const width = window.innerWidth;
      if (width < 640) return 200;
      return 250;
    };

    const texts = skills.map((_, i) => i.toString());
    const tagCloud = TagCloud(containerRef.current, texts, {
      radius: getRadius(),
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    });

    // Replace text spans with icons
    const spans = containerRef.current.querySelectorAll("span");
    spans.forEach((span, i) => {
      const root = createRoot(span);
      const IconComponent = skills[i % skills.length].icon;
      root.render(<IconComponent />);
    });

    return () => {
      tagCloud.destroy();
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white overflow-hidden my-5">
      <div className="flex flex-col md:flex-row w-full h-full p-4 sm:p-6 md:p-10 justify-between items-center">
        {/* Left-side content */}
        <div className="flex-1 flex flex-col justify-center  md:items-start gap-6">
          <Animate3DDiv rotateDepth={10} translateDepth={10}>
            <h1 className="text-4xl md:tetxt-6xl font-bold text-center">
              Explore My{" "}
              <span className="text-purple animate-shine">Skills</span>
            </h1>
          </Animate3DDiv>
          <p className="text-lg md:text-xl text-gray-300 max-w-md text-center md:text-start">
            Here you can see the technologies I work with. Click the button
            below to explore detailed information about each skill.
          </p>
          <Link href="/skills">
            <motion.button
              type="submit"
              className="hidden md:flex  bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 
            hover:bg-blue-600 text-black font-semibold py-3 px-6 
            rounded-full justify-center items-center 
            gap-0 hover:gap-2 transition-all duration-300"
            >
              View Skills
              <MdKeyboardDoubleArrowRight className="text-2xl" />
            </motion.button>
          </Link>
        </div>

        {/* Right-side TagCloud Globe */}
        <div className="flex-1 flex justify-center items-center w-full h-full">
          <div
            ref={containerRef}
            className="tagcloud flex justify-center items-center text-2xl sm:text-3xl text-blue-700"
          />
        </div>

        <motion.button
          type="submit"
          className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 
            hover:bg-blue-600 text-black font-semibold py-3 px-6 
            rounded-full flex md:hidden justify-center items-center 
            gap-0 hover:gap-2 transition-all duration-300 w-full"
        >
          View Skills
          <MdKeyboardDoubleArrowRight className="text-2xl" />
        </motion.button>
      </div>
    </div>
  );
}
