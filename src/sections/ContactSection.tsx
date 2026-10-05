"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { brand, categories } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", phone: "", email: "", interest: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-sand py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionNumber number="06" label="Contact" className="mb-6" />
        <RevealText as="h2" className="max-w-[560px]">
          Get a free quote for your furniture
        </RevealText>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-espresso">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-espresso/12 bg-ivory px-4 py-3 text-[15px] text-espresso placeholder:text-espresso/40 focus:border-brass-deep focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-espresso">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-espresso/12 bg-ivory px-4 py-3 text-[15px] text-espresso placeholder:text-espresso/40 focus:border-brass-deep focus:outline-none"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-espresso">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-espresso/12 bg-ivory px-4 py-3 text-[15px] text-espresso placeholder:text-espresso/40 focus:border-brass-deep focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="interest" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-espresso">
                Product Interest
              </label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
                className="w-full border border-espresso/12 bg-ivory px-4 py-3 text-[15px] text-espresso focus:border-brass-deep focus:outline-none"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-espresso">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-espresso/12 bg-ivory px-4 py-3 text-[15px] text-espresso placeholder:text-espresso/40 focus:border-brass-deep focus:outline-none"
                placeholder="Tell us about your project"
              />
            </div>

            <MagneticButton type="submit" variant="primary">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </MagneticButton>

            {status === "success" && (
              <p className="text-[15px] text-espresso">Thank you. We will get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-[15px] text-walnut">Something went wrong. Please try again.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-[18px] leading-[28px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Visit our workshop
              </h3>
              <address className="mt-3 not-italic text-[15px] leading-[26px] text-body-soft">
                {brand.address}
              </address>
            </div>

            <div>
              <h3
                className="text-[18px] leading-[28px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Email us
              </h3>
              <a
                href={`mailto:${brand.email}`}
                className="mt-3 inline-block text-[15px] text-body-soft transition-colors hover:text-brass-deep"
              >
                {brand.email}
              </a>
            </div>

            {brand.phone && (
              <div>
                <h3
                  className="text-[18px] leading-[28px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Call us
                </h3>
                <a
                  href={`tel:${brand.phone}`}
                  className="mt-3 inline-block text-[15px] text-body-soft transition-colors hover:text-brass-deep"
                >
                  {brand.phone}
                </a>
              </div>
            )}

            <div>
              <h3
                className="text-[18px] leading-[28px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                WhatsApp
              </h3>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-brass-deep transition-colors hover:text-espresso"
              >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
</svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden border border-espresso/10">
              <iframe
                src={brand.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yodha Furniture location on Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
