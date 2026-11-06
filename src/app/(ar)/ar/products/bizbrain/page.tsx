import { BizBrainPage } from "@/components/bizbrain/bizbrain-page";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: ar.meta.bizbrainTitle,
  description: ar.meta.bizbrainDescription,
  path: "/ar/products/bizbrain",
  locale: "ar",
  languages: { en: "/products/bizbrain", ar: "/ar/products/bizbrain" },
});

export default function Page() {
  return <BizBrainPage t={ar} />;
}
