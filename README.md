# Lexoro Solutions — website

The company site for Lexoro Solutions FZC (lexorosolutions.com). Next.js 16, Tailwind 4,
built on the Fisqel design system ("ink and dot") with Lexoro blue (#004aad) as the accent.

## Pages

| English | Arabic |
|---|---|
| `/` | `/ar` |
| `/bizbrain` | `/ar/bizbrain` |
| `/privacy`, `/terms`, `/data-deletion` | English only |

Copy lives in `src/i18n/en.ts` and `src/i18n/ar.ts` (Arabic is type-checked against English).
Contact details live only in `src/lib/site.ts`. Design tokens are in `src/styles/tokens.css`;
every rule in `src/styles/globals.css` must stay inside a `@layer`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fonts are self-hosted, no network needed)
```

## Deploy on Railway

1. New project → Deploy from GitHub repo → `Lexoro-lab/lexoro-web`.
2. Railway detects Next.js and runs `npm run build`, then `npm start`.
   `next start` listens on Railway's `PORT` automatically — no extra config.
3. Variables: `NEXT_PUBLIC_SITE_URL=https://lexorosolutions.com` (used for canonical links,
   sitemap and social previews).
4. Settings → Networking → add custom domains `lexorosolutions.com` and `www.lexorosolutions.com`,
   then create the DNS records Railway shows (CNAME for `www`; for the root domain use your DNS
   provider's CNAME flattening / ALIAS, e.g. Cloudflare).
5. Keep `app.lexorosolutions.com` (BizBrain app) pointing where it is now.
6. Once Railway serves the site on the domain, remove the old Vercel project.
