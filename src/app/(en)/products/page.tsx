import { ProductsIndexPage } from "@/components/pages/products-index";
import { getPages } from "@/content/pages";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("en").products;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/products",
  locale: "en",
  languages: { en: "/products", ar: "/ar/products" },
});

export default function Page() {
  return <ProductsIndexPage t={en} locale="en" />;
}
