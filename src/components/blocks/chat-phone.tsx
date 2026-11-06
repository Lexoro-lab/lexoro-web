import { ProductTile } from "@/components/brand/brand";

type Chat = { name: string; status: string; messages: { from: string; text: string; time: string; chips?: string[] }[] };

/** A WhatsApp thread on a phone, drawn entirely from chat and phone tokens. */
export function ChatPhone({ chat, avatar = "bizbrain" }: { chat: Chat; avatar?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(60%_55%_at_50%_45%,var(--spot),transparent_70%)]" />
      <div className="relative rounded-[2.6rem] bg-[linear-gradient(160deg,var(--phone-bezel-from),var(--phone-bezel-to))] p-[0.6rem] shadow-[var(--shadow-float)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-phone-chrome">
          <div className="flex items-center gap-3 border-b border-[var(--phone-hairline)] px-4 pt-6 pb-3">
            <ProductTile product={avatar} className="size-9 rounded-full" />
            <div className="min-w-0">
              <p className="truncate text-[0.875rem] font-semibold text-chat-ink">{chat.name}</p>
              <p className="text-[0.75rem] text-chat-meta">{chat.status}</p>
            </div>
          </div>
          <div className="wa-wallpaper relative flex min-h-[23rem] flex-col gap-2 px-3 py-4">
            {chat.messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "out"
                    ? "max-w-[85%] self-end rounded-[0.9rem] rounded-se-[0.25rem] bg-chat-out px-3 py-2 text-chat-ink shadow-[0_1px_0.5px_rgb(0_0_0/0.13)]"
                    : "max-w-[85%] self-start rounded-[0.9rem] rounded-ss-[0.25rem] bg-chat-in px-3 py-2 text-chat-ink shadow-[0_1px_0.5px_rgb(0_0_0/0.13)]"
                }
              >
                <p className="text-[0.84375rem] leading-snug">{m.text}</p>
                {m.chips ? (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.chips.map((c) => (
                      <span key={c} className="rounded-full bg-chat-chip px-2.5 py-1 text-[0.75rem] font-medium text-chat-ink">
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}
                <p className="mt-1 flex items-center justify-end gap-1 text-[0.6875rem] text-chat-meta" dir="ltr">
                  {m.time}
                  {m.from === "out" ? <span className="text-chat-tick">✓✓</span> : null}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-[var(--phone-hairline)] px-3 py-3">
            <span className="h-9 flex-1 rounded-full bg-phone-field" />
            <span className="grid size-9 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground">
              <svg viewBox="0 0 24 24" className="size-4 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
