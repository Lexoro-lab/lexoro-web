"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, ProductTile } from "@/components/brand/brand";
import { Arrow, buttonClass } from "@/components/blocks/buttons";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The same page in the other language (legal pages are English only). */
function otherLanguage(locale: Locale, pathname: string) {
  if (locale === "ar") return pathname.replace(/^\/ar(?=\/|$)/, "") || "/";
  return ["/privacy", "/terms", "/data-deletion"].includes(pathname) ? "/ar" : `/ar${pathname === "/" ? "" : pathname}`;
}

const tileFor = (href: string) => (href.endsWith("/fisqel") ? "fisqel" : href.endsWith("/bizbrain") ? "bizbrain" : null);

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
  const bare = locale === "ar" ? pathname.replace(/^\/ar(?=\/|$)/, "") || "/" : pathname;
  const isActive = (href: string) => bare === href || bare.startsWith(`${href}/`);

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
          {t.nav.groups.map((group) => (
            <li key={group.href} className="group/menu relative">
              <Link
                href={localePath(locale, group.href)}
                aria-current={isActive(group.href) ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.875rem] font-medium transition-colors",
                  isActive(group.href) ? "text-foreground" : "text-foreground/75 hover:text-foreground",
                )}
              >
                {group.label}
                {group.children.length ? (
                  <svg viewBox="0 0 24 24" className="size-3.5 opacity-60 transition-transform group-hover/menu:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                ) : null}
              </Link>
              {group.children.length ? (
                <div className="invisible absolute start-0 top-full pt-2 opacity-0 transition-[opacity,visibility] duration-[var(--duration-fast)] group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100">
                  <div data-theme={overHero ? "dark" : undefined} className="w-[22rem] rounded-[var(--radius-lg)] border border-border bg-surface p-2 text-foreground shadow-[var(--shadow-lg)]">
                    {group.children.map((child) => {
                      const tile = tileFor(child.href);
                      return (
                        <Link key={child.href} href={localePath(locale, child.href)} className="flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 transition-colors hover:bg-foreground/[0.05]">
                          {tile ? <ProductTile product={tile} className="size-8 rounded-[0.55rem]" /> : <span aria-hidden="true" className="size-[7px] shrink-0 rounded-[2px] bg-dot" />}
                          <span className="min-w-0">
                            <span className="block text-[0.875rem] font-semibold">{child.label}</span>
                            <span className="block text-[0.8125rem] text-muted-foreground">{child.note}</span>
                          </span>
                        </Link>
                      );
                    })}
                    <Link href={localePath(locale, group.href)} className="group mt-1 flex items-center justify-between border-t border-border px-3 pt-3 pb-2 text-[0.8125rem] font-semibold text-brand-text">
                      {t.nav.overview}
                      <Arrow />
                    </Link>
                  </div>
                </div>
              ) : null}
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
          <div className="container-page py-3">
            {t.nav.groups.map((group) => (
              <div key={group.href} className="border-b border-border py-2">
                <Link href={localePath(locale, group.href)} onClick={close} className="flex items-center justify-between py-2.5 text-[1.25rem] font-semibold tracking-[-0.02em] rtl:tracking-normal">
                  {group.label}
                  <Arrow className="text-muted-foreground" />
                </Link>
                {group.children.length ? (
                  <ul className="pb-2">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link href={localePath(locale, child.href)} onClick={close} className="flex items-center gap-2.5 py-2 text-[0.9375rem] text-muted-foreground hover:text-foreground">
                          <span aria-hidden="true" className="size-[6px] rounded-[2px] bg-dot" />
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <Link href={alternate} onClick={close} className="flex py-4 text-[1rem] font-medium text-muted-foreground">
              {t.nav.language}
            </Link>
          </div>
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
