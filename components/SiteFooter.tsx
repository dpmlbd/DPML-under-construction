"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/site-config";

interface SiteFooterProps {
  visible: boolean;
}

export function SiteFooter({ visible }: SiteFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : undefined}
      transition={{ duration: 1, delay: 2.3 }}
      className="absolute bottom-6 left-0 z-20 w-full text-center"
    >
      <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
        &copy; {new Date().getFullYear()} {brand.copyrightHolder}. All Rights Reserved.
      </p>
    </motion.footer>
  );
}
