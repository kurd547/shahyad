"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/layouts";
import { Animate3DDiv } from "@/components/ui/animations";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [visible, setVisible] = useState(3);
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(2);
      } else if (window.innerWidth < 1250) {
        setVisible(6);
      } else {
        setVisible(8);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!triggered && entries[0].isIntersecting) {
          triggered = true;
          setLoading(true);
          setTimeout(() => router.push("/projects"), 1500);
        }
      },
      { threshold: 0.8 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [router]);

  return (
    <div className="flex relative justify-center items-center flex-col z-20 sm:p-5 my-10">
      {/* Heading */}
      <Animate3DDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-5xl sm:text-6xl font-semibold text-center">
          My <span className="text-purple animate-shine">Projects</span>
        </h1>
      </Animate3DDiv>

      {/* ---- MOBILE SWIPER ---- */}
      <div className="w-full sm:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          freeMode={true}
        >
          {projects.slice(0, 3).map((item) => (
            <SwiperSlide key={item.id} className="pb-16">
              <div className="h-[25rem] flex items-center justify-center">
                <PinContainer title={item.live} href={item.live}>
                  <div className="relative flex items-center justify-center w-[90vw] overflow-hidden h-[50vw] mb-10 rounded-3xl bg-blue-700 bg-gradient-to-t from-blue-700/38 to-black">
                    <div className="relative w-full overflow-hidden h-full">
                      <img src="/projectThumb/bg.png" alt="bgimg" />
                      <img
                        src={item.thumbnail}
                        alt="cover"
                        loading="lazy"
                        className="z-10 absolute -bottom-16"
                      />
                    </div>
                  </div>

                  <h1 className="font-bold text-lg line-clamp-1">
                    {item.title}
                  </h1>
                  <p className="text-sm font-light line-clamp-2 text-blue-200/80 my-2">
                    {item.blurb}
                  </p>

                  <div className="flex items-center justify-between mt-5">
                    <div className="grid grid-cols-5 items-center gap-x-2">
                      {item.tech.map((icon, index) => (
                        <div
                          key={index}
                          className="bg-blue-900/50 w-8 h-8 flex justify-center items-center"
                          style={{
                            clipPath:
                              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 mr-2">
                      <p className="flex text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="text-xl text-blue-500" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </SwiperSlide>
          ))}

          {/* Extra slide: "More Projects" button */}
          <SwiperSlide>
            <div
              ref={cardRef}
              className="relative flex items-center justify-center w-full h-[28rem] rounded-3xl overflow-hidden group p-8"
            >
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full rounded-4xl p-6 border-2 border-blue-600">
                {loading ? (
                  <div className="flex flex-col justify-center items-center text-center">
                    {/* Loader */}
                    <div className="w-24 h-24 border-6 border-blue-600 border-y-blue-500 rounded-4xl animate-spin mb-20"></div>
                    <p className="text-2xl font-semibold animate-pulse text-blue-600">
                      Taking You To My Projects…
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full p-6 flex flex-col justify-between items-center text-5xl text-blue-600 font-semibold text-center">
                    {/* Default state */}
                    <GrProjects />
                    <p className="text-3xl">VIEW ALL MY PROJECTS</p>
                    <IoIosArrowForward className="border-2 p-2 text-6xl rounded-full -rotate-45" />
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ---- DESKTOP GRID ---- */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-10 mt-10">
        {projects.slice(0, visible).map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>

      {/* ---- DESKTOP "More Projects" button ---- */}
      <div className="w-[100vw] h-[200px] absolute z-50 -bottom-5 bg-gradient-to-t from-transparent via-blue-700/40 to-transparent justify-center items-center hidden sm:flex">
        <Link href="/projects">
          <button className="relative inline-flex h-12 xl:h-14 overflow-hidden rounded-full p-[1px] focus:outline-none hover:text-blue-500 hover:animate-pulse">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#fff_50%,#0000ff_100%)]" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-4 pr-3 py-1 text-sm font-medium backdrop-blur-3xl gap-2 xl:gap-4 xl:hover:gap-8 hover:gap-6 transform duration-300 transition-all ease-in-out">
              Check Out More Projects <IoIosArrowForward className="text-2xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
