import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin gradient bar fixed to the very top of the viewport that fills
 * as the visitor scrolls down the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[linear-gradient(100deg,#8b5cf6,#22d3ee,#f472b6)]"
    />
  )
}
