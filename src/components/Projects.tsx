import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / Projets"
          title="Ce que j'ai construit"
          subtitle="Une sélection de projets académiques et personnels — code disponible sur GitHub."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
