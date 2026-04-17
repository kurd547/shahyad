"use client";
import { Animate3DDiv } from "@/components/ui/animations";
import { socialLinks } from "@/data/sections/heroDatas";
import React from "react";

const HeroSocialIcons: React.FC = React.memo(() => (
  <div className="flex justify-center md:justify-start gap-4 mt-6">
    {socialLinks.map(({ id, icon: Icon, url, label }) => (
      <Animate3DDiv key={id} rotateDepth={5} translateDepth={6}>
        <span className="bg-gray-800 hover:bg-transparent rounded-2xl">
          <a
            href={url}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 xl:w-14 xl:h-14 flex items-center justify-center bg-gray-800 hover:bg-blue-700 transition-all duration-500 shadow-md rotate-90"
            style={{
              clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
            }}
          >
            <Icon size={20} className="-rotate-90" />
          </a>
        </span>
      </Animate3DDiv>
    ))}
  </div>
));

export default HeroSocialIcons;
