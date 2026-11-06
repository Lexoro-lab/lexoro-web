import ar from "@/i18n/ar";
import en, { type Dict } from "@/i18n/en";

export type Locale = "en" | "ar";
export type { Dict };

export const getDict = (locale: Locale): Dict => (locale === "ar" ? ar : en);

/** Pages that exist in Arabic. Legal pages are English only. */
const arabicPaths = ["/", "/bizbrain"];

/** Turn a site path into the right one for this locale. External links pass through. */
export function localePath(locale: Locale, href: string): string {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;
  if (locale === "en") return href;
  const [path, hash] = href.split("#");
  const base = path || "/";
  if (!arabicPaths.includes(base)) return href;
  const ar = base === "/" ? "/ar" : `/ar${base}`;
  return hash ? `${ar}#${hash}` : ar;
}

/** The same page in the other language. */
export function alternatePath(locale: Locale, path: "/" | "/bizbrain") {
  return locale === "en" ? (path === "/" ? "/ar" : `/ar${path}`) : path;
}
