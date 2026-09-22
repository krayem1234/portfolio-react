import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(springY, [0, 1], [8, -8])
  const rotateY = useTransform(springX, [0, 1], [-8, 8])
  const glowX = useTransform(springX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(springY, [0, 1], ['0%', '100%'])
  const glowBackground = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(280px circle at ${gx} ${gy}, rgba(139,92,246,0.18), transparent 70%)`,
  )

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.a
        ref={ref}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        data-cursor-hover
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group glass relative block h-full overflow-hidden rounded-2xl p-7 transition-colors duration-300 hover:border-white/25"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />

        <div className="relative flex items-start justify-between">
          <span className="font-display text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
          <svg
            className="h-4 w-4 -translate-y-0.5 translate-x-0.5 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-cyan"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="relative mt-6 font-display text-xl font-semibold">{project.title}</h3>
        <p className="relative mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-ink/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  )
}
