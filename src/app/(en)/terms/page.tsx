import { LegalPage } from "@/components/legal/legal-page";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service — Lexoro Solutions",
  description: "The agreement between Lexoro Solutions and the clinics and businesses that use BizBrain.",
  path: "/terms",
  locale: "en",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Lexoro Solutions · BizBrain"
      title="Terms of Service."
      lede="The agreement between Lexoro Solutions and the clinics and businesses that use BizBrain."
      meta="Effective: 28 June 2026 · Last updated: 28 June 2026"
      html={terms}
    />
  );
}
