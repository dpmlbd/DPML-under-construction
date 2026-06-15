"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";

const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

const easeOutCubic = [0.65, 0, 0.35, 1] as const;

const outlineTransition = { duration: 1.3, ease: easeOutCubic };
const detailTransition = { duration: 1, ease: easeOutCubic, delay: 0.45 };
const dimensionTransition = { duration: 0.7, ease: easeOutCubic, delay: 0.85 };

interface BlueprintLoaderProps {
  visible: boolean;
}

export function BlueprintLoader({ visible }: BlueprintLoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center bg-brand-bg"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.svg
            viewBox="0 0 220 150"
            className="w-56 max-w-[60vw] drop-shadow-[0_0_16px_rgba(111,227,218,0.45)]"
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(8px)",
              transition: { duration: 0.5 },
            }}
            fill="none"
            stroke="var(--color-brand-accent)"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Building outline */}
            <motion.path
              d="M20 130 H200 M34 130 V58 H118 V36 H190 V92 H150 V130"
              strokeWidth={1.4}
              variants={drawVariants}
              transition={outlineTransition}
            />
            {/* Window grid on the lower volume */}
            <motion.path
              d="M50 58 V130 M66 58 V130 M82 58 V130 M98 58 V130 M34 100 H118"
              strokeWidth={1}
              opacity={0.85}
              variants={drawVariants}
              transition={detailTransition}
            />
            {/* Window on the upper volume */}
            <motion.path
              d="M152 44 H182 V78 H152 Z M152 61 H182 M167 44 V78"
              strokeWidth={1}
              opacity={0.85}
              variants={drawVariants}
              transition={detailTransition}
            />
            {/* Dimension line */}
            <motion.path
              d="M34 138 H200 M34 134 V142 M200 134 V142"
              strokeWidth={0.8}
              opacity={0.6}
              variants={drawVariants}
              transition={dimensionTransition}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
