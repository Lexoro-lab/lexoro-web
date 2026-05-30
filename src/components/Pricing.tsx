'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
    <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ fontSize: 12, color: '#004aad', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Pricing</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 44, letterSpacing: '-2px', color: '#fff', marginBottom: 12 }}>Simple, transparent pricing</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>Each app priced separately. No hidden fees. Cancel anytime.</p>
        </motion.div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48 }}>
          {appTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveApp(tab.key)}
              style={{
                padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                background: activeApp === tab.key ? tab.color : 'transparent',
                color: activeApp === tab.key ? '#fff' : 'rgba(255,255,255,0.4)',
                border: activeApp === tab.key ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {currentPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: plan.popular ? `linear-gradient(160deg, ${activeTab.color}10, transparent)` : '#0d0d0d',
                border: `1px solid ${plan.popular ? activeTab.color + '50' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 20,
                padding: 28,
              }}
            >
              {plan.popular && (
                <div style={{ display: 'inline-block', background: activeTab.color, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 5, letterSpacing: '0.06em', marginBottom: 12 }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>{plan.name}</div>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 38, color: '#fff', letterSpacing: '-2px', marginBottom: 4 }}>
                AED {plan.price}<span style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.3)', letterSpacing: 0 }}>/mo</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>{plan.desc}</div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 20 }} />
              {plan.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
                  <span style={{ color: '#22c55e', fontSize: 14 }}>✓</span>
                  {f}
                </div>
              ))}
              <motion.a
                href="https://bizbrain-xi.vercel.app/register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'block', textAlign: 'center', textDecoration: 'none',
                  width: '100%', padding: '11px', borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginTop: 24, fontFamily: 'inherit', transition: 'all 0.2s',
                  background: plan.popular ? activeTab.color : 'transparent',
                  color: plan.popular ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {plan.popular ? 'Get started →' : 'Get started'}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}