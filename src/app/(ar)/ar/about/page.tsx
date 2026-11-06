import { AboutPage } from "@/components/pages/about-page";
import { getPages } from "@/content/pages";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("ar").about;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/ar/about",
  locale: "ar",
  languages: { en: "/about", ar: "/ar/about" },
});

export default function Page() {
  return <AboutPage t={ar} locale="ar" />;
}
