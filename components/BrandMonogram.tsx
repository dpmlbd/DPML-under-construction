"use client";

import { motion, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

interface BrandMonogramProps {
  visible: boolean;
}

/**
 * Minimal line-drawn diamond with a center point — a small "site marker"
 * motif echoing the blueprint loader, giving the wordmark a focal anchor.
 */
export function BrandMonogram({ visible }: BrandMonogramProps) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className="mb-6 h-8 w-8 text-brand-accent"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 2 L38 20 L20 38 L2 20 Z"
        variants={draw}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <motion.circle
        cx="20"
        cy="20"
        r="2"
        fill="currentColor"
        stroke="none"
        initial={{ opacity: 0, scale: 0 }}
        animate={visible ? { opacity: 1, scale: 1 } : undefined}
        transition={{ delay: 0.8, duration: 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  );
}