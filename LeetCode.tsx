import React from "react";
import { SparklesText } from "@/components/ui/effects/SparklesText";
import { CometCard } from "@/components/ui/animations";
import {leetCodeBadges} from "@/data"

export default function LeetCode() {
  return (
    <div className="bg-transparent p-10">
      <SparklesText text="Leet Code" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-10 -mt-15">
        {leetCodeBadges.map((badge, index) => (
          <CometCard
            key={index}
            className="w-full h-full text-white flex items-center justify-center font-bold text-xl"
          >
            <img src={badge.card} alt={badge.alt} width="220" />
          </CometCard>
        ))}
      </div>
    </div>
  );
}
