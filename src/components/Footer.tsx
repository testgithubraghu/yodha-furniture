import Link from "next/link";
import { brand, navLinks, categories, localAreas, seoDefaults } from "@/data/content";
import { organizationJsonLd } from "@/lib/jsonld";
import { SocialLinks } from "./SocialLinks";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-6 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-end" aria-label={`${brand.name} home`}>
  <Image
    src="/images/YODHA-Furnitures-logo.png" // or /logo.png
    alt={`${brand.name} logo`}
    width={160}
    height={48}
    priority  // header logo loads first
    className="h-9 w-auto md:h-10"
  />
</Link>
            <p className="mt-2 text-[15px] leading-[26px] text-ivory/70">
              Custom furniture manufacturer in Bengaluru. Premium sofas, dining
              tables, chairs, cots and bespoke furniture for homes and offices.
            </p>
            <div className="mt-4">
              <SocialLinks className="flex items-center gap-4 text-ivory/70" iconClassName="h-5 w-5" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-brass">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ivory/70 transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-brass">
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={cat.slug === "custom-furniture" ? "/custom-furniture" : `/products/${cat.slug}`}
                    className="text-[15px] text-ivory/70 transition-colors hover:text-brass"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-brass">
              Contact
            </h3>
            <address className="not-italic">
              <p className="mb-3 text-[15px] leading-[26px] text-ivory/70">
                {brand.address}
              </p>
              <p className="mb-2 text-[15px] text-ivory/70">
                Email:{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="underline-offset-4 transition-colors hover:text-brass hover:underline"
                >
                  {brand.email}
                </a>
              </p>
              {brand.phone && (
                <p className="text-[15px] text-ivory/70">
                  Phone:{" "}
                  <a
                    href={`tel:${brand.phone}`}
                    className="underline-offset-4 transition-colors hover:text-brass hover:underline"
                  >
                    {brand.phone}
                  </a>
                </p>
              )}
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-brass transition-colors hover:text-ivory"
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
                WhatsApp us
              </a>
            </address>
          </div>
        </div>

        {/* Local areas */}
        <div className="mt-12 border-t border-brass/20 pt-2">
          
          <p className="text-[15px] leading-[26px] text-ivory/60">
            {localAreas.join(" · ")}
          </p>
        </div>

        <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-brass/20 pt-4 md:flex-row">
          <p className="text-[14px] text-ivory/50">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-[14px] text-ivory/50">
            {seoDefaults.siteUrl.replace("https://", "")}
          </p>
        </div>
      </div>
    </footer>
  );
}
