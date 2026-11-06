# Lexoro Solutions — website

The company site for Lexoro Solutions FZC (lexorosolutions.com). Next.js 16, Tailwind 4,
built on the Fisqel design system ("ink and dot") with Lexoro blue (#004aad) as the accent.

## Pages

Every page exists in English and Arabic (`/ar/...`), except the legal pages.

| Page | Path |
|---|---|
| Home | `/` |
| Solutions | `/solutions`, `/solutions/accounting-software`, `/solutions/tax-filing`, `/solutions/whatsapp-automation`, `/solutions/custom-software` |
| Products | `/products`, `/products/fisqel`, `/products/bizbrain` |
| Company | `/about`, `/contact` |
| Legal (English only) | `/privacy`, `/terms`, `/data-deletion` |

Old links `/bizbrain` and `/fisqel` redirect permanently to `/products/...`.

Where things live:
- Shared copy (nav, footer, forms, home, BizBrain): `src/i18n/en.ts` and `src/i18n/ar.ts`
- Solution pages: `src/content/solutions.ts` · Products, Fisqel, About, Contact: `src/content/pages.ts`
- Contact details: `src/lib/site.ts` only · Design tokens: `src/styles/tokens.css`
- Every rule in `src/styles/globals.css` must stay inside a `@layer`.

## Contact form

Forms post to `/api/contact`, which emails the enquiry through Resend. Set on Railway:

- `RESEND_API_KEY` — from resend.com, after verifying `lexorosolutions.com`
- `CONTACT_FROM` — e.g. `Lexoro Website <website@lexorosolutions.com>`
- `CONTACT_TO_EMAIL` — optional, defaults to `info@lexorosolutions.com`

Until these are set, the form doesn't lose messages: it offers to send the same message on
WhatsApp or by email instead. See `.env.example`.

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
3. Variables: `NEXT_PUBLIC_SITE_URL=https://lexorosolutions.com` (canonical links, sitemap,
   social previews) and the three contact-form variables above.
4. Settings → Networking → add custom domains `lexorosolutions.com` and `www.lexorosolutions.com`,
   then create the DNS records Railway shows (CNAME for `www`; for the root domain use your DNS
   provider's CNAME flattening / ALIAS, e.g. Cloudflare).
5. Keep `app.lexorosolutions.com` (BizBrain app) pointing where it is now.
6. Once Railway serves the site on the domain, remove the old Vercel project.
