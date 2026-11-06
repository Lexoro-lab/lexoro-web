import { ContactPage } from "@/components/pages/contact-page";
import { getPages } from "@/content/pages";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

const c = getPages("en").contact;
export const metadata = pageMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: "/contact",
  locale: "en",
  languages: { en: "/contact", ar: "/ar/contact" },
});

export default function Page() {
  return <ContactPage t={en} locale="en" />;
}
