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
    title: 'Données',
    items: ['MySQL', 'Modélisation UML', 'POO'],
  },
  {
    title: 'Outils',
    items: ['Git & GitHub', 'IntelliJ IDEA', 'VS Code', 'Postman'],
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
  'JavaScript',
  'SCSS',
  'Git',
  'POO',
  'UML',
]
