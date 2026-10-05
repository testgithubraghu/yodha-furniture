"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { brand, localAreas } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-sand py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]"
          >
            <Image
              src="https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
              alt="Yodha Furniture workshop in Bengaluru crafting custom furniture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div>
            <SectionNumber number="02" label="About" className="mb-6" />
            <RevealText as="h2">About Yodha Furniture</RevealText>
            <RevealText as="p" className="mt-6 text-body-soft" delay={0.1}>
              Yodha Furniture is a Bengaluru-based furniture manufacturer
              building premium, made-to-measure pieces for homes and offices.
              Established {brand.established}, we combine honest materials with
              careful craftsmanship to create furniture that lasts.
            </RevealText>
            <RevealText as="p" className="mt-4 text-body-soft" delay={0.15}>
              From our workshop near Kadusonnapanahalli in Kannuru, we serve
              customers across {brand.customers}+ happy customers in Bengaluru
              and surrounding areas. Every piece is measured, built and installed
              with attention to detail.
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 border-t border-espresso/10 pt-8"
            >
              <h3
                className="text-[18px] leading-[28px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Serving Bengaluru
              </h3>
              <p className="mt-3 text-[15px] leading-[26px] text-body-soft">
                We design, build and install furniture in {localAreas.join(", ")}
                . Whether you need a single custom sofa or a full home package,
                our team brings factory-direct quality to your doorstep.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
