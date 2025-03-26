"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[86vh]  text-[#222424] text-center w-full">
      <motion.h1
        className="text-5xl font-extrabold drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to HireTrix
      </motion.h1>
      <motion.p
        className="mt-4 text-lg opacity-80 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        Discover innovative solutions and modern web experiences tailored just for you.
      </motion.p>
      <Link href="/services">
        <motion.button
          className="px-3 py-1 bg-[#9900FA] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          Explore Services
        </motion.button>
      </Link>
    </div>
  );
}
