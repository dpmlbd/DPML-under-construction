"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/site-config";
import { BrandMonogram } from "./BrandMonogram";
import { CornerMarks } from "./CornerMarks";

interface BrandRevealProps {
  visible: boolean;
}

export function BrandReveal({ visible }: BrandRevealProps) {
  return (
    <div className="relative flex flex-col items-center px-10 py-8 text-center sm:px-16 sm:py-10">
      <CornerMarks visible={visible} />

      <BrandMonogram visible={visible} />

      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        animate={visible ? { opacity: 1, letterSpacing: "0.22em" } : undefined}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="text-6xl font-extralight uppercase [text-shadow:0_0_40px_rgba(111,227,218,0.18)] md:text-8xl"
      >
        {brand.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : undefined}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="mt-5 flex items-center gap-3"
      >
        <span className="h-px w-12 bg-white/20" />
        <span className="h-1 w-1 rounded-full bg-brand-accent" />
        <span className="h-px w-12 bg-white/20" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={visible ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-4 text-xs font-medium uppercase tracking-[0.42em] text-brand-accent md:text-sm"
      >
        {brand.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : undefined}
        transition={{ duration: 1, delay: 1.9 }}
        className="mt-12 flex items-center gap-4"
      >
        <span className="h-px w-8 bg-white/30" />
        <span className="text-[10px] uppercase tracking-[0.34em] text-white/50">
          {brand.underConstructionLabel}
        </span>
        <span className="h-px w-8 bg-white/30" />
      </motion.div>
    </div>
  );
}