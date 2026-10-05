"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/content";
import { RevealText } from "@/components/RevealText";
import { SectionNumber } from "@/components/SectionNumber";

export function GalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="bg-ivory pb-20 pt-[120px] lg:pb-32 lg:pt-[140px]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionNumber number="05" label="Gallery" className="mb-6" />
        <RevealText as="h1" className="max-w-[520px]">
          Project gallery
        </RevealText>
        <RevealText
          as="p"
          className="mt-5 max-w-[520px] text-body-soft"
          delay={0.1}
        >
          A selection of custom furniture we have designed, built and installed
          across Bengaluru.
        </RevealText>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setLightbox(index)}
              className="group relative aspect-square overflow-hidden bg-sand"
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
            </button>
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
    </main>
  );
}
