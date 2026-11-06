/** Questions as native disclosure rows: no JavaScript, hairlines between. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="reveal border-t border-border-strong">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-border-strong">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="relative mt-1.5 size-3.5 shrink-0">
              <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
              <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="-mt-1 pb-6 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
