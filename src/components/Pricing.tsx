'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const plans = {
  bizbrain: [
    { name: 'Starter', price: 299, desc: 'Small clinics, 1–2 doctors', popular: false, features: ['WhatsApp AI booking', 'Auto reminders', 'Arabic + English', '500 conversations/mo', 'Basic dashboard', 'Email support'] },
    { name: 'Growth', price: 799, desc: 'Growing clinics, up to 5 doctors', popular: true, features: ['Everything in Starter', 'Human handoff inbox', 'Broadcast messaging', 'Unlimited conversations', 'Schedule manager', 'Priority support'] },
    { name: 'Enterprise', price: 1999, desc: 'Hospital groups, multi-branch', popular: false, features: ['Everything in Growth', 'Multi-branch support', 'Custom AI persona', 'Analytics dashboard', 'API access', 'Dedicated support'] },
  ],
  accountai: [
    { name: 'Starter', price: 199, desc: 'Freelancers & small business', popular: false, features: ['VAT filing automation', 'Invoice generation', 'Bank reconciliation', '50 transactions/mo', 'Basic reports', 'Email support'] },
    { name: 'Growth', price: 499, desc: 'Growing SMEs', popular: true, features: ['Everything in Starter', 'P&L reports', 'Multi-currency', 'Unlimited transactions', 'Custom categories', 'Priority support'] },
    { name: 'Enterprise', price: 1299, desc: 'Large companies', popular: false, features: ['Everything in Growth', 'Multi-entity', 'API access', 'Custom integrations', 'Dedicated accountant', '24/7 support'] },
  ],
  propai: [
    { name: 'Agent', price: 249, desc: 'Individual agents', popular: false, features: ['AI listing assistant', 'Viewing scheduler', 'WhatsApp follow-ups', '20 active listings', 'Basic CRM', 'Email support'] },
    { name: 'Agency', price: 699, desc: 'Small agencies', popular: true, features: ['Everything in Agent', 'Team collaboration', 'Unlimited listings', 'Advanced CRM', 'Market insights', 'Priority support'] },
    { name: 'Enterprise', price: 1799, desc: 'Large brokerages', popular: false, features: ['Everything in Agency', 'Multi-branch', 'Custom branding', 'API access', 'White-label option', 'Dedicated support'] },
  ],
}

type AppKey = 'bizbrain' | 'accountai' | 'propai'

const appTabs: { key: AppKey; label: string; color: string }[] = [
  { key: 'bizbrain', label: 'BizBrain', color: '#004aad' },
  { key: 'accountai', label: 'AccountAI', color: '#0ea5e9' },
  { key: 'propai', label: 'PropAI', color: '#f59e0b' },
]

export default function Pricing() {
  const [activeApp, setActiveApp] = useState<AppKey>('bizbrain')
  const currentPlans = plans[activeApp]
  const activeTab = appTabs.find(t => t.key === activeApp)!

  return (
    <section id="pricing" style={{ padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 52 }}
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
            Each app priced separately. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: 56,
        }}>
          <div style={{
            display: 'inline-flex', gap: 4,
            padding: '5px', borderRadius: 14,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
          }}>
            {appTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveApp(tab.key)}
                style={{
                  padding: '9px 24px', borderRadius: 10,
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  fontFamily: 'inherit', transition: 'all 0.22s ease',
                  background: activeApp === tab.key ? tab.color : 'transparent',
                  color: activeApp === tab.key ? '#fff' : 'rgba(255,255,255,0.45)',
                  border: 'none',
                  boxShadow: activeApp === tab.key ? `0 4px 16px ${tab.color}50` : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeApp}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="pricing-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}
          >
            {currentPlans.map((plan, i) => (
              <div
                key={plan.name}
                style={{
                  background: plan.popular
                    ? `linear-gradient(160deg, ${activeTab.color}18 0%, ${activeTab.color}06 100%)`
                    : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${plan.popular ? activeTab.color + '55' : 'rgba(255,255,255,0.09)'}`,
                  borderRadius: 22,
                  padding: 30,
                  position: 'relative',
                  boxShadow: plan.popular ? `0 0 70px ${activeTab.color}20, 0 20px 40px rgba(0,0,0,0.3)` : 'none',
                }}
              >
                {plan.popular && (
                  <div style={{
                    display: 'inline-block',
                    background: activeTab.color,
                    color: '#fff', fontSize: 10, fontWeight: 700,
                    padding: '3px 11px', borderRadius: 6,
                    letterSpacing: '0.08em', marginBottom: 14,
                    boxShadow: `0 4px 12px ${activeTab.color}60`,
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{
                  fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16,
                }}>{plan.name}</div>

                <div style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 40, color: '#fff', letterSpacing: '-2px', marginBottom: 5, lineHeight: 1,
                }}>
                  AED {plan.price}
                  <span style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.4)', letterSpacing: 0 }}>/mo</span>
                </div>

                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 26 }}>{plan.desc}</div>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 22 }} />

                {plan.features.map(f => (
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
                  href="https://app.lexorosolutions.com/register"
                  whileHover={{ scale: 1.02, opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'block', textAlign: 'center', textDecoration: 'none',
                    width: '100%', padding: '12px', borderRadius: 10,
                    fontSize: 13, fontWeight: 600, cursor: 'pointer', marginTop: 26,
                    fontFamily: 'inherit', transition: 'all 0.2s',
                    background: plan.popular
                      ? `linear-gradient(135deg, ${activeTab.color}, ${activeTab.color}cc)`
                      : 'transparent',
                    color: plan.popular ? '#fff' : 'rgba(255,255,255,0.55)',
                    border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.13)',
                    boxShadow: plan.popular ? `0 8px 24px ${activeTab.color}40` : 'none',
                  }}
                >
                  {plan.popular ? 'Get started →' : 'Get started'}
                </motion.a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
