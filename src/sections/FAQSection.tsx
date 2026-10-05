"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/content";
import { RevealText } from "@/components/RevealText";

export function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="bg-ivory py-20 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <RevealText as="h2" className="max-w-[420px]">
              Frequently asked questions
            </RevealText>
            <RevealText
              as="p"
              className="mt-5 max-w-[420px] text-body-soft"
              delay={0.1}
            >
              Answers to common questions about custom furniture, measurements,
              delivery and installation in Bengaluru.
            </RevealText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-espresso/10 first:border-t"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className="text-[17px] leading-[26px] text-espresso"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`mt-1 text-[18px] text-brass-deep transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[15px] leading-[26px] text-body-soft">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
