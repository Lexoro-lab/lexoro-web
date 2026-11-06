import type { CSSProperties, ReactNode } from "react";
import { Dot, DotTitle } from "@/components/brand/brand";
import { cn } from "@/lib/utils";

/** A page band. Tones alternate paper and tray; hairlines, not cards. */
export function Band({
  id,
  tone = "canvas",
  className,
  innerClassName,
  labelledBy,
  children,
}: {
  id?: string;
  tone?: "canvas" | "tray";
  className?: string;
  innerClassName?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("scroll-mt-16 border-b border-border", tone === "tray" && "bg-tray", className)}>
      <div className={cn("container-page section-y", innerClassName)}>{children}</div>
    </section>
  );
}

/** Section label: the accent square, then the words in quiet ink. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("type-eyebrow inline-flex items-center gap-2 text-muted-foreground", className)}>
      <Dot />
      {children}
    </p>
  );
}

export function Heading({
  id,
  eyebrow,
  title,
  body,
  align = "start",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div className={cn("reveal max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={cn("type-headline text-balance", eyebrow && "mt-4")}>
        <DotTitle text={title} />
      </h2>
      {body ? <p className={cn("type-lead mt-5 max-w-2xl text-pretty text-muted-foreground", align === "center" && "mx-auto")}>{body}</p> : null}
    </div>
  );
}

/** Stagger helper for grids of `.reveal` children. */
export const delay = (index: number, step = 70): CSSProperties => ({ "--reveal-delay": `${index * step}ms` }) as CSSProperties;

/** Points in a grid, each opened by a hairline. */
export function PointGrid({ items, cols = 3, numbered = false }: { items: { title: string; body: string }[]; cols?: 2 | 3; numbered?: boolean }) {
  return (
    <ul className={cn("grid gap-x-12 gap-y-10 sm:grid-cols-2", cols === 3 && "lg:grid-cols-3")}>
      {items.map((item, i) => (
        <li key={item.title} className="reveal border-t border-border-strong pt-5" style={delay(i)}>
          {numbered ? <p className="mb-3 font-mono text-[0.8125rem] text-brand-text tabular-nums">{String(i + 1).padStart(2, "0")}</p> : null}
          <h3 className="text-[1.0625rem] font-semibold text-foreground">{item.title}</h3>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
