'use client'
import { motion } from 'framer-motion'

const apps = [
  {
    mark: 'B',
    name: 'BizBrain',
    tagline: 'AI Receptionist for Clinics',
    desc: 'Automates WhatsApp bookings, sends reminders, handles human handoff — 24/7 in Arabic and English.',
    color: '#004aad',
    bg: 'rgba(0,74,173,0.08)',
    border: 'rgba(0,74,173,0.25)',
    status: 'Live now',
    statusColor: '#22c55e',
    statusBg: 'rgba(34,197,94,0.1)',
    href: '/bizbrain',
    features: ['WhatsApp AI booking', 'Auto reminders', 'Arabic + English', 'Human handoff inbox', 'Schedule manager', 'Multi-clinic support'],
  },
  {
    mark: 'A',
    name: 'AccountAI',
    tagline: 'AI Bookkeeping for SMEs',
    desc: 'Automated VAT filing, invoice generation, and P&L reports. Your AI accountant, always on.',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.15)',
    status: 'Coming Q3 2026',
    statusColor: 'rgba(255,255,255,0.3)',
    statusBg: 'rgba(255,255,255,0.05)',
    href: '#',
    features: ['VAT filing automation', 'Invoice generation', 'P&L reports', 'Bank reconciliation', 'Multi-currency', 'UAE compliance'],
  },
  {
    mark: 'P',
    name: 'PropAI',
    tagline: 'AI Assistant for Real Estate',
    desc: 'Listings, viewings, client follow-ups — all automated. Focus on closing deals, not admin.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.15)',
    status: 'Coming Q4 2026',
    statusColor: 'rgba(255,255,255,0.3)',
    statusBg: 'rgba(255,255,255,0.05)',
    href: '#',
    features: ['AI listing assistant', 'Viewing scheduler', 'Client follow-ups', 'WhatsApp automation', 'CRM integration', 'Market insights'],
  },
]

export default function Products() {
  return (
    <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ fontSize: 12, color: '#004aad', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Our products</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 48, letterSpacing: '-2px', color: '#fff', marginBottom: 16, lineHeight: 1.05 }}>
            One platform.<br />Every vertical.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.3)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Purpose-built AI for each industry. Not generic tools — vertical products that know your business inside out.
          </p>
        </motion.div>

        className="apps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ borderColor: app.border, y: -4 }}
              style={{
                background: app.bg,
                border: `1px solid rgba(255,255,255,0.07)`,
                borderRadius: 20,
                padding: 28,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
            >
              <div style={{ position: 'absolute', top: 20, right: 20, fontSize: 14, color: 'rgba(255,255,255,0.12)' }}>↗</div>

              <div style={{ width: 48, height: 48, borderRadius: 12, background: app.border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 20, color: app.color, marginBottom: 16, border: `1px solid ${app.border}` }}>
                {app.mark}
              </div>

              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 4 }}>{app.name}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>{app.tagline}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', lineHeight: 1.65, marginBottom: 24 }}>{app.desc}</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 24 }}>
                {app.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                    <span style={{ color: app.color, fontSize: 10 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 6, background: app.statusBg, color: app.statusColor }}>
                {app.statusColor === '#22c55e' && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />}
                {app.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}