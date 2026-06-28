import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Lexoro Solutions",
  description:
    "How Lexoro Solutions and BizBrain collect, use, and protect personal data, including patient information processed through WhatsApp.",
};

// Neutralizes site-wide base styles from globals.css (imported by the root
// layout) so this standalone legal page renders exactly as designed:
//  - hides the fixed ambient gradient field painted by `body::before`
//  - resets the global body font-size / letter-spacing leak
//  - restores list bullets that Tailwind's preflight removes
const isolation = `
  body::before { display: none !important; }
  body { font-size: 16px; letter-spacing: normal; }
  main ul { list-style: disc; }
`;

// Full <style> block from the source HTML's <head>, kept intact.
const styles = `
  :root{
    --ink:#16130f;
    --paper:#f6f2ea;
    --paper-2:#efe9dd;
    --line:#d9d0c0;
    --accent:#9a3b1b;
    --muted:#5f574b;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--paper);
    color:var(--ink);
    font-family:"Georgia","Times New Roman",serif;
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
  }
  .wrap{max-width:760px;margin:0 auto;padding:0 28px;}
  header.masthead{
    border-bottom:2px solid var(--ink);
    padding:48px 0 22px;
    margin-bottom:8px;
  }
  .eyebrow{
    font-family:"Helvetica Neue",Arial,sans-serif;
    text-transform:uppercase;
    letter-spacing:.28em;
    font-size:11px;
    font-weight:700;
    color:var(--accent);
    margin:0 0 18px;
  }
  h1{
    font-size:clamp(34px,6vw,52px);
    line-height:1.04;
    margin:0 0 14px;
    font-weight:400;
    letter-spacing:-.01em;
  }
  .lede{
    font-size:18px;
    color:var(--muted);
    margin:0;
    max-width:60ch;
  }
  .meta{
    font-family:"Helvetica Neue",Arial,sans-serif;
    font-size:12px;
    letter-spacing:.04em;
    color:var(--muted);
    margin-top:22px;
    display:flex;
    gap:24px;
    flex-wrap:wrap;
  }
  main{padding:30px 0 70px;}
  h2{
    font-family:"Helvetica Neue",Arial,sans-serif;
    font-size:13px;
    letter-spacing:.16em;
    text-transform:uppercase;
    font-weight:700;
    margin:46px 0 4px;
    padding-top:26px;
    border-top:1px solid var(--line);
    color:var(--ink);
  }
  h2 .num{color:var(--accent);margin-right:12px;}
  h3{
    font-size:20px;
    font-weight:400;
    margin:26px 0 6px;
  }
  p{margin:14px 0;}
  ul{margin:14px 0;padding-left:22px;}
  li{margin:8px 0;}
  a{color:var(--accent);text-decoration:underline;text-underline-offset:2px;}
  strong{font-weight:700;}
  .callout{
    background:var(--paper-2);
    border-left:3px solid var(--accent);
    padding:18px 22px;
    margin:22px 0;
    font-size:15.5px;
  }
  .placeholder{
    background:#fbe9d6;
    border:1px dashed var(--accent);
    padding:2px 7px;
    border-radius:3px;
    font-family:"Helvetica Neue",Arial,sans-serif;
    font-size:13px;
    color:var(--accent);
    font-weight:600;
  }
  table{
    width:100%;
    border-collapse:collapse;
    margin:18px 0;
    font-size:15px;
  }
  th,td{
    text-align:left;
    padding:11px 12px;
    border-bottom:1px solid var(--line);
    vertical-align:top;
  }
  th{
    font-family:"Helvetica Neue",Arial,sans-serif;
    font-size:11px;
    letter-spacing:.1em;
    text-transform:uppercase;
    color:var(--muted);
  }
  footer{
    border-top:2px solid var(--ink);
    padding:26px 0 60px;
    font-family:"Helvetica Neue",Arial,sans-serif;
    font-size:13px;
    color:var(--muted);
  }
  footer a{color:var(--ink);}
  .footer-links{margin-top:8px;}
  .footer-links a{margin-right:18px;}
  @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto;}}
`;

const body = `
<header class="masthead">
  <div class="wrap">
    <p class="eyebrow">Lexoro Solutions · BizBrain</p>
    <h1>Privacy Policy</h1>
    <p class="lede">How we collect, use, and protect personal information — including patient data processed through WhatsApp on behalf of the clinics we serve.</p>
    <div class="meta">
      <span>Effective: 28 June 2026</span>
      <span>Last updated: 28 June 2026</span>
    </div>
  </div>
</header>

<main>
<div class="wrap">

  <p>This Privacy Policy explains how <strong>Lexoro Solutions</strong> ("Lexoro", "we", "us", or "our"), a company registered in the United Arab Emirates, handles personal information in connection with our products and services, including <strong>BizBrain</strong>, our WhatsApp-based clinic management and appointment booking platform.</p>

  <p>Lexoro Solutions is the operator of BizBrain. Throughout this policy, "BizBrain" refers to the product and "Lexoro Solutions" refers to the legal entity responsible for it.</p>

  <div class="callout">
    <strong>Two kinds of data, two roles.</strong> For information about our own customers (clinics and their staff who sign up for BizBrain), Lexoro acts as the <strong>data controller</strong>. For information about patients that a clinic's BizBrain assistant processes during bookings, Lexoro acts as a <strong>data processor</strong> on behalf of that clinic, which remains the controller of its patients' data.
  </div>

  <h2><span class="num">01</span>Who we are</h2>
  <p>Lexoro Solutions is a technology company based in the United Arab Emirates. The legal entity responsible for the processing described here is:</p>
  <ul>
    <li><strong>Company:</strong> Lexoro Solutions</li>
    <li><strong>Registered address:</strong> Office F1, C1 Building, Ajman Free Zone, Ajman, UAE</li>
    <li><strong>Contact for privacy matters:</strong> info@lexorosolutions.com</li>
  </ul>

  <h2><span class="num">02</span>Information we collect</h2>

  <h3>From clinics and their staff (our customers)</h3>
  <ul>
    <li>Account details: name, email address, phone number, and password (stored in hashed form).</li>
    <li>Clinic information: clinic name, address, location coordinates, license number, working hours, and doctor profiles.</li>
    <li>Billing information processed by our payment provider (we do not store full card numbers).</li>
    <li>Usage data: log records, device and browser information, and actions taken within the BizBrain dashboard.</li>
  </ul>

  <h3>From patients (on behalf of clinics)</h3>
  <p>When a patient messages a clinic's WhatsApp number that is connected to BizBrain, we process the information needed to handle their request, which may include:</p>
  <ul>
    <li>The patient's WhatsApp phone number and display name.</li>
    <li>Message content the patient sends (for example, the doctor, date, and time they request).</li>
    <li>Appointment details created as a result of the conversation.</li>
  </ul>
  <p>We process patient information only to provide the booking and clinic-communication service to the clinic. We do not use patient data for advertising, and we do not sell it.</p>

  <h2><span class="num">03</span>How we use information</h2>
  <table>
    <tr><th>Purpose</th><th>Examples</th></tr>
    <tr><td>Provide the service</td><td>Authenticate clinic logins, schedule appointments, send confirmations and reminders, share clinic address and location.</td></tr>
    <tr><td>Communicate</td><td>Send transactional emails such as password resets, verification, and welcome messages.</td></tr>
    <tr><td>Billing</td><td>Process subscription payments and manage plans.</td></tr>
    <tr><td>Improve and secure</td><td>Diagnose problems, prevent abuse, and maintain the reliability and security of the service.</td></tr>
    <tr><td>Legal compliance</td><td>Meet obligations under applicable UAE law and the WhatsApp Business Platform terms.</td></tr>
  </table>

  <h2><span class="num">04</span>WhatsApp and Meta</h2>
  <p>BizBrain operates on the <strong>WhatsApp Business Platform</strong> provided by Meta Platforms, Inc. Messages between patients and clinics are delivered through WhatsApp's infrastructure and are subject to Meta's own terms and privacy practices. When a clinic connects its WhatsApp number to BizBrain, it authorizes Lexoro to send and receive messages on its behalf through the WhatsApp Business Platform.</p>
  <p>We use patient message data solely to operate the clinic's assistant — for example, to understand a booking request and respond. We comply with the WhatsApp Business Messaging Policy and process messages only within the scope a clinic has authorized.</p>

  <h2><span class="num">05</span>Service providers we share data with</h2>
  <p>We rely on a small number of trusted providers to run BizBrain. Each processes data only as needed to deliver their part of the service:</p>
  <table>
    <tr><th>Provider</th><th>Role</th></tr>
    <tr><td>Meta / WhatsApp Business Platform</td><td>Message delivery between patients and clinics</td></tr>
    <tr><td>Supabase</td><td>Database and authentication infrastructure</td></tr>
    <tr><td>Railway</td><td>Backend application hosting</td></tr>
    <tr><td>Vercel</td><td>Dashboard hosting</td></tr>
    <tr><td>OpenAI</td><td>Natural-language understanding for the assistant</td></tr>
    <tr><td>Stripe</td><td>Subscription billing and payments</td></tr>
    <tr><td>Resend</td><td>Transactional email delivery</td></tr>
  </table>
  <p>We do not sell personal information to third parties or share it for their own marketing.</p>

  <h2><span class="num">06</span>Data retention</h2>
  <p>We keep personal information for as long as needed to provide the service and to meet legal, accounting, or reporting requirements. Clinic account data is retained while the account is active. Patient conversation and appointment data is retained on behalf of the clinic and is deleted or returned when the clinic's agreement ends or upon the clinic's instruction, unless we are required to keep it by law.</p>

  <h2><span class="num">07</span>Security</h2>
  <p>We use technical and organizational measures to protect personal information, including encrypted connections (HTTPS), hashed passwords, access controls, and reputable infrastructure providers. No system is perfectly secure, but we work to protect data against unauthorized access, loss, or misuse.</p>

  <h2><span class="num">08</span>Your rights</h2>
  <p>Depending on your role and applicable law, you may have the right to access, correct, or delete personal information, or to object to or restrict certain processing. Clinics can manage much of their data directly in the BizBrain dashboard. Patients should contact the clinic they messaged, as the clinic controls its patient data; we will support the clinic in fulfilling such requests. For any privacy request, contact us at info@lexorosolutions.com.</p>

  <h2><span class="num">09</span>Children</h2>
  <p>BizBrain is intended for use by clinics and businesses, not for direct use by children. Where a clinic books an appointment that concerns a minor, that information is processed on the clinic's instruction and under the clinic's responsibility as the data controller.</p>

  <h2><span class="num">10</span>International transfers</h2>
  <p>Some of our service providers operate outside the United Arab Emirates. Where personal information is transferred internationally, we take steps to ensure it remains protected consistent with this policy and applicable law.</p>

  <h2><span class="num">11</span>Changes to this policy</h2>
  <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above and, where appropriate, notify clinics through the dashboard or by email.</p>

  <h2><span class="num">12</span>Contact us</h2>
  <p>For questions about this policy or how we handle personal information, contact:</p>
  <ul>
    <li><strong>Lexoro Solutions</strong></li>
    <li>Office F1, C1 Building, Ajman Free Zone, Ajman, UAE</li>
    <li>info@lexorosolutions.com</li>
  </ul>

</div>
</main>

<footer>
  <div class="wrap">
    <div>© 2026 Lexoro Solutions. All rights reserved.</div>
    <div class="footer-links">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="https://www.lexorosolutions.com">lexorosolutions.com</a>
    </div>
  </div>
</footer>
`;

export default function PrivacyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: isolation }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
