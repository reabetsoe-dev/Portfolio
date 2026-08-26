import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function CaseStudySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="professional-surface rounded-md p-5 sm:p-7">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}

export function ProjectCaseStudyPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="bg-background pt-28">
      <section className="section-shell pb-20 pt-8">
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-primary"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="professional-surface-strong overflow-hidden rounded-md p-2">
            <img
              src={project.image}
              alt={`${project.title} case study visual`}
              className="aspect-[16/11] h-full w-full rounded-md object-cover"
            />
          </div>

          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.category.map((category) => (
                <span key={category} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {category}
                </span>
              ))}
              <span className="rounded-md bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {project.status}
              </span>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-muted shadow-sm"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:text-primary"
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
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  Live Demo
                </a>
              ) : null}

              <a
                href="/#contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
                Discuss Project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <CaseStudySection title="Overview">
            <p>{project.description}</p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="Solution">
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection title="My Role">
            <p>{project.role}</p>
          </CaseStudySection>

          <CaseStudySection title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Key Features">
            <ul className="grid gap-3">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Challenges">
            <ul className="grid gap-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Results">
            <p>{project.results}</p>
          </CaseStudySection>

          <CaseStudySection title="Screenshots">
            {project.screenshots.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <img
                    key={screenshot}
                    src={screenshot}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="rounded-md border border-border"
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border bg-background px-4 py-8 text-center text-sm text-muted">
                Screenshots and supporting material can be presented alongside the academic project discussion.
              </div>
            )}
          </CaseStudySection>
        </div>
      </section>
    </main>
  );
}
