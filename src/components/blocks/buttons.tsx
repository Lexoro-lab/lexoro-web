import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "brand" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "lg";

export function buttonClass(variant: Variant = "brand", size: Size = "lg") {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow] duration-[var(--duration-fast)]",
    size === "lg" ? "h-12 px-6 text-[0.9375rem]" : "h-9 px-4 text-[0.875rem]",
    variant === "brand" && "bg-brand text-brand-foreground hover:bg-brand-hover shadow-[var(--shadow-sm)]",
    variant === "outline" && "border border-border-strong bg-transparent text-foreground hover:bg-foreground/5",
    variant === "ghost" && "text-foreground hover:bg-foreground/5",
    variant === "whatsapp" && "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover",
  );
}

/** A small arrow that moves on hover and mirrors in Arabic. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("size-3.5 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.8-.2-.3A8 8 0 1 1 12 20Zm4.5-5.6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.3.3-.9.9-.9 2.1s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z" />
    </svg>
  );
}

/** Any link: internal routes through Next, everything else as a plain anchor. */
export function SmartLink({ href, className, children, ...rest }: { href: string; className?: string; children: ReactNode; "aria-label"?: string }) {
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <SmartLink href={href} className={cn("group inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-text", className)}>
      {children}
      <Arrow />
    </SmartLink>
  );
}
