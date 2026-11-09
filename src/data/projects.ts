import internlinkHome from '../assets/projects/internlink-home.jpg'
import internlinkSignin from '../assets/projects/internlink-signin.jpg'
import internlinkSignup from '../assets/projects/internlink-signup.jpg'
import heatalertHome from '../assets/projects/heatalert-home.jpg'
import skillforgeHome from '../assets/projects/skillforge-home.jpg'
import boardLiveHome from '../assets/projects/board-live-home.jpg'

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
  {
    name: 'BoardLive',
    title: 'Board Live',
    description:
      "Outil de gestion de projet collaboratif en temps réel façon Trello : tableaux, listes et cartes avec glisser-déposer, synchronisés instantanément entre tous les membres connectés via WebSocket, avec présence live et invitations par email.",
    stack: ['NestJS', 'Socket.IO', 'React', 'PostgreSQL'],
    href: 'https://board-live.vercel.app',
    repoHref: 'https://github.com/krayem1234/board-live',
    image: boardLiveHome,
  },
]
