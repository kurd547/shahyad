"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export const AnimatedHeroImage = ({
  rotateDepth = 10,
  translateDepth = 15,
}: {
  rotateDepth?: number;
  translateDepth?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  const updatePosition = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const relativeY = clientY - rect.top;
    x.set(relativeX / rect.width - 0.5);
    y.set(relativeY / rect.height - 0.5);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // For touch devices
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex justify-center perspective-distant transform-3d">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ rotateX, rotateY, translateX, translateY }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, z: 50, transition: { duration: 0.2 } }}
        whileTap={{ scale: 1.05, z: 50, transition: { duration: 0.2 } }}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src="/images/hero_img.webp"
          alt="profile"
          className="w-[100vw] lg:w-[36vw] h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};
