export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Langages',
    items: ['Java', 'PHP', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS / CSS3'],
  },
  {
    title: 'Frameworks & librairies',
    items: ['Angular', 'React', 'Symfony', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Concepts',
    items: ['POO', 'Modélisation UML'],
  },
  {
    title: 'Outils',
    items: ['Git & GitHub', 'Docker', 'Vercel', 'Postman'],
  },
]

// Flat list used for the scrolling marquee ticker
export const skillTicker: string[] = [
  'Java',
  'PHP',
  'TypeScript',
  'Angular',
  'React',
  'Symfony',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'JavaScript',
  'SCSS',
  'Git',
  'POO',
  'UML',
]
