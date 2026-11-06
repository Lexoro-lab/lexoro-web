import { HomePage } from "@/components/home/home-page";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: ar.meta.homeTitle,
  description: ar.meta.homeDescription,
  path: "/ar",
  locale: "ar",
  languages: { en: "/", ar: "/ar" },
});

export default function Page() {
  return <HomePage locale="ar" t={ar} />;
}
