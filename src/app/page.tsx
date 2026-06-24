'use client'

import { useState } from 'react'
import Script from 'next/script'

// Exact load order required by the V4 design:
// gsap -> ScrollTrigger -> three.js -> fx.js -> theme.js -> i18n.js
// -> main-v3.js -> creative-fx.js -> live-demo.js -> calc.js
// Scripts read window.gsap / window.ScrollTrigger / window.THREE as globals,
// so we load them strictly sequentially via an advancing index.
const SCRIPTS = [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  '/fx.js',
  '/theme.js',
  '/i18n.js',
  '/main-v3.js',
  '/creative-fx.js',
  '/live-demo.js',
  '/calc.js',
]

export default function Home() {
  // Number of scripts cleared to render. Each one advances the chain on load
  // (or error, so a flaky CDN can't stall the rest).
  const [loaded, setLoaded] = useState(0)
  const advance = (i: number) => setLoaded((n) => (n === i ? n + 1 : n))

  return (
    <>
      <div className="scroll-progress"></div>
      <canvas id="fx-bg"></canvas>

      {/* ============ NAV ============ */}
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="#top" aria-label="Lexoro" className="nav-brand">
            <img src="/assets/lexoro-logo-dark.png" alt="Lexoro" className="nav-logo logo-light" />
            <img src="/assets/lexoro-logo-white.png" alt="Lexoro" className="nav-logo logo-dark" />
          </a>
          <div className="nav-tabs">
            <a href="#products">Products</a>
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#industries">Industries</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-right">
            <a href="#contact" className="signin">Sign in</a>
            <button className="nav-icon" data-theme-btn="" aria-label="Switch to dark theme" aria-pressed="false">
              <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" /></svg>
              <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
            </button>
            <button className="nav-lang" data-lang-btn="" aria-label="التبديل إلى العربية">ع</button>
            <a href="https://bizbrain-xi.vercel.app/register" className="btn btn-primary">Book a demo</a>
            <button className="nav-burger" id="navBurger" aria-label="Menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className="nav-mobile" id="navMobile">
          <a href="#products">Products</a>
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
          <a href="#playground">Live demo</a>
          <div className="nav-mobile-row">
            <button className="nav-icon" data-theme-btn="" aria-label="Switch to dark theme">
              <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" /></svg>
              <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
            </button>
            <button className="nav-lang" data-lang-btn="">ع</button>
          </div>
          <a href="https://bizbrain-xi.vercel.app/register" className="btn btn-blue btn-lg nav-mobile-cta">Book a demo</a>
        </div>
      </nav>

      <span id="top"></span>

      {/* ============ HERO ============ */}
      <header className="hero" data-screen-label="Hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="trust reveal">
                <span className="avs">
                  <span style={{ background: 'linear-gradient(135deg,#1F47E6,#5A8BFF)' }}>R</span>
                  <span style={{ background: 'linear-gradient(135deg,#15A65A,#3DDC84)' }}>Y</span>
                  <span style={{ background: 'linear-gradient(135deg,#0A0A0B,#3A3A40)' }}>S</span>
                </span>
                <span className="tt">Trusted by <b>200+</b> UAE clinics &amp; SMEs</span>
              </div>
              <h1 className="reveal d1">WhatsApp AI that runs your <em>front desk</em> and your <em>back office.</em></h1>
              <p className="hero-sub reveal d2">Lexoro Solutions builds WhatsApp-first AI agents that book appointments, answer customers and keep the books — purpose-built for businesses across the UAE.</p>
              <div className="hero-cta reveal d3">
                <a href="https://bizbrain-xi.vercel.app/register" className="btn btn-primary btn-lg">Book a demo</a>
                <a href="#products" className="btn btn-secondary btn-lg">Explore products</a>
              </div>
              <div className="hero-meta reveal d4">
                <span className="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> Official Meta WhatsApp API</span>
                <span className="sep"></span>
                <span className="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> Arabic &amp; English</span>
              </div>
            </div>

            <div className="hero-art reveal d2">
              <canvas id="fx-hero"></canvas>
              <div className="dash">
                <div className="dash-bar">
                  <div className="dash-brand"><span className="db-mark"><i></i><i></i><i></i></span> Lexoro Dashboard</div>
                  <span className="dash-live"><span className="lv-dot"></span> Live</span>
                </div>
                <div className="dash-body">
                  <div className="dstats">
                    <div className="dstat">
                      <div className="dk">Bookings today</div>
                      <div className="dv"><span data-count="24">0</span></div>
                      <div className="dtrend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 15l7-7 7 7" /></svg> 18% vs last week</div>
                    </div>
                    <div className="dstat">
                      <div className="dk">Resolved by AI</div>
                      <div className="dv"><span data-count="83" data-suffix="%">0%</span></div>
                      <div className="dtrend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 15l7-7 7 7" /></svg> 6% this month</div>
                    </div>
                  </div>

                  <div className="dpanel">
                    <div className="dp-head"><span>Bookings this week</span><b>142</b></div>
                    <div className="dbars">
                      <span style={{ '--h': '46%' } as React.CSSProperties}></span>
                      <span style={{ '--h': '64%' } as React.CSSProperties}></span>
                      <span style={{ '--h': '38%' } as React.CSSProperties}></span>
                      <span style={{ '--h': '72%' } as React.CSSProperties}></span>
                      <span style={{ '--h': '55%' } as React.CSSProperties}></span>
                      <span className="hot" style={{ '--h': '90%' } as React.CSSProperties}></span>
                      <span style={{ '--h': '50%' } as React.CSSProperties}></span>
                    </div>
                    <div className="ddays"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
                  </div>

                  <div className="dpanel dconvos-panel">
                    <div className="dp-head"><span>Live conversations</span><a href="#">View all</a></div>
                    <div className="dconvos">
                      <div className="dconv">
                        <span className="dav" style={{ background: 'linear-gradient(135deg,#1F47E6,#5A8BFF)' }}>RA</span>
                        <div className="dc-main"><div className="dc-name">Rana A. <span className="dc-time">now</span></div><div className="dc-msg">Thursday 11:30 works great</div></div>
                        <span className="dc-badge book">Booked</span>
                      </div>
                      <div className="dconv">
                        <span className="dav" style={{ background: 'linear-gradient(135deg,#15A65A,#3DDC84)' }}>YK</span>
                        <div className="dc-main"><div className="dc-name">Yousef K. <span className="dc-time">2m</span></div><div className="dc-msg">Logged AED 4,200 expense</div></div>
                        <span className="dc-badge ai">AI</span>
                      </div>
                      <div className="dconv">
                        <span className="dav" style={{ background: 'linear-gradient(135deg,#0A0A0B,#3A3A40)' }}>SM</span>
                        <div className="dc-main"><div className="dc-name">Sara M. <span className="dc-time">5m</span></div><div className="dc-msg">Do you accept Daman insurance?</div></div>
                        <span className="dc-badge human">Team</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dash-toast"><span className="dt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span> New booking · Thu 11:30 AM</div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ MARQUEE ============ */}
      <section className="marquee-sec" data-screen-label="Trusted by">
        <div className="wrap">
          <p className="marquee-lbl">Powering conversations for forward-thinking businesses across the GCC</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.4 5.6 6 .5-4.6 4 1.4 5.9L12 20l-5.2 3 1.4-5.9-4.6-4 6-.5z" /></svg>Bright Smile</span>
            <span className="mlogo">NoorCare Group</span>
            <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>Al Waha Clinic</span>
            <span className="mlogo">Bayan Traders</span>
            <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg>Gulf SME Co.</span>
            <span className="mlogo">Medina Dental</span>
            {/* duplicate for seamless loop */}
            <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.4 5.6 6 .5-4.6 4 1.4 5.9L12 20l-5.2 3 1.4-5.9-4.6-4 6-.5z" /></svg>Bright Smile</span>
            <span className="mlogo">NoorCare Group</span>
            <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>Al Waha Clinic</span>
            <span className="mlogo">Bayan Traders</span>
            <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg>Gulf SME Co.</span>
            <span className="mlogo">Medina Dental</span>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="section-pad" id="products" data-screen-label="Products">
        <div className="wrap">
          <div className="shead center reveal">
            <span className="eyebrow">The Lexoro suite</span>
            <h2>One engine. A growing family of products.</h2>
            <p>Every Lexoro product runs on the same secure, bilingual WhatsApp platform — and connects to the tools your team already uses.</p>
          </div>
          <div className="products">
            <article className="pcard clinics reveal">
              <div className="pcard-vis">
                <div className="pglyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /><path d="M9 9v.01M9 13v.01M9 17v.01" /></svg></div>
                <div className="mini" style={{ top: '26px', right: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#1F47E6" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> Booked · Thu 11:30</div>
                <div className="mini" style={{ bottom: '24px', left: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#1F47E6" strokeWidth="2"><path d="M8 2v4M16 2v4M3 10h18" /></svg> Synced to calendar</div>
              </div>
              <div className="pcard-body">
                <div className="pcard-eyebrow">Lexoro Clinics</div>
                <h3>Your front desk, on WhatsApp 24/7</h3>
                <p className="pd">An AI receptionist that books, reschedules and reminds patients — then hands off to your staff the moment a human is needed.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>24/7 booking, rescheduling &amp; reminders</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Seamless human hand-off with full context</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Live management dashboard &amp; calendar sync</li>
                </ul>
                <a href="#contact" className="pcard-link">Explore Lexoro Clinics <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              </div>
            </article>

            <article className="pcard hisab reveal d1">
              <div className="pcard-vis">
                <div className="pglyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></svg></div>
                <div className="mini" style={{ top: '26px', left: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#15A65A" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg> AED 4,200 logged</div>
                <div className="mini" style={{ bottom: '24px', right: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#15A65A" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg> VAT-ready</div>
              </div>
              <div className="pcard-body">
                <div className="pcard-eyebrow">Hisab</div>
                <h3>Bookkeeping as easy as a text</h3>
                <p className="pd">SMEs log income, expenses and invoices straight from WhatsApp. Hisab keeps the books clean and VAT-ready — with a dashboard for the full picture.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Log expenses &amp; invoices by chat or photo</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>UAE VAT-ready reports in one tap</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Real-time cash-flow dashboard</li>
                </ul>
                <a href="#contact" className="pcard-link">Explore Hisab <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              </div>
            </article>

            <div className="future reveal">
              <div>
                <div className="ft">More Lexoro products are on the way.</div>
                <div className="fp">We&apos;re building the WhatsApp operating layer for business — one workflow at a time.</div>
              </div>
              <a href="#contact" className="btn btn-secondary">Get early access</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (dark) ============ */}
      <section className="section-pad dark-band" id="how" data-screen-label="How it works">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">From hello to handled</span>
            <h2>How Lexoro works on WhatsApp</h2>
            <p>No app to install. Customers message the number they already trust — Lexoro does the rest.</p>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="num">01</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.4 8.4 0 01-8.5 8.5 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8A8.4 8.4 0 0112.5 3 8.4 8.4 0 0121 11.5z" /></svg></div>
              <h4>Customer messages</h4>
              <p>A patient or client sends a WhatsApp to book, ask or pay — in Arabic or English.</p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a5 5 0 015 5v2a5 5 0 01-10 0V7a5 5 0 015-5z" /><path d="M4 13a8 8 0 0016 0M12 18v3" /></svg></div>
              <h4>AI understands &amp; acts</h4>
              <p>Lexoro&apos;s agent reads intent, checks your calendar or books, and replies instantly.</p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg></div>
              <h4>Human hand-off</h4>
              <p>Anything sensitive routes to your team — with the full conversation attached.</p>
            </div>
            <div className="step">
              <div className="num">04</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M18 9l-5 5-3-3-4 4" /></svg></div>
              <h4>You see everything</h4>
              <p>Every booking, message and metric lands in one clean dashboard for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES (bento) ============ */}
      <section className="section-pad" id="features" data-screen-label="Features">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Why teams choose Lexoro</span>
            <h2>Enterprise-grade AI, without the overhead.</h2>
          </div>
          <div className="bento">
            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <h4>Replies in seconds</h4>
              <p>No queues, no hold music. Customers get accurate answers the moment they reach out — any hour, any day.</p>
            </div>
            <div className="feat reveal d1">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <h4>Secure &amp; compliant</h4>
              <p>Built on the official Meta WhatsApp Business API with data handling aligned to UAE regulations.</p>
            </div>
            <div className="feat reveal d2">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12h4l3 8 4-16 3 8h6" /></svg></div>
              <h4>Human hand-off, built in</h4>
              <p>AI handles the routine; your team steps in for the rest — with seamless, context-rich handovers.</p>
            </div>
            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 8h14M5 8a2 2 0 100-4 2 2 0 000 4zm0 0v8a2 2 0 002 2h10M12 21a2 2 0 100-4 2 2 0 000 4z" /></svg></div>
              <h4>Connects to your tools</h4>
              <p>Calendars, CRMs, payment links and accounting — Lexoro plugs into the stack you already run on.</p>
            </div>
            <div className="feat reveal d1">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg></div>
              <h4>Arabic &amp; English native</h4>
              <p>Fluent, natural conversation in both languages — switching effortlessly to match each customer.</p>
            </div>
            <div className="feat reveal d2">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M18 9l-5 5-3-3-4 4" /></svg></div>
              <h4>Dashboards that decide</h4>
              <p>See bookings, revenue and response times at a glance — and act on what&apos;s working in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AI BURST (interactive) ============ */}
      <section className="burst-sec" data-screen-label="Intelligence">
        <div className="burst-stage">
          <canvas id="fx-burst"></canvas>
          <div className="burst-fade"></div>
        </div>
        <div className="wrap burst-copy">
          <span className="eyebrow reveal">The intelligence layer</span>
          <h2 className="reveal d1">One model. Every conversation,<br />understood in milliseconds.</h2>
          <p className="lead reveal d2">Lexoro reads intent, language and context across every message — then routes, replies, books and logs automatically. Thousands of conversations fan out from a single engine, tuned for Arabic and English alike.</p>
          <div className="burst-stats reveal d2">
            <div className="bstat"><b data-count="40" data-suffix="+">0+</b><span>languages &amp; dialects</span></div>
            <div className="bstat"><b data-count="120" data-suffix="ms">0ms</b><span>median response</span></div>
            <div className="bstat"><b data-count="83" data-suffix="%">0%</b><span>resolved without a human</span></div>
          </div>
        </div>
      </section>

      {/* ============ SHOWCASE (chat demo) ============ */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="Product showcase">
        <div className="wrap">
          <div className="showcase">
            <div className="sc-copy reveal">
              <span className="eyebrow">See it in action</span>
              <h2>A whole front desk, inside one chat.</h2>
              <p>Watch a real booking unfold — Lexoro understands, offers slots, confirms, and knows exactly when to bring in a human.</p>
              <ul className="sc-list">
                <li><span className="sn">1</span><div><h5>Understands the request</h5><p>Natural language in Arabic or English, no menus or keywords.</p></div></li>
                <li><span className="sn">2</span><div><h5>Books and confirms instantly</h5><p>Live calendar availability, reminders scheduled automatically.</p></div></li>
                <li><span className="sn">3</span><div><h5>Hands off when it matters</h5><p>Insurance, billing or anything sensitive routes straight to your team.</p></div></li>
              </ul>
              <a href="#contact" className="btn btn-blue btn-lg">See a live demo</a>
            </div>
            <div className="phone-wrap reveal d1">
              <div className="phone-glow"></div>
              <div className="phone">
                <div className="phone-screen">
                  <div className="wa-head">
                    <span className="wa-av">L</span>
                    <span><span className="nm" style={{ display: 'block' }}>Bright Smile Clinic</span><span className="st">Lexoro AI · online</span></span>
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7zM1 5h15v14H1z" /></svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" /></svg>
                    </span>
                  </div>
                  <div className="wa-body" id="chat"></div>
                  <div className="wa-foot">
                    <span className="in">Type a message…</span>
                    <span className="snd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIVE AI PLAYGROUND ============ */}
      <section className="section-pad live-sec" id="playground" data-screen-label="Live AI playground">
        <div className="wrap">
          <div className="showcase live-grid">
            <div className="sc-copy reveal">
              <span className="eyebrow"><span className="eb-live">●</span> Live · powered by real AI</span>
              <h2>Don&apos;t take our word for it.<br />Talk to Lexoro yourself.</h2>
              <p>This is the actual assistant — not a recording. Ask it to book a dental visit, quote a cleaning, or message it in Arabic. It answers in real time, exactly like it would on your customers&apos; WhatsApp.</p>
              <div className="live-suggest" id="live-suggestions">
                <span className="lsuggest-lbl">Try asking:</span>
                <button className="lchip">I need a dental cleaning this week</button>
                <button className="lchip">How much is teeth whitening?</button>
                <button className="lchip">أريد حجز موعد غدًا</button>
                <button className="lchip">Do you open on Fridays?</button>
              </div>
              <p className="live-note">Responses are generated live and may vary. No data is stored.</p>
            </div>
            <div className="phone-wrap reveal d1">
              <div className="phone-glow"></div>
              <div className="phone">
                <div className="phone-screen">
                  <div className="wa-head">
                    <span className="wa-av">B</span>
                    <span><span className="nm" style={{ display: 'block' }}>Bright Smile Clinic</span><span className="st">Lexoro AI · online</span></span>
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7zM1 5h15v14H1z" /></svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" /></svg>
                    </span>
                  </div>
                  <div className="wa-body" id="live-chat"></div>
                  <form className="wa-foot live-foot" id="live-form" autoComplete="off">
                    <input type="text" placeholder="Type a message…" aria-label="Message Lexoro" maxLength={180} />
                    <button type="submit" className="snd" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section-pad" id="industries" data-screen-label="Industries">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Industries we serve</span>
            <h2>Built for the businesses that run on WhatsApp.</h2>
          </div>
          <div className="ind-grid">
            <div className="ind reveal"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6m0 0l3-2m-3 2L9 6M5 22a7 7 0 0114 0" /><circle cx="12" cy="13" r="3" /></svg></span><div><h4>Clinics &amp; Dental</h4><p>Bookings, reminders, triage</p></div></div>
            <div className="ind reveal d1"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></svg></span><div><h4>Retail &amp; Trading</h4><p>Orders, support, invoicing</p></div></div>
            <div className="ind reveal d2"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z" /><path d="M6 1v3M10 1v3M14 1v3" /></svg></span><div><h4>Salons &amp; Spas</h4><p>Appointments, packages</p></div></div>
            <div className="ind reveal"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></svg></span><div><h4>SMEs &amp; Freelancers</h4><p>Accounting with Hisab</p></div></div>
            <div className="ind reveal d1"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 3h6l2 4-3 2a12 12 0 006 6l2-3 4 2v6a2 2 0 01-2 2A18 18 0 012 5a2 2 0 012-2z" /></svg></span><div><h4>Real Estate</h4><p>Lead capture, viewings</p></div></div>
            <div className="ind reveal d2"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg></span><div><h4>Clinic Groups &amp; Chains</h4><p>Multi-branch routing</p></div></div>
          </div>
        </div>
      </section>

      {/* ============ STATS + TESTIMONIALS ============ */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="Proof">
        <div className="wrap">
          <div className="stats reveal" style={{ marginBottom: '64px' }}>
            <div className="stat"><div className="v"><span data-count="83" data-suffix="%">0%</span></div><div className="k">of chats resolved by AI</div></div>
            <div className="stat"><div className="v"><span data-count="38" data-suffix="s">0s</span></div><div className="k">average time to book</div></div>
            <div className="stat"><div className="v"><span data-count="24" data-suffix="/7">0</span></div><div className="k">always-on coverage</div></div>
            <div className="stat"><div className="v"><span data-count="3" data-suffix="×">0×</span></div><div className="k">more booked appointments</div></div>
          </div>
          <div className="tgrid">
            <div className="tcard reveal">
              <div className="stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg></div>
              <p className="q">&quot;Our front desk used to miss calls all day. Now Lexoro books patients on WhatsApp before we&apos;ve even opened. No-shows dropped and bookings went up.&quot;</p>
              <div className="who"><span className="av" style={{ background: 'linear-gradient(135deg,#1F47E6,#5A8BFF)' }}>RA</span><div><div className="n">Dr. Rana Al-Hashimi</div><div className="r">Bright Smile Clinic · Dubai</div></div></div>
            </div>
            <div className="tcard reveal d1">
              <div className="stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg></div>
              <p className="q">&quot;With Hisab I just message my expenses as I go. At month-end my VAT report is ready. It replaced three spreadsheets and a lot of stress.&quot;</p>
              <div className="who"><span className="av" style={{ background: 'linear-gradient(135deg,#15A65A,#3DDC84)' }}>YK</span><div><div className="n">Yousef Khan</div><div className="r">Bayan Traders · Sharjah</div></div></div>
            </div>
            <div className="tcard reveal d2">
              <div className="stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></svg></div>
              <p className="q">&quot;The hand-off is what sold us. The AI handles the routine, and the moment a patient needs a person, my team picks up right where it left off.&quot;</p>
              <div className="who"><span className="av" style={{ background: 'linear-gradient(135deg,#0A0A0B,#3A3A40)' }}>SM</span><div><div className="n">Sara Mansour</div><div className="r">NoorCare Group · Abu Dhabi</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SAVINGS CALCULATOR ============ */}
      <section className="section-pad calc-sec" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="Savings calculator">
        <div className="wrap">
          <div className="shead center reveal">
            <span className="eyebrow">Run the numbers</span>
            <h2>See what Lexoro saves you every month.</h2>
          </div>
          <div className="calc reveal d1" id="calc">
            <div className="calc-controls">
              <div className="cctrl">
                <div className="cc-top"><label>WhatsApp conversations / day</label><b data-v="msgs">120</b></div>
                <input type="range" data-s="msgs" min="20" max="800" step="10" defaultValue="120" />
              </div>
              <div className="cctrl">
                <div className="cc-top"><label>Avg. handling time each</label><b data-v="mins">6 min</b></div>
                <input type="range" data-s="mins" min="2" max="20" step="1" defaultValue="6" />
              </div>
              <div className="cctrl">
                <div className="cc-top"><label>Team cost per hour</label><b data-v="cost">AED 55</b></div>
                <input type="range" data-s="cost" min="20" max="200" step="5" defaultValue="55" />
              </div>
              <div className="calc-auto">
                <div className="ca-row"><span>Resolved by AI, no human needed</span><b>83%</b></div>
                <div className="ca-bar"><span data-o="bar"></span></div>
              </div>
            </div>
            <div className="calc-results">
              <div className="cres hero-res">
                <span className="cr-k">Saved every month</span>
                <span className="cr-v"><i className="cr-cur">AED</i><b data-o="aed">0</b></span>
              </div>
              <div className="cres-grid">
                <div className="cres"><span className="cr-k">Staff hours freed</span><b data-o="hours">0 hrs</b></div>
                <div className="cres"><span className="cr-k">Conversations handled</span><b data-o="convos">0</b></div>
                <div className="cres"><span className="cr-k">After-hours messages caught</span><b data-o="after">0</b></div>
              </div>
              <a href="#contact" className="btn btn-blue btn-lg calc-cta">Start saving with Lexoro</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="section-pad" id="pricing" data-screen-label="Pricing">
        <div className="wrap">
          <div className="shead center reveal">
            <span className="eyebrow">Simple, transparent pricing</span>
            <h2>Start small. Scale when you&apos;re ready.</h2>
            <p>Plans in AED, billed monthly. No setup fees — cancel anytime.</p>
          </div>
          <div className="price-grid">
            <div className="plan reveal">
              <div className="pname">Starter</div>
              <div className="pdesc">For a single clinic or small business getting started.</div>
              <div className="pamt"><span className="pcur">AED</span>299<span className="per"> /mo</span></div>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>1 WhatsApp number</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Up to 500 conversations / mo</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Core AI + dashboard</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Email support</li>
              </ul>
              <a href="https://bizbrain-xi.vercel.app/register?plan=starter" className="btn btn-secondary">Get started</a>
            </div>
            <div className="plan pop reveal d1">
              <span className="ptag">Most popular</span>
              <div className="pname">Growth</div>
              <div className="pdesc">For busy clinics and SMEs that live on WhatsApp.</div>
              <div className="pamt"><span className="pcur">AED</span>799<span className="per"> /mo</span></div>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Up to 3 numbers / branches</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Unlimited conversations</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Human hand-off + team inbox</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Integrations &amp; priority support</li>
              </ul>
              <a href="https://bizbrain-xi.vercel.app/register?plan=growth" className="btn btn-primary">Book a demo</a>
            </div>
            <div className="plan reveal d2">
              <div className="pname">Enterprise</div>
              <div className="pdesc">For groups, chains and custom workflows.</div>
              <div className="pamt">Custom</div>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Unlimited numbers &amp; branches</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Custom AI workflows</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Dedicated success manager</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>SLA &amp; onboarding</li>
              </ul>
              <a href="https://bizbrain-xi.vercel.app/register?plan=enterprise" className="btn btn-secondary">Talk to sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section-pad" id="about" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="About">
        <div className="wrap">
          <div className="about">
            <div className="reveal">
              <span className="eyebrow">Our mission</span>
              <h2>We&apos;re building the WhatsApp operating layer for business.</h2>
              <p className="lead">Billions of conversations happen on WhatsApp every day — but most businesses still answer them by hand. Lexoro turns those conversations into automated, intelligent workflows, built for the way the UAE actually works.</p>
              <div className="mission-pts">
                <div className="mpt">
                  <span className="mic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" /></svg></span>
                  <div><h4>UAE-first, GCC-ready</h4><p>Bilingual, locally compliant, and tuned for how business is done across the Gulf.</p></div>
                </div>
                <div className="mpt">
                  <span className="mic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg></span>
                  <div><h4>A platform, not a point tool</h4><p>Clinics and Hisab are just the start — every product runs on one Lexoro engine.</p></div>
                </div>
                <div className="mpt">
                  <span className="mic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 11.1V12a10 10 0 11-5.9-9.1" /><path d="M22 4L12 14l-3-3" /></svg></span>
                  <div><h4>Outcomes over features</h4><p>We measure success in booked appointments, hours saved and cleaner books.</p></div>
                </div>
              </div>
            </div>
            <div className="about-vis reveal d1">
              <canvas id="fx-globe"></canvas>
              <span className="vis-tag"><span className="vt-dot"></span> Live conversation graph</span>
              <span className="vis-hint">Drag to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-pad" id="contact" data-screen-label="Contact CTA">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cglow"></div>
            <div className="cgrain"></div>
            <h2>Ready to put WhatsApp to work?</h2>
            <p>Book a 20-minute demo and we&apos;ll show Lexoro running live on your business — bookings, hand-off and dashboard included.</p>
            <div className="cta-actions">
              <a href="https://bizbrain-xi.vercel.app/register" className="btn btn-blue btn-lg">Book a demo</a>
              <a href="#" className="btn btn-ghost-dark btn-lg">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.9.9-2.8-.2-.3A8 8 0 1112 20zm4.5-5.6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.3 7.3 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer" data-screen-label="Footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <img src="/assets/lexoro-logo-dark.png" alt="Lexoro" className="flogo logo-light" />
              <img src="/assets/lexoro-logo-white.png" alt="Lexoro" className="flogo logo-dark" />
              <p>WhatsApp-first AI automation for clinics and SMEs across the UAE and GCC.</p>
              <form className="news" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your work email" aria-label="Email" />
                <button aria-label="Subscribe"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
              </form>
            </div>
            <div className="fcol">
              <h5>Products</h5>
              <a href="#products">Lexoro Clinics</a>
              <a href="#products">Hisab</a>
              <a href="#contact">Early access</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="fcol">
              <h5>Company</h5>
              <a href="#about">About</a>
              <a href="#industries">Industries</a>
              <a href="#contact">Contact</a>
              <a href="https://bizbrain-xi.vercel.app/register">Book a demo</a>
            </div>
            <div className="fcol">
              <h5>Resources</h5>
              <a href="#how">How it works</a>
              <a href="#">Help center</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="foot-bottom">
            <p>© 2026 Lexoro Solutions. Built in the UAE.</p>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 18V10H6v8h2.5zM7.2 8.8a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zM18 18v-4.4c0-2.4-1.3-3.5-3-3.5a2.6 2.6 0 00-2.3 1.3V10H10.3v8h2.5v-4.2c0-1.1.7-1.7 1.4-1.7s1.3.5 1.3 1.7V18H18z" /></svg></a>
              <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.4 22H16l-5.1-6.6L4.9 22H1.8l8.2-9.3L1 2h7.6l4.6 6.1L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z" /></svg></a>
              <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.9.9-2.8-.2-.3A8 8 0 1112 20z" /></svg></a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============ SCRIPTS ============
          Exact order: gsap -> ScrollTrigger -> three.js -> fx.js -> theme.js
          -> i18n.js -> main-v3.js -> creative-fx.js -> live-demo.js -> calc.js
          Each script renders only after the previous has loaded. */}
      {SCRIPTS.slice(0, loaded + 1).map((src, i) => (
        <Script
          key={src}
          src={src}
          strategy="afterInteractive"
          onLoad={() => advance(i)}
          onError={() => advance(i)}
        />
      ))}
    </>
  )
}
