"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
}

export function RevealText({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  );
}
