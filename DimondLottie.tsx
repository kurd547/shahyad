"use client"
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function DimondLottie() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lottie/dimondLottie.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie JSON:", err));
  }, []);

  if (!animationData) return <p>Loading...</p>;

  return <Lottie animationData={animationData} loop={true} />;
}
