import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { profile, whatIDo } from "../data/profile";
import { IconByName } from "../utils/iconMap";

export function About() {
  return (
    <section id="about" className="section-divider bg-background py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Profile"
          title="A software engineering student with a transcript-backed technical foundation."
          description="The site is now built around verified academic evidence from Software Engineering with Multimedia coursework."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="professional-surface-strong h-full rounded-md p-6 sm:p-8">
              <p className="mb-5 text-sm font-semibold uppercase text-primary">Academic Profile</p>
              <div className="space-y-5 text-base leading-8 text-muted">
              <p>{profile.about}</p>
              <p>{profile.approach}</p>
              <p>
                My interests connect software engineering, web interfaces, data systems, networking, security,
                multimedia, AI and VR into one practical goal: build clear, useful and well-documented technology.
              </p>
              </div>
            </div>
          </Reveal>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-foreground">What I Do</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {whatIDo.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="professional-surface h-full rounded-md p-5 transition hover:-translate-y-0.5 hover:border-primary/50">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                      <IconByName name={item.icon} className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
