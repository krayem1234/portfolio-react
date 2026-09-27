import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / Expérience"
          title="Ce que j'ai vécu en entreprise"
          subtitle="Mes stages, du premier contact avec le monde professionnel jusqu'au développement complet d'une plateforme."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent sm:block" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-0 sm:pl-10"
              >
                <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-bg bg-gradient-to-br from-accent-violet to-accent-cyan sm:block" />

                <div className="glass rounded-2xl p-6 transition-colors hover:border-white/25 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold">{item.company}</h3>
                    <span className="font-display text-xs text-accent-cyan">{item.period}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-sm text-muted">{item.role}</p>
                    <span className="text-xs text-muted">{item.location}</span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
