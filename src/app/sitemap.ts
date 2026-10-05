import type { MetadataRoute } from "next";
import { categories, seoDefaults } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/about",
    "/services",
    "/gallery",
    "/contact",
    "/products",
    "/custom-furniture",
    ...categories
      .filter((c) => c.slug !== "custom-furniture")
      .map((c) => `/products/${c.slug}`),
  ];

  return routes.map((route) => ({
    url: `${seoDefaults.siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
