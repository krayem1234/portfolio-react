export type Project = {
  name: string
  title: string
  description: string
  stack: string[]
  href: string
}

export const projects: Project[] = [
  {
    name: 'Gestion_employes',
    title: 'Gestion des employés',
    description:
      "Application Java de gestion du personnel d'une entreprise : ajout, modification, suivi et organisation des employés, avec une architecture orientée objet claire.",
    stack: ['Java', 'POO', 'MySQL'],
    href: 'https://github.com/krayem1234/Gestion_employes',
  },
  {
    name: 'Gestion_Departement',
    title: 'Gestion des départements',
    description:
      "Système en Java permettant d'organiser les départements et les équipes internes d'une entreprise, pensé pour rester simple à faire évoluer.",
    stack: ['Java', 'POO'],
    href: 'https://github.com/krayem1234/Gestion_Departement',
  },
  {
    name: 'web3A',
    title: 'Web3A',
    description:
      "Projet web développé en PHP dans le cadre de mes études, avec traitement des données et logique métier côté serveur.",
    stack: ['PHP', 'MySQL', 'HTML/CSS'],
    href: 'https://github.com/krayem1234/web3A',
  },
  {
    name: 'ANGULAR',
    title: 'Application Angular',
    description:
      "Application front-end construite avec Angular et TypeScript, illustrant une architecture par composants et une navigation modulaire.",
    stack: ['Angular', 'TypeScript'],
    href: 'https://github.com/krayem1234/ANGULAR',
  },
  {
    name: 'zoo',
    title: 'Gestion de zoo',
    description:
      "Application Java mettant en pratique la programmation orientée objet à travers la gestion d'animaux, d'enclos et de visiteurs.",
    stack: ['Java', 'POO'],
    href: 'https://github.com/krayem1234/zoo',
  },
  {
    name: 'template',
    title: 'Template SCSS',
    description:
      "Template de page web stylisé avec SCSS, pensé comme base réutilisable et personnalisable pour démarrer rapidement de nouveaux projets front-end.",
    stack: ['SCSS', 'CSS3'],
    href: 'https://github.com/krayem1234/template',
  },
]
