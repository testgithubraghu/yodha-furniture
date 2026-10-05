import type { Metadata } from "next";
import { seoDefaults } from "@/data/content";
import { AboutClient } from "@/components/AboutClient";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About | Yodha Furniture",
  description:
    "Learn about Yodha Furniture, a Bengaluru furniture manufacturer building custom sofas, dining tables, chairs, cots and bespoke furniture.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Yodha Furniture",
    description:
      "Learn about Yodha Furniture, a Bengaluru furniture manufacturer building custom sofas, dining tables, chairs, cots and bespoke furniture.",
    url: `${seoDefaults.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AboutClient />
    </>
  );
}
