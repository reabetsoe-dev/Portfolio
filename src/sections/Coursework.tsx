import { BookOpen, GraduationCap } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { academicProfile, courseworkGroups, transcriptHighlights } from "../data/academic";

export function Coursework() {
  return (
    <section id="coursework" className="section-divider bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Coursework"
          title="A software engineering profile grounded in verified academic modules."
          description="The transcript shows a broad technical foundation across software engineering, programming, web systems, data, networking, security and multimedia technology."
        />

        <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="professional-surface-strong h-full rounded-md p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <GraduationCap aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase text-primary">Academic Record</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    {academicProfile.programme}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {academicProfile.institution}. Transcript issue date:{" "}
                    {academicProfile.transcriptIssueDate}. Academic status:{" "}
                    {academicProfile.academicStatus}.
                  </p>
                  <p className="mt-3 text-xs leading-6 text-muted">{academicProfile.note}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="grid h-full gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="professional-surface rounded-md p-5">
                <p className="text-3xl font-semibold text-foreground">{academicProfile.cumulativeGpa}</p>
                <p className="mt-1 text-sm font-medium text-muted">Cumulative GPA</p>
              </div>
              <div className="professional-surface rounded-md p-5">
                <p className="text-3xl font-semibold text-foreground">{academicProfile.creditsEarned}</p>
                <p className="mt-1 text-sm font-medium text-muted">Credits Earned</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {transcriptHighlights.map((highlight, index) => (
            <Reveal key={highlight.label} delay={index * 0.03}>
              <article className="professional-surface h-full rounded-md p-5">
                <p className="text-xs font-semibold uppercase text-primary">{highlight.label}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{highlight.value}</h3>
                <p className="mt-2 text-sm text-muted">{highlight.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {courseworkGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <article className="professional-surface-strong h-full rounded-md p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <BookOpen aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{group.summary}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.modules.map((module) => (
                    <span
                      key={module}
                      className="rounded-md border border-border bg-surface-soft px-3 py-2 text-sm font-medium text-foreground"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
