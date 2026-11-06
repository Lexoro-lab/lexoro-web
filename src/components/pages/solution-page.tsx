import { ProductTile } from "@/components/brand/brand";
import { Arrow, buttonClass, SmartLink, TextLink, WhatsAppIcon } from "@/components/blocks/buttons";
import { EnquiryBand } from "@/components/blocks/enquiry-band";
import { FaqList } from "@/components/blocks/faq";
import { PageHero } from "@/components/blocks/page-hero";
import { Band, delay, Heading, PointGrid } from "@/components/blocks/section";
import { fisqelUrl } from "@/content/pages";
import type { Solution } from "@/content/solutions";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

/** One template for every solution page: what, (key facts), how, who, product, questions, enquiry. */
export function SolutionPage({ s, t, locale }: { s: Solution; t: Dict; locale: Locale }) {
  const primaryHref = s.slug === "accounting-software" ? fisqelUrl(locale, "/get-started") : "#enquire";

  return (
    <>
      <PageHero eyebrow={s.hero.eyebrow} title={s.hero.title} body={s.hero.body}>
        <div className="flex flex-wrap gap-3">
          <SmartLink href={primaryHref} className={buttonClass("brand")}>
            {s.hero.primary}
            <Arrow />
          </SmartLink>
          <a href={whatsappLink(t.common.whatsappPrefill)} className={buttonClass("outline")}>
            <WhatsAppIcon />
            {t.common.talk}
          </a>
        </div>
      </PageHero>

      <Band labelledBy="included-title">
        <Heading id="included-title" eyebrow={s.included.eyebrow} title={s.included.title} body={s.included.body} />
        <div className="mt-14">
          <PointGrid items={s.included.items} />
        </div>
      </Band>

      {s.facts ? (
        <Band tone="tray" labelledBy="facts-title">
          <Heading id="facts-title" eyebrow={s.facts.eyebrow} title={s.facts.title} />
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {s.facts.items.map((fact, i) => (
              <div key={fact.label} className="reveal border-t border-border-strong pt-5" style={delay(i)}>
                <dt className="text-[0.875rem] font-medium text-muted-foreground">{fact.label}</dt>
                <dd className="mt-2 text-[1.25rem] leading-snug font-semibold tracking-[-0.02em] text-foreground rtl:tracking-normal">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-[0.8125rem] text-subtle-foreground">{t.common.taxNote}</p>
        </Band>
      ) : null}

      <Band tone={s.facts ? "canvas" : "tray"} labelledBy="process-title">
        <Heading id="process-title" eyebrow={s.process.eyebrow} title={s.process.title} />
        <div className="mt-14">
          <PointGrid items={s.process.steps} cols={2} numbered />
        </div>
      </Band>

      <Band tone={s.facts ? "tray" : "canvas"} labelledBy="audience-title">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Heading id="audience-title" eyebrow={s.audience.eyebrow} title={s.audience.title} />
          <ul className="reveal grid content-start border-t border-border-strong sm:grid-cols-2 sm:gap-x-10">
            {s.audience.items.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-border py-4 text-[1rem] font-medium">
                <span aria-hidden="true" className="size-[6px] shrink-0 rounded-[2px] bg-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {s.product ? (
          <div className="reveal mt-16 flex flex-col gap-6 rounded-[var(--radius-xl)] border border-border bg-surface p-7 sm:flex-row sm:items-center sm:p-9">
            <ProductTile product={s.product.key} className="size-14 rounded-[1rem]" />
            <div className="min-w-0 flex-1">
              <p className="text-[0.8125rem] font-semibold text-brand-text">{s.product.eyebrow}</p>
              <h3 className="mt-1 text-[1.375rem] leading-snug font-semibold tracking-[-0.02em] text-balance rtl:tracking-normal">{s.product.title}</h3>
              <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{s.product.body}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <TextLink href={localePath(locale, s.product.href)}>{s.product.link}</TextLink>
              {s.product.external ? <TextLink href={s.product.external.href}>{s.product.external.label}</TextLink> : null}
            </div>
          </div>
        ) : null}
      </Band>

      <Band labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Heading id="faq-title" eyebrow={t.common.faq} title={t.common.faqTitle} />
          <FaqList items={s.faq} />
        </div>
      </Band>

      <EnquiryBand t={t} locale={locale} title={s.form.title} body={s.form.body} interest={s.form.interest} page={`/solutions/${s.slug}`} />
    </>
  );
}
