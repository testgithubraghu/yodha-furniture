import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories, seoDefaults } from "@/data/content";
import { SectionNumber } from "@/components/SectionNumber";
import { RevealText } from "@/components/RevealText";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Products | Yodha Furniture",
  description:
    "Browse Yodha Furniture's product range: custom sofas, dining tables, chairs, cots and bespoke furniture crafted in Bengaluru.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Yodha Furniture",
    description:
      "Browse Yodha Furniture's product range: custom sofas, dining tables, chairs, cots and bespoke furniture crafted in Bengaluru.",
    url: `${seoDefaults.siteUrl}/products`,
  },
};

export default function ProductsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main className="bg-ivory pb-20 pt-[120px] lg:pb-32 lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
          <SectionNumber number="01" label="Products" className="mb-6" />
          <RevealText as="h1" className="max-w-[680px]">
            Our furniture collection
          </RevealText>
          <RevealText
            as="p"
            className="mt-5 max-w-[560px] text-body-soft"
            delay={0.1}
          >
            Premium, made-to-measure furniture for homes and offices across
            Bengaluru. Click a category to explore.
          </RevealText>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={
                  category.slug === "custom-furniture"
                    ? "/custom-furniture"
                    : `/products/${category.slug}`
                }
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-2 block h-[2px] w-8 origin-left bg-brass transition-all duration-300 group-hover:w-12" />
                  <h2
                    className="text-[24px] text-ivory"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {category.name}
                  </h2>
                  <p className="mt-1 max-w-[300px] text-[14px] leading-[22px] text-ivory/80">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
