import type { ReactNode } from "react";
import { DotTitle, ProductTile } from "@/components/brand/brand";

/* Every page ends the same way: the dark stage again, lit from above,
   the mark, one line ending on the blue square, then the actions. */
export function ClosingBand({ title, body, actions, note, tile = "lexoro" }: { title: string; body: string; actions: ReactNode; note?: string; tile?: string }) {
  return (
    <section data-theme="dark" aria-labelledby="closing-title" className="relative overflow-hidden bg-canvas text-foreground">
      <div aria-hidden="true" className="stage-light pointer-events-none absolute inset-0" />
      <div className="container-page relative section-y text-center">
        <ProductTile product={tile} className="mx-auto size-16 rounded-[1.15rem] border border-white/10 shadow-[0_30px_60px_-24px_rgb(0_0_0/0.9)]" />
        <h2 id="closing-title" className="mx-auto mt-9 max-w-4xl text-[clamp(2.4rem,1.2rem+4vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance text-white rtl:leading-[1.3] rtl:tracking-normal">
          <DotTitle text={title} />
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.1875rem] text-white/65">{body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>
        {note ? <p className="mt-5 text-[0.8125rem] text-white/45">{note}</p> : null}
      </div>
    </section>
  );
}
