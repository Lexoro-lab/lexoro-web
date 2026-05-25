import Logo from './Logo'

const links = {
  Products: ['BizBrain', 'AccountAI', 'PropAI'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 40px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <Logo />
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', lineHeight: 1.7, marginTop: 16, maxWidth: 280 }}>
              Vertical AI products for GCC businesses. Automate the work keeping you from growing.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['𝕏', 'in', '▶'].map((icon, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{section}</div>
              {items.map(item => (
                <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 10, cursor: 'pointer' }}>{item}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2026 Lexoro Solutions. Built for the GCC.</div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}