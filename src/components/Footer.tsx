import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="section-pad relative border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-ink">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} data-cursor-hover className="hover:text-ink">
            Email
          </a>
          <a href="#top" data-cursor-hover className="hover:text-ink">
            Haut de page ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
