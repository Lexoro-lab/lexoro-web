import { LegalPage } from "@/components/legal/legal-page";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy — Lexoro Solutions",
  description: "How Lexoro Solutions and BizBrain collect, use, and protect personal data, including patient information processed through WhatsApp.",
  path: "/privacy",
  locale: "en",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Lexoro Solutions · BizBrain"
      title="Privacy Policy."
      lede="How we collect, use, and protect personal information — including patient data processed through WhatsApp on behalf of the clinics we serve."
      meta="Effective: 28 June 2026 · Last updated: 28 June 2026"
      html={privacy}
    />
  );
}
