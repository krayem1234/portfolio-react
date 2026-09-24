import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../data/projects'
import { getSkillIcon } from '../data/skillIcons'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
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

  const gallery = project.images && project.images.length > 1 ? project.images : project.image ? [project.image] : []
  const [activeImage, setActiveImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering || gallery.length < 2) return
    const id = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % gallery.length)
    }, 1400)
    return () => clearInterval(id)
  }, [isHovering, gallery.length])

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleEnter = () => setIsHovering(true)

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
    setIsHovering(false)
    setActiveImage(0)
  }

  const openDemo = () => {
    window.open(project.href, '_blank', 'noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        role="link"
        tabIndex={0}
        onClick={openDemo}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') openDemo()
        }}
        data-cursor-hover
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group glass relative block h-full cursor-pointer overflow-hidden rounded-2xl transition-colors duration-300 hover:border-white/25"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />

        {gallery.length > 0 && (
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-black/40">
            {gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === 0 ? `Aperçu de ${project.title}` : ''}
                aria-hidden={i === 0 ? undefined : true}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                  i === activeImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {gallery.length > 1 && (
              <div className="absolute bottom-2.5 right-3 z-10 flex gap-1">
                {gallery.map((src, i) => (
                  <span
                    key={src}
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      i === activeImage ? 'bg-accent-cyan' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>
        )}

        <div className="relative p-7">
          <div className="relative flex items-start justify-between">
            <span className="font-display text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
            <div className="flex items-center gap-3">
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  data-cursor-hover
                  aria-label={`Code source de ${project.title} sur GitHub`}
                  className="relative z-20 flex items-center gap-1 text-xs text-muted transition-colors duration-300 hover:text-accent-cyan"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                  Code
                </a>
              )}
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
          </div>

          <h3 className="relative mt-6 font-display text-xl font-semibold">{project.title}</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="relative mt-6 flex flex-wrap items-center gap-3">
            {project.stack.map((tech) => {
              const icon = getSkillIcon(tech)
              const Icon = icon.Icon
              return (
                <span
                  key={tech}
                  className="group/tech relative flex items-center"
                  data-cursor-hover
                  title={tech}
                >
                  {Icon ? (
                    <Icon size={22} color={icon.color} />
                  ) : (
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded text-[8px] font-bold text-bg"
                      style={{ backgroundColor: icon.color }}
                    >
                      {icon.label}
                    </span>
                  )}
                  <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover/tech:opacity-100">
                    {tech}
                  </span>
                </span>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
