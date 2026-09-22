# Portfolio — Mohamed Karim Kebaili

Portfolio personnel construit avec **React + TypeScript + Vite + Tailwind CSS + Framer Motion**,
avec une direction visuelle sombre et audacieuse (dégradés néon, verre dépoli, curseur
personnalisé, cartes en tilt 3D, effets "magnétiques" sur les boutons, ticker de compétences
défilant) inspirée de portfolios développeurs modernes comme [kyrix.dev](https://www.kyrix.dev/).

## Démarrer

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:5173`.

Pour un build de production :

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/    Tous les composants UI (Hero, About, Projects, Contact, effets...)
  data/          Contenu du site (profil, compétences, projets) — à éditer ici
  index.css      Styles globaux + classes utilitaires Tailwind personnalisées
  App.tsx        Assemblage des sections
```

## Personnaliser le contenu

Tout le texte affiché vient de trois fichiers dans `src/data/` :

- `profile.ts` — nom, rôle, bio, email, lien GitHub, photo
- `skills.ts` — compétences groupées + ticker défilant
- `projects.ts` — cartes projets (titre, description, stack, lien GitHub)

Les descriptions des projets GitHub (`zoo`, `web3A`, `Gestion_employes`,
`Gestion_Departement`, `template`, `ANGULAR`) ont été générées à partir du nom des dépôts —
n'hésite pas à les remplacer par de vraies descriptions dans `src/data/projects.ts`.

## Déployer

Le projet est prêt pour un déploiement statique (Vercel, Netlify, GitHub Pages...) :
il suffit de builder avec `npm run build` et de déployer le dossier `dist/`.
