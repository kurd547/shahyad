"use client";

import { motion, animate } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

export default function AchievementHero() {
  // Premium smooth scroll with Framer Motion spring
  const scrollToSection = (id: any) => {
    const target = document.getElementById(id);
    if (!target) return;

    const end = target.getBoundingClientRect().top + window.scrollY;

    animate(window.scrollY, end, {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <div className="relative min-h-screen text-slate-100 py-10 px-6 sm:px-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight text-blue-600 text-nowrap"
          >
            My Achievements
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text"
          >
            Celebrating milestones that define my coding journey from{" "}
            <span className="text-blue-600 font-semibold">
              LeetCode streaks
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-semibold">GitHub projects</span>{" "}
            to{" "}
            <span className="text-blue-600 font-semibold">certifications</span>{" "}
            and real-world problem-solving wins. Every line of code tells a
            story.
          </motion.p>
        </div>

        {/* Right: Stats / Badges */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="border-2 border-blue-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-3xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">650+</span>
              <span className="text-sm text-slate-300 mt-1">
                LeetCode Problems
              </span>
            </div>
            <div className="border-2 border-slate-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-3xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">20+</span>
              <span className="text-sm text-slate-300 mt-1">Badges Earned</span>
            </div>
            <div className="border-2 border-slate-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-3xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">100+</span>
              <span className="text-sm text-slate-300 mt-1">
                GitHub Projects
              </span>
            </div>
            <div className="border-2 border-blue-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-3xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">500+</span>
              <span className="text-sm text-slate-300 mt-1">Days Streak</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="w-auto flex py-1 pr-1 border-2 border-blue-700 rounded-full mt-10 -mb-14 overflow-hidden gap-2">
        <span className="bg-blue-600 rounded-r-full px-2 flex justify-center items-center text-black gap-1">
          Navigate
          <IoIosArrowForward className="rotate-90" />
        </span>
        <div className="flex justify-center items-center text-blue-600">
          <button
            onClick={() => scrollToSection("leetcode")}
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            LeetCode
          </button>
          <button
            onClick={() => scrollToSection("github")}
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            GitHub
          </button>
          <button
            onClick={() => scrollToSection("certificates")}
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            Certificates
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            Footer
          </button>
        </div>
      </div>
    </div>
  );
}
