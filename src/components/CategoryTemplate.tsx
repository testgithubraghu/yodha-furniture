"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/content";
import { getCategoryPath } from "@/lib/category-metadata";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";
import { categoryProductJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

interface CategoryTemplateProps {
  slug: string;
  extraContent?: ReactNode;
}

export function CategoryTemplate({ slug, extraContent }: CategoryTemplateProps) {
  const category = categories.find((c) => c.slug === slug)!;
  const jsonLd = categoryProductJsonLd(slug);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category.name, path: getCategoryPath(slug) },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main className="bg-ivory pb-20 pt-[120px] lg:pb-32 lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-[520px]">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="mb-4 text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep">
                {category.name}
              </span>
              <RevealText as="h1" className="max-w-[520px]">
                {category.metaTitle}
              </RevealText>
              <RevealText
                as="p"
                className="mt-6 max-w-[520px] text-body-soft"
                delay={0.1}
              >
                {category.description}
              </RevealText>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <MagneticButton href="/contact" variant="primary">
                  Request a Quote
                </MagneticButton>
              </motion.div>
            </div>
          </div>

          {extraContent}
        </div>
      </main>
    </>
  );
}
