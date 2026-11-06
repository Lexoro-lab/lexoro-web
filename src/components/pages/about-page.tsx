import Link from "next/link";
import { Arrow, buttonClass } from "@/components/blocks/buttons";
import { ClosingBand } from "@/components/blocks/closing";
import { PageHero } from "@/components/blocks/page-hero";
import { Band, delay, Heading, PointGrid } from "@/components/blocks/section";
import { getPages } from "@/content/pages";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

export function AboutPage({ t, locale }: { t: Dict; locale: Locale }) {
  const c = getPages(locale).about;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} />

      <Band labelledBy="story-title">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Heading id="story-title" eyebrow={c.story.eyebrow} title={c.story.title} />
          <div className="reveal space-y-5 text-[1.0625rem] leading-[1.75] text-ink-soft lg:pt-10">
            {c.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Band>

      <Band tone="tray" labelledBy="pillars-title">
        <Heading id="pillars-title" eyebrow={c.pillars.eyebrow} title={c.pillars.title} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border lg:grid-cols-3">
          {c.pillars.items.map((item, i) => (
            <Link key={item.title} href={localePath(locale, item.href)} className="reveal group flex flex-col bg-surface p-7 transition-colors hover:bg-canvas sm:p-8" style={delay(i)}>
              <span className="font-mono text-[0.8125rem] text-brand-text">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-[1.25rem] font-semibold tracking-[-0.02em] rtl:tracking-normal">{item.title}</h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.body}</p>
              <span className="mt-6 text-brand-text">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </Band>

      <Band labelledBy="principles-title">
        <Heading id="principles-title" eyebrow={c.principles.eyebrow} title={c.principles.title} />
        <div className="mt-14">
          <PointGrid items={c.principles.items} cols={2} />
        </div>
      </Band>

      <Band tone="tray" labelledBy="company-title">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          <Heading id="company-title" eyebrow={c.company.eyebrow} title={c.company.title} />
          <dl className="reveal grid content-start gap-x-10 sm:grid-cols-2">
            {c.company.facts.map((fact) => (
              <div key={fact.label} className="border-t border-border-strong py-5">
                <dt className="text-[0.8125rem] font-medium text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1.5 text-[1.0625rem] font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      <ClosingBand
        title={c.closing.title}
        body={c.closing.body}
        actions={
          <>
            <Link href={localePath(locale, "/contact")} className={buttonClass("brand")}>
              {t.common.contact}
              <Arrow />
            </Link>
            <a href={whatsappLink(t.common.whatsappPrefill)} className={buttonClass("outline")}>
              {t.common.whatsapp}
            </a>
          </>
        }
      />
    </>
  );
}
