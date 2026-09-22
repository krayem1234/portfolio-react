export type SkillIcon = {
  label: string
  color: string
}

/**
 * Small colored "badge" per skill (initials on a brand-ish color) —
 * avoids depending on external icon packs/CDNs while still giving each
 * skill a distinct visual identity in the grid.
 */
export const skillIcons: Record<string, SkillIcon> = {
  Java: { label: 'Jv', color: '#f58219' },
  PHP: { label: 'Php', color: '#8892bf' },
  TypeScript: { label: 'Ts', color: '#3178c6' },
  JavaScript: { label: 'Js', color: '#f0db4f' },
  HTML5: { label: '5', color: '#e34f26' },
  'SCSS / CSS3': { label: '#', color: '#cc6699' },
  Angular: { label: 'Ng', color: '#dd0031' },
  React: { label: 'R', color: '#22d3ee' },
  Symfony: { label: 'Sf', color: '#9ca3af' },
  Bootstrap: { label: 'B', color: '#7952b3' },
  'Tailwind CSS': { label: 'Tw', color: '#38bdf8' },
  MySQL: { label: 'DB', color: '#4479a1' },
  'Modélisation UML': { label: 'UML', color: '#8b5cf6' },
  POO: { label: 'OOP', color: '#a78bfa' },
  'Git & GitHub': { label: 'Git', color: '#f05032' },
  'IntelliJ IDEA': { label: 'IJ', color: '#fe315d' },
  'VS Code': { label: 'VS', color: '#3b82f6' },
  Postman: { label: 'Pm', color: '#ff6c37' },
}

export function getSkillIcon(name: string): SkillIcon {
  return (
    skillIcons[name] ?? {
      label: name.slice(0, 2).toUpperCase(),
      color: '#8b5cf6',
    }
  )
}
