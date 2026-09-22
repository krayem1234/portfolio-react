import { useEffect, useState } from 'react'

const ROLES = [
  'Développeur Full-Stack',
  'Étudiant en informatique',
  'Passionné de Java & PHP',
  "Fan d'Angular & TypeScript",
]

const TYPE_SPEED = 65
const DELETE_SPEED = 35
const HOLD_DELAY = 1500

/**
 * Cycles through a list of role/interest strings with a typing +
 * deleting effect, like a terminal cursor.
 */
export default function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    if (!deleting && charCount === currentRole.length) {
      const holdTimer = setTimeout(() => setDeleting(true), HOLD_DELAY)
      return () => clearTimeout(holdTimer)
    }

    if (deleting && charCount === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
      return
    }

    const step = setTimeout(
      () => setCharCount((prev) => prev + (deleting ? -1 : 1)),
      deleting ? DELETE_SPEED : TYPE_SPEED,
    )
    return () => clearTimeout(step)
  }, [charCount, deleting, roleIndex])

  return (
    <span className="font-display text-base text-accent-cyan sm:text-lg">
      {ROLES[roleIndex].slice(0, charCount)}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent-cyan align-middle" style={{ height: '1em' }} />
    </span>
  )
}
