import { brand, categories, faqs, seoDefaults } from "@/data/content";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: seoDefaults.siteUrl,
  logo: `${seoDefaults.siteUrl}/images/logo.png`,
  email: brand.email,
  telephone: brand.phone || undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Behind Kadusonnapanahalli Bus Stop, Kannur Main Road, Mitganahalli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560077",
    addressCountry: "IN",
  },
  sameAs: [],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brand.name,
  url: seoDefaults.siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${seoDefaults.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["FurnitureStore", "LocalBusiness"],
  name: brand.name,
  image: `${seoDefaults.siteUrl}/images/og-default.jpg`,
  url: seoDefaults.siteUrl,
  telephone: brand.phone || undefined,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Behind Kadusonnapanahalli Bus Stop, Kannur Main Road, Mitganahalli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560077",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.1234567",
    longitude: "77.654321",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
  },
  priceRange: "₹₹",
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function categoryProductJsonLd(slug: string) {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: category.name,
    image: `${seoDefaults.siteUrl}${category.image}`,
    description: category.metaDescription,
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: brand.name,
    },
    offers: {
      "@type": "Offer",
      url: `${seoDefaults.siteUrl}/products/${category.slug}`,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    },
    aggregateRating: undefined,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoDefaults.siteUrl}${item.path}`,
    })),
  };
}
