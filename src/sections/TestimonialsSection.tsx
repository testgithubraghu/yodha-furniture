"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-sand py-20 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[520px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What our customers say
        </motion.h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-ivory p-6 lg:p-8"
            >
              <p
                className="mb-6 text-[21px] leading-[34px] text-espresso"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                “{item.quote}”
              </p>
              <div className="border-t border-espresso/10 pt-5">
                <p className="text-[15px] font-semibold text-espresso">{item.name}</p>
                <p className="text-[14px] text-body-soft">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
