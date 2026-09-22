import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type MagneticButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  target?: string
  rel?: string
}

/**
 * A button that subtly pulls toward the cursor when hovered.
 */
export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 })

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={variant === 'primary' ? 'btn-primary' : 'btn-ghost'}
      data-cursor-hover
    >
      {children}
    </motion.a>
  )
}
