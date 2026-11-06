import { FisqelPage } from "@/components/pages/fisqel-page";
import { getPages } from "@/content/pages";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("ar").fisqel;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/ar/products/fisqel",
  locale: "ar",
  languages: { en: "/products/fisqel", ar: "/ar/products/fisqel" },
});

export default function Page() {
  return <FisqelPage t={ar} locale="ar" />;
}
