'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#' },
  { label: 'Company', href: '#company' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-white/[0.07]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(2,2,4,0.88)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/45 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#004aad] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://bizbrain-xi.vercel.app/login"
            className="text-sm text-white/55 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/22 transition-all duration-200"
          >
            Sign in
          </a>
          <motion.a
            href="https://bizbrain-xi.vercel.app/register"
            whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(0,74,173,0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-semibold text-white px-5 py-2 rounded-lg transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #004aad, #0063dd)',
              boxShadow: '0 4px 16px rgba(0,74,173,0.3)',
            }}
          >
            Get started →
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white/80 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white/80 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white/80 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl border-b border-white/[0.07] overflow-hidden"
            style={{ background: 'rgba(2,2,4,0.96)' }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-white/55 hover:text-white text-left transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/[0.07] pt-4 flex flex-col gap-3">
                <a
                  href="https://bizbrain-xi.vercel.app/login"
                  className="text-sm text-white/55 text-center py-2.5 rounded-lg border border-white/10"
                >
                  Sign in
                </a>
                <a
                  href="https://bizbrain-xi.vercel.app/register"
                  className="text-sm font-semibold text-white text-center py-2.5 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #004aad, #0063dd)' }}
                >
                  Get started →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
