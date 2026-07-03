import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion — Lexoro Solutions",
  description:
    "How to request deletion of the personal data associated with BizBrain, Lexoro Solutions' WhatsApp-based appointment booking service.",
};

// Neutralizes site-wide base styles from globals.css (imported by the root
// layout) so this standalone legal page renders exactly as designed:
//  - hides the fixed ambient gradient field painted by `body::before`
//  - resets the global body font-size / letter-spacing leak
//  - restores list markers that Tailwind's preflight removes (this page nests
//    its <ul>/<ol> under .wrap rather than <main>, and uses both list types)
const isolation = `
  body::before { display: none !important; }
  body { font-size: 16px; letter-spacing: normal; }
  .wrap ul { list-style: disc; }
  .wrap ol { list-style: decimal; }
`;

// Full <style> block from the source HTML's <head>, kept intact.
const styles = `
  :root{--ink:#111111;--ink-soft:#3a3a3a;--ink-faint:#6b6b6b;--cream:#f7f4ec;--line:#e2ddd0;--accent:#1f47e6;}
  *{box-sizing:border-box;}
  body{margin:0;background:var(--cream);color:var(--ink);font-family:Georgia,'Times New Roman',serif;line-height:1.7;-webkit-font-smoothing:antialiased;}
  .wrap{max-width:720px;margin:0 auto;padding:72px 28px 96px;}
  .eyebrow{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:.22em;font-size:11px;font-weight:600;color:var(--ink-faint);margin-bottom:20px;}
  h1{font-size:40px;line-height:1.15;letter-spacing:-.02em;margin:0 0 10px;font-weight:400;}
  .lede{font-size:18px;color:var(--ink-soft);margin:0 0 40px;padding-bottom:32px;border-bottom:1px solid var(--line);}
  h2{font-size:22px;letter-spacing:-.01em;margin:44px 0 14px;font-weight:400;}
  p{margin:0 0 18px;color:var(--ink-soft);}
  ul,ol{margin:0 0 18px;padding-left:22px;color:var(--ink-soft);}
  li{margin-bottom:10px;}
  a{color:var(--accent);text-decoration:none;border-bottom:1px solid rgba(31,71,230,.3);}
  a:hover{border-bottom-color:var(--accent);}
  .box{background:#fff;border:1px solid var(--line);border-radius:10px;padding:24px 26px;margin:28px 0;}
  .box p:last-child{margin-bottom:0;}
  strong{color:var(--ink);font-weight:600;}
  .meta{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;color:var(--ink-faint);margin-top:56px;padding-top:24px;border-top:1px solid var(--line);}
`;

const body = `
<div class="wrap">
  <div class="eyebrow">Lexoro Solutions · BizBrain</div>
  <h1>Data Deletion</h1>
  <p class="lede">This page explains how to request deletion of your personal data associated with BizBrain, our WhatsApp-based appointment booking service for clinics.</p>
  <h2>What data we hold</h2>
  <p>BizBrain, operated by Lexoro Solutions, processes limited personal data to provide appointment booking through WhatsApp. This may include your name, WhatsApp phone number, appointment details, and the messages you exchange with a clinic's automated assistant.</p>
  <h2>How to request deletion</h2>
  <p>You can request that we delete the personal data we hold about you at any time. To do so, contact us using the details below and include the WhatsApp phone number you used, so we can locate your records.</p>
  <div class="box">
    <p><strong>Email:</strong> <a href="mailto:info@lexorosolutions.com">info@lexorosolutions.com</a></p>
    <p><strong>Subject line:</strong> Data Deletion Request</p>
    <p><strong>Please include:</strong> the WhatsApp phone number associated with your bookings, and the name of the clinic you contacted (if known).</p>
  </div>
  <h2>What happens next</h2>
  <ol>
    <li>We confirm receipt of your request, usually within 2 business days.</li>
    <li>We verify the request relates to your own data.</li>
    <li>We delete the associated personal data from our systems, and instruct our processors to do the same, within 30 days.</li>
    <li>We confirm to you once deletion is complete.</li>
  </ol>
  <h2>Important notes</h2>
  <ul>
    <li>Each clinic is the controller of its own patients' records. Where a clinic holds its own copy of appointment data, we will also notify the clinic of your deletion request so it can act on its records.</li>
    <li>We may retain a minimal amount of information where we are legally required to do so (for example, to comply with tax, accounting, or regulatory obligations). Any such data is kept only as long as legally necessary.</li>
    <li>Deleting your data may mean we can no longer service existing appointments booked through BizBrain.</li>
  </ul>
  <h2>Contact</h2>
  <p>For any questions about this process or how we handle your data, email <a href="mailto:info@lexorosolutions.com">info@lexorosolutions.com</a> or write to us at Office F1, C1 Building, Ajman Free Zone, Ajman, United Arab Emirates.</p>
  <div class="meta">Last updated: 1 July 2026 · Lexoro Solutions, Ajman Free Zone, UAE</div>
</div>
`;

export default function DataDeletionPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: isolation }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
