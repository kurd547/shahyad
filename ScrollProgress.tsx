"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      setScroll((scrolled / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999]">
      <div
        className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                   transition-[width] duration-500 ease-out rounded-r-full"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
