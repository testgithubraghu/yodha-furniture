import { CategoryTemplate } from "@/components/CategoryTemplate";
import { generateCategoryMetadata } from "@/lib/category-metadata";

export const metadata = generateCategoryMetadata("dining-tables");

export default function DiningTablesPage() {
  return (
    <CategoryTemplate
      slug="dining-tables"
      extraContent={
        <div className="mt-16 border-t border-navy/10 pt-16">
          <h2
            className="mb-6 text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why choose Yodha Dining Tables?
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Solid wood and engineered wood options",
              "Custom dimensions for your dining area",
              "Seating capacity from 4 to 12 people",
              "Matching benches and chairs available",
              "Wood polish and finish options",
              "Made by a dining table manufacturer in Bengaluru",
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
