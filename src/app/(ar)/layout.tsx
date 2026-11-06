import type { ReactNode } from "react";
import { Shell } from "@/components/site/shell";
import "@/styles/globals.css";

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return <Shell locale="ar">{children}</Shell>;
}
