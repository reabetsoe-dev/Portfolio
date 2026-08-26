import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-divider bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Academic Journey"
          title="A semester-by-semester path through software engineering and multimedia."
          description="This timeline uses transcript-backed milestones and avoids inventing employment history."
        />

        <div className="relative grid gap-5">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-border sm:block" aria-hidden="true" />
          {experience.map((entry, index) => (
            <Reveal key={`${entry.year}-${entry.title}`} delay={index * 0.05}>
              <article className="professional-surface-strong relative rounded-md p-6 sm:ml-12">
                <span className="absolute -left-[3.25rem] top-6 hidden h-4 w-4 rounded-full border-4 border-surface bg-primary sm:block" />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {entry.year}
                  </span>
                  <span className="rounded-md border border-border bg-surface px-3 py-1 text-sm font-medium text-muted">
                    {entry.type}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{entry.description}</p>
                <ul className="mt-5 grid gap-3">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
