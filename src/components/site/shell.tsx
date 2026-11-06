import type { ReactNode } from "react";
import { fontVars } from "@/app/fonts";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { ThemeScript } from "@/components/theme/theme-script";
import { getDict, type Locale } from "@/lib/i18n";
import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";

/** The document for one language. Each route group has its own root layout,
 *  which is how <html lang dir> can differ between English and Arabic. */
export function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDict(locale);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={fontVars} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- root layout owns <head> */}
      <head>
        <ThemeScript />
      </head>
      <body>
        <SiteNav locale={locale} t={t} />
        <main>{children}</main>
        <SiteFooter locale={locale} t={t} />
        <RevealObserver />
      </body>
    </html>
  );
}
