import Link from "next/link";
import { Logo } from "@/components/brand/brand";
import { SmartLink } from "@/components/blocks/buttons";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";

/* A directory, not a section: small type, tight rows, hairlines.
   Columns on wider screens; on phones each folds into a row that opens. */
const linkClass = "text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-2";

type Item = { label: string; href: string; ltr?: boolean };

export function SiteFooter({ locale, t }: { locale: Locale; t: Dict }) {
  const f = t.footer;
  const columns: { title: string; links: Item[] }[] = [
    ...f.columns.map((c) => ({ title: c.title, links: c.links.map((l) => ({ label: l.label, href: localePath(locale, l.href) })) })),
    {
      title: f.contactTitle,
      links: [
        { label: t.common.whatsapp, href: whatsappLink(t.common.whatsappPrefill) },
        { label: site.whatsappDisplay, href: `tel:+${site.whatsapp}`, ltr: true },
        { label: site.email, href: `mailto:${site.email}`, ltr: true },
      ],
    },
  ];

  const renderLink = (link: Item) => (
    <SmartLink href={link.href} className={linkClass}>
      {link.ltr ? <span dir="ltr">{link.label}</span> : link.label}
    </SmartLink>
  );

  return (
    <footer className="border-t border-border-strong bg-tray text-[0.8125rem] leading-[1.45]">
      <div className="container-page pt-10 pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link href={localePath(locale, "/")} aria-label={t.nav.home} className="inline-flex rounded-md">
              <Logo />
            </Link>
            <p className="mt-3 text-muted-foreground">{f.tagline}</p>
          </div>
        </div>

        <div className="mt-9 hidden gap-x-8 gap-y-10 md:grid md:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-semibold text-foreground">{col.title}</p>
              <ul className="mt-2.5 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-7 border-t border-border-strong md:hidden">
          {columns.map((col) => (
            <details key={col.title} className="group border-b border-border-strong">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-foreground [&::-webkit-details-marker]:hidden">
                {col.title}
                <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul className="space-y-2.5 pb-4">
                {col.links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-strong pt-6 text-subtle-foreground">
          <p>
            © {new Date().getFullYear()} {f.rights} · {f.address}
          </p>
          <ThemeToggle labels={{ theme: f.theme, light: f.light, dark: f.dark }} />
        </div>
      </div>
    </footer>
  );
}
