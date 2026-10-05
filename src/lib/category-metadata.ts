import type { Metadata } from "next";
import { categories, seoDefaults } from "@/data/content";

export function getCategoryPath(slug: string) {
  return slug === "custom-furniture" ? "/custom-furniture" : `/products/${slug}`;
}

export function generateCategoryMetadata(slug: string): Metadata {
  const category = categories.find((c) => c.slug === slug)!;
  const path = getCategoryPath(slug);
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${seoDefaults.siteUrl}${path}`,
    },
  };
}
