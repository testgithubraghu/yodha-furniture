"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !imageRef.current) return;

    let ctx: { revert: () => void } | null = null;

    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!imageRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { scale: 1 },
          {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    };

    loadGsap();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div ref={imageRef} className="h-full w-full">
          <Image
            src="https://images.pexels.com/photos/8092427/pexels-photo-8092427.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
            alt="Premium custom furniture manufactured by Yodha Furniture in Bengaluru"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/45 via-espresso/25 to-espresso/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1240px] flex-col justify-end px-[clamp(20px,5vw,64px)] pb-16 pt-[120px] lg:pb-24">
        <div className="max-w-[720px]">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built strong.
              <br />
              Made to last.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[520px] text-[18px] leading-[28px] text-ivory/90"
            >
              Premium custom furniture manufacturer in Bengaluru — crafting
              sofas, dining tables, chairs, cots and bespoke pieces for homes and
              offices.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/products" variant="primary">
              View Collection
            </MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Get a Quote
            </MagneticButton>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex items-center gap-3 border-t border-ivory/20 pt-6 lg:mt-14"
        >
          <span className="flex h-2 w-2 rounded-full bg-brass" />
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-ivory/80">
            Made in Bengaluru
          </span>
        </motion.div>
      </div>
    </section>
  );
}
