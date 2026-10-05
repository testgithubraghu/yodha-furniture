import { CategoryTemplate } from "@/components/CategoryTemplate";
import { generateCategoryMetadata } from "@/lib/category-metadata";

export const metadata = generateCategoryMetadata("chairs");

export default function ChairsPage() {
  return (
    <CategoryTemplate
      slug="chairs"
      extraContent={
        <div className="mt-16 border-t border-navy/10 pt-16">
          <h2
            className="mb-6 text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why choose Yodha Chairs?
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Dining chairs, accent chairs and office chairs",
              "Wood, metal and upholstered options",
              "Custom upholstery and polish colours",
              "Ergonomic designs for everyday use",
              "Bulk orders for offices and cafés",
              "Designer chairs crafted in Bengaluru",
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
