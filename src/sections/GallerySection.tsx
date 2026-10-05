"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";

export function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="gallery"
      className="bg-ivory py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionNumber number="05" label="Gallery" className="mb-6" />
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <RevealText as="h2" className="max-w-[520px]">
            Recent projects
          </RevealText>
          <RevealText as="p" className="max-w-[420px] text-body-soft" delay={0.1}>
            A look at custom furniture we have designed, built and installed for
            Bengaluru homes and offices.
          </RevealText>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setLightbox(index)}
              className={`group relative overflow-hidden bg-sand ${
                index === 0 || index === 3 ? "aspect-[4/5]" : "aspect-square"
              }`}
              aria-label={`Open ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/20" />
              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-ivory/90 text-espresso opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                +
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 text-[32px] text-ivory"
              aria-label="Close lightbox"
            >
              ×
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] w-full max-w-[1100px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <p className="absolute -bottom-10 left-0 text-[15px] text-ivory/80">
                {galleryImages[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
