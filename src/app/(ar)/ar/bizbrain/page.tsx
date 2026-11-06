import { BizBrainPage } from "@/components/bizbrain/bizbrain-page";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: ar.meta.bizbrainTitle,
  description: ar.meta.bizbrainDescription,
  path: "/ar/bizbrain",
  locale: "ar",
  languages: { en: "/bizbrain", ar: "/ar/bizbrain" },
});

export default function Page() {
  return <BizBrainPage t={ar} />;
}
