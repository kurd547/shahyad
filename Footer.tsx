"use client";

import Link from "next/link";
import Image from "next/image";
import { Animate3DDiv } from "@/components/ui/animations";
import { FooterFloatingDock } from "@/components/Footer/FooterFlowtingDock";
import { useMemo } from "react";

const linkStyle =
"text-sm md:text-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-900/30 border hover:border-blue-600 sm:px-6 py-1 rounded-full bg-gradient-to-r from-blue-950 via-blue-600 to-blue-950 bg-clip-text text-transparent"

export default function Footer() {
  // Memoize navigation links for performance
  const navLinks = useMemo(
    () => [
      { href: "/about", label: "About" },
      { href: "/skills", label: "Skills" },
      { href: "/projects", label: "Projects" },
      { href: "/services", label: "Services" },
      { href: "/achievements", label: "Achievements" },
      { href: "/experience", label: "Experience" },
      { href: "/company", label: "Company" },
      { href: "/startups", label: "Startups" },
      { href: "/resume", label: "Resume" },
      { href: "/contact", label: "Contact" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/faq", label: "FAQ" },
      { href: "/sitemap", label: "Site Map" },
    ],
    []
  );

  return (
    <footer className="text-blue-200/50 w-full z-10 relative">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col justify-center items-center">
      <span className="w-full h-[1px] bg-gradient-to-r from-black via-blue-600 mb-12 to-black"></span>

        {/* Logo + Name
        <Animate3DDiv className="flex items-center mb-4" rotateDepth={5} translateDepth={5}>
          <Link href="/" className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black justify-center">
            <Image src="/images/ca_white_logo.webp" alt="logo" width={55} height={55} priority />
          </Link>
        </Animate3DDiv> */}

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center text-sm gap-4">
          {navLinks.map(({ href, label }, idx) => (
            <Link key={idx} href={href} className={linkStyle}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Name Big Gradient */}
        <div className="flex w-full overflow-hidden justify-center items-center">
          <Animate3DDiv rotateDepth={2} translateDepth={2} className="max-sm:mt-6">
          <h1 className="text-[15vw] font-extrabold bg-gradient-to-r from-black via-blue-700 to-blue-black bg-clip-text px-50 text-transparent animate-gradient-x whitespace-nowrap">
            Shahyad barzi
          </h1>
        </Animate3DDiv>
        </div>

        {/* Social Links */}
        <FooterFloatingDock />

        {/* Bottom Section */}
        <div className="w-full text-center text-xs text-blue-200/50 max-ms:mt-6">
          © {new Date().getFullYear()} Shahyad B Gulpi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
