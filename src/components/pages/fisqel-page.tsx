import { Arrow, buttonClass, TextLink, WhatsAppIcon } from "@/components/blocks/buttons";
import { ChatPhone } from "@/components/blocks/chat-phone";
import { ClosingBand } from "@/components/blocks/closing";
import { FaqList } from "@/components/blocks/faq";
import { PageHero } from "@/components/blocks/page-hero";
import { Band, delay, Heading, PointGrid } from "@/components/blocks/section";
import { fisqelUrl, getPages } from "@/content/pages";
import type { Dict, Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

/** Fisqel's page on the company site. Anything to sign up, price or read in depth goes to fisqel.com. */
export function FisqelPage({ t, locale }: { t: Dict; locale: Locale }) {
  const c = getPages(locale).fisqel;
  const start = fisqelUrl(locale, "/get-started");

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} aside={<ChatPhone chat={c.chat} avatar="fisqel" />}>
        <div className="flex flex-wrap gap-3">
          <a href={start} className={buttonClass("brand")}>
            {c.hero.primary}
            <Arrow />
          </a>
          <a href={fisqelUrl(locale, "/pricing")} className={buttonClass("outline")}>
            {c.hero.secondary}
          </a>
        </div>
        <p className="mt-5 text-[0.8125rem] text-subtle-foreground">{c.hero.note}</p>
      </PageHero>

      <Band labelledBy="features-title">
        <Heading id="features-title" eyebrow={c.features.eyebrow} title={c.features.title} />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {c.features.items.map((item, i) => (
            <li key={item.title} className="reveal bg-surface" style={delay(i)}>
              <a href={fisqelUrl(locale, item.path)} className="group flex h-full flex-col p-7 transition-colors hover:bg-tray">
                <h3 className="text-[1.0625rem] font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-brand-text">
                  {c.features.link}
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="tray" labelledBy="how-title">
        <Heading id="how-title" eyebrow={c.how.eyebrow} title={c.how.title} />
        <div className="mt-14">
          <PointGrid items={c.how.steps} cols={2} numbered />
        </div>
      </Band>

      <Band labelledBy="different-title">
        <Heading id="different-title" eyebrow={c.different.eyebrow} title={c.different.title} />
        <div className="mt-14">
          <PointGrid items={c.different.items} />
        </div>
        <div className="reveal mt-16 rounded-[var(--radius-xl)] border border-border bg-surface p-7 sm:p-9">
          <p className="text-[0.8125rem] font-semibold text-brand-text">{c.accountants.eyebrow}</p>
          <h3 className="mt-2 text-[1.375rem] leading-snug font-semibold tracking-[-0.02em] text-balance rtl:tracking-normal">{c.accountants.title}</h3>
          <p className="mt-2.5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{c.accountants.body}</p>
          <TextLink href={fisqelUrl(locale, c.accountants.path)} className="mt-5">
            {c.accountants.link}
          </TextLink>
        </div>
      </Band>

      <Band tone="tray" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Heading id="faq-title" eyebrow={t.common.faq} title={t.common.faqTitle} />
          <FaqList items={c.faq} />
        </div>
      </Band>

      <ClosingBand
        tile="fisqel"
        title={c.closing.title}
        body={c.closing.body}
        actions={
          <>
            <a href={start} className={buttonClass("brand")}>
              {c.closing.primary}
              <Arrow />
            </a>
            <a href={whatsappLink(t.common.whatsappPrefill)} className={buttonClass("outline")}>
              <WhatsAppIcon />
              {t.common.talk}
            </a>
          </>
        }
        note="fisqel.com"
      />
    </>
  );
}
