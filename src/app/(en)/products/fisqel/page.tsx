import { FisqelPage } from "@/components/pages/fisqel-page";
import { getPages } from "@/content/pages";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("en").fisqel;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/products/fisqel",
  locale: "en",
  languages: { en: "/products/fisqel", ar: "/ar/products/fisqel" },
});

export default function Page() {
  return <FisqelPage t={en} locale="en" />;
}
