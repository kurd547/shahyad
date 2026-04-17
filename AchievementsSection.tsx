"use client";

import { Animate3DDiv } from "@/components/ui/animations";
import { GiAchievement } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import { HomeAchievements } from "@/data";
import Link from "next/link";

const AchievementsSection = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-10 text-white z-10">
      <Animate3DDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-4xl text-center sm:text-6xl font-semibold">
          My <span className="text-purple animate-shine">Achievements</span>
        </h1>
      </Animate3DDiv>
      <p className="text-center text-gray-300 my-5 max-w-xl">
        Highlights from my journey — milestones that reflect growth,
        consistency, and a drive to keep building.
      </p>

      <div className="relative flex flex-col pt-10 max-w-2xl">
        {HomeAchievements.map((achievement, idx) => (
          <div
            key={idx}
            className={`${achievement.style} relative from-blue-900/30 hover:from-blue-700 via-blue-700 to-blue-600 hover:scale-105 
            transition-transform duration-300 text-white rounded-4xl p-6 sm:py-10 shadow-xl backdrop-blur-sm hover:z-50 
            hover:rotate-0 flex flex-col md:flex-row gap-4`}
          >
            <div className="flex items-center space-x-6 md:w-[40%] text-5xl">
              <achievement.icon />
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            <span className="md:w-[60%]">
              <p className="mt-2 text-gray-200">{achievement.description}</p>
            </span>
          </div>
        ))}

        <Link
          href="/achievements"
          className="relative w-full bg-gradient-to-t from-blue-700 hover:from-blue-700 via-blue-800 to-blue-600 
          duration-500 text-white rounded-full px-4 py-3 sm:px-6 sm:py-4 
          flex justify-between items-center transition-all mt-5"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <GiAchievement className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
          <span className="flex items-center transition-all duration-500">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-500">
              VIEW ALL MY ACHIEVEMENTS
            </h3>
            <MdKeyboardDoubleArrowRight
              className={`hidden sm:block text-2xl sm:text-3xl -ml-1 opacity-0 transition-all duration-500 ${
                hover ? "opacity-100 ml-2 animate-pulse" : ""
              }`}
            />
          </span>
          <GiAchievement className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
        </Link>
      </div>
    </div>
  );
};

export default AchievementsSection;
