import React from "react";
import { PinContainer } from "@/components/ui/layouts";
import { FaLocationArrow } from "react-icons/fa6";


export default function ProjectCard({ project }: { project: any }) {
  return (
    <div
      key={project.id}
      className="lg:min-h-[28rem] h-[25rem] flex items-center justify-center"
    >
      <PinContainer title={project.live || "#"} href={project.live || "#"}>
        <div className="relative flex items-center justify-center w-[80vw] sm:w-[40vw] md:w-[28vw] xl:w-[20vw] xl:h-[20vh] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-3xl bg-blue-700 bg-gradient-to-t from-blue-700/38 to-black">
          <div className="relative w-full overflow-hidden h-full">
            <img src="/projectThumb/bg.png" alt="bgimg" />
            <img
              src={project.thumbnail}
              alt="cover"
              className="z-10 absolute -bottom-16"
            />
          </div>
        </div>

        <h1 className="font-bold lg:text-xl xl:text-2xl md:text-lg text-base line-clamp-1">
          {project.title}
        </h1>

        <p className="lg:text-md xl:text-xl lg:font-normal font-light text-sm line-clamp-2 text-blue-200/80 my-2">
          {project.blurb}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="grid grid-cols-5 items-center gap-x-2">
            {project.tech.slice(0, 5).map((tech:string, index:number) => (
              <div
                key={index}
                className="bg-blue-900/50 w-8 h-8 flex justify-center items-center"
                style={{
                  clipPath:
                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={tech} alt="icon" className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mr-2">
            <p className="flex lg:text-md md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="text-xl text-blue-500" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}


