import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Lexoro Solutions",
  description:
    "The terms governing use of Lexoro Solutions' BizBrain WhatsApp clinic management and appointment booking platform.",
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
    <h1>Terms of Service</h1>
    <p class="lede">The agreement between Lexoro Solutions and the clinics and businesses that use BizBrain.</p>
    <div class="meta">
      <span>Effective: 28 June 2026</span>
      <span>Last updated: 28 June 2026</span>
    </div>
  </div>
</header>

<main>
<div class="wrap">

  <p>These Terms of Service ("Terms") govern your access to and use of <strong>BizBrain</strong>, a WhatsApp-based clinic management and appointment booking platform operated by <strong>Lexoro Solutions</strong> ("Lexoro", "we", "us", or "our"), a company registered in the United Arab Emirates. By creating an account or using the service, you ("you", "the clinic", or "customer") agree to these Terms.</p>

  <h2><span class="num">01</span>The service</h2>
  <p>BizBrain provides clinics with an automated assistant that operates on the clinic's WhatsApp Business number to handle appointment booking, send confirmations and reminders, answer routine questions, share clinic location, and related clinic-communication tasks, along with a web dashboard to manage doctors, schedules, and settings.</p>

  <h2><span class="num">02</span>Eligibility and accounts</h2>
  <p>You must be a legally registered business or an authorized representative of one to use BizBrain. You are responsible for the accuracy of the information you provide, for maintaining the confidentiality of your login credentials, and for all activity under your account. Notify us promptly of any unauthorized use.</p>

  <h2><span class="num">03</span>WhatsApp Business Platform</h2>
  <p>BizBrain operates through the WhatsApp Business Platform provided by Meta. Your use of the service is also subject to Meta's and WhatsApp's applicable terms and policies, including the WhatsApp Business Messaging Policy. By connecting your WhatsApp Business number to BizBrain, you authorize Lexoro to send and receive messages on your behalf through the platform for the purposes of operating your assistant.</p>
  <div class="callout">
    <strong>Your responsibilities as the clinic.</strong> You are responsible for obtaining any patient consent required for messaging, for the accuracy of the clinic information and schedules you configure, and for ensuring your use of WhatsApp messaging complies with applicable law and Meta's policies. You remain the controller of your patients' data.
  </div>

  <h2><span class="num">04</span>Acceptable use</h2>
  <p>You agree not to use BizBrain to:</p>
  <ul>
    <li>Send spam, unsolicited marketing, or messages that violate the WhatsApp Business Messaging Policy.</li>
    <li>Process data you are not lawfully entitled to process.</li>
    <li>Impersonate another business or misrepresent your identity.</li>
    <li>Attempt to disrupt, reverse-engineer, or gain unauthorized access to the service.</li>
    <li>Use the assistant for purposes outside clinic operations and patient communication.</li>
  </ul>

  <h2><span class="num">05</span>Fees and payment</h2>
  <p>BizBrain is offered on subscription plans described at the time of sign-up or in your order. Unless otherwise agreed in writing:</p>
  <ul>
    <li>Onboarding may require an upfront deposit, with the balance due as set out in your order.</li>
    <li>Subscription fees are billed in advance on a recurring basis through our payment provider.</li>
    <li>Fees are exclusive of any applicable taxes, including UAE VAT where it applies.</li>
    <li>Messaging charges levied by Meta for WhatsApp Business Platform usage may be billed to the clinic directly by Meta and are separate from Lexoro's fees.</li>
  </ul>
  <p>Late or failed payments may result in suspension of the service after notice.</p>

  <h2><span class="num">06</span>Data and privacy</h2>
  <p>Our handling of personal information is described in our <a href="/privacy">Privacy Policy</a>, which forms part of these Terms. For patient data processed through your assistant, you are the data controller and Lexoro is your processor, acting on your instructions to provide the service.</p>

  <h2><span class="num">07</span>Availability and support</h2>
  <p>We aim to keep BizBrain available and reliable but do not guarantee uninterrupted service. We may perform maintenance, update features, or make changes to improve the platform. We provide support to active customers through the channels we make available.</p>

  <h2><span class="num">08</span>Intellectual property</h2>
  <p>BizBrain, including its software, dashboard, and branding, is owned by Lexoro Solutions. These Terms grant you a limited, non-exclusive, non-transferable right to use the service during your subscription. You retain ownership of your clinic data and patient data.</p>

  <h2><span class="num">09</span>Suspension and termination</h2>
  <p>You may cancel your subscription as described in your plan. We may suspend or terminate access if you breach these Terms, fail to pay, or use the service in a way that risks harm to patients, to the WhatsApp platform, or to others. On termination, we will delete or return your data in line with our Privacy Policy, subject to any legal retention requirements.</p>

  <h2><span class="num">10</span>Disclaimers</h2>
  <p>BizBrain is a communication and scheduling tool. It does not provide medical advice, and it is not a substitute for professional clinical judgment. The service is provided "as is" and "as available" without warranties of any kind to the maximum extent permitted by law. You are responsible for reviewing and confirming appointments and information generated through the assistant.</p>

  <h2><span class="num">11</span>Limitation of liability</h2>
  <p>To the maximum extent permitted by law, Lexoro Solutions will not be liable for indirect, incidental, special, or consequential damages, or for loss of profits, data, or goodwill, arising from your use of the service. Our total liability for any claim relating to the service will not exceed the amount you paid to us for the service in the three months before the event giving rise to the claim.</p>

  <h2><span class="num">12</span>Governing law</h2>
  <p>These Terms are governed by the laws of the United Arab Emirates. Any dispute arising from these Terms or the service will be subject to the jurisdiction of the competent courts of the UAE, without prejudice to any applicable free zone regulations where Lexoro is registered.</p>

  <h2><span class="num">13</span>Changes to these Terms</h2>
  <p>We may update these Terms from time to time. When we make material changes, we will revise the "Last updated" date above and notify active customers through the dashboard or by email. Continued use of the service after changes take effect constitutes acceptance.</p>

  <h2><span class="num">14</span>Contact</h2>
  <p>Questions about these Terms can be directed to:</p>
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

export default function TermsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: isolation }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
