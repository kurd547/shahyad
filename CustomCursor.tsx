"use client";

import { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false); // ✅ default hidden

  useEffect(() => {
    // detect if it's a desktop device (fine pointer)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return; // don’t show at all on touch devices

    setShowCursor(true); // ✅ only show on desktop

    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    let animationFrame: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.5;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.5;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(-65deg)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!showCursor) return null; // ✅ don’t render until confirmed desktop

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none text-blue-600"
      style={{ width: 24, height: 24 }}
    >
      <FaLocationArrow size={24} />
    </div>
  );
}
