import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  key: string;
  icon: React.ReactNode;
  label: string;
}

export default function SkillCard({ key, icon, label }: SkillCardProps) {
  return (
    <motion.div
      key={key}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center  hover:border-blue-500 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl mb-3">{icon}</div>
      <p className="text-sm md:text-lg font-medium text-gray-200">{label}</p>
    </motion.div>
  );
}
