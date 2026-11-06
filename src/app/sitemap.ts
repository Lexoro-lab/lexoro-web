import type { MetadataRoute } from "next";
import { solutionSlugs } from "@/content/solutions";
import { site } from "@/lib/site";

const pages = ["/", "/solutions", ...solutionSlugs.map((s) => `/solutions/${s}`), "/products", "/products/fisqel", "/products/bizbrain", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const both = pages.flatMap((p) => [p, p === "/" ? "/ar" : `/ar${p}`]);
  return [...both, "/privacy", "/terms", "/data-deletion"].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-11-07"),
  }));
}
