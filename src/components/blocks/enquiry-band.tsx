import { EnquiryForm } from "@/components/forms/enquiry-form";
import type { Dict, Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { Heading } from "./section";

/** A section with a short pitch on one side and the enquiry form on the other. */
export function EnquiryBand({ t, locale, title, body, interest, page, eyebrow }: { t: Dict; locale: Locale; title: string; body: string; interest: number; page: string; eyebrow?: string }) {
  return (
    <section id="enquire" className="scroll-mt-16 border-b border-border bg-tray">
      <div className="container-page section-y grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <Heading eyebrow={eyebrow ?? t.common.contact} title={title} body={body} />
          <dl className="reveal mt-10 space-y-4 text-[0.9375rem]">
            <div>
              <dt className="text-[0.8125rem] text-muted-foreground">WhatsApp</dt>
              <dd>
                <a href={whatsappLink(t.common.whatsappPrefill)} className="font-semibold hover:underline" dir="ltr">
                  {site.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="font-semibold hover:underline" dir="ltr">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <EnquiryForm t={t} locale={locale} interest={interest} page={page} className="reveal" />
      </div>
    </section>
  );
}
