'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const syneStyle = { fontFamily: 'var(--font-syne), Syne, sans-serif' }

const features = [
  {
    icon: 'WA',
    title: 'WhatsApp AI Booking',
    desc: 'Patients message your WhatsApp number in Arabic or English. BizBrain reads the intent, checks doctor availability, and confirms a slot — all in under 30 seconds.',
    col: 2,
    accent: '#25d366',
    accentBg: 'rgba(37,211,102,0.07)',
    accentBorder: 'rgba(37,211,102,0.16)',
  },
  {
    icon: 'ع/A',
    title: 'Arabic + English',
    desc: 'Fully bilingual. BizBrain detects the patient\'s language and responds fluently — no setup required.',
    col: 1,
    accent: '#60a5fa',
    accentBg: 'rgba(96,165,250,0.07)',
    accentBorder: 'rgba(96,165,250,0.16)',
  },
  {
    icon: '◷',
    title: 'Auto Reminders',
    desc: 'Reminder messages sent 24h and 1h before each appointment. Clinics report up to 60% fewer no-shows.',
    col: 1,
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.07)',
    accentBorder: 'rgba(245,158,11,0.16)',
  },
  {
    icon: '↔',
    title: 'Human Handoff Inbox',
    desc: 'When a patient needs a real person, BizBrain flags the conversation and passes it to your team with full context. No messages lost, no awkward handoffs.',
    col: 2,
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.07)',
    accentBorder: 'rgba(167,139,250,0.16)',
  },
  {
    icon: '▦',
    title: 'Schedule Manager',
    desc: 'A full calendar view with real-time appointment tracking per doctor, per branch — all in one place.',
    col: 2,
    accent: '#004aad',
    accentBg: 'rgba(0,74,173,0.09)',
    accentBorder: 'rgba(0,74,173,0.2)',
  },
  {
    icon: '⊞',
    title: 'Multi-clinic Support',
    desc: 'Run multiple branches from a single dashboard. Separate calendars, one AI.',
    col: 1,
    accent: '#22c55e',
    accentBg: 'rgba(34,197,94,0.07)',
    accentBorder: 'rgba(34,197,94,0.16)',
  },
]

const steps = [
  {
    num: '01',
    title: 'Patient messages',
    desc: 'Patient sends any message to your WhatsApp number — "I need an appointment" in Arabic or English.',
    color: '#25d366',
    colorBg: 'rgba(37,211,102,0.08)',
    colorBorder: 'rgba(37,211,102,0.2)',
  },
  {
    num: '02',
    title: 'AI handles it',
    desc: 'BizBrain asks the right questions, finds an available slot, and books the appointment — no human needed.',
    color: '#004aad',
    colorBg: 'rgba(0,74,173,0.1)',
    colorBorder: 'rgba(0,74,173,0.25)',
  },
  {
    num: '03',
    title: 'Confirmed + reminded',
    desc: 'Patient receives a booking confirmation, then automatic reminders before their appointment.',
    color: '#60a5fa',
    colorBg: 'rgba(96,165,250,0.08)',
    colorBorder: 'rgba(96,165,250,0.2)',
  },
]

const stats = [
  { value: '200+', label: 'Clinics in GCC' },
  { value: '10k+', label: 'Bookings per month' },
  { value: '60%', label: 'Fewer no-shows' },
  { value: '24/7', label: 'AI availability' },
]

export default function BizBrainPage() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly')
  const isYearly = billingInterval === 'yearly'

  return (
    <div style={{ background: '#020204', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 140, paddingBottom: 100, textAlign: 'center' }}>
        {/* Aurora */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '-15%', left: '20%', width: '60%', height: '60%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,74,173,0.16) 0%, transparent 70%)',
            filter: 'blur(50px)', animation: 'aurora 18s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', top: '10%', right: '-5%', width: '40%', height: '40%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)', animation: 'aurora 25s ease-in-out infinite reverse',
          }} />
        </div>

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 999,
              border: '1px solid rgba(0,74,173,0.35)',
              background: 'rgba(0,74,173,0.09)',
              marginBottom: 28,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#004aad', display: 'inline-block', boxShadow: '0 0 8px rgba(0,74,173,0.8)' }} />
            <span style={{ fontSize: 12, color: '#60a5fa', fontWeight: 500, letterSpacing: '0.04em' }}>AI Receptionist for Healthcare · Live in GCC</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ ...syneStyle, fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-3px', marginBottom: 24 }}
          >
            Your clinic&apos;s
            <br />
            <span style={{ color: '#4d8fff' }}>AI receptionist,</span>
            <br />
            live 24/7
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontSize: 18, color: 'rgba(255,255,255,0.52)', fontWeight: 300, lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px' }}
          >
            BizBrain handles WhatsApp bookings, sends reminders, and manages your schedule — so your team can focus on patients, not admin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="https://app.lexorosolutions.com/register"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(0,74,173,0.55)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 600,
                color: '#fff', textDecoration: 'none',
                background: 'linear-gradient(135deg, #004aad, #0063dd)',
                boxShadow: '0 8px 32px rgba(0,74,173,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
            >
              Start free trial →
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.07)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 500,
                color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
            >
              How it works ↓
            </motion.a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap',
            marginTop: 72, borderTop: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '32px 24px',
            background: 'rgba(255,255,255,0.01)',
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', padding: '0 48px' }}>
                <div style={{ ...syneStyle, fontSize: 34, fontWeight: 800, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>{s.label}</div>
              </div>
              {i < stats.length - 1 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 64 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 12, color: '#60a5fa', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontWeight: 600, marginBottom: 18,
              background: 'rgba(0,74,173,0.1)', padding: '5px 14px', borderRadius: 20,
              border: '1px solid rgba(0,74,173,0.25)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#004aad', display: 'inline-block' }} />
              Features
            </div>
            <h2 style={{ ...syneStyle, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-2.5px', color: '#fff', marginBottom: 16, lineHeight: 1.05 }}>
              Everything your front desk does,<br />automated
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.48)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
              Six capabilities that cover every touchpoint between your clinic and your patients.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, borderColor: f.accentBorder }}
                style={{
                  gridColumn: `span ${f.col}`,
                  padding: 28,
                  borderRadius: 20,
                  background: f.accentBg,
                  border: '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Corner glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: 160, height: 160, borderRadius: '50%',
                  background: `radial-gradient(circle, ${f.accent}30 0%, transparent 70%)`,
                  transform: 'translate(40%, -40%)', pointerEvents: 'none',
                }} />

                <div style={{
                  width: 40, height: 40, borderRadius: 10, marginBottom: 18, flexShrink: 0,
                  background: f.accentBg, border: `1px solid ${f.accentBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: f.icon.length > 1 ? 11 : 18, fontWeight: 700, color: f.accent,
                  ...syneStyle,
                }}>
                  {f.icon}
                </div>

                <div style={{ ...syneStyle, fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.48)', lineHeight: 1.75 }}>{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 72 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 12, color: '#60a5fa', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontWeight: 600, marginBottom: 18,
              background: 'rgba(0,74,173,0.1)', padding: '5px 14px', borderRadius: 20,
              border: '1px solid rgba(0,74,173,0.25)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#004aad', display: 'inline-block' }} />
              How it works
            </div>
            <h2 style={{ ...syneStyle, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-2.5px', color: '#fff', lineHeight: 1.05 }}>
              From message to booking<br />in 30 seconds
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute', top: 44, left: '17%', right: '17%', height: 1,
              background: 'linear-gradient(90deg, rgba(37,211,102,0.3), rgba(0,74,173,0.4), rgba(96,165,250,0.3))',
              zIndex: 0,
            }} />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.14 }}
                style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 12px' }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', margin: '0 auto 28px',
                  background: step.colorBg, border: `1px solid ${step.colorBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  ...syneStyle, fontSize: 14, fontWeight: 800, color: step.color,
                  boxShadow: `0 0 24px ${step.color}25`,
                }}>
                  {step.num}
                </div>
                <div style={{ ...syneStyle, fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{step.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.48)', lineHeight: 1.75 }}>{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 12, color: '#60a5fa', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontWeight: 600, marginBottom: 18,
              background: 'rgba(0,74,173,0.1)', padding: '5px 14px', borderRadius: 20,
              border: '1px solid rgba(0,74,173,0.25)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#004aad', display: 'inline-block' }} />
              Pricing
            </div>
            <h2 style={{ ...syneStyle, fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-2.5px', color: '#fff', marginBottom: 14, lineHeight: 1.05 }}>
              Simple pricing, no surprises
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.48)', fontWeight: 300 }}>
              Includes a 7-day free trial. No credit card required.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}
          >
            <div style={{
              display: 'inline-flex', gap: 4, padding: 5, borderRadius: 14,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
            }}>
              <button
                onClick={() => setBillingInterval('monthly')}
                style={{
                  padding: '9px 24px', borderRadius: 10, fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.22s ease', border: 'none',
                  background: !isYearly ? 'linear-gradient(135deg, #004aad, #0063dd)' : 'transparent',
                  color: !isYearly ? '#fff' : 'rgba(255,255,255,0.45)',
                  boxShadow: !isYearly ? '0 4px 16px rgba(0,74,173,0.4)' : 'none',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingInterval('yearly')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '9px 24px', borderRadius: 10, fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.22s ease', border: 'none',
                  background: isYearly ? 'linear-gradient(135deg, #004aad, #0063dd)' : 'transparent',
                  color: isYearly ? '#fff' : 'rgba(255,255,255,0.45)',
                  boxShadow: isYearly ? '0 4px 16px rgba(0,74,173,0.4)' : 'none',
                }}
              >
                Yearly
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
                  padding: '2px 8px', borderRadius: 20,
                  background: isYearly ? 'rgba(255,255,255,0.2)' : 'rgba(34,197,94,0.12)',
                  color: isYearly ? '#fff' : '#4ade80',
                  border: isYearly ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(34,197,94,0.25)',
                }}>
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Single plan card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              maxWidth: 420, margin: '0 auto',
              padding: 34, borderRadius: 22,
              background: 'linear-gradient(160deg, rgba(0,74,173,0.18) 0%, rgba(0,74,173,0.06) 100%)',
              border: '1px solid rgba(0,74,173,0.5)',
              position: 'relative',
              boxShadow: '0 0 70px rgba(0,74,173,0.18), 0 24px 48px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
              BizBrain
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={billingInterval}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                style={{ marginBottom: 26 }}
              >
                {isYearly && (
                  <div style={{ ...syneStyle, fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through', letterSpacing: '-0.5px', marginBottom: 2 }}>
                    AED 299
                  </div>
                )}
                <div style={{ ...syneStyle, fontSize: 44, fontWeight: 800, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
                  AED {isYearly ? 249 : 299}
                  <span style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.4)', letterSpacing: 0 }}>/month</span>
                </div>
                {isYearly && (
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 10 }}>
                    Billed AED 2,990/year — 2 months free
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 22 }} />

            {['Unlimited patient bookings', 'AI WhatsApp reception', 'Appointment reminders & confirmations', 'Doctor scheduling', 'Real-time dashboard', 'Arabic & English support', 'Staff handoff'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>
                <span style={{
                  width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#4ade80', fontSize: 9,
                }}>✓</span>
                {f}
              </div>
            ))}

            <motion.a
              href={`https://app.lexorosolutions.com/register?billing=${billingInterval}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'block', textAlign: 'center', textDecoration: 'none',
                width: '100%', padding: '13px', borderRadius: 10, marginTop: 28,
                fontSize: 13, fontWeight: 600, fontFamily: 'inherit', transition: 'all 0.2s',
                boxSizing: 'border-box',
                background: 'linear-gradient(135deg, #004aad, #0063dd)',
                color: '#fff', border: 'none',
                boxShadow: '0 8px 24px rgba(0,74,173,0.4)',
              }}
            >
              Start 7-day free trial →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%', height: '200%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,74,173,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: 12, color: '#4ade80', letterSpacing: '0.12em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: 24,
            background: 'rgba(34,197,94,0.08)', padding: '5px 14px', borderRadius: 20,
            border: '1px solid rgba(34,197,94,0.2)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px rgba(34,197,94,0.7)' }} />
            Ready when you are
          </div>
          <h2 style={{ ...syneStyle, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-2.5px', color: '#fff', marginBottom: 20, lineHeight: 1.05 }}>
            Automate your clinic.<br />Start today.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.48)', lineHeight: 1.75, fontWeight: 300, marginBottom: 40 }}>
            7-day free trial. No credit card required. Set up in under 10 minutes.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="https://app.lexorosolutions.com/register"
              whileHover={{ scale: 1.02, boxShadow: '0 24px 60px rgba(0,74,173,0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '15px 36px', borderRadius: 12, fontSize: 16, fontWeight: 600,
                color: '#fff', textDecoration: 'none',
                background: 'linear-gradient(135deg, #004aad, #0063dd)',
                boxShadow: '0 8px 32px rgba(0,74,173,0.45), inset 0 1px 0 rgba(255,255,255,0.12)',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
            >
              Start free trial →
            </motion.a>
            <motion.a
              href="https://app.lexorosolutions.com/login"
              whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.07)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '15px 36px', borderRadius: 12, fontSize: 16, fontWeight: 500,
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              Sign in
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
