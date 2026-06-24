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
  title: "Lexoro Solutions — WhatsApp AI that runs your front desk",
  description:
    "Lexoro Solutions builds WhatsApp-first AI agents for clinics and SMEs across the UAE — book appointments, answer customers, and keep the books, automatically.",
  keywords: [
    "WhatsApp AI", "AI receptionist UAE", "clinic automation", "appointment booking bot",
    "WhatsApp business automation", "Dubai AI", "SME automation UAE", "Lexoro",
  ],
  authors: [{ name: "Lexoro Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexoro-web.vercel.app",
    siteName: "Lexoro Solutions",
    title: "Lexoro Solutions — WhatsApp AI that runs your front desk",
    description:
      "WhatsApp-first AI agents for UAE clinics and SMEs — book appointments, answer customers, and keep the books, automatically.",
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
    title: "Lexoro Solutions — WhatsApp AI that runs your front desk",
    description:
      "WhatsApp-first AI agents for UAE clinics and SMEs — book appointments, answer customers, and keep the books.",
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