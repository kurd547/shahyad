"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const defaultAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

type AnimatedTextProps = {
  text: string[];
  el?: React.ElementType<{ className?: string; children?: React.ReactNode }>;
  className?: string;
  repeatDelay?: number;
  animation?: Variants;
};

function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  repeatDelay = 3000,
  animation = defaultAnimation,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Animate visible text whenever index changes
  useEffect(() => {
    controls.start("visible");
  }, [index, controls]);

  // Main loop: hide current text, update index
  useEffect(() => {
    if (paused) return;

    const timeout = setTimeout(async () => {
      await controls.start("hidden");
      setIndex((prev) => (prev + 1) % text.length);
    }, repeatDelay);

    return () => clearTimeout(timeout);
  }, [index, paused, repeatDelay, controls, text.length]);

  const currentText = text[index];

  return (
    <Wrapper
      className={className}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Accessibility */}
      <span className="sr-only">{currentText}</span>

      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {currentText.split(" ").map((word, wi) => (
          <span className="inline-block" key={`${word}-${wi}`}>
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${char}-${ci}`}
                className="inline-block"
                variants={animation}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

export default AnimatedText;
