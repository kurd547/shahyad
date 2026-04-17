"use client";
import { useState, useRef } from "react";
import { MdDownloading, MdFileDownloadDone } from "react-icons/md";
import { TfiDownload } from "react-icons/tfi";

const myCv = "/resume/myCv.pdf";

const DownloadCVButton: React.FC = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const cvBlobRef = useRef<Blob | null>(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    if (!cvBlobRef.current) {
      const res = await fetch(myCv);
      cvBlobRef.current = await res.blob();
    }
    const url = URL.createObjectURL(cvBlobRef.current);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CaptainAj-CV.pdf";
    link.click();
    URL.revokeObjectURL(url);
    setIsDownloading(false);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <button
      aria-label="Download CV"
      className="relative inline-flex h-12 xl:h-14 overflow-hidden rounded-full p-[1px] focus:outline-none mt-6"
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
      onClick={handleDownload}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#fff_50%,#0000ff_100%)]" />
      <span
        className={`relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium backdrop-blur-3xl gap-2 xl:gap-4 xl:hover:gap-8 hover:gap-4 transform duration-300 transition-all ease-in-out 
          ${downloadHover ? "text-blue-500" : "text-white"}`}
      >
        {isDownloaded && (
          <img src="/gif/confetti.gif" alt="success" className="absolute" />
        )}
        <p className={`${isDownloading ? "animate-pulse" : ""}`}>Download CV</p>
        {isDownloaded ? (
          <MdFileDownloadDone className="text-xl text-blue-500 animate-pulse" />
        ) : isDownloading ? (
          <MdDownloading className="text-lg text-blue-500 animate-pulse" />
        ) : (
          <TfiDownload
            className={`text-blue-400 ${downloadHover ? "animate-pulse" : ""}`}
          />
        )}
      </span>
    </button>
  );
};

export default DownloadCVButton;
