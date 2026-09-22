import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="section-pad">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-[0_8px_32px_rgba(0,0,0,0.35)]' : ''
          }`}
        >
          <a href="#top" className="font-display text-lg font-bold tracking-tight" data-cursor-hover>
            Karim<span className="gradient-text">.dev</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-ink transition hover:border-white/40 md:inline-flex"
          >
            Me contacter
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 md:hidden"
            aria-label="Ouvrir le menu"
            data-cursor-hover
          >
            <span
              className={`h-px w-4 bg-ink transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-4 bg-ink transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
