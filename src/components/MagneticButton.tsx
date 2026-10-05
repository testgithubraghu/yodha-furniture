"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "relative inline-flex items-center gap-2 overflow-hidden px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors";

  const variantClasses =
    variant === "primary"
      ? "bg-espresso text-ivory hover:text-espresso"
      : "border border-espresso text-espresso bg-transparent hover:text-espresso";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="relative z-10 inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        →
      </motion.span>
      <span
        className={`absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
          variant === "primary" ? "bg-brass" : "bg-sand"
        }`}
      />
    </>
  );

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (type === "submit" || onClick) {
    return (
      <motion.button
        type={type || "button"}
        onClick={onClick}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group ${classes}`}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        href={href || "/"}
        className={`group ${classes}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    </motion.div>
  );
}
