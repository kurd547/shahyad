"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    title: string;
    profile: string;
  }[];
  direction?: "left" | "right";
  speed?: number; 
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = 20,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) addAnimation();
  }, []);

  const addAnimation = () => {
    if (scrollerRef.current) {
      // duplicate items for infinite scroll
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicate);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  };

  const setDirection = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty("--animation-duration", `${speed}s`);
    }
  };

  // Pause/resume animation on touch (mobile) or mouse (desktop)
  const pauseAnimation = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "paused";
  };
  const resumeAnimation = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        onMouseDown={pauseAnimation} // desktop click & hold
        onMouseUp={resumeAnimation}
        onMouseLeave={resumeAnimation}
        onTouchStart={pauseAnimation} // mobile tap & hold
        onTouchEnd={resumeAnimation}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] sm:w-[60vw] max-w-full relative rounded-3xl border border-b-0
             flex-shrink-0 border-blue-700 p-5 md:p-10 md:w-[60vw] bg-gradient-to-br to-blue-600 from-blue-900"
          >
            <blockquote className="h-full w-full">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="h-full w-full flex flex-col justify-between">
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                  <div
                    className="w-12 h-12 flex justify-center items-center"
                    style={{
                      clipPath: `polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)`,
                      backgroundImage: `url(${item.profile})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <span className="flex flex-col">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
