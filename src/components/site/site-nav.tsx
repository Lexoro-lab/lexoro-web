"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/brand";
import { Arrow, buttonClass } from "@/components/blocks/buttons";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The same page in the other language (legal pages are English only). */
function otherLanguage(locale: Locale, pathname: string) {
  if (locale === "ar") return pathname.replace(/^\/ar(?=\/|$)/, "") || "/";
  return pathname === "/bizbrain" ? "/ar/bizbrain" : "/ar";
}

export function SiteNav({ locale, t }: { locale: Locale; t: Dict }) {
  const pathname = usePathname();
  const alternate = otherLanguage(locale, pathname);
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      /* Over a dark hero the bar is dark too. */
      const hero = document.querySelector("[data-hero-dark]");
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > 64);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpenOn(null);

  return (
    <header
      data-theme={overHero && !open ? "dark" : undefined}
      className={cn(
        "sticky top-0 z-50 text-foreground transition-[background-color,border-color] duration-[var(--duration-base)]",
        scrolled || open ? "border-b border-border/80 bg-canvas/85 backdrop-blur-xl backdrop-saturate-150" : "border-b border-transparent",
      )}
    >
      <nav aria-label={t.nav.label} className="container-page flex h-[var(--nav-height)] items-center gap-6">
        <Link href={localePath(locale, "/")} aria-label={t.nav.home} className="shrink-0 rounded-md" onClick={close}>
          <Logo />
        </Link>

        <ul className="ms-4 hidden items-center gap-1 lg:flex">
          {t.nav.items.map((item) => (
            <li key={item.href}>
              <Link href={localePath(locale, item.href)} className="rounded-full px-3 py-2 text-[0.875rem] font-medium text-foreground/75 transition-colors hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex items-center gap-2">
          <Link href={alternate} hrefLang={locale === "en" ? "ar" : "en"} aria-label={t.nav.languageLabel} className="hidden rounded-full px-3 py-2 text-[0.875rem] font-medium text-foreground/75 hover:text-foreground sm:inline-flex">
            {t.nav.language}
          </Link>
          <a href={whatsappLink(t.common.whatsappPrefill)} className={cn(buttonClass("brand", "sm"), "hidden sm:inline-flex")}>
            {t.common.talk}
            <Arrow />
          </a>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-10 place-items-center rounded-full text-foreground hover:bg-foreground/5 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="h-[calc(100dvh-var(--nav-height))] overflow-y-auto border-t border-border bg-canvas lg:hidden">
          <ul className="container-page py-4">
            {t.nav.items.map((item) => (
              <li key={item.href} className="border-b border-border">
                <Link href={localePath(locale, item.href)} onClick={close} className="flex items-center justify-between py-4 text-[1.25rem] font-semibold tracking-[-0.02em] rtl:tracking-normal">
                  {item.label}
                  <Arrow className="text-muted-foreground" />
                </Link>
              </li>
            ))}
            <li className="border-b border-border">
              <Link href={alternate} onClick={close} className="flex py-4 text-[1rem] font-medium text-muted-foreground">
                {t.nav.language}
              </Link>
            </li>
          </ul>
          <div className="container-page pb-8">
            <a href={whatsappLink(t.common.whatsappPrefill)} className={cn(buttonClass("brand", "lg"), "w-full")}>
              {t.common.talk}
              <Arrow />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
