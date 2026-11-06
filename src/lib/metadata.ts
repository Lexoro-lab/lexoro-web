import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({ title, description, path, locale, languages }: { title: string; description: string; path: string; locale: "en" | "ar"; languages?: Record<string, string> }): Metadata {
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      title,
      description,
      images: [{ url: "/assets/lexoro-logo-dark.png", width: 843, height: 296, alt: site.name }],
    },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true },
  };
}
