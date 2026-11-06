import Link from "next/link";
import { ProductTile } from "@/components/brand/brand";
import { Arrow, buttonClass, TextLink, WhatsAppIcon } from "@/components/blocks/buttons";
import { ClosingBand } from "@/components/blocks/closing";
import { Band, delay, Heading, PointGrid } from "@/components/blocks/section";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { Hero } from "./hero";

/*
 * THE HOMEPAGE. Six parts, each saying one thing once:
 *   1. Hero: what Lexoro is.   2. Products.   3. Accounting solutions.
 *   4. How we work.   5. The company.   6. Talk to us.
 * Light, quiet sections between two dark moments (the hero and the close),
 * hairlines instead of cards, one heading style, start-aligned.
 */
export function HomePage({ locale, t }: { locale: Locale; t: Dict }) {
  const h = t.home;

  return (
    <>
      <Hero locale={locale} t={t} />

      {/* ── Products ───────────────────────────────────────────── */}
      <Band id="products" labelledBy="products-title">
        <Heading id="products-title" eyebrow={h.products.eyebrow} title={h.products.title} body={h.products.body} />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border lg:grid-cols-2">
          {h.products.items.map((p, i) => (
            <article key={p.key} className="reveal flex flex-col bg-surface p-7 sm:p-10" style={delay(i, 90)}>
              <div className="flex items-center gap-3.5">
                <ProductTile product={p.key} />
                <div>
                  <p className="text-[1.0625rem] font-semibold text-foreground">{p.name}</p>
                  <p className="text-[0.8125rem] text-muted-foreground">{p.tag}</p>
                </div>
              </div>
              <h3 className="type-subhead mt-8 text-balance">{p.title}</h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-pretty text-muted-foreground">{p.body}</p>
              <ul className="mt-7 space-y-2.5 border-t border-border pt-6">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[0.9375rem] text-ink-soft">
                    <svg viewBox="0 0 24 24" className="mt-1 size-3.5 shrink-0 text-brand-text" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <TextLink href={localePath(locale, p.href)}>{p.link}</TextLink>
              </div>
            </article>
          ))}
        </div>
      </Band>

      {/* ── Solutions ──────────────────────────────────────────── */}
      <Band id="solutions" tone="tray" labelledBy="solutions-title">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading id="solutions-title" eyebrow={h.solutions.eyebrow} title={h.solutions.title} body={h.solutions.body} />
            <div className="reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href={localePath(locale, "/solutions")} className={buttonClass("brand")}>
                {h.solutions.link}
                <Arrow />
              </Link>
              <TextLink href={localePath(locale, "/solutions/tax-filing#enquire")}>{h.solutions.cta}</TextLink>
            </div>
          </div>
          <ol className="border-t border-border-strong">
            {h.solutions.items.map((item, i) => (
              <li key={item.href} className="reveal" style={delay(i)}>
                <Link href={localePath(locale, item.href)} className="group flex gap-5 border-b border-border-strong py-6">
                  <span className="pt-0.5 font-mono text-[0.8125rem] text-brand-text tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-4 text-[1.125rem] font-semibold group-hover:text-brand-text">
                      {item.title}
                      <Arrow className="shrink-0 text-muted-foreground group-hover:text-brand-text" />
                    </span>
                    <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted-foreground">{item.body}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      {/* ── How we work ────────────────────────────────────────── */}
      <Band labelledBy="approach-title">
        <Heading id="approach-title" eyebrow={h.approach.eyebrow} title={h.approach.title} />
        <div className="mt-14">
          <PointGrid items={h.approach.items} />
        </div>
      </Band>

      {/* ── Company ────────────────────────────────────────────── */}
      <Band id="company" tone="tray" labelledBy="company-title">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Heading id="company-title" eyebrow={h.company.eyebrow} title={h.company.title} body={h.company.body} />
            <TextLink href={localePath(locale, "/about")} className="reveal mt-8">
              {h.company.link}
            </TextLink>
          </div>
          <dl className="reveal grid content-start gap-x-10 sm:grid-cols-2">
            {h.company.facts.map((fact) => (
              <div key={fact.label} className="border-t border-border-strong py-5">
                <dt className="text-[0.8125rem] font-medium text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1.5 text-[1.0625rem] font-semibold text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      <ClosingBand
        title={h.closing.title}
        body={h.closing.body}
        actions={
          <>
            <a href={whatsappLink(t.common.whatsappPrefill)} className={buttonClass("brand")}>
              <WhatsAppIcon />
              {t.common.whatsapp}
            </a>
            <Link href={localePath(locale, "/contact")} className={buttonClass("outline")}>
              {t.common.contact}
              <Arrow />
            </Link>
          </>
        }
        note={site.email}
      />
    </>
  );
}

