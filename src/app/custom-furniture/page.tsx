import { CategoryTemplate } from "@/components/CategoryTemplate";
import { generateCategoryMetadata } from "@/lib/category-metadata";

export const metadata = generateCategoryMetadata("custom-furniture");

export default function CustomFurniturePage() {
  return (
    <CategoryTemplate
      slug="custom-furniture"
      extraContent={
        <div className="mt-16 border-t border-navy/10 pt-16">
          <h2
            className="mb-6 text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Bespoke furniture, made your way
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Wardrobes, TV units, study tables and storage",
              "Retail displays, office desks and reception counters",
              "Custom sizes, materials and finishes",
              "3D sketches and material samples",
              "Site visit and measurement included",
              "End-to-end custom furniture makers in Bengaluru",
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
