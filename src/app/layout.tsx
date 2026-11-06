import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexoro-web.vercel.app"),
  title: "Lexoro Solutions — Software & accounting solutions for UAE businesses",
  description:
    "Lexoro Solutions is a UAE software company and the parent company of Fisqel (AI accounting on WhatsApp) and BizBrain (AI front desk for clinics). We also provide VAT and corporate tax return filing.",
  keywords: [
    "Lexoro Solutions", "software company UAE", "accounting software UAE", "Fisqel", "BizBrain",
    "VAT return filing UAE", "corporate tax filing UAE", "AI bookkeeping", "WhatsApp accounting",
  ],
  authors: [{ name: "Lexoro Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexoro-web.vercel.app",
    siteName: "Lexoro Solutions",
    title: "Lexoro Solutions — Software & accounting solutions for UAE businesses",
    description:
      "UAE software company behind Fisqel and BizBrain — AI accounting, VAT and corporate tax filing, and clinic automation.",
    images: [
      {
        url: "/assets/lexoro-logo-dark.png",
        width: 573,
        height: 250,
        alt: "Lexoro Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexoro Solutions — Software & accounting solutions for UAE businesses",
    description:
      "UAE software company behind Fisqel and BizBrain — AI accounting, tax filing and clinic automation.",
    images: ["/assets/lexoro-logo-dark.png"],
  },
  icons: {
    icon: "/assets/lexoro-logo-dark.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}