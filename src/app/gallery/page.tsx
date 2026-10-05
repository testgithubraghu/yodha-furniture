import type { Metadata } from "next";
import { seoDefaults } from "@/data/content";
import { GalleryClient } from "@/components/GalleryClient";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Gallery | Yodha Furniture",
  description:
    "View Yodha Furniture's project gallery of custom sofas, dining tables, chairs, cots and bespoke furniture made in Bengaluru.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Yodha Furniture",
    description:
      "View Yodha Furniture's project gallery of custom sofas, dining tables, chairs, cots and bespoke furniture made in Bengaluru.",
    url: `${seoDefaults.siteUrl}/gallery`,
  },
};

export default function GalleryPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <GalleryClient />
    </>
  );
}
