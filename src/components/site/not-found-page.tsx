import { Arrow, buttonClass } from "@/components/blocks/buttons";
import { PageHero } from "@/components/blocks/page-hero";

export function NotFoundPage({ locale }: { locale: "en" | "ar" }) {
  const ar = locale === "ar";
  return (
    <PageHero
      eyebrow="404"
      title={ar ? "لم نجد هذه الصفحة." : "We couldn't find that page."}
      body={ar ? "ربما نُقلت أو أن الرابط غير صحيح." : "It may have moved, or the link may be wrong."}
    >
      <a href={ar ? "/ar" : "/"} className={buttonClass("brand")}>
        {ar ? "العودة إلى الرئيسية" : "Back to the homepage"}
        <Arrow />
      </a>
    </PageHero>
  );
}
