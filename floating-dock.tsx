"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}

export default function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => (
  <div className={cn("flex md:hidden gap-3 justify-center my-5", className)}>
    {items.map((item) => (
      <motion.a
        key={item.title}
        href={item.href}
        title={item.title}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 dark:bg-blue-900/30"
        style={{
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
      >
        <div className="h-4 w-4">{item.icon}</div>
      </motion.a>
    ))}
  </div>
);

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex mx-auto h-16 items-end gap-4 rounded-2xl px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: DockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

 const distance = useTransform(mouseX, (val: number) => {
  const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
  return val - bounds.x - bounds.width / 2;
});
  const width = useSpring(
    useTransform(distance, [-150, 0, 150], [35, 70, 35]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [35, 70, 35]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [15, 30, 15]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [15, 30, 15]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  return (
    <a href={href}>
      <div className="relative flex items-center justify-center">
        <motion.div
          ref={ref}
          style={{
            width,
            height,
            clipPath:
              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative flex items-center justify-center rounded-full bg-blue-900/30"
        >
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-full border px-2 py-0.5 text-xs whitespace-pre bg-black text-blue-500 shadow-xl shadow-blue-600"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </a>
  );
}
