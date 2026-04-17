"use client";

import { cn } from "@/lib/utils";
import { IconMenu, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiMap } from "react-icons/hi";
// Types
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface VisibleComponentProps {
  visible?: boolean;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Navbar
export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState(false);

  // Throttled scroll handler for smooth performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("sticky inset-x-0 top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement<VisibleComponentProps>(child) &&
        "visible" in child.props
          ? React.cloneElement(child, { visible })
          : child
      )}
    </div>
  );
};

// NavBody
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        y: visible ? 20 : 0,
        opacity: visible ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between lg:flex",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// NavItems
export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center text-sm font-medium lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          onMouseEnter={() => !isMobile && setHovered(idx)}
          onClick={onItemClick}
          href={item.link}
          className="relative px-6 py-2 text-white hover:text-blue-700 "
        >
          {!isMobile && hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full border-[1.5px]  backdrop-blur-2xl"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
      <a
        href="/sitemap"
        className="relative py-2 px-6 text-white hover:text-blue-700"
      >
        <span className="relative z-20 flex items-center justify-center">
          <HiMap className="rotate-90" />
          ite Map
          <FiArrowUpRight className="ml-1" />
        </span>
      </a>
    </div>
  );
};

// MobileNav
export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        y: visible ? 20 : 0,
        opacity: visible ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-full flex-col items-center justify-between px-2 sm:py-2 lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// MobileNavHeader
export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => (
  <div
    className={cn(
      "flex w-full flex-row items-center justify-between max-sm:mt-2",
      className
    )}
  >
    {children}
  </div>
);

// MobileNavMenu
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "absolute inset-x-0 top-16 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-neutral-950 px-4 py-6",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MobileNavToggle
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu className="text-white" onClick={onClick} />
  );

// NavbarLogo
export const NavbarLogo = () => (
  <a
    href="/"
    className="relative z-20 flex items-center sm:space-x-2 sm:px-2 sm:py-1 font-normal text-black"
  >
    <img src="./images/ca_white_logo.webp" alt="logo" width={35} height={30} />
  </a>
);
