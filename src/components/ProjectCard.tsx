import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="professional-surface group flex h-full flex-col overflow-hidden rounded-md transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-premium">
      <div className="relative aspect-[16/11] overflow-hidden bg-surface-soft">
        <img
          src={project.image}
          alt={`${project.title} project visual`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap items-center gap-2 p-4">
          {project.featured ? (
            <span className="rounded-md border border-white/[0.18] bg-black/[0.45] px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
              Featured
            </span>
          ) : null}
          <span className="rounded-md border border-white/[0.18] bg-surface/90 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
            {project.status}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>
          ) : null}

          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
