export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Dotjcom',
    role: "Stage d'ingénieur — Développeur Full-Stack",
    period: 'Été 2026 · 8 semaines',
    location: 'Tunisie',
    points: [
      "Conçu et développé InternLink, une plateforme de gestion des stages centralisant les candidatures étudiantes, les offres des entreprises et le suivi administrateur.",
      "Implémenté le frontend avec Angular et le backend avec NestJS/TypeScript, avec authentification sécurisée (email/mot de passe + Google).",
      "Conçu le schéma de données et les API REST couvrant les trois profils utilisateurs (étudiant, entreprise, administrateur).",
    ],
  },
  {
    company: 'Digixis',
    role: 'Stage d\'immersion — Développeur',
    period: 'Été 2025 · 6 semaines',
    location: 'Tunisie',
    points: [
      "Développé une application web de gestion des factures, de la saisie des données au suivi des paiements.",
      "Collaboré avec l'équipe technique pour livrer des fonctionnalités testées et conformes aux besoins métier.",
    ],
  },
  {
    company: 'STEG',
    role: 'Stage social — Découverte du monde professionnel',
    period: 'Été 2023 · 4 semaines',
    location: 'Tunisie',
    points: [
      "Première immersion en entreprise : observation de l'organisation, des processus internes et du fonctionnement d'un grand groupe public tunisien.",
    ],
  },
]
