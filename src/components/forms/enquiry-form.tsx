"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Arrow, buttonClass, WhatsAppIcon } from "@/components/blocks/buttons";
import type { Dict, Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "failed" | "invalid";
type Fields = { name: string; company: string; email: string; phone: string; interest: string; message: string };

const field =
  "mt-1.5 block w-full rounded-[var(--radius-md)] border border-border-strong bg-surface px-3.5 py-2.5 text-[0.9375rem] text-foreground placeholder:text-subtle-foreground transition-colors focus:border-[var(--dot)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-line)]";
const label = "block text-[0.8125rem] font-medium text-foreground";

/**
 * Email is the primary route (POST /api/contact → Resend). If delivery is not
 * configured or fails, the visitor is never left with a silent failure: the
 * message is offered on WhatsApp or in their mail app, already written.
 */
export function EnquiryForm({ t, locale, interest = 0, page, className }: { t: Dict; locale: Locale; interest?: number; page: string; className?: string }) {
  const f = t.form;
  const [values, setValues] = useState<Fields>({ name: "", company: "", email: "", phone: "", interest: f.interests[interest] ?? f.interests[0], message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const set = (key: keyof Fields) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const summary =
    [
      `${f.name}: ${values.name}`,
      values.company ? `${f.company}: ${values.company}` : "",
      `${f.email}: ${values.email}`,
      values.phone ? `${f.phone}: ${values.phone}` : "",
      `${f.interest}: ${values.interest}`,
    ]
      .filter(Boolean)
      .join("\n") + `\n\n${values.message}`;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!values.name.trim() || !/^\S+@\S+\.\S+$/.test(values.email) || values.message.trim().length < 2) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "", locale, page }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("rounded-[var(--radius-xl)] border border-border bg-surface p-7 sm:p-9", className)} role="status">
        <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-brand-tint text-brand-text">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="type-subhead mt-5">{f.sentTitle}</h3>
        <p className="mt-2 text-[0.9375rem] text-muted-foreground">{f.sentBody}</p>
        <a href={whatsappLink(t.common.whatsappPrefill)} className={cn(buttonClass("outline"), "mt-6")}>
          <WhatsAppIcon />
          {t.common.whatsapp}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className={cn("rounded-[var(--radius-xl)] border border-border bg-surface p-6 shadow-[var(--shadow-sm)] sm:p-8", className)}>
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <label className={label}>
          {f.name}
          <input name="name" autoComplete="name" required value={values.name} onChange={set("name")} className={field} />
        </label>
        <label className={label}>
          {f.company} <span className="font-normal text-subtle-foreground">({f.optional})</span>
          <input name="company" autoComplete="organization" value={values.company} onChange={set("company")} className={field} />
        </label>
        <label className={label}>
          {f.email}
          <input name="email" type="email" autoComplete="email" required dir="ltr" value={values.email} onChange={set("email")} className={cn(field, "text-start")} />
        </label>
        <label className={label}>
          {f.phone} <span className="font-normal text-subtle-foreground">({f.optional})</span>
          <input name="phone" type="tel" autoComplete="tel" dir="ltr" value={values.phone} onChange={set("phone")} className={cn(field, "text-start")} />
        </label>
        <label className={cn(label, "sm:col-span-2")}>
          {f.interest}
          <select name="interest" value={values.interest} onChange={set("interest")} className={field}>
            {f.interests.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className={cn(label, "sm:col-span-2")}>
          {f.message}
          <textarea name="message" required rows={5} placeholder={f.messagePlaceholder} value={values.message} onChange={set("message")} className={cn(field, "resize-y")} />
        </label>
        {/* Honeypot: hidden from people, filled by bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {status === "invalid" ? (
        <p role="alert" className="mt-5 text-[0.875rem] font-medium text-[var(--destructive)]">
          {f.invalid}
        </p>
      ) : null}

      {status === "failed" ? (
        <div role="alert" className="mt-6 rounded-[var(--radius-md)] border border-border-strong bg-tray p-5">
          <p className="font-semibold">{f.failTitle}</p>
          <p className="mt-1 text-[0.875rem] text-muted-foreground">{f.failBody}</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a href={whatsappLink(summary)} className={buttonClass("whatsapp", "sm")}>
              <WhatsAppIcon />
              {f.viaWhatsapp}
            </a>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent(values.interest)}&body=${encodeURIComponent(summary)}`} className={buttonClass("outline", "sm")}>
              {f.viaEmail}
            </a>
          </div>
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <button type="submit" disabled={status === "sending"} className={cn(buttonClass("brand"), "disabled:opacity-60")}>
          {status === "sending" ? f.sending : f.submit}
          {status === "sending" ? null : <Arrow />}
        </button>
        <a href={whatsappLink(t.common.whatsappPrefill)} className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-muted-foreground hover:text-foreground">
          <WhatsAppIcon className="text-whatsapp" />
          {f.orWhatsapp}
        </a>
      </div>
      <p className="mt-5 text-[0.75rem] text-subtle-foreground">
        <Link href="/privacy" className="underline-offset-2 hover:underline">
          {f.privacy}
        </Link>
      </p>
    </form>
  );
}
