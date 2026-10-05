"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { categories } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";

export function CategoryGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="products"
      className="bg-ivory py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionNumber number="01" label="Products" className="mb-6" />
        <RevealText as="h2" className="max-w-[680px]">
          Furniture crafted for Bengaluru homes and offices
        </RevealText>
        <RevealText
          as="p"
          className="mt-5 max-w-[560px] text-body-soft"
          delay={0.1}
        >
          From designer chairs to custom sofas and solid wood dining tables,
          explore our range of made-to-measure furniture.
        </RevealText>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {categories.map((category, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={isInView ? { opacity: 1, clipPath: "inset(0% 0 0 0)" } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden ${
                  isLarge
                    ? "md:col-span-1 lg:col-span-7 lg:row-span-1"
                    : "md:col-span-1 lg:col-span-5"
                }`}
              >
                <Link
                  href={category.slug === "custom-furniture" ? "/custom-furniture" : `/products/${category.slug}`}
                  className="relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden lg:aspect-auto lg:h-[420px]"
                >
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                  <div className="relative z-10 p-6 lg:p-8">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                      className="mb-3 block h-[2px] w-8 origin-left bg-brass"
                    />
                    <h3 className="text-ivory" style={{ fontFamily: "var(--font-heading)" }}>
                      {category.name}
                    </h3>
                    <p className="mt-2 max-w-[360px] text-[15px] leading-[24px] text-ivory/80">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory transition-colors group-hover:text-brass">
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
