import Link from "next/link";
import { ProductTile } from "@/components/brand/brand";
import { Arrow, buttonClass, TextLink } from "@/components/blocks/buttons";
import { ClosingBand } from "@/components/blocks/closing";
import { PageHero } from "@/components/blocks/page-hero";
import { Band, delay, Heading, PointGrid } from "@/components/blocks/section";
import { getPages } from "@/content/pages";
import { localePath, type Dict, type Locale } from "@/lib/i18n";

export function ProductsIndexPage({ t, locale }: { t: Dict; locale: Locale }) {
  const c = getPages(locale).products;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} />

      <section className="border-b border-border">
        <div className="container-page section-y space-y-8">
          {c.items.map((p, i) => (
            <article key={p.key} className="reveal grid gap-x-14 gap-y-8 rounded-[var(--radius-xl)] border border-border bg-surface p-7 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" style={delay(i, 90)}>
              <div>
                <div className="flex items-center gap-4">
                  <ProductTile product={p.key} className="size-14 rounded-[1rem]" />
                  <div>
                    <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em]">{p.name}</h2>
                    <p className="text-[0.875rem] text-muted-foreground">{p.tag}</p>
                  </div>
                </div>
                <h3 className="type-subhead mt-8 text-balance">{p.title}</h3>
                <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link href={localePath(locale, p.href)} className={buttonClass("brand")}>
                    {p.link}
                    <Arrow />
                  </Link>
                  <TextLink href={p.external.href}>{p.external.label}</TextLink>
                </div>
              </div>
              <div className="border-t border-border pt-6 lg:border-s lg:border-t-0 lg:ps-10 lg:pt-0">
                <ul className="space-y-3">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[0.9375rem] text-ink-soft">
                      <svg viewBox="0 0 24 24" className="mt-1 size-3.5 shrink-0 text-brand-text" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-5 text-[0.875rem] text-muted-foreground">{p.audience}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Band tone="tray" labelledBy="platform-title">
        <Heading id="platform-title" eyebrow={c.platform.eyebrow} title={c.platform.title} />
        <div className="mt-14">
          <PointGrid items={c.platform.items} />
        </div>
      </Band>

      <ClosingBand
        title={c.closing.title}
        body={c.closing.body}
        actions={
          <Link href={localePath(locale, "/contact")} className={buttonClass("brand")}>
            {t.common.contact}
            <Arrow />
          </Link>
        }
      />
    </>
  );
}
