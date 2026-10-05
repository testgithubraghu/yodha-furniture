"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="process"
      className="bg-sand py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionNumber number="04" label="Process" className="mb-6" />
        <RevealText as="h2" className="max-w-[620px]">
          From idea to installed furniture
        </RevealText>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-ivory p-6 lg:p-8"
            >
              <span
                className="absolute right-5 top-5 text-[48px] leading-none text-espresso/8 transition-colors group-hover:text-brass/12"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.number}
              </span>
              <span className="text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep">
                Step {step.number}
              </span>
              <h3
                className="mt-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[25px] text-body-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
