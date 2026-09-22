import { useEffect, useRef, useState } from 'react'

/**
 * Custom cursor: a small dot that tracks the mouse exactly, and a
 * larger ring that eases toward it. Grows on hover over interactive
 * elements. Disabled automatically on touch devices via CSS (see index.css).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let raf = 0

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      setIsVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.15
      ring.y += (mouse.y - ring.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white mix-blend-difference transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border border-white/70 mix-blend-difference transition-[width,height] duration-200 ease-out"
        style={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
        }}
      />
    </div>
  )
}
