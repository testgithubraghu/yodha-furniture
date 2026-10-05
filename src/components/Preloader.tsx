"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/data/content";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("yodha-preloader");
    if (seen) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("yodha-preloader", "1");
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="preloader"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span
              className="text-[40px] tracking-[0.2em] text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {brand.shortName}
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 h-[1px] w-24 origin-center bg-brass"
            />
            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.4em] text-ivory/60">
              Furniture
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
