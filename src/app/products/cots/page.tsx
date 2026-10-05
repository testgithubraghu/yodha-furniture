import { CategoryTemplate } from "@/components/CategoryTemplate";
import { generateCategoryMetadata } from "@/lib/category-metadata";

export const metadata = generateCategoryMetadata("cots");

export default function CotsPage() {
  return (
    <CategoryTemplate
      slug="cots"
      extraContent={
        <div className="mt-16 border-t border-navy/10 pt-16">
          <h2
            className="mb-6 text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why choose Yodha Cots & Beds?
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "King, queen, single and custom sizes",
              "Solid wood frames with strong joinery",
              "Storage beds and hydraulic lift options",
              "Matching bedside tables and wardrobes",
              "Choice of wood polish and fabric headboards",
              "Custom cot and bed manufacturer in Bengaluru",
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
