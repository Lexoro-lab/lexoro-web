'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#004aad'

const features = [
  'Unlimited patient bookings',
  'AI WhatsApp reception',
  'Appointment reminders',
  'Doctor scheduling',
  'Real-time dashboard',
  'Arabic & English support',
  'Staff handoff',
]

type Billing = 'monthly' | 'yearly'

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const isYearly = billing === 'yearly'

  return (
    <section id="pricing" style={{ padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: 12, color: '#60a5fa', letterSpacing: '0.12em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: 18,
            background: 'rgba(0,74,173,0.1)', padding: '5px 14px', borderRadius: 20,
            border: '1px solid rgba(0,74,173,0.25)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#004aad', display: 'inline-block', boxShadow: '0 0 8px rgba(0,74,173,0.8)' }} />
            Pricing
          </div>
          <h2 style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 48, letterSpacing: '-2.5px', color: '#fff', marginBottom: 14, lineHeight: 1.05,
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.48)', fontWeight: 300 }}>
            One plan, everything included. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', gap: 4,
            padding: '5px', borderRadius: 14,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
          }}>
            <button
              onClick={() => setBilling('monthly')}
              style={{
                padding: '9px 24px', borderRadius: 10,
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all 0.22s ease',
                background: !isYearly ? ACCENT : 'transparent',
                color: !isYearly ? '#fff' : 'rgba(255,255,255,0.45)',
                border: 'none',
                boxShadow: !isYearly ? `0 4px 16px ${ACCENT}50` : 'none',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '9px 24px', borderRadius: 10,
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all 0.22s ease',
                background: isYearly ? ACCENT : 'transparent',
                color: isYearly ? '#fff' : 'rgba(255,255,255,0.45)',
                border: 'none',
                boxShadow: isYearly ? `0 4px 16px ${ACCENT}50` : 'none',
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
        </div>

        {/* Single plan card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%', maxWidth: 420,
              background: `linear-gradient(160deg, ${ACCENT}18 0%, ${ACCENT}06 100%)`,
              border: `1px solid ${ACCENT}55`,
              borderRadius: 22,
              padding: 34,
              position: 'relative',
              boxShadow: `0 0 70px ${ACCENT}20, 0 20px 40px rgba(0,0,0,0.3)`,
            }}
          >
            <div style={{
              fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16,
            }}>Standard</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={billing}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                style={{ marginBottom: 26 }}
              >
                {isYearly && (
                  <div style={{
                    fontFamily: 'var(--font-syne)', fontWeight: 700,
                    fontSize: 18, color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'line-through', letterSpacing: '-0.5px', marginBottom: 2,
                  }}>
                    AED 299
                  </div>
                )}

                <div style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 44, color: '#fff', letterSpacing: '-2px', lineHeight: 1,
                }}>
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

            {features.map(f => (
              <div key={f} style={{
                display: 'flex', alignItems: 'center', gap: 9,
                fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 12,
              }}>
                <span style={{
                  width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#4ade80', fontSize: 9,
                }}>✓</span>
                {f}
              </div>
            ))}

            <motion.a
              href={`https://app.lexorosolutions.com/register?billing=${billing}`}
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'block', textAlign: 'center', textDecoration: 'none',
                width: '100%', padding: '13px', borderRadius: 10,
                fontSize: 13, fontWeight: 600, cursor: 'pointer', marginTop: 28,
                fontFamily: 'inherit', transition: 'all 0.2s',
                boxSizing: 'border-box',
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`,
                color: '#fff',
                border: 'none',
                boxShadow: `0 8px 24px ${ACCENT}40`,
              }}
            >
              Start 7-day free trial →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
