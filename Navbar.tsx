"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/layouts/resizable-navbar";

import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaCogs,
  FaTrophy,
  FaRegComments,
  FaFileAlt,
  FaEnvelope,
  FaSitemap,
} from "react-icons/fa";

const items = [
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-blue-600" />,
    href: "https://x.com/shahyad92026",
  },
  {
    title: "LinkedIn",
    icon: <SlSocialLinkedin className="h-full w-full text-blue-600" />,
    href: "https://www.linkedin.com/in/kaka-gulpi-498688403?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    title: "Discord",
    icon: <IconHome className="h-full w-full text-blue-600" />,
    href: "https://discord.com/shahyad20",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-blue-600" />,
    href: "https://github.com/kurd547",
  },
  {
    title: "Leetcode",
    icon: <SiLeetcode className="h-full w-full text-blue-600" />,
    href: "https://leetcode.com/u/Shahyad12/",
  },
];

const navLinks = [
  { name: "Home", link: "/", icon: <FaUserAlt /> },
  { name: "About", link: "/about", icon: <FaUserAlt /> },
  { name: "Skills", link: "/skills", icon: <FaTools /> },
  { name: "Projects", link: "/projects", icon: <FaProjectDiagram /> },
  { name: "Experience", link: "/experience", icon: <FaBriefcase /> },
  { name: "Services", link: "/services", icon: <FaCogs /> },
  { name: "Achievements", link: "/achievements", icon: <FaTrophy /> },
  { name: "Testimonials", link: "/testimonials", icon: <FaRegComments /> },
  { name: "Resume", link: "/resume", icon: <FaFileAlt /> },
  { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
  { name: "Site Map", link: "/sitemap", icon: <FaSitemap /> },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const controls = useDragControls();

  // Lock body scroll
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <Navbar className="absolute top-4 flex justify-center bg-transparent justify-self-center sm:px-8 z-40">
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks.slice(0, 5)} />
      </NavBody>

      <Link
        href="/contact"
        className="hidden lg:flex justify-center items-center"
      >
        <span className="bg-transparent border-[1.5px] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 hover:border-blue-700 transition-colors duration-300 text-nowrap flex justify-center items-center">
          Contact Me
        </span>
      </Link>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile menu popup */}
        <AnimatePresence>
          {menuOpen && (
            <div
              className="absolute h-screen w-screen bg-black/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                className="absolute bottom-0 left-0 w-full max-h-[80vh] overflow-hidden rounded-t-[50px] border-t-2 border-blue-600 bg-black"
                initial={false}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "tween", duration: 0.5 }}
                drag="y"
                dragControls={controls}
                dragListener={false}
                dragElastic={0}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 0 || info.velocity.y > 0) {
                    setMenuOpen(false);
                  }
                }}
              >
                {/* Drag handle */}
                <div
                  className="sticky top-0 z-50 flex w-full cursor-grab justify-center rounded-t-full bg-black p-4 backdrop-blur-sm active:cursor-grabbing"
                  onPointerDown={(e) => controls.start(e)}
                >
                  <button className="h-1 w-24 rounded-full bg-blue-600" />
                </div>

                {/* Scrollable nav links */}
                <div className="overflow-y-auto max-h-[calc(75vh-64px)] px-2 py-4">
                  <nav className="flex flex-col gap-0 pb-20">
                    {navLinks.map((item, idx) => {
                      const active = pathname === item.link;

                      return (
                        <Link
                          key={idx}
                          href={item.link}
                          className="flex items-center justify-between rounded-full overflow-hidden gap-0"
                        >
                          {/* Left Circle with Number */}
                          <div
                            className={`flex items-center justify-center h-12 w-12 rounded-full text-lg font-medium border-1 border-blue-600 ${
                              active
                                ? "bg-blue-600 text-black"
                                : "bg-transparent text-blue-600 "
                            }`}
                          >
                            {item.icon}
                          </div>

                          {/* Middle Text */}
                          <div
                            className={`flex-1 h-12 flex text-2xl font-medium tracking-wide rounded-full border-1 border-blue-600 justify-center items-center ${
                              active ? "bg-blue-600" : "bg-black"
                            }`}
                          >
                            <span
                              className={`
                              ${
                                active
                                  ? "bg-gradient-to-r px-6 from-blue-600 via-black to-blue-600 text-transparent bg-clip-text"
                                  : "bg-gradient-to-r px-10 from-black via-blue-600 to-black text-transparent bg-clip-text "
                              }
                              `}
                            >
                              {item.name}
                            </span>
                          </div>

                          {/* Right Circle with Arrow */}
                          <div
                            className={`flex items-center justify-center h-12 w-12 rounded-full text-2xl font-medium border-1 border-blue-600 ${
                              active
                                ? "bg-blue-600 text-black"
                                : "bg-transparent text-blue-600 "
                            }`}
                          >
                            {active ? <FiArrowDownLeft /> : <FiArrowUpRight />}
                          </div>
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Footer icons + copyright */}
                <div className="sticky bottom-0 flex flex-col gap-2 rounded-t-4xl bg-black py-4 pb-20 md:hidden">
                  <div className="flex justify-center gap-3">
                    {items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/30"
                        style={{
                          clipPath:
                            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                        }}
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </a>
                    ))}
                  </div>
                  <div className="w-full text-center text-xs text-blue-200/50">
                    © {new Date().getFullYear()} Shahyad B Gulpi. All rights
                    reserved.
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </MobileNav>
    </Navbar>
  );
}
