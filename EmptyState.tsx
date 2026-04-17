import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { TbZoomReset } from "react-icons/tb";

export default function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-12 sm:px-6 lg:px-8">
      {/* Animated Icon */}

      <motion.div
        className="text-blue-600"
        animate={{ rotate: [0, 15, -15,  0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Search className="h-20 w-20" />
      </motion.div>

      {/* Heading */}
      <motion.h3
        className="mt-6 text-2xl font-bold text-blue-600 sm:text-4xl text-center"
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        No Results Found
      </motion.h3>

      {/* Subtext */}
      <motion.p
        className="mt-2 max-w-lg text-center text-gray-400 sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        We couldn’t find any projects matching your search criteria.
        <br className="hidden sm:block" />
        Try adjusting your filters or search keywords.
      </motion.p>

      {/* Reset Button */}
      <motion.button
        onClick={onReset}
        className="flex justify-center items-center gap-2 mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:scale-95 duration-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <TbZoomReset /> Reset Filters
      </motion.button>
    </div>
  );
}
