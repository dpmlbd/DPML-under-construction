"use client";

import { motion } from "framer-motion";

interface CornerMarksProps {
  visible: boolean;
}

const bracket = "M2 10 V2 H10";

const positions = [
  "left-0 top-0",
  "right-0 top-0 -scale-x-100",
  "bottom-0 left-0 -scale-y-100",
  "bottom-0 right-0 -scale-x-100 -scale-y-100",
];

/**
 * Four quiet registration-mark brackets framing the branding block —
 * a nod to the technical-drawing language used in the loader.
 */
export function CornerMarks({ visible }: CornerMarksProps) {
  return (
    <>
      {positions.map((position, index) => (
        <motion.svg
          key={position}
          viewBox="0 0 24 24"
          className={`pointer-events-none absolute h-5 w-5 text-brand-accent/60 ${position}`}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="square"
        >
          <path d={bracket} />
        </motion.svg>
      ))}
    </>
  );
}