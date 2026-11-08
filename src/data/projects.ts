import internlinkHome from '../assets/projects/internlink-home.jpg'
import internlinkSignin from '../assets/projects/internlink-signin.jpg'
import internlinkSignup from '../assets/projects/internlink-signup.jpg'
import heatalertHome from '../assets/projects/heatalert-home.jpg'
import skillforgeHome from '../assets/projects/skillforge-home.jpg'

export type Project = {
  name: string
  title: string
  description: string
  stack: string[]
  href: string
  repoHref?: string
  image?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    name: 'InternLink',
    title: 'InternLink',
    description:
      "Plateforme professionnelle de gestion des stages : les étudiants postulent et suivent leurs candidatures, les entreprises publient leurs offres, et les administrateurs supervisent l'ensemble — avec authentification sécurisée (email/mot de passe + Google).",
    stack: ['Angular', 'NestJS', 'TypeScript'],
    href: 'https://interlinke-m48uuz5cd-k-ef29.vercel.app',
    repoHref: 'https://github.com/krayem1234/interlink',
    image: internlinkHome,
    images: [internlinkHome, internlinkSignin, internlinkSignup],
  },
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
  {
    name: 'AsnafAgro',
    title: 'ASNAF AGRO',
    description:
      "Site vitrine et back-office d'une entreprise de produits agricoles : gestion des produits et du contenu côté front-office, administration complète côté back-office.",
    stack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    href: 'http://asnafagro.infy.click/',
  },
  {
    name: 'HeatAlert',
    title: 'HeatAlert',
    description:
      "Application web de prévention pendant les vagues de chaleur : suivi des alertes météo, coupures d'électricité en temps réel, points de fraîcheur à proximité, conseils et entraide entre voisins.",
    stack: ['Laravel', 'PHP', 'MySQL'],
    href: 'https://heatalert-ld4p.onrender.com/',
    image: heatalertHome,
  },
  {
    name: 'SkillForge',
    title: 'SkillForge',
    description:
      "Plateforme d'e-learning : cours en ligne, quiz corrigés par IA, mentorat en direct avec les formateurs, certificats vérifiables par QR code et espace carrière avec matching de compétences.",
    stack: ['Django', 'Python', 'IA'],
    href: 'https://skillforge-g36b.onrender.com/',
    image: skillforgeHome,
  },
]
