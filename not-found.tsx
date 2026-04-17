"use client";

import Link from "next/link";
import CustomCursor from "@/components/Common/CustomCursor";
import { IoIosArrowForward } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="flex h-screen overflow-hidden flex-col items-center justify-center bg-black text-center">
      <CustomCursor />
      {/* Animated 404 Text */}
      <h1 className="text-[50vw] max-sm:mb-[60%] font-extrabold bg-gradient-to-br from-blue-500 via-blue-700 to-black bg-clip-text text-transparent animate-gradient-x">
        404
      </h1>

      {/* Glass Effect Card */}
      <div className="absolute max-w-[90%] sm:max-w-md md:max-w-lg w-full rounded-3xl backdrop-blur-lg border border-blue-500/90 border-l-3 border-t-2 p-6 sm:p-8 md:p-10 shadow-lg z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Oops, page not found!
        </h2>
        <p className="mt-4 text-sm sm:text-md md:text-md text-blue-300">
          Something went wrong. The page you’re looking
          <br /> for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-block px-4 sm:px-6 pr-4 py-2 sm:py-3 rounded-full 
       bg-gradient-to-r from-blue-600 to-black 
       text-white font-medium
       transition [background-size:200%_200%] animate-gradient"
        >
          <button className="flex justify-center items-center gap-1 sm:gap-2 hover:gap-3 transform duration-300 text-sm sm:text-base">
            Back to homepage{" "}
            <IoIosArrowForward className="text-xl sm:text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}
