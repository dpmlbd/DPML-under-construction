"use client";

import { motion } from "framer-motion";
import { contactDetails } from "@/lib/site-config";

interface ContactPanelProps {
  visible: boolean;
}

export function ContactPanel({ visible }: ContactPanelProps) {
  return (
    <div
      className="
        relative z-20 mt-10 flex flex-col items-center gap-2.5
        md:absolute md:bottom-12 md:right-8 md:mt-0 md:items-end md:gap-3 md:text-right
      "
    >
      {contactDetails.map(({ label, icon: Icon, href, external }, index) => (
        <motion.a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 1.6 + index * 0.15 }}
          className="
            flex items-center gap-2.5 text-white/70 transition-colors hover:text-white
            md:gap-3
          "
        >
          <span className="max-w-[78vw] text-[11px] tracking-wide sm:text-xs md:max-w-none md:tracking-wider">
            {label}
          </span>
          <Icon size={13} className="shrink-0 text-brand-accent md:size-3.5" />
        </motion.a>
      ))}
    </div>
  );
}