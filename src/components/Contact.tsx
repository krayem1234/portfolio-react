import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import MagneticButton from './MagneticButton'
import ContactForm from './ContactForm'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <section id="contact" className="section-pad relative scroll-mt-24 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="glass relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-10 text-center sm:p-16"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-violet/30 blur-[100px]" />

        <span className="mb-4 flex items-center justify-center gap-3 font-display text-sm text-accent-cyan">
          <span className="h-px w-8 bg-accent-cyan/60" />
          03 / Contact
          <span className="h-px w-8 bg-accent-cyan/60" />
        </span>

        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Discutons de votre <span className="gradient-text">prochain projet</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Ouvert aux stages, aux projets collaboratifs et à toute opportunité pour apprendre et
          construire ensemble.
        </p>

        <ContactForm />

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-4 text-muted/40">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs uppercase tracking-wider">ou</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={profile.github} variant="ghost" target="_blank" rel="noreferrer">
            Voir mon GitHub
          </MagneticButton>
        </div>

        <button
          onClick={copyEmail}
          data-cursor-hover
          className="mx-auto mt-6 flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <span>{profile.email}</span>
          <span className="text-xs text-accent-cyan">{copied ? '✓ Copié' : '(copier)'}</span>
        </button>
      </motion.div>
    </section>
  )
}
