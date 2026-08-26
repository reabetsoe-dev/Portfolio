import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { skillCategories } from "../data/skills";
import { IconByName } from "../utils/iconMap";

export function Skills() {
  const visibleCategories = skillCategories.filter(
    (category) => category.skills.length > 0 || category.showWhenEmpty,
  );

  return (
    <section id="skills" className="section-divider bg-background py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My Skills"
          title="A clear, honest skills snapshot."
          description="No fake percentages, just the tools, concepts and areas I can speak to from projects, coursework and CV experience."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <article className="professional-surface-strong h-full rounded-md p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <IconByName name={category.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{category.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-surface-soft px-3 py-2 text-sm font-medium text-foreground"
                    >
                      {skill}
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
