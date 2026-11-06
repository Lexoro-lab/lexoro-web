"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const read = (): Theme => (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

export function ThemeToggle({ labels }: { labels: { theme: string; light: string; dark: string } }) {
  const theme = useSyncExternalStore(subscribe, read, () => "light" as Theme);

  const set = (next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("lexoro-theme", next);
    } catch {}
  };

  return (
    <div role="group" aria-label={labels.theme} className="inline-flex rounded-full border border-border bg-canvas p-0.5">
      {(["light", "dark"] as const).map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => set(value)}
          aria-pressed={theme === value}
          className={cn(
            "rounded-full px-3 py-1 text-[0.75rem] font-medium transition-colors",
            theme === value ? "bg-foreground text-canvas" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {labels[value]}
        </button>
      ))}
    </div>
  );
}
