import { motion } from 'framer-motion'

/**
 * Full-screen intro shown once when the site first loads: the logo
 * scales in, a gradient progress line fills, then the whole overlay
 * slides up to reveal the page underneath.
 */
export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Karim<span className="gradient-text">.dev</span>
      </motion.div>

      <div className="mt-8 h-px w-40 overflow-hidden bg-white/10">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.3, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="h-full w-full bg-[linear-gradient(100deg,#8b5cf6,#22d3ee,#f472b6)]"
        />
      </div>
    </motion.div>
  )
}
