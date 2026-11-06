import { AboutPage } from "@/components/pages/about-page";
import { getPages } from "@/content/pages";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("en").about;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/about",
  locale: "en",
  languages: { en: "/about", ar: "/ar/about" },
});

export default function Page() {
  return <AboutPage t={en} locale="en" />;
}
