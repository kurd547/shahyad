"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { GoArrowUpRight } from "react-icons/go";
import { VscCallOutgoing } from "react-icons/vsc";
import { SlLocationPin } from "react-icons/sl";
import { Animate3DDiv } from "@/components/ui/animations";
import { FiMail } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange", // live validation while typing
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        reset();
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong!");
    }
  };

  const inputClass =
    "w-full p-3 rounded-full bg-blue-700/15 text-blue-200/90 focus:outline-none focus:ring-1 focus:ring-blue-700";

  return (
    <div className="w-full flex flex-col items-center justify-center relative overflow-hidden py-10 bg-transparent">
      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-xl p-4 sm:p-6 md:p-10 py-8 text-center">
        {/* Heading */}
        <Animate3DDiv rotateDepth={10} translateDepth={10}>
          <h1 className="text-5xl sm:text-6xl font-semibold">
            My <span className="text-purple animate-shine">Contact</span>
          </h1>
        </Animate3DDiv>

        <p className="text-gray-300 max-w-xl mx-auto my-8">
          If you're interested in working together, have a project in mind, or
          simply want to connect, reach out through the form below or via the
          contact information provided.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black p-6 rounded-3xl shadow-lg flex flex-col gap-6 border border-blue-700/30 relative"
        >
          {/* Name Field */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 4, message: "Minimum 4 letters required" },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Numbers are not allowed",
                },
              })}
              className={`${inputClass} ${
                errors.name ? "border border-red-500" : ""
              }`}
            />
            {errors.name && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-red-500 text-sm whitespace-nowrap">
                <AiOutlineExclamationCircle className="text-lg" />
                {errors.name.message}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`${inputClass} ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            {errors.email && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-red-500 text-sm whitespace-nowrap">
                <AiOutlineExclamationCircle className="text-lg" />
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Subject Field */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className={`${inputClass} ${
                errors.subject ? "border border-red-500" : ""
              }`}
            />
            {errors.subject && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-red-500 text-sm whitespace-nowrap">
                <AiOutlineExclamationCircle className="text-lg" />
                {errors.subject.message}
              </div>
            )}
          </div>

          {/* Message Field */}
          <div className="relative w-full">
            <textarea
              placeholder="Message"
              rows={4}
              {...register("message", { required: "Message is required" })}
              className={`${inputClass} rounded-xl ${
                errors.message ? "border border-red-500" : ""
              }`}
            />
            {errors.message && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-red-500 text-sm whitespace-nowrap">
                <AiOutlineExclamationCircle className="text-lg" />
                {errors.message.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 
               hover:bg-blue-600 text-black font-semibold py-3 px-6 
               rounded-full flex justify-center items-center 
               gap-0 hover:gap-2 transition-all duration-300"
          >
            Submit
            <MdKeyboardDoubleArrowRight className="text-2xl" />
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
        {/* Email */}
        <a
          href="shahyad024@gmail.com"
          className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2"
        >
          <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
            <FiMail />
          </span>
          <div className="flex flex-col mr-10 text-left">
            <span className="text-gray-200 text-[12px]">Email address</span>
            <span className="text-gray-400 text-[11px] font-extralight">
              shahyad024@gmail.com
            </span>
          </div>
          <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
            <GoArrowUpRight />
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+9647501130655"
          className="flex items-center justify-between gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
              <VscCallOutgoing />
            </span>
            <div className="flex flex-col mr-10 text-left">
              <span className="text-gray-200 text-[12px]">Contact number</span>
              <span className="text-gray-400 text-[11px] font-extralight">
                +964 750 113 06 55
              </span>
            </div>
          </div>
          <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
            <GoArrowUpRight />
          </span>
        </a>

        {/* Location */}
        <a
          href="https://maps.google.com/?q=Khurmal"
          target="_blank"
          className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2"
        >
          <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
            <SlLocationPin />
          </span>
          <div className="flex flex-col mr-10 text-left">
            <span className="text-gray-200 text-[12px]">Location</span>
            <span className="text-gray-400 text-[11px] font-extralight">
              Xurmall, Kurdstan, Iraq
            </span>
          </div>
          <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
            <GoArrowUpRight />
          </span>
        </a>
      </div>
    </div>
  );
}
