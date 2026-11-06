import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/ar", "/bizbrain", "/ar/bizbrain", "/privacy", "/terms", "/data-deletion"].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-11-07"),
  }));
}
