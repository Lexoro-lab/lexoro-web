import { Arrow, buttonClass } from "@/components/blocks/buttons";
import { ClosingBand } from "@/components/blocks/closing";
import { PageHero } from "@/components/blocks/page-hero";
import { Band, Heading, PointGrid } from "@/components/blocks/section";
import type { Dict } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ChatPhone } from "./chat-phone";
import { BizBrainPricing } from "./pricing";

export function BizBrainPage({ t }: { t: Dict }) {
  const b = t.bizbrain;
  const actions = (
    <>
      <a href={site.app.register} className={buttonClass("brand")}>
        {b.hero.primary}
        <Arrow />
      </a>
      <a href={site.app.login} className={buttonClass("outline")}>
        {b.hero.secondary}
      </a>
    </>
  );

  return (
    <>
      <PageHero eyebrow={b.hero.eyebrow} title={b.hero.title} body={b.hero.body} aside={<ChatPhone chat={b.chat} />}>
        <div className="flex flex-wrap gap-3">{actions}</div>
        <p className="mt-5 text-[0.8125rem] text-subtle-foreground">{b.hero.note}</p>
      </PageHero>

      <Band labelledBy="features-title">
        <Heading id="features-title" eyebrow={b.features.eyebrow} title={b.features.title} />
        <div className="mt-14">
          <PointGrid items={b.features.items} />
        </div>
      </Band>

      <Band tone="tray" labelledBy="how-title">
        <Heading id="how-title" eyebrow={b.how.eyebrow} title={b.how.title} />
        <div className="mt-14">
          <PointGrid items={b.how.steps} numbered />
        </div>
      </Band>

      <Band id="pricing" labelledBy="pricing-title">
        <Heading id="pricing-title" eyebrow={b.pricing.eyebrow} title={b.pricing.title} body={b.pricing.body} align="center" />
        <BizBrainPricing p={b.pricing} />
      </Band>

      <ClosingBand tile="bizbrain" title={b.closing.title} body={b.closing.body} actions={actions} note={b.hero.note} />
    </>
  );
}
