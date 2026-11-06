'use client'

import { useState } from 'react'
import Script from 'next/script'

// Exact load order required by the V4 design:
// gsap -> ScrollTrigger -> three.js -> fx.js -> theme.js -> i18n.js
// -> main-v3.js -> creative-fx.js
// Scripts read window.gsap / window.ScrollTrigger / window.THREE as globals,
// so we load them strictly sequentially via an advancing index.
const WHATSAPP = 'https://wa.me/971525049747'

const SCRIPTS = [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  '/fx.js',
  '/theme.js',
  '/i18n.js',
  '/main-v3.js',
  '/creative-fx.js',
]

export default function Home() {
  // Number of scripts cleared to render. Each one advances the chain on load
  // (or error, so a flaky CDN can't stall the rest).
  const [loaded, setLoaded] = useState(0)
  const advance = (i: number) => setLoaded((n) => (n === i ? n + 1 : n))

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="scroll-progress"></div>
      <canvas id="fx-bg"></canvas>

      {/* ============ NAV ============ */}
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="#top" aria-label="Lexoro Solutions" className="nav-brand">
            <img src="/assets/lexoro-logo-dark.png" alt="Lexoro Solutions" className="nav-logo logo-light" />
            <img src="/assets/lexoro-logo-white.png" alt="Lexoro Solutions" className="nav-logo logo-dark" />
          </a>
          <div className="nav-tabs">
            <a href="#products">Products</a>
            <a href="#accounting">Accounting</a>
            <a href="#platform">Platform</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
          </div>
          <div className="nav-right">
            <a href="https://fisqel.com" className="signin">Fisqel</a>
            <button className="nav-icon" data-theme-btn="" aria-label="Switch to dark theme" aria-pressed="false">
              <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" /></svg>
              <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
            </button>
            <button className="nav-lang" data-lang-btn="" aria-label="التبديل إلى العربية">ع</button>
            <a href="#contact" className="btn btn-primary">Talk to us</a>
            <button
              className="nav-burger"
              id="navBurger"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className={`nav-mobile${menuOpen ? ' open' : ''}`} id="navMobile" onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setMenuOpen(false) }}>
          <a href="#products">Products</a>
          <a href="#accounting">Accounting</a>
          <a href="#platform">Platform</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <div className="nav-mobile-row">
            <button className="nav-icon" data-theme-btn="" aria-label="Switch to dark theme">
              <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" /></svg>
              <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
            </button>
            <button className="nav-lang" data-lang-btn="">ع</button>
          </div>
          <a href="#contact" className="btn btn-blue btn-lg nav-mobile-cta">Talk to us</a>
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
                  <span style={{ background: 'linear-gradient(135deg,#15A65A,#3DDC84)' }}>F</span>
                  <span style={{ background: 'linear-gradient(135deg,#1F47E6,#5A8BFF)' }}>B</span>
                  <span style={{ background: 'linear-gradient(135deg,#0A0A0B,#3A3A40)' }}>L</span>
                </span>
                <span className="tt">Parent company of <b>Fisqel</b> &amp; <b>BizBrain</b></span>
              </div>
              <h1 className="reveal d1">Software and <em>accounting solutions</em> for <em>UAE businesses.</em></h1>
              <p className="hero-sub reveal d2">Lexoro Solutions is a UAE software company. We build Fisqel, the AI accountant on WhatsApp, and BizBrain, the AI front desk for clinics — and we file VAT and corporate tax returns for the businesses we serve.</p>
              <div className="hero-cta reveal d3">
                <a href="#products" className="btn btn-primary btn-lg">Explore our products</a>
                <a href="#accounting" className="btn btn-secondary btn-lg">Accounting solutions</a>
              </div>
              <div className="hero-meta reveal d4">
                <span className="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> Built for UAE VAT &amp; corporate tax</span>
                <span className="sep"></span>
                <span className="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> Arabic &amp; English</span>
              </div>
            </div>

            <div className="hero-art reveal d2">
              <canvas id="fx-hero"></canvas>
              <div className="dash">
                <div className="dash-bar">
                  <div className="dash-brand"><span className="db-mark"><i></i><i></i><i></i></span> Lexoro Platform</div>
                  <span className="dash-live"><span className="lv-dot"></span> Live</span>
                </div>
                <div className="dash-body">
                  <div className="dstats">
                    <div className="dstat">
                      <div className="dk">Invoices issued</div>
                      <div className="dv"><span data-count="48">0</span></div>
                      <div className="dtrend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 15l7-7 7 7" /></svg> from WhatsApp</div>
                    </div>
                    <div className="dstat">
                      <div className="dk">VAT-ready</div>
                      <div className="dv"><span data-count="100" data-suffix="%">0%</span></div>
                      <div className="dtrend up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 15l7-7 7 7" /></svg> every line classified</div>
                    </div>
                  </div>

                  <div className="dpanel">
                    <div className="dp-head"><span>Cash flow this week</span><b>AED 38,420</b></div>
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
                    <div className="dp-head"><span>Across Lexoro products</span><a href="#products">View all</a></div>
                    <div className="dconvos">
                      <div className="dconv">
                        <span className="dav" style={{ background: 'linear-gradient(135deg,#15A65A,#3DDC84)' }}>F</span>
                        <div className="dc-main"><div className="dc-name">Fisqel <span className="dc-time">now</span></div><div className="dc-msg">Tax invoice sent · AED 5,250</div></div>
                        <span className="dc-badge ai">Invoice</span>
                      </div>
                      <div className="dconv">
                        <span className="dav" style={{ background: 'linear-gradient(135deg,#15A65A,#3DDC84)' }}>F</span>
                        <div className="dc-main"><div className="dc-name">Fisqel <span className="dc-time">2m</span></div><div className="dc-msg">Receipt logged · VAT reclaimable</div></div>
                        <span className="dc-badge ai">Expense</span>
                      </div>
                      <div className="dconv">
                        <span className="dav" style={{ background: 'linear-gradient(135deg,#1F47E6,#5A8BFF)' }}>B</span>
                        <div className="dc-main"><div className="dc-name">BizBrain <span className="dc-time">5m</span></div><div className="dc-msg">Patient booked · Thu 11:30</div></div>
                        <span className="dc-badge book">Booking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dash-toast"><span className="dt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span> VAT return ready to file</div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ WHAT WE DO (marquee) ============ */}
      <section className="marquee-sec" data-screen-label="What we do">
        <div className="wrap">
          <p className="marquee-lbl">One company. Software and accounting services for UAE businesses.</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k} style={{ display: 'contents' }}>
                <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></svg>Fisqel · AI accounting</span>
                <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>BizBrain · clinic AI</span>
                <span className="mlogo">VAT return filing</span>
                <span className="mlogo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg>Corporate tax filing</span>
                <span className="mlogo">Bookkeeping</span>
                <span className="mlogo">WhatsApp automation</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="section-pad" id="products" data-screen-label="Products">
        <div className="wrap">
          <div className="shead center reveal">
            <span className="eyebrow">Our products</span>
            <h2>The companies we build.</h2>
            <p>Lexoro Solutions designs, builds and runs its own software products. Each one solves a single hard problem for UAE businesses — and works where owners already are: WhatsApp.</p>
          </div>
          <div className="products">
            <article className="pcard hisab reveal">
              <div className="pcard-vis">
                <div className="pglyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></svg></div>
                <div className="mini" style={{ top: '26px', left: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#15A65A" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg> Invoice sent · AED 5,250</div>
                <div className="mini" style={{ bottom: '24px', right: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#15A65A" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg> VAT-ready</div>
              </div>
              <div className="pcard-body">
                <div className="pcard-eyebrow">Fisqel · Accounting</div>
                <h3>The accountant that lives in your WhatsApp</h3>
                <p className="pd">Send a message or a photo of a receipt — Fisqel creates the UAE tax invoice, applies the right VAT, posts it to a real double-entry ledger and keeps your VAT return ready to file.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Tax invoices &amp; expenses from a chat</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Every line classified by FTA VAT rules</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Live dashboard, reports &amp; cash position</li>
                </ul>
                <a href="https://fisqel.com" className="pcard-link">Visit fisqel.com <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              </div>
            </article>

            <article className="pcard clinics reveal d1">
              <div className="pcard-vis">
                <div className="pglyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /><path d="M9 9v.01M9 13v.01M9 17v.01" /></svg></div>
                <div className="mini" style={{ top: '26px', right: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#1F47E6" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg> Booked · Thu 11:30</div>
                <div className="mini" style={{ bottom: '24px', left: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#1F47E6" strokeWidth="2"><path d="M8 2v4M16 2v4M3 10h18" /></svg> Synced to calendar</div>
              </div>
              <div className="pcard-body">
                <div className="pcard-eyebrow">BizBrain · Clinics</div>
                <h3>The AI front desk for UAE clinics</h3>
                <p className="pd">An AI receptionist on WhatsApp that books, reschedules and reminds patients around the clock — then hands off to your staff the moment a human is needed.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>24/7 booking, rescheduling &amp; reminders</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Seamless human hand-off with full context</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg>Live dashboard &amp; doctor scheduling</li>
                </ul>
                <a href="/bizbrain" className="pcard-link">Explore BizBrain <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              </div>
            </article>

            <div className="future reveal">
              <div>
                <div className="ft">More Lexoro products are on the way.</div>
                <div className="fp">We build one product at a time, for one real problem at a time.</div>
              </div>
              <a href="#contact" className="btn btn-secondary">Work with us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACCOUNTING SOLUTIONS (dark) ============ */}
      <section className="section-pad dark-band" id="accounting" data-screen-label="Accounting solutions">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Accounting solutions</span>
            <h2>From daily bookkeeping to filed tax returns.</h2>
            <p>Our software keeps your books current every day. Our team turns them into VAT and corporate tax returns filed with the FTA.</p>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="num">01</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.4 8.4 0 01-8.5 8.5 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8A8.4 8.4 0 0112.5 3 8.4 8.4 0 0121 11.5z" /></svg></div>
              <h4>AI bookkeeping</h4>
              <p>Invoices, receipts and payments recorded from WhatsApp with Fisqel — in a real double-entry ledger.</p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg></div>
              <h4>VAT return filing</h4>
              <p>We prepare and file your VAT return, with every line classified as standard-rated, zero-rated or exempt.</p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg></div>
              <h4>Corporate tax filing</h4>
              <p>Annual UAE corporate tax returns prepared and filed for your company, built on clean, reconciled books.</p>
            </div>
            <div className="step">
              <div className="num">04</div>
              <div className="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M18 9l-5 5-3-3-4 4" /></svg></div>
              <h4>Financial insight</h4>
              <p>Cash position, receivables and VAT status on one dashboard — with plain-language answers from your own numbers.</p>
            </div>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 34 }}>
            <a href={WHATSAPP} className="btn btn-blue btn-lg">Get a filing quote</a>
            <a href="https://fisqel.com" className="btn btn-ghost-dark btn-lg">Try Fisqel</a>
          </div>
        </div>
      </section>

      {/* ============ WHY LEXORO (bento) ============ */}
      <section className="section-pad" id="features" data-screen-label="Why Lexoro">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Why Lexoro</span>
            <h2>A software company that understands the books.</h2>
          </div>
          <div className="bento">
            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <h4>AI-native products</h4>
              <p>Built from day one around conversation — text, voice notes and photos — not a chatbot bolted onto old software.</p>
            </div>
            <div className="feat reveal d1">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg></div>
              <h4>Made for UAE tax</h4>
              <p>VAT logic follows the UAE Federal Decree-Law; tax invoices carry the TRN, bilingual titles and correct VAT display.</p>
            </div>
            <div className="feat reveal d2">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h10" /></svg></div>
              <h4>Real accounting underneath</h4>
              <p>A simple chat on top of genuine double-entry bookkeeping that stands up to an accountant&apos;s review.</p>
            </div>
            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <h4>Secure by design</h4>
              <p>Built on the official Meta WhatsApp Business API, with data handling aligned to UAE regulations.</p>
            </div>
            <div className="feat reveal d1">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg></div>
              <h4>Arabic &amp; English native</h4>
              <p>Fluent, natural conversation in both languages — switching to match each customer and each owner.</p>
            </div>
            <div className="feat reveal d2">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg></div>
              <h4>Software plus people</h4>
              <p>When you need more than software, our team handles the filing — one company, one point of contact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PLATFORM (interactive) ============ */}
      <section className="burst-sec" id="platform" data-screen-label="Platform">
        <div className="burst-stage">
          <canvas id="fx-burst"></canvas>
          <div className="burst-fade"></div>
        </div>
        <div className="wrap burst-copy">
          <span className="eyebrow reveal">The Lexoro platform</span>
          <h2 className="reveal d1">One engine.<br />Every Lexoro product.</h2>
          <p className="lead reveal d2">Fisqel and BizBrain run on one shared Lexoro core — WhatsApp messaging on the official Meta API, bilingual AI that understands intent, and a secure data layer built for UAE businesses. Every new product starts where the last one left off.</p>
          <div className="burst-stats reveal d2">
            <div className="bstat"><b data-count="2">0</b><span>products in market</span></div>
            <div className="bstat"><b data-count="2">0</b><span>languages, Arabic &amp; English</span></div>
            <div className="bstat"><b data-count="24" data-suffix="/7">0</b><span>always on, on WhatsApp</span></div>
          </div>
        </div>
      </section>

      {/* ============ SHOWCASE (Fisqel chat demo) ============ */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="Product showcase">
        <div className="wrap">
          <div className="showcase">
            <div className="sc-copy reveal">
              <span className="eyebrow">See Fisqel in action</span>
              <h2>Your books, kept inside one chat.</h2>
              <p>Watch an invoice and an expense go from a WhatsApp message to the ledger — with the VAT worked out correctly along the way.</p>
              <ul className="sc-list">
                <li><span className="sn">1</span><div><h5>Understands the request</h5><p>Plain language in Arabic or English, or just a photo of the receipt.</p></div></li>
                <li><span className="sn">2</span><div><h5>Applies the right VAT</h5><p>Standard-rated, zero-rated or exempt — classified as it happens.</p></div></li>
                <li><span className="sn">3</span><div><h5>Sends and records it</h5><p>A branded tax invoice goes out, and the ledger and VAT return update.</p></div></li>
              </ul>
              <a href="https://fisqel.com" className="btn btn-blue btn-lg">Explore Fisqel</a>
            </div>
            <div className="phone-wrap reveal d1">
              <div className="phone-glow"></div>
              <div className="phone">
                <div className="phone-screen">
                  <div className="wa-head">
                    <span className="wa-av">F</span>
                    <span><span className="nm" style={{ display: 'block' }}>Fisqel</span><span className="st">AI accountant · online</span></span>
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

      {/* ============ INDUSTRIES ============ */}
      <section className="section-pad" id="industries" data-screen-label="Industries">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Industries we serve</span>
            <h2>Built for the businesses that run on WhatsApp.</h2>
          </div>
          <div className="ind-grid">
            <div className="ind reveal"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></svg></span><div><h4>Trading &amp; Retail</h4><p>Invoicing, VAT, receivables</p></div></div>
            <div className="ind reveal d1"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-7.9 7.9l-6.9 6.9a2.1 2.1 0 01-3-3l6.9-6.9a6 6 0 017.9-7.9z" /></svg></span><div><h4>Technical Services &amp; Construction</h4><p>Receipts, expenses, VAT</p></div></div>
            <div className="ind reveal d2"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6m0 0l3-2m-3 2L9 6M5 22a7 7 0 0114 0" /><circle cx="12" cy="13" r="3" /></svg></span><div><h4>Clinics &amp; Dental</h4><p>Bookings &amp; reminders with BizBrain</p></div></div>
            <div className="ind reveal"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg></span><div><h4>Professional Services</h4><p>Invoicing &amp; cash flow</p></div></div>
            <div className="ind reveal d1"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></svg></span><div><h4>Accounting Firms</h4><p>All your clients in one dashboard</p></div></div>
            <div className="ind reveal d2"><span className="iic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z" /><path d="M6 1v3M10 1v3M14 1v3" /></svg></span><div><h4>Restaurants &amp; Cafés</h4><p>Daily expenses, VAT-ready books</p></div></div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section-pad" id="about" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="About">
        <div className="wrap">
          <div className="about">
            <div className="reveal">
              <span className="eyebrow">About Lexoro Solutions</span>
              <h2>A UAE software company building the tools businesses run on.</h2>
              <p className="lead">Lexoro Solutions FZC is registered in Ajman Free Zone. We design, build and operate AI-native software for UAE businesses — and back it with hands-on accounting and tax services.</p>
              <div className="mission-pts">
                <div className="mpt">
                  <span className="mic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg></span>
                  <div><h4>Parent company of Fisqel &amp; BizBrain</h4><p>Two products, one engineering team and one shared platform.</p></div>
                </div>
                <div className="mpt">
                  <span className="mic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg></span>
                  <div><h4>Software and accounting, under one roof</h4><p>Our products keep the books; our team files the VAT and corporate tax returns.</p></div>
                </div>
                <div className="mpt">
                  <span className="mic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" /></svg></span>
                  <div><h4>UAE-first, GCC-ready</h4><p>Bilingual, aligned with FTA rules, and built for how business is done in the Gulf.</p></div>
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
            <h2>Let&apos;s talk about your business.</h2>
            <p>Software, bookkeeping, or VAT and corporate tax filing — tell us what you need and we&apos;ll point you to the right Lexoro solution.</p>
            <div className="cta-actions">
              <a href={WHATSAPP} className="btn btn-blue btn-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.9.9-2.8-.2-.3A8 8 0 1112 20zm4.5-5.6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.3 7.3 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z" /></svg>
                Chat on WhatsApp
              </a>
              <a href="https://fisqel.com" className="btn btn-ghost-dark btn-lg">Visit Fisqel</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer" data-screen-label="Footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <img src="/assets/lexoro-logo-dark.png" alt="Lexoro Solutions" className="flogo logo-light" />
              <img src="/assets/lexoro-logo-white.png" alt="Lexoro Solutions" className="flogo logo-dark" />
              <p>A UAE software company and the parent company of Fisqel and BizBrain.</p>
              <p>Office F1, C1 Building, Ajman Free Zone, UAE</p>
            </div>
            <div className="fcol">
              <h5>Our products</h5>
              <a href="https://fisqel.com">Fisqel</a>
              <a href="/bizbrain">BizBrain</a>
              <a href="/bizbrain#pricing">BizBrain pricing</a>
            </div>
            <div className="fcol">
              <h5>Solutions</h5>
              <a href="#accounting">Bookkeeping</a>
              <a href="#accounting">VAT return filing</a>
              <a href="#accounting">Corporate tax filing</a>
              <a href="#industries">Industries</a>
            </div>
            <div className="fcol">
              <h5>Company</h5>
              <a href="#about">About</a>
              <a href={WHATSAPP}>Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
          <div className="foot-bottom">
            <p>© 2026 Lexoro Solutions FZC. Built in the UAE.</p>
            <div className="foot-social">
              <a href={WHATSAPP} aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.9.9-2.8-.2-.3A8 8 0 1112 20z" /></svg></a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============ SCRIPTS ============
          Exact order: gsap -> ScrollTrigger -> three.js -> fx.js -> theme.js
          -> i18n.js -> main-v3.js -> creative-fx.js
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
