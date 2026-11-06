"use client";

import { useState } from "react";
import { Arrow, buttonClass } from "@/components/blocks/buttons";
import type { Dict } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BizBrainPricing({ p }: { p: Dict["bizbrain"]["pricing"] }) {
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly");
  const yearly = interval === "yearly";

  return (
    <div className="reveal mx-auto mt-12 max-w-[26rem]">
      <div role="group" aria-label={p.eyebrow} className="mx-auto flex w-fit rounded-full border border-border bg-surface p-1">
        {(["monthly", "yearly"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={interval === value}
            onClick={() => setInterval(value)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-[0.875rem] font-medium transition-colors",
              interval === value ? "bg-foreground text-canvas" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {p[value]}
            {value === "yearly" ? (
              <span className={cn("rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold", interval === value ? "bg-white/15 dark:bg-black/10" : "bg-brand-tint text-brand-text")}>{p.save}</span>
            ) : null}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-[var(--radius-xl)] border border-border bg-surface p-8 shadow-[var(--shadow-md)]">
        <p className="text-[1.0625rem] font-semibold">{p.plan}</p>
        <p className="mt-1 text-[0.9375rem] text-muted-foreground">{p.planBody}</p>
        <p className="mt-7 flex items-baseline gap-1.5" dir="ltr">
          <span className="text-[0.9375rem] font-medium text-muted-foreground">AED</span>
          <span className="text-[3.25rem] leading-none font-semibold tracking-[-0.04em] tabular-nums">{yearly ? 249 : 299}</span>
          <span className="text-[0.9375rem] text-muted-foreground">{p.perMonth}</span>
          {yearly ? <span className="ms-2 text-[0.9375rem] text-subtle-foreground line-through">299</span> : null}
        </p>
        <p className="mt-2 min-h-[1.4em] text-[0.8125rem] text-muted-foreground">{yearly ? p.billedYearly : ""}</p>
        <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[0.9375rem] text-ink-soft">
              <svg viewBox="0 0 24 24" className="mt-1 size-3.5 shrink-0 text-brand-text" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a href={`${site.app.register}?billing=${interval}`} className={cn(buttonClass("brand"), "mt-8 w-full")}>
          {p.cta}
          <Arrow />
        </a>
      </div>
    </div>
  );
}
