import { BizBrainPage } from "@/components/bizbrain/bizbrain-page";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: en.meta.bizbrainTitle,
  description: en.meta.bizbrainDescription,
  path: "/products/bizbrain",
  locale: "en",
  languages: { en: "/products/bizbrain", ar: "/ar/products/bizbrain" },
});

export default function Page() {
  return <BizBrainPage t={en} />;
}
