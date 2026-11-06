import { SolutionsIndexPage } from "@/components/pages/solutions-index";
import { getSolutionsIndex } from "@/content/solutions";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

const c = getSolutionsIndex("ar");
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/ar/solutions",
  locale: "ar",
  languages: { en: "/solutions", ar: "/ar/solutions" },
});

export default function Page() {
  return <SolutionsIndexPage t={ar} locale="ar" />;
}
