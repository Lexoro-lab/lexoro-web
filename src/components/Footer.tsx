'use client'
import Logo from './Logo'

const links = {
  Products: ['BizBrain', 'AccountAI', 'PropAI'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socialLinks = [
  { label: 'X (Twitter)', icon: '𝕏' },
  { label: 'LinkedIn', icon: 'in' },
  { label: 'YouTube', icon: '▶' },
]

export default function Footer() {
  return (
    <footer id="company" style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '72px 40px 36px',
      background: 'linear-gradient(180deg, rgba(0,74,173,0.02) 0%, rgba(2,2,4,0.95) 100%)',
      position: 'relative',
    }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,74,173,0.4), rgba(96,165,250,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          <div>
            <Logo />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginTop: 18, maxWidth: 280 }}>
              Vertical AI products for GCC businesses. Automate the work keeping you from growing.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {socialLinks.map((s) => (
                <div
                  key={s.label}
                  title={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div style={{
                fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18,
              }}>{section}</div>
              {items.map(item => (
                <div key={item} style={{
                  fontSize: 13, color: 'rgba(255,255,255,0.45)',
                  marginBottom: 12, cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Lexoro Solutions. Built for the GCC.
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{
              display: 'flex', gap: 6, alignItems: 'center',
              padding: '4px 10px', borderRadius: 6,
              background: 'rgba(34,197,94,0.07)',
              border: '1px solid rgba(34,197,94,0.15)',
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                animation: 'pulseGlow 2.5s ease-in-out infinite',
              }} />
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
