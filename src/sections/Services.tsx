import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { services } from "../data/services";
import { IconByName } from "../utils/iconMap";

export function Services() {
  return (
    <section id="services" className="section-divider bg-surface py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My Services"
          title="Practical technology support."
          description="Simple, realistic services aligned with my software engineering, web, AI, networking and digital solution interests."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="professional-surface-strong h-full rounded-md p-6 transition hover:-translate-y-0.5 hover:border-primary/50">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary">
                  <IconByName name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
