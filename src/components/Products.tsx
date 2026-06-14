'use client'
import { motion } from 'framer-motion'

const apps = [
  {
    mark: 'B',
    name: 'BizBrain',
    tagline: 'AI Receptionist for Clinics',
    desc: 'Automates WhatsApp bookings, sends reminders, handles human handoff — 24/7 in Arabic and English.',
    color: '#004aad',
    glowColor: 'rgba(0,74,173,0.35)',
    bg: 'linear-gradient(160deg, rgba(0,74,173,0.1) 0%, rgba(0,74,173,0.03) 100%)',
    border: 'rgba(0,74,173,0.3)',
    hoverBorder: 'rgba(0,74,173,0.55)',
    status: 'Live now',
    statusColor: '#4ade80',
    statusBg: 'rgba(34,197,94,0.09)',
    statusBorder: 'rgba(34,197,94,0.22)',
    href: '/bizbrain',
    features: ['WhatsApp AI booking', 'Auto reminders', 'Arabic + English', 'Human handoff inbox', 'Schedule manager', 'Multi-clinic support'],
  },
  {
    mark: 'A',
    name: 'AccountAI',
    tagline: 'AI Bookkeeping for SMEs',
    desc: 'Automated VAT filing, invoice generation, and P&L reports. Your AI accountant, always on.',
    color: '#0ea5e9',
    glowColor: 'rgba(14,165,233,0.3)',
    bg: 'linear-gradient(160deg, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0.02) 100%)',
    border: 'rgba(14,165,233,0.2)',
    hoverBorder: 'rgba(14,165,233,0.45)',
    status: 'Coming Q3 2026',
    statusColor: 'rgba(255,255,255,0.55)',
    statusBg: 'rgba(255,255,255,0.05)',
    statusBorder: 'rgba(255,255,255,0.1)',
    href: '#',
    features: ['VAT filing automation', 'Invoice generation', 'P&L reports', 'Bank reconciliation', 'Multi-currency', 'UAE compliance'],
  },
  {
    mark: 'P',
    name: 'PropAI',
    tagline: 'AI Assistant for Real Estate',
    desc: 'Listings, viewings, client follow-ups — all automated. Focus on closing deals, not admin.',
    color: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.3)',
    bg: 'linear-gradient(160deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.02) 100%)',
    border: 'rgba(245,158,11,0.2)',
    hoverBorder: 'rgba(245,158,11,0.45)',
    status: 'Coming Q4 2026',
    statusColor: 'rgba(255,255,255,0.55)',
    statusBg: 'rgba(255,255,255,0.05)',
    statusBorder: 'rgba(255,255,255,0.1)',
    href: '#',
    features: ['AI listing assistant', 'Viewing scheduler', 'Client follow-ups', 'WhatsApp automation', 'CRM integration', 'Market insights'],
  },
]

export default function Products() {
  return (
    <section id="products" style={{ padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#004aad', display: 'inline-block', boxShadow: '0 0 8px rgba(0,74,173,0.8)' }} />
            Our products
          </div>
          <h2 style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 52, letterSpacing: '-2.5px', color: '#fff',
            marginBottom: 18, lineHeight: 1.05,
          }}>
            One platform.<br />Every vertical.
          </h2>
          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.48)',
            maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontWeight: 300,
          }}>
            Purpose-built AI for each industry. Not generic tools — vertical products that know your business inside out.
          </p>
        </motion.div>

        <div className="apps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{
                y: -6,
                borderColor: app.hoverBorder,
                boxShadow: `0 32px 64px rgba(0,0,0,0.55), 0 0 40px ${app.glowColor}`,
              }}
              style={{
                background: app.bg,
                border: `1px solid rgba(255,255,255,0.09)`,
                borderRadius: 24,
                padding: 32,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.28s ease',
              }}
            >
              {/* Corner glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 200, height: 200, borderRadius: '50%',
                background: `radial-gradient(circle, ${app.glowColor} 0%, transparent 70%)`,
                opacity: 0.35, pointerEvents: 'none',
                transform: 'translate(45%, -45%)',
              }} />

              {/* Arrow icon */}
              <div style={{
                position: 'absolute', top: 22, right: 22,
                width: 30, height: 30, borderRadius: 9,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, color: 'rgba(255,255,255,0.35)',
              }}>↗</div>

              {/* App mark */}
              <div style={{
                width: 54, height: 54, borderRadius: 15,
                background: `linear-gradient(135deg, ${app.color}25, ${app.color}45)`,
                border: `1px solid ${app.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 22, color: app.color,
                marginBottom: 22,
                boxShadow: `0 8px 22px ${app.glowColor}`,
              }}>
                {app.mark}
              </div>

              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 5 }}>{app.name}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>{app.tagline}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, marginBottom: 28 }}>{app.desc}</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 28 }}>
                {app.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.52)' }}>
                    <span style={{
                      width: 15, height: 15, borderRadius: '50%', flexShrink: 0,
                      background: `${app.color}22`,
                      border: `1px solid ${app.color}44`,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: app.color, fontSize: 8,
                    }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: 12, fontWeight: 600, padding: '5px 13px', borderRadius: 8,
                background: app.statusBg, color: app.statusColor, border: `1px solid ${app.statusBorder}`,
              }}>
                {app.statusColor === '#4ade80' && (
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%', background: '#22c55e',
                    display: 'inline-block', boxShadow: '0 0 8px rgba(34,197,94,0.7)',
                  }} />
                )}
                {app.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
