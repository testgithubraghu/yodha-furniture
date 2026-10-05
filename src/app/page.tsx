import { Hero } from "@/sections/Hero";
import { CategoryGrid } from "@/sections/CategoryGrid";
import { Marquee } from "@/components/Marquee";
import { AboutSection } from "@/sections/AboutSection";
import { StatsBand } from "@/sections/StatsBand";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { GallerySection } from "@/sections/GallerySection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSection } from "@/sections/ContactSection";
import { Preloader } from "@/components/Preloader";
import { websiteJsonLd, localBusinessJsonLd, faqJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <Preloader />
      <main>
        <Hero />
        <CategoryGrid />
        <Marquee />
        <AboutSection />
        <StatsBand />
        <ServicesSection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}
