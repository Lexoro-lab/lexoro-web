import { LegalPage } from "@/components/legal/legal-page";
import { dataDeletion } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Data Deletion — Lexoro Solutions",
  description: "How to request deletion of your personal data associated with BizBrain.",
  path: "/data-deletion",
  locale: "en",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Lexoro Solutions · BizBrain"
      title="Data Deletion."
      lede="This page explains how to request deletion of your personal data associated with BizBrain, our WhatsApp-based appointment booking service for clinics."
      meta="Last updated: 1 July 2026 · Lexoro Solutions, Ajman Free Zone, UAE"
      html={dataDeletion}
    />
  );
}
