"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      className="bg-ivory py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionNumber number="03" label="Services" className="mb-6" />
            <RevealText as="h2">What we do</RevealText>
            <RevealText as="p" className="mt-5 max-w-[460px] text-body-soft" delay={0.1}>
              End-to-end furniture services for Bengaluru — from first sketch to
              final installation.
            </RevealText>
          </div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-t border-espresso/10 py-7 first:border-t-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 text-[14px] font-semibold text-brass-deep">
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className="text-[21px] leading-[30px] transition-colors group-hover:text-brass-deep"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-[480px] text-[15px] leading-[25px] text-body-soft">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <span className="hidden text-[20px] text-espresso/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brass lg:block">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
