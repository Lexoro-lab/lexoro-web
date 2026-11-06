import { site } from "@/lib/site";

/*
 * Website enquiries → email, through Resend's HTTP API (plain fetch, no SDK).
 *
 * Env (set on Railway):
 *   RESEND_API_KEY    required — from resend.com, after verifying lexorosolutions.com
 *   CONTACT_FROM      required — a verified sender, e.g. "Lexoro Website <website@lexorosolutions.com>"
 *   CONTACT_TO_EMAIL  optional — defaults to info@lexorosolutions.com
 *   RESEND_API_URL    optional — override, for testing against a mock
 *
 * 400 bad body · 422 invalid · 429 rate limited · 503 not configured · 502 send failed.
 * The honeypot field `website` returns 200 and sends nothing.
 */

export const runtime = "nodejs";

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: "bad_request" }, { status: 400 });
  }

  if (clean(body.website, 200)) return Response.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200),
    phone: clean(body.phone, 60),
    interest: clean(body.interest, 120),
    message: clean(body.message, 5000),
    page: clean(body.page, 200),
    locale: clean(body.locale, 5),
  };
  if (!data.name || !/^\S+@\S+\.\S+$/.test(data.email) || data.message.length < 2) {
    return Response.json({ ok: false, reason: "invalid" }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return Response.json({ ok: false, reason: "rate_limited" }, { status: 429 });

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!key || !from) return Response.json({ ok: false, reason: "not_configured" }, { status: 503 });

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Interested in", data.interest],
    ["Page", data.page],
    ["Language", data.locale],
  ];
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${data.message}`;
  const html =
    `<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">` +
    rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="color:#646a71">${k}</td><td><strong>${escape(v)}</strong></td></tr>`).join("") +
    `</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escape(data.message)}</p>`;

  try {
    const res = await fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [process.env.CONTACT_TO_EMAIL || site.email],
        reply_to: data.email,
        subject: `Website enquiry: ${data.interest || "General"} — ${data.name}${data.company ? ` (${data.company})` : ""}`,
        text,
        html,
      }),
    });
    if (!res.ok) return Response.json({ ok: false, reason: "send_failed" }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, reason: "send_failed" }, { status: 502 });
  }
}
