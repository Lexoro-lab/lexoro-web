import { Arrow, buttonClass } from "@/components/blocks/buttons";
import { ClosingBand } from "@/components/blocks/closing";
import { PageHero } from "@/components/blocks/page-hero";
import { Band, delay, Heading, PointGrid } from "@/components/blocks/section";
import { getSolutions, getSolutionsIndex } from "@/content/solutions";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import Link from "next/link";

export function SolutionsIndexPage({ t, locale }: { t: Dict; locale: Locale }) {
  const c = getSolutionsIndex(locale);
  const items = getSolutions(locale);

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} />

      <section className="border-b border-border">
        <div className="container-page section-y">
          <ol className="border-t border-border-strong">
            {items.map((s, i) => (
              <li key={s.slug} className="reveal" style={delay(i)}>
                <Link href={localePath(locale, `/solutions/${s.slug}`)} className="group grid gap-x-10 gap-y-3 border-b border-border-strong py-9 transition-colors sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_auto] sm:items-start">
                  <span className="font-mono text-[0.875rem] text-brand-text tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="type-subhead group-hover:text-brand-text">{s.name}</h2>
                  <p className="text-[1rem] leading-relaxed text-muted-foreground">{s.summary}</p>
                  <span className="hidden size-10 place-items-center rounded-full border border-border-strong text-foreground transition-colors group-hover:border-foreground sm:grid">
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Band tone="tray" labelledBy="why-title">
        <Heading id="why-title" eyebrow={c.why.eyebrow} title={c.why.title} />
        <div className="mt-14">
          <PointGrid items={c.why.items} />
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
