"use client";

import { motion } from "framer-motion";
import { contactDetails } from "@/lib/site-config";

interface ContactPanelProps {
  visible: boolean;
}
export function ContactPanel({ visible }: ContactPanelProps) {
  return (
    <div className="absolute bottom-12 right-8 z-20 hidden flex-col items-end space-y-3 text-right md:flex">
      {contactDetails.map(({ label, icon: Icon }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 26 }}
          animate={visible ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, delay: 1.6 + index * 0.2 }}
          className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
        >
          <span className="text-xs tracking-wider">{label}</span>
          <Icon size={14} className="text-brand-accent" />
        </motion.div>
      ))}
    </div>
  );
}
