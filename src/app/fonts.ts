import localFont from "next/font/local";

/* Self-hosted, so the build never needs Google Fonts. */
export const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

export const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const notoArabic = localFont({
  src: "./fonts/NotoSansArabic-Variable.woff2",
  variable: "--font-arabic",
  weight: "100 900",
  display: "swap",
});

export const fontVars = `${geistSans.variable} ${geistMono.variable} ${notoArabic.variable}`;
