import { ContactPage } from "@/components/pages/contact-page";
import { getPages } from "@/content/pages";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("ar").contact;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/ar/contact",
  locale: "ar",
  languages: { en: "/contact", ar: "/ar/contact" },
});

export default function Page() {
  return <ContactPage t={ar} locale="ar" />;
}
