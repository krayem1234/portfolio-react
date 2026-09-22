import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { skillTicker } from '../data/skills'
import { projects } from '../data/projects'
import MagneticButton from './MagneticButton'
import TypewriterRoles from './TypewriterRoles'

export default function Hero() {
  return (
    <section id="top" className="section-pad relative flex min-h-screen flex-col justify-center pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full max-w-6xl flex-col items-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[10.5vw] font-bold leading-[0.95] tracking-tight sm:text-[7.5vw] lg:text-[5vw]"
        >
          Salut, je suis
          <br />
          <span className="gradient-text">{profile.shortName}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-5 flex h-7 items-center"
        >
          <TypewriterRoles />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-4 max-w-xl text-lg text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">Voir mes projets</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Me contacter
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-wrap gap-10"
        >
          <div>
            <p className="font-display text-3xl font-bold text-ink">{projects.length}+</p>
            <p className="text-sm text-muted">Projets sur GitHub</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-ink">{skillTicker.length}+</p>
            <p className="text-sm text-muted">Technologies</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-ink">100%</p>
            <p className="text-sm text-muted">Motivation</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scrolling tech ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative mt-24 overflow-hidden border-y border-line py-5"
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...skillTicker, ...skillTicker].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-display text-2xl font-semibold text-muted/70 sm:text-3xl"
            >
              {skill} <span className="mx-2 text-accent-violet">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
        aria-label="Défiler vers le bas"
      >
        <span className="animate-float">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeOpacity="0.4" />
            <circle cx="10" cy="9" r="2.5" fill="currentColor" />
          </svg>
        </span>
      </motion.a>
    </section>
  )
}
