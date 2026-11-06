import { BizBrainPage } from "@/components/bizbrain/bizbrain-page";
import en from "@/i18n/en";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: en.meta.bizbrainTitle,
  description: en.meta.bizbrainDescription,
  path: "/bizbrain",
  locale: "en",
  languages: { en: "/bizbrain", ar: "/ar/bizbrain" },
});

export default function Page() {
  return <BizBrainPage t={en} />;
}
