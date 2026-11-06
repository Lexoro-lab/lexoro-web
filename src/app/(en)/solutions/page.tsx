import { SolutionsIndexPage } from "@/components/pages/solutions-index";
import { getSolutionsIndex } from "@/content/solutions";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

const c = getSolutionsIndex("en");
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/solutions",
  locale: "en",
  languages: { en: "/solutions", ar: "/ar/solutions" },
});

export default function Page() {
  return <SolutionsIndexPage t={en} locale="en" />;
}
