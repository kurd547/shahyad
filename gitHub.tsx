import React from "react";
import { SparklesText } from "../ui/effects/SparklesText";
import { githubAchievements } from "@/data";
import {Animate3DDiv} from "@/components/ui/animations"

export default function gitHub() {
  return (
    <div className="bg-transparent p-10">
      <SparklesText text="GitHub" />
      <section className="-mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {githubAchievements.map(({ id, img, name }) => (
            <Animate3DDiv rotateDepth={5} translateDepth={5}
              key={id}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <img
                src={img}
                alt={name}
                className="rounded-3xl w-full object-contain"
              />
            </Animate3DDiv>
          ))}
        </div>
      </section>
    </div>
  );
}

