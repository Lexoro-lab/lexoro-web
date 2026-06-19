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
  title: "Lexoro Solutions — WhatsApp AI automation for business",
  description:
    "Lexoro Solutions builds WhatsApp-first AI automation for clinics and SMEs across the UAE — appointment chatbots, accounting, and management dashboards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      {/* Body font is set per-design in globals.css (Switzer); the /bizbrain
          route + shared components still use the Syne/Inter CSS variables above. */}
      <body>{children}</body>
    </html>
  );
}
