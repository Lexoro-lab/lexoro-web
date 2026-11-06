import { HomePage } from "@/components/home/home-page";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: en.meta.homeTitle,
  description: en.meta.homeDescription,
  path: "/",
  locale: "en",
  languages: { en: "/", ar: "/ar" },
});

export default function Page() {
  return <HomePage locale="en" t={en} />;
}
