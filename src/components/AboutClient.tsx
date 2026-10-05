"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand, localAreas } from "@/data/content";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";

export function AboutClient() {
  return (
    <main className="bg-ivory pb-20 pt-[120px] lg:pb-32 lg:pt-[140px]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <span className="mb-6 inline-block text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep">
          02 / About
        </span>
        <h1
          className="max-w-[680px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Yodha Furniture
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[600px]"
          >
            <Image
              src="https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
              alt="Yodha Furniture craftsmen building custom furniture in Bengaluru"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <RevealText as="p" className="text-body-soft">
              Yodha Furniture is a furniture manufacturer based in Bengaluru,
              Karnataka. Established {brand.established}, we build premium,
              made-to-measure furniture for homes, offices and commercial
              spaces across the city.
            </RevealText>
            <RevealText as="p" className="mt-5 text-body-soft" delay={0.1}>
              Our workshop near Kadusonnapanahalli in Kannuru brings together
              solid wood, quality hardware and careful craftsmanship. Every
              sofa, dining table, chair, cot and custom piece is measured,
              built and installed with long-term use in mind.
            </RevealText>
            <RevealText as="p" className="mt-5 text-body-soft" delay={0.15}>
              We have served {brand.customers}+ happy customers and delivered
              custom furniture projects across Bengaluru, including{" "}
              {localAreas.join(", ")}.
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <MagneticButton href="/contact" variant="primary">
                Get in Touch
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
