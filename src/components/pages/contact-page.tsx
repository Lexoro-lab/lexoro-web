import { WhatsAppIcon } from "@/components/blocks/buttons";
import { Eyebrow } from "@/components/blocks/section";
import { DotTitle } from "@/components/brand/brand";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { getPages } from "@/content/pages";
import type { Dict, Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";

export function ContactPage({ t, locale }: { t: Dict; locale: Locale }) {
  const c = getPages(locale).contact;
  const rows = [
    { label: c.details.whatsapp, value: site.whatsappDisplay, href: whatsappLink(t.common.whatsappPrefill), ltr: true },
    { label: c.details.phone, value: site.whatsappDisplay, href: `tel:+${site.whatsapp}`, ltr: true },
    { label: c.details.email, value: site.email, href: `mailto:${site.email}`, ltr: true },
    { label: c.details.office, value: t.footer.address, href: "", ltr: false },
  ];

  return (
    <section className="border-b border-border">
      <div className="container-page grid gap-x-16 gap-y-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:pb-28">
        <div>
          <Eyebrow className="rise">{c.hero.eyebrow}</Eyebrow>
          <h1 className="rise mt-5 text-[clamp(2.5rem,1.45rem+3.2vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.042em] [--d:80ms] rtl:leading-[1.3] rtl:tracking-normal">
            <DotTitle text={c.hero.title} />
          </h1>
          <p className="type-lead rise mt-6 max-w-xl text-pretty text-muted-foreground [--d:160ms]">{c.hero.body}</p>

          <a href={whatsappLink(t.common.whatsappPrefill)} className="rise mt-9 inline-flex h-12 items-center gap-2.5 rounded-full bg-whatsapp px-6 text-[0.9375rem] font-medium text-whatsapp-foreground transition-colors [--d:220ms] hover:bg-whatsapp-hover">
            <WhatsAppIcon />
            {t.common.whatsapp}
          </a>

          <h2 className="mt-14 text-[0.8125rem] font-semibold text-foreground">{c.details.title}</h2>
          <dl className="mt-3 border-t border-border-strong">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-border py-3.5 text-[0.9375rem]">
                <dt className="text-muted-foreground">{row.label}</dt>
                <dd className="font-medium">
                  {row.href ? (
                    <a href={row.href} className="hover:underline" dir={row.ltr ? "ltr" : undefined}>
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-[0.8125rem] font-semibold text-foreground">{c.support.title}</h2>
          <ul className="mt-3 border-t border-border-strong">
            {c.support.items.map((item) => (
              <li key={item.label} className="border-b border-border py-4">
                <p className="text-[0.9375rem] font-semibold">{item.label}</p>
                <p className="mt-0.5 text-[0.875rem] text-muted-foreground">{item.body}</p>
                <a href={item.href} className="mt-1.5 inline-block text-[0.875rem] font-semibold text-brand-text hover:underline">
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rise [--d:200ms]">
          <h2 className="mb-4 text-[0.8125rem] font-semibold text-foreground">{c.formTitle}</h2>
          <EnquiryForm t={t} locale={locale} page="/contact" />
        </div>
      </div>
    </section>
  );
}
