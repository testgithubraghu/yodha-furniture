"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";

export function ServicesClient() {
  return (
    <main className="bg-ivory pb-20 pt-[120px] lg:pb-32 lg:pt-[140px]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <span className="mb-6 inline-block text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep">
          03 / Services
        </span>
        <RevealText as="h1" className="max-w-[680px]">
          Our services
        </RevealText>
        <RevealText
          as="p"
          className="mt-5 max-w-[560px] text-body-soft"
          delay={0.1}
        >
          End-to-end furniture services for Bengaluru — from design to delivery.
        </RevealText>

        <div className="mt-14 flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-t border-espresso/10 py-8 first:border-t-0 lg:py-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-5 lg:gap-8">
                  <span className="text-[14px] font-semibold text-brass-deep">
                    {service.number}
                  </span>
                  <h2
                    className="text-[24px] leading-[32px] text-espresso lg:text-[28px] lg:leading-[36px]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h2>
                </div>
                <p className="max-w-[480px] text-[15px] leading-[26px] text-body-soft md:text-right">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <MagneticButton href="/contact" variant="primary">
            Start a Project
          </MagneticButton>
        </motion.div>
      </div>
    </main>
  );
}
