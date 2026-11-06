import { Dot, DotTitle, ProductTile } from "@/components/brand/brand";
import { Arrow, buttonClass, WhatsAppIcon } from "@/components/blocks/buttons";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

/**
 * The first screen. One dark stage, the page's single dark moment, lit from
 * above. The headline on one side; on the other the company itself, drawn as
 * a ledger card: the legal entity, and the products and service under it.
 */
export function Hero({ locale, t }: { locale: Locale; t: Dict }) {
  const h = t.home.hero;
  const s = t.home.stage;
  const tiles = ["fisqel", "bizbrain", "lexoro"];

  return (
    <section data-theme="dark" data-hero-dark="" aria-labelledby="hero-title" className="relative -mt-[var(--nav-height)] overflow-hidden bg-canvas pt-[var(--nav-height)] text-foreground">
      <div aria-hidden="true" className="stage-light pointer-events-none absolute inset-0" />

      <div className="container-page relative grid items-center gap-x-14 gap-y-14 pt-10 pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:pt-14 lg:pb-24">
        <div>
          <p className="type-eyebrow rise inline-flex items-center gap-2 text-white/60">
            <Dot />
            {h.eyebrow}
          </p>
          <h1 id="hero-title" className="type-hero rise mt-5 text-balance text-white [--d:80ms]">
            <DotTitle text={h.title} />
          </h1>
          <p className="type-lead rise mt-6 max-w-[33rem] text-pretty text-white/60 [--d:160ms]">{h.body}</p>
          <div className="rise [--d:240ms]">
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={localePath(locale, "/#products")} className={buttonClass("brand")}>
                {h.primary}
                <Arrow />
              </a>
              <a href={whatsappLink(t.common.whatsappPrefill)} className={buttonClass("outline")}>
                <WhatsAppIcon />
                {t.common.talk}
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-white/50">
              <svg viewBox="0 0 24 24" className="size-3.5 text-dot" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {h.note}
            </p>
          </div>
        </div>

        {/* The company card */}
        <div className="rise relative [--d:200ms]">
          <div aria-hidden="true" className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_60%_40%,rgb(61_130_255/0.16),transparent_70%)]" />
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-surface shadow-[var(--shadow-float)]">
            <div className="flex items-center gap-3.5 border-b border-white/10 px-6 py-5">
              <ProductTile product="lexoro" className="size-10 rounded-[0.7rem]" />
              <div className="min-w-0">
                <p className="truncate text-[0.9375rem] font-semibold text-white">{s.company}</p>
                <p className="truncate text-[0.8125rem] text-white/50">{s.place}</p>
              </div>
              <span className="ms-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[0.6875rem] font-medium text-white/70">
                <span className="size-1.5 rounded-full bg-[#3ddc84]" />
                {s.live}
              </span>
            </div>

            <ul className="relative px-6 py-3">
              <span aria-hidden="true" className="absolute inset-y-6 start-[2.625rem] w-px bg-white/10" />
              {s.rows.map((row, i) => (
                <li key={row.name} className="relative flex items-center gap-4 py-3.5">
                  <ProductTile product={tiles[i]} className="relative size-9 rounded-[0.6rem]" />
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 text-[0.9375rem] font-semibold text-white">
                      {row.name}
                      <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[0.6875rem] font-medium text-white/55">{row.kind}</span>
                    </p>
                    <p className="mt-0.5 truncate text-[0.8125rem] text-white/55">{row.line}</p>
                  </div>
                  <span className="hidden font-mono text-[0.75rem] text-white/40 sm:block" dir="ltr">
                    {row.meta}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-6 py-4 text-[0.8125rem] text-white/55">
              <Dot />
              {s.foot}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
