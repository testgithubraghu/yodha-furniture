import type { Metadata } from "next";
import { seoDefaults } from "@/data/content";
import { ServicesClient } from "@/components/ServicesClient";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services | Yodha Furniture",
  description:
    "Yodha Furniture offers custom furniture design, manufacturing, free site measurement, delivery and after-sales support in Bengaluru.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Yodha Furniture",
    description:
      "Yodha Furniture offers custom furniture design, manufacturing, free site measurement, delivery and after-sales support in Bengaluru.",
    url: `${seoDefaults.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicesClient />
    </>
  );
}
