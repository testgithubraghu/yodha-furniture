import { CategoryTemplate } from "@/components/CategoryTemplate";
import { generateCategoryMetadata } from "@/lib/category-metadata";

export const metadata = generateCategoryMetadata("sofas");

export default function SofasPage() {
  return (
    <CategoryTemplate
      slug="sofas"
      extraContent={
        <div className="mt-16 border-t border-navy/10 pt-16">
          <h2
            className="mb-6 text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why choose Yodha Sofas?
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Custom sizes for your living room",
              "Choice of upholstery fabrics and leatherette",
              "Solid wood frames for long-term strength",
              "Free site measurement in Bengaluru",
              "Factory-direct pricing",
              "Delivery and installation included",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-body-soft">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-peach" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
