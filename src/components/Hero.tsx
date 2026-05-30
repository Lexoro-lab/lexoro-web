'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const duration = 2000
    const start = performance.now()
    function update(now: number) {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(ease * target))
      if (t < 1) requestAnimationFrame(update)
    }
    const timer = setTimeout(() => requestAnimationFrame(update), 1000)
    return () => clearTimeout(timer)
  }, [target])
  return <>{val}{suffix}</>
}

const marqueeItems = [
  'AI Receptionist', 'WhatsApp Booking', 'Arabic + English', 'Auto Reminders',
  'Human Handoff', 'VAT Compliance', 'Real-time Dashboard', 'Multi-clinic',
  'Broadcast Messaging', 'Schedule Manager', 'AI Receptionist', 'WhatsApp Booking',
  'Arabic + English', 'Auto Reminders', 'Human Handoff', 'VAT Compliance',
  'Real-time Dashboard', 'Multi-clinic', 'Broadcast Messaging', 'Schedule Manager',
]

const sidebarItems = [
  { label: 'Overview', active: true },
  { label: 'Appointments', active: false },
  { label: 'Patients', active: false },
  { label: 'Inbox', active: false, badge: '3' },
]

const manageItems = ['Doctors', 'Schedule', 'Settings']

const tableRows = [
  { name: 'Sarah Al Mansouri', info: 'Dr. Ahmed · 09:00', status: 'Confirmed', green: true },
  { name: 'Mohammed Hassan', info: 'Dr. Sara · 10:30', status: 'Confirmed', green: true },
  { name: 'Fatima Al Zaabi', info: 'Dr. Khalid · 11:00', status: 'Pending', green: false },
]

const statCards = [
  { l: 'Today', v: '8', s: 'appointments' },
  { l: 'Patients', v: '247', s: 'registered' },
  { l: 'This month', v: '134', s: 'bookings' },
  { l: 'AI Status', v: 'Live', s: '24/7 active', green: true },
]

const proofItems = [
  { val: 200, suffix: '+', label: 'Businesses in GCC' },
  { val: 15, suffix: 'h', label: 'Saved weekly' },
  { val: 80, suffix: '%', label: 'Faster booking' },
]

const syneStyle = { fontFamily: 'var(--font-syne), Syne, sans-serif' }

export default function Hero() {
  const cursorX = useMotionValue(-300)
  const cursorY = useMotionValue(-300)
  const springX = useSpring(cursorX, { stiffness: 80, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-0 w-80 h-80 rounded-full"
        style={{
          x: springX, y: springY,
          translateX: '-50%', translateY: '-50%',
          background: 'radial-gradient(circle, rgba(0,74,173,0.08) 0%, transparent 70%)',
        }}
      />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-0 overflow-hidden text-center">
        <ParticleCanvas />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#004aad]/40 backdrop-blur-sm mb-10"
            style={{ background: 'rgba(0,74,173,0.06)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#004aad] animate-pulse" />
            <span className="text-xs text-white/50">Now live across UAE &amp; GCC</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={syneStyle}
            className="font-extrabold text-[38px] md:text-[72px] leading-[1.03] tracking-[-2px] md:tracking-[-3.5px] mb-6"
          >
            AI that runs your
            <br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>business </span>
            <span style={{ color: '#004aad', position: 'relative', display: 'inline-block' }}>
              while you sleep
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1.4 }}
                style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', background: '#004aad', borderRadius: '2px' }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg font-light leading-relaxed max-w-[480px] mx-auto mb-12"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Lexoro builds vertical AI products for GCC businesses — automating the repetitive work keeping you from growing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20"
          >
            <motion.a
              href="https://bizbrain-xi.vercel.app/register"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,74,173,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 text-white font-semibold text-[15px] rounded-xl flex items-center gap-2"
              style={{ background: '#004aad' }}
            >
              Start free trial <span className="arr">→</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 text-[15px] rounded-xl flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
            >
              <span style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>▶</span>
              Watch 2min demo
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-36 top-8 w-48 rounded-2xl p-4 z-10 hidden lg:block"
              style={{ background: 'rgba(10,10,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
            >
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>This month</div>
              <div style={{ ...syneStyle, fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: 2 }}>
                <Counter target={134} />
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>appointments booked</div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  style={{ height: '100%', background: '#004aad', borderRadius: 2 }}
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-32 top-12 w-44 rounded-2xl p-4 z-10 hidden lg:block"
              style={{ background: 'rgba(10,10,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
            >
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>AI just booked</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 8 }}>"Dr. Ahmed tomorrow at 10am ✓"</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>WhatsApp · 2s ago</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                <span style={{ fontSize: 9, color: '#22c55e' }}>AI Online</span>
              </div>
            </motion.div>

            <div style={{ background: 'rgba(8,8,8,0.95)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.8)' }}>
              <div style={{ background: '#0f0f0f', padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', borderRadius: 5, padding: '4px 12px', fontSize: 10, color: 'rgba(255,255,255,0.18)', textAlign: 'center', maxWidth: 280, margin: '0 auto' }}>
                  app.lexorosolutions.com/dashboard
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,155px) 1fr', padding: 20, gap: 16, overflowX: 'auto' }}></div>
                <div style={{ borderRight: '1px solid rgba(255,255,255,0.04)', paddingRight: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                    <div style={{ width: 22, height: 22, background: '#004aad', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: '#fff', ...syneStyle }}>B</div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', ...syneStyle }}>BizBrain</span>
                  </div>
                  {sidebarItems.map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', borderRadius: 6, fontSize: 10, marginBottom: 2, cursor: 'pointer', background: item.active ? 'rgba(0,74,173,0.15)' : 'transparent', color: item.active ? '#fff' : 'rgba(255,255,255,0.3)', border: item.active ? '1px solid rgba(0,74,173,0.2)' : '1px solid transparent' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.active ? '#004aad' : 'rgba(255,255,255,0.12)' }} />
                      {item.label}
                      {item.badge && <span style={{ marginLeft: 'auto', background: 'rgba(0,74,173,0.25)', color: '#60a5fa', padding: '1px 5px', borderRadius: 3, fontSize: 8, fontWeight: 600 }}>{item.badge}</span>}
                    </div>
                  ))}
                  <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.16)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '14px 0 6px 8px' }}>Manage</div>
                  {manageItems.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', borderRadius: 6, fontSize: 10, marginBottom: 2, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
                      {item}
                    </div>
                  ))}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2, ...syneStyle }}>Good morning, Ibrar 👋</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.18)' }}>Sunday · Al Shifa Medical Clinic · Dubai</div>
                    </div>
                    <button style={{ fontSize: 10, color: '#60a5fa', padding: '5px 12px', borderRadius: 6, background: 'rgba(0,74,173,0.15)', border: '1px solid rgba(0,74,173,0.3)', cursor: 'pointer', fontFamily: 'inherit' }}>Broadcast</button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
                    {statCards.map(stat => (
                      <div key={stat.l} style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 8px' }}>
                        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{stat.l}</div>
                        <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-1px', color: stat.green ? '#22c55e' : '#fff', ...syneStyle }}>{stat.v}</div>
                        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.15)', marginTop: 2 }}>{stat.s}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Today&apos;s schedule</span>
                      <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.12)' }}>8 appointments</span>
                    </div>
                    {tableRows.map(row => (
                      <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.7fr', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center' }}>
                        <div style={{ fontSize: 10, color: '#fff', fontWeight: 500 }}>{row.name}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)' }}>{row.info}</div>
                        <div>
                          <span style={{ fontSize: 8, fontWeight: 600, padding: '2px 6px', borderRadius: 4, background: row.green ? 'rgba(34,197,94,0.1)' : 'rgba(0,74,173,0.15)', color: row.green ? '#22c55e' : '#60a5fa' }}>
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 44, animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap' }}>
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ fontSize: 11, color: 'rgba(255,255,255,0.13)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <span style={{ color: '#004aad', fontSize: 7 }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '24px' }}>
        {proofItems.map((item, i) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ ...syneStyle, fontWeight: 800, fontSize: 24, color: '#fff', letterSpacing: '-1px' }}>
                <Counter target={item.val} suffix={item.suffix} />
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 4 }}>{item.label}</div>
            </div>
            {i < proofItems.length - 1 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.05)' }} />}
          </div>
        ))}
        <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ ...syneStyle, fontWeight: 800, fontSize: 24, color: '#fff', letterSpacing: '-1px' }}>24/7</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 4 }}>AI always online</div>
        </div>
      </div>
    </>
  )
}