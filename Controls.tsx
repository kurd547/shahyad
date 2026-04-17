"use client";

import { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Controls({ query, setQuery }: any) {
  const placeholders = [
    "Projects Name…",
    "Technologies…",
    "Description…",
    "Tags…",
    "Anything…",
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Animate placeholder index every 2 seconds
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex w-full rounded-r-full bg-blue-600">
      <div className="flex flex-1 flex-wrap items-center gap-3 w-full">
        <div className="relative flex-1 min-w-[200px] md:min-w-[240px] rounded-full">
          {/* Search Icon */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />

          {/* Input Field */}
          <input
            id="project-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border-none px-3 py-2 pl-12 text-[16px] md:text-base text-black placeholder-transparent focus:outline-none"
            placeholder=" " // hidden, animated below
          />

          {/* Animated Placeholder */}
          {!query && (
            <div className="absolute left-12 top-1/2 -translate-y-1/2 text-black pointer-events-none flex items-center flex-wrap">
              <span className="mr-1 whitespace-nowrap">Search By</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="inline-block align-middle whitespace-nowrap"
                >
                  {placeholders[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
