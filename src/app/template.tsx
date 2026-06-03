"use client";

import { motion } from "framer-motion";
import { pageTransitionVariant } from "@/lib/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
