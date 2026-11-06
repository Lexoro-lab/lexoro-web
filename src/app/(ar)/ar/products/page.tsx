import { ProductsIndexPage } from "@/components/pages/products-index";
import { getPages } from "@/content/pages";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("ar").products;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/ar/products",
  locale: "ar",
  languages: { en: "/products", ar: "/ar/products" },
});

export default function Page() {
  return <ProductsIndexPage t={ar} locale="ar" />;
}
