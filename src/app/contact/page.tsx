import type { Metadata } from "next";
import { seoDefaults } from "@/data/content";
import { ContactSection } from "@/sections/ContactSection";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Yodha Furniture",
  description:
    "Contact Yodha Furniture for a free quote. Custom furniture manufacturer in Bengaluru, Karnataka. Email, address and enquiry form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Yodha Furniture",
    description:
      "Contact Yodha Furniture for a free quote. Custom furniture manufacturer in Bengaluru, Karnataka. Email, address and enquiry form.",
    url: `${seoDefaults.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main className="pt-[80px]">
        <section className="bg-sand py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
            <span className="mb-4 inline-block text-[14px] font-semibold uppercase tracking-[0.12em] text-brass-deep">
              06 / Contact
            </span>
            <h1
              className="max-w-[560px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get a free quote for your furniture
            </h1>
            <p className="mt-5 max-w-[520px] text-body-soft">
              Call, email or fill in the form. We reply to every enquiry and can
              arrange a free site measurement in Bengaluru.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
