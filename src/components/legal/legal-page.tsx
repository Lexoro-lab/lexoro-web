import { PageHero } from "@/components/blocks/page-hero";

export function LegalPage({ eyebrow, title, lede, meta, html }: { eyebrow: string; title: string; lede: string; meta: string; html: string }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={lede} meta={meta} />
      <section className="border-b border-border">
        <div className="container-reading prose-legal py-14 sm:py-20" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </>
  );
}
