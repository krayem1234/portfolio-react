import { motion } from 'framer-motion'

type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <span className="mb-3 flex items-center gap-3 font-display text-sm text-accent-cyan">
        <span className="h-px w-8 bg-accent-cyan/60" />
        {index}
      </span>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
    </motion.div>
  )
}
