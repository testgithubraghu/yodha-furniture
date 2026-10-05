"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionNumberProps {
  number: string;
  label?: string;
  className?: string;
}

export function SectionNumber({ number, label, className = "" }: SectionNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`flex items-center gap-3 ${className}`}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep"
      >
        {number}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-[1px] w-10 origin-left bg-brass"
      />
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[13px] font-medium uppercase tracking-[0.1em] text-walnut"
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
