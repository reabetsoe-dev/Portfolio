import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-background py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My Portfolio"
          title="Three focused project areas."
          description="A compact view of the main technology projects and project areas I want recruiters and collaborators to notice first."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
