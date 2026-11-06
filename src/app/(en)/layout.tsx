import type { ReactNode } from "react";
import { Shell } from "@/components/site/shell";
import "@/styles/globals.css";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
