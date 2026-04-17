"use client";

import React from "react";
import { Rocket, Briefcase, GitCommit, Users } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

// Optimized Counter using requestAnimationFrame
const Counter = ({ end, label, icon: Icon }: any) => {
  const [count, setCount] = React.useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16); // ~60fps

    const updateCounter = () => {
      start += step;
      if (start >= end) start = end;
      setCount(Math.floor(start));
      if (start < end) requestAnimationFrame(updateCounter);
    };
    requestAnimationFrame(updateCounter);
  }, [end, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Icon className="w-6 h-6 text-blue-500 mb-1" />
      <h3 className="text-2xl font-bold text-white">{count}+</h3>
      <p className="text-xs text-blue-200">{label}</p>
    </motion.div>
  );
};

function HeaderCarousel() {
  return (
    <div className="w-full relative shadow-xl p-4 h-screen flex justify-center items-center text-center overflow-hidden">
      <motion.div
        className="relative flex flex-col items-center gap-4 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="relative text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 flex justify-center items-center gap-2">
          <Rocket className="h-4 w-4" /> My Software Projects
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>

        <h1 className="text-5xl font-extrabold tracking-tight text-white leading-tight">
          Showcasing <span className="text-blue-600">Projects</span>
        </h1>

        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
          Explore production-ready projects built with precision, performance,
          and creativity. From robust architectures to sleek user experiences,
          each build is designed to stand the test of real-world demands.
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <Counter end={50} label="Projects" icon={Briefcase} />
          <Counter end={3000} label="Commits" icon={GitCommit} />
          <Counter
            end={85}
            label="Repositories"
            icon={RiGitRepositoryCommitsLine}
          />
          <Counter end={10} label="Clients" icon={Users} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeaderCarousel;
