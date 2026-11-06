import { cn } from "@/lib/utils";

/** The Lexoro wordmark: ink on paper, white on ink. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/lexoro-logo-dark.png" alt="Lexoro" width={843} height={296} className="logo-on-light h-[1.6rem] w-auto" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/lexoro-logo-white.png" alt="Lexoro" width={573} height={250} className="logo-on-dark h-[1.75rem] w-auto" />
    </span>
  );
}

/** The logo's blue arrow, drawn as a mark. */
export function LexoroMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M10.5 4.5h9v9" stroke="currentColor" strokeWidth="3.4" strokeLinecap="square" />
      <path d="M5 9.5h9v9" stroke="currentColor" strokeWidth="3.4" strokeLinecap="square" />
    </svg>
  );
}

/** The accent square. Used once per heading, eyebrow or signal. */
export function Dot({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("inline-block size-[7px] shrink-0 rounded-[2px] bg-dot", className)} />;
}

/** A title whose closing full stop becomes the blue square. */
export function DotTitle({ text }: { text: string }) {
  if (!text.endsWith(".")) return <>{text}</>;
  return (
    <>
      {text.slice(0, -1)}
      <span aria-hidden="true" className="ms-[0.06em] inline-block size-[0.17em] rounded-[0.03em] bg-dot align-baseline" />
      <span className="sr-only">.</span>
    </>
  );
}

/** App-icon tiles. Fisqel uses its own app icon; BizBrain and Lexoro are drawn. */
export function ProductTile({ product, className }: { product: string; className?: string }) {
  if (product === "fisqel") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/brand/fisqel-icon.png" alt="" aria-hidden="true" width={256} height={256} className={cn("size-11 shrink-0 rounded-[0.8rem]", className)} />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-11 shrink-0 place-items-center rounded-[0.8rem] bg-[#13161a] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]",
        className,
      )}
    >
      {product === "bizbrain" ? (
        <svg viewBox="0 0 24 24" className="size-[52%] text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.6L3 21l1.9-5.7A8.4 8.4 0 1 1 21 11.5Z" />
          <path d="m8.5 11.5 2.3 2.3 4.7-4.6" stroke="#4d8dff" />
        </svg>
      ) : (
        <LexoroMark className="size-[56%] text-[#4d8dff]" />
      )}
    </span>
  );
}
