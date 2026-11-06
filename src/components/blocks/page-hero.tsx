import type { ReactNode } from "react";
import { DotTitle } from "@/components/brand/brand";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./section";

/* The opening of every inner page: light, quiet, start-aligned, no glow.
   Eyebrow, one large line ending on the blue square, one paragraph, then
   whatever the page needs. An optional aside sits beside it on wide screens. */
export function PageHero({ eyebrow, title, body, meta, children, aside }: { eyebrow: string; title: string; body?: ReactNode; meta?: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className={cn("container-page pt-14 pb-14 sm:pt-20 sm:pb-20", aside && "grid items-center gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]")}>
        <div className="max-w-3xl">
          <Eyebrow className="rise">{eyebrow}</Eyebrow>
          <h1 className="rise mt-5 text-[clamp(2.5rem,1.45rem+3.2vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.042em] text-balance [--d:80ms] rtl:leading-[1.3] rtl:tracking-normal">
            <DotTitle text={title} />
          </h1>
          {body ? <p className="type-lead rise mt-6 max-w-2xl text-pretty text-muted-foreground [--d:160ms]">{body}</p> : null}
          {meta ? <p className="mt-5 text-[0.8125rem] text-subtle-foreground">{meta}</p> : null}
          {children ? <div className="rise mt-9 [--d:240ms]">{children}</div> : null}
        </div>
        {aside ? <div className="rise min-w-0 [--d:200ms]">{aside}</div> : null}
      </div>
    </section>
  );
}
