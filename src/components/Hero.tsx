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
  { name: 'Sarah Al Mansouri', info: 'Dr. Ahmed · 09:00 AM', status: 'Confirmed', green: true },
  { name: 'Mohammed Hassan', info: 'Dr. Sara · 10:30 AM', status: 'Confirmed', green: true },
  { name: 'Fatima Al Zaabi', info: 'Dr. Khalid · 11:00 AM', status: 'Pending', green: false },
  { name: 'Ali Al Rashidi', info: 'Dr. Ahmed · 12:00 PM', status: 'Confirmed', green: true },
]

const statCards = [
  { l: 'Today', v: '8', s: 'appointments', trend: '+2 from yesterday' },
  { l: 'Patients', v: '247', s: 'registered', trend: '+12 this week' },
  { l: 'This Month', v: '134', s: 'bookings', trend: '↑ 28%' },
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
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full"
        style={{
          x: springX, y: springY,
          translateX: '-50%', translateY: '-50%',
          background: 'radial-gradient(circle, rgba(0,74,173,0.12) 0%, transparent 70%)',
        }}
      />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-0 overflow-hidden text-center">
        <ParticleCanvas />

        {/* Aurora blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div style={{
            position: 'absolute', top: '-10%', left: '25%',
            width: '55%', height: '55%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,74,173,0.14) 0%, transparent 70%)',
            animation: 'aurora 18s ease-in-out infinite',
            filter: 'blur(48px)',
          }} />
          <div style={{
            position: 'absolute', top: '15%', left: '-5%',
            width: '45%', height: '45%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,86,204,0.09) 0%, transparent 70%)',
            animation: 'aurora 24s ease-in-out infinite reverse',
            filter: 'blur(64px)',
          }} />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#004aad]/35 backdrop-blur-sm mb-10"
            style={{ background: 'rgba(0,74,173,0.09)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#004aad] animate-pulse" />
            <span className="text-sm text-white/65 font-medium">Now live across UAE &amp; GCC</span>
            <span className="text-white/25">·</span>
            <span className="text-xs" style={{ color: '#60a5fa', opacity: 0.85 }}>200+ businesses</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={syneStyle}
            className="font-extrabold text-[40px] md:text-[76px] leading-[1.04] tracking-[-2px] md:tracking-[-4px] mb-6"
          >
            AI that runs your
            <br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>business </span>
            <span style={{ color: '#4d8fff', position: 'relative', display: 'inline-block' }}>
              while you sleep
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, delay: 1.4 }}
                style={{
                  position: 'absolute', bottom: -2, left: 0, height: '3px',
                  background: 'linear-gradient(90deg, #004aad, #60a5fa)',
                  borderRadius: '2px',
                  boxShadow: '0 0 20px rgba(0,74,173,0.8)',
                }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg font-light leading-relaxed max-w-[520px] mx-auto mb-12"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Lexoro builds vertical AI products for GCC businesses — automating the repetitive work keeping you from growing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20"
          >
            <motion.a
              href="https://app.lexorosolutions.com/register"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(0,74,173,0.55), 0 0 80px rgba(0,74,173,0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 text-white font-semibold text-[15px] rounded-xl flex items-center gap-2.5"
              style={{
                background: 'linear-gradient(135deg, #004aad 0%, #0063dd 100%)',
                boxShadow: '0 8px 32px rgba(0,74,173,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              Start free trial
              <span style={{
                width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
              }}>→</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.07)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 text-[15px] rounded-xl flex items-center gap-2.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.13)',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, flexShrink: 0,
              }}>▶</span>
              Watch 2-min demo
            </motion.a>
          </motion.div>

          {/* Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="relative"
          >
            {/* Left floating widget */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-44 top-10 w-52 rounded-2xl p-5 z-10 hidden lg:block"
              style={{
                background: 'rgba(8,8,14,0.94)',
                border: '1px solid rgba(255,255,255,0.13)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.75), 0 0 0 1px rgba(0,74,173,0.12)',
              }}
            >
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10, fontWeight: 600 }}>This month</div>
              <div style={{ ...syneStyle, fontSize: 30, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: 4 }}>
                <Counter target={134} />
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>appointments booked</div>
              <div style={{ fontSize: 11, color: '#4ade80', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span>↑</span> 28% vs last month
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 4, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, #004aad, #60a5fa)', borderRadius: 4 }}
                />
              </div>
            </motion.div>

            {/* Right floating widget */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-40 top-14 w-48 rounded-2xl p-5 z-10 hidden lg:block"
              style={{
                background: 'rgba(8,8,14,0.94)',
                border: '1px solid rgba(255,255,255,0.13)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.75)',
              }}
            >
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10, fontWeight: 600 }}>AI just booked</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, marginBottom: 10 }}>&quot;Dr. Ahmed tomorrow at 10am ✓&quot;</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>via WhatsApp · 2s ago</div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '6px 10px', borderRadius: 8,
                background: 'rgba(34,197,94,0.09)',
                border: '1px solid rgba(34,197,94,0.22)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px rgba(34,197,94,0.7)' }} />
                <span style={{ fontSize: 11, color: '#4ade80', fontWeight: 500 }}>AI Online · 24/7</span>
              </div>
            </motion.div>

            {/* Dashboard frame */}
            <div style={{
              background: 'rgba(6,6,10,0.98)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 50px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(0,74,173,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              {/* Browser chrome */}
              <div style={{
                background: 'rgba(10,10,18,0.99)',
                padding: '13px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{ display: 'flex', gap: 7, marginRight: 6 }}>
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
                </div>
                <div style={{
                  flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 7,
                  padding: '5px 14px', fontSize: 11, color: 'rgba(255,255,255,0.4)', textAlign: 'center',
                  maxWidth: 340, margin: '0 auto',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                }}>
                  <span style={{ fontSize: 9 }}>🔒</span>
                  app.lexorosolutions.com/dashboard
                </div>
              </div>

              {/* Dashboard layout */}
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,180px) 1fr', overflowX: 'auto' }}>

                {/* Sidebar */}
                <div style={{
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                  padding: '20px 14px',
                  background: 'rgba(0,0,0,0.25)',
                  minWidth: 150,
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    marginBottom: 24, paddingBottom: 16,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: 28, height: 28,
                      background: 'linear-gradient(135deg, #004aad, #0063dd)',
                      borderRadius: 7,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 800, color: '#fff',
                      ...syneStyle,
                      boxShadow: '0 4px 14px rgba(0,74,173,0.5)',
                      flexShrink: 0,
                    }}>B</div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', ...syneStyle, lineHeight: 1 }}>BizBrain</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>Al Shifa Clinic</div>
                    </div>
                  </div>

                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6, paddingLeft: 8, fontWeight: 600 }}>Main</div>

                  {sidebarItems.map(item => (
                    <div key={item.label} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '7px 9px', borderRadius: 7, fontSize: 12, marginBottom: 2, cursor: 'pointer',
                      background: item.active ? 'rgba(0,74,173,0.22)' : 'transparent',
                      color: item.active ? '#fff' : 'rgba(255,255,255,0.5)',
                      border: item.active ? '1px solid rgba(0,74,173,0.35)' : '1px solid transparent',
                      fontWeight: item.active ? 600 : 400,
                    }}>
                      <span style={{
                        width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                        background: item.active ? '#004aad' : 'rgba(255,255,255,0.2)',
                        boxShadow: item.active ? '0 0 6px rgba(0,74,173,0.8)' : 'none',
                      }} />
                      {item.label}
                      {item.badge && (
                        <span style={{
                          marginLeft: 'auto', background: '#004aad',
                          color: '#fff', padding: '1px 6px', borderRadius: 4, fontSize: 9, fontWeight: 700,
                        }}>{item.badge}</span>
                      )}
                    </div>
                  ))}

                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: '16px 0 6px 9px', fontWeight: 600 }}>Manage</div>

                  {manageItems.map(item => (
                    <div key={item} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '7px 9px', borderRadius: 7, fontSize: 12, marginBottom: 2,
                      color: 'rgba(255,255,255,0.42)', cursor: 'pointer',
                    }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div style={{ padding: '20px 22px', minWidth: 0 }}>

                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20, gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4, ...syneStyle }}>Good morning, Ibrar 👋</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>Sunday · Al Shifa Medical Clinic · Dubai, UAE</div>
                    </div>
                    <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
                      <button style={{
                        fontSize: 11, color: 'rgba(255,255,255,0.6)',
                        padding: '6px 12px', borderRadius: 7,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        cursor: 'pointer', fontFamily: 'inherit',
                      }}>View all</button>
                      <button style={{
                        fontSize: 11, color: '#60a5fa',
                        padding: '6px 12px', borderRadius: 7,
                        background: 'rgba(0,74,173,0.15)',
                        border: '1px solid rgba(0,74,173,0.35)',
                        cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
                      }}>+ Broadcast</button>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 16 }}>
                    {statCards.map(stat => (
                      <div key={stat.l} style={{
                        background: stat.green ? 'rgba(34,197,94,0.07)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${stat.green ? 'rgba(34,197,94,0.18)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: 10, padding: '12px 10px',
                      }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, fontWeight: 600 }}>{stat.l}</div>
                        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-1px', color: stat.green ? '#4ade80' : '#fff', ...syneStyle, lineHeight: 1 }}>{stat.v}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 5 }}>{stat.s}</div>
                        {stat.trend && !stat.green && (
                          <div style={{ fontSize: 10, color: '#60a5fa', marginTop: 3 }}>{stat.trend}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Table */}
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, overflow: 'hidden' }}>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.65fr',
                      padding: '8px 14px',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      background: 'rgba(0,0,0,0.25)',
                    }}>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Patient</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Doctor · Time</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Status</span>
                    </div>
                    {tableRows.map((row, i) => (
                      <div key={row.name} style={{
                        display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.65fr',
                        padding: '9px 14px',
                        borderBottom: i < tableRows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        alignItems: 'center',
                        background: i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent',
                      }}>
                        <div style={{ fontSize: 12, color: '#fff', fontWeight: 500 }}>{row.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{row.info}</div>
                        <div>
                          <span style={{
                            fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 5,
                            background: row.green ? 'rgba(34,197,94,0.12)' : 'rgba(0,74,173,0.18)',
                            color: row.green ? '#4ade80' : '#60a5fa',
                            border: `1px solid ${row.green ? 'rgba(34,197,94,0.25)' : 'rgba(0,74,173,0.3)'}`,
                          }}>
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

      {/* Marquee */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '18px 0', overflow: 'hidden',
        background: 'rgba(255,255,255,0.01)',
      }}>
        <div style={{ display: 'flex', gap: 52, animation: 'marquee 24s linear infinite', whiteSpace: 'nowrap' }}>
          {marqueeItems.map((item, i) => (
            <span key={i} style={{
              fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
            }}>
              <span style={{ color: '#004aad', fontSize: 8 }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 0, padding: '40px 24px', flexWrap: 'wrap',
      }}>
        {proofItems.map((item, i) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', padding: '0 44px' }}>
              <div style={{ ...syneStyle, fontWeight: 800, fontSize: 36, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
                <Counter target={item.val} suffix={item.suffix} />
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>{item.label}</div>
            </div>
            {i < proofItems.length - 1 && (
              <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
            )}
          </div>
        ))}
        <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
        <div style={{ textAlign: 'center', padding: '0 44px' }}>
          <div style={{ ...syneStyle, fontWeight: 800, fontSize: 36, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>24/7</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>AI always online</div>
        </div>
      </div>
    </>
  )
}
