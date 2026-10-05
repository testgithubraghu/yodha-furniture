"use client";

import { useEffect, useRef } from "react";

const items = [
  "Chairs",
  "Dining Tables",
  "Cots",
  "Sofas",
  "Custom Furniture",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !trackRef.current) return;

    let x = 0;
    let rafId: number;
    const speed = 0.4;

    const animate = () => {
      x -= speed;
      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 2;
        if (Math.abs(x) >= width) x = 0;
        trackRef.current.style.transform = `translateX(${x}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          <span
            className="text-[clamp(48px,9vw,120px)] font-normal uppercase leading-none tracking-[0.04em] text-transparent"
            style={{
              fontFamily: "var(--font-heading)",
              WebkitTextStroke: "1.5px rgba(176,141,87,0.38)",
            }}
          >
            {item}
          </span>
          <span className="text-[24px] text-brass">·</span>
        </span>
      ))}
    </>
  );

  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y border-espresso/10 bg-ivory py-10"
    >
      <div ref={trackRef} className="flex w-max items-center gap-8">
        {content}
        {content}
      </div>
    </section>
  );
}
