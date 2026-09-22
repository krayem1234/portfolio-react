import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiSass,
  SiAngular,
  SiNestjs,
  SiReact,
  SiSymfony,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiVercel,
  SiIntellijidea,
  SiPostman,
  SiOpenjdk,
} from 'react-icons/si'

export type SkillIcon = {
  Icon?: IconType
  label?: string
  color: string
}

/**
 * Vrais logos de marque (via react-icons / Simple Icons) pour chaque
 * compétence. Les entrées sans logo officiel (concepts comme POO, UML)
 * retombent sur un badge à initiales.
 */
export const skillIcons: Record<string, SkillIcon> = {
  Java: { Icon: SiOpenjdk, color: '#f58219' },
  PHP: { Icon: SiPhp, color: '#8892bf' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  JavaScript: { Icon: SiJavascript, color: '#f0db4f' },
  HTML5: { Icon: SiHtml5, color: '#e34f26' },
  'SCSS / CSS3': { Icon: SiSass, color: '#cc6699' },
  Angular: { Icon: SiAngular, color: '#dd0031' },
  NestJS: { Icon: SiNestjs, color: '#e0234e' },
  React: { Icon: SiReact, color: '#22d3ee' },
  Symfony: { Icon: SiSymfony, color: '#9ca3af' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952b3' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#38bdf8' },
  MySQL: { Icon: SiMysql, color: '#4479a1' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169e1' },
  MongoDB: { Icon: SiMongodb, color: '#47a248' },
  Firebase: { Icon: SiFirebase, color: '#ffca28' },
  'Modélisation UML': { label: 'UML', color: '#8b5cf6' },
  POO: { label: 'OOP', color: '#a78bfa' },
  'Git & GitHub': { Icon: SiGit, color: '#f05032' },
  Docker: { Icon: SiDocker, color: '#2496ed' },
  // Le logo officiel Vercel est noir : on le force en blanc pour qu'il
  // reste visible sur le fond sombre du badge.
  Vercel: { Icon: SiVercel, color: '#ffffff' },
  'IntelliJ IDEA': { Icon: SiIntellijidea, color: '#fe315d' },
  // Simple Icons n'a plus de logo officiel pour VS Code (retiré du set) —
  // on retombe sur un badge à initiales, comme pour POO / UML.
  'VS Code': { label: 'VS', color: '#3b82f6' },
  Postman: { Icon: SiPostman, color: '#ff6c37' },
}

export function getSkillIcon(name: string): SkillIcon {
  return (
    skillIcons[name] ?? {
      label: name.slice(0, 2).toUpperCase(),
      color: '#8b5cf6',
    }
  )
}
