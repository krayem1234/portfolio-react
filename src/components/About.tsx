import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'
import SkillBadge from './SkillBadge'

export default function About() {
  return (
    <section id="about" className="section-pad relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01 / À propos" title="Qui suis-je" />

        <div className="grid gap-14 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 rounded-full bg-[linear-gradient(135deg,#8b5cf6,#22d3ee)] p-[2px]">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full rounded-full border-2 border-bg object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-display font-semibold">{profile.shortName}</p>
                <p className="text-sm text-muted">{profile.location}</p>
              </div>
            </div>
            <p className="text-xl leading-relaxed text-muted">{profile.bio}</p>
          </motion.div>

          <div id="skills" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 scroll-mt-28">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 transition-colors hover:border-white/25"
              >
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent-violet">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
