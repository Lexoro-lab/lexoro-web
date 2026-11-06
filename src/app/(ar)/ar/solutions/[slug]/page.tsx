import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/pages/solution-page";
import { getSolution, solutionSlugs } from "@/content/solutions";
import ar from "@/i18n/ar";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution("ar", slug);
  if (!s) return {};
  return pageMetadata({
    title: s.meta.title,
    description: s.meta.description,
    path: `/ar/solutions/${slug}`,
    locale: "ar",
    languages: { en: `/solutions/${slug}`, ar: `/ar/solutions/${slug}` },
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution("ar", slug);
  if (!s) notFound();
  return <SolutionPage s={s} t={ar} locale="ar" />;
}
