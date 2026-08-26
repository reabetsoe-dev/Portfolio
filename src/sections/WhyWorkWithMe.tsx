import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { qualities } from "../data/profile";
import { IconByName } from "../utils/iconMap";

export function WhyWorkWithMe() {
  return (
    <section className="section-divider bg-background py-20 sm:py-24" aria-labelledby="why-work-with-me">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Why this portfolio is credible."
          description="The strongest signal is not hype. It is a clear academic record, focused presentation and a structure ready for real project evidence."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality, index) => (
            <Reveal key={quality.title} delay={index * 0.04}>
              <article className="professional-surface h-full rounded-md p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                  <IconByName name={quality.icon} className="h-5 w-5" />
                </span>
                <h3 id={index === 0 ? "why-work-with-me" : undefined} className="mt-4 font-semibold text-foreground">
                  {quality.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{quality.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
