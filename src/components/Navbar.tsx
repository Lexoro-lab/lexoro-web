'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = ['Products', 'Pricing', 'Docs', 'Company']

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
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link}
              className="text-sm text-white/40 hover:text-white transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://bizbrain-xi.vercel.app/login"
          className="text-sm text-white/50 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            Sign in
          </a>
          <motion.a
          href="https://bizbrain-xi.vercel.app/register"
            whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(0,74,173,0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-semibold text-white px-5 py-2 rounded-lg bg-[#004aad] hover:bg-[#0056cc] transition-colors duration-200"
          >
            Get started →
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}