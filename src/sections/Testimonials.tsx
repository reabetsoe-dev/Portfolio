import { Quote } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { testimonialPlaceholder, testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-divider bg-surface py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonial"
          title="Ready for real feedback."
          description="This section is prepared for genuine testimonials from clients, collaborators and project stakeholders."
        />

        {testimonials.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={`${testimonial.name}-${testimonial.role}`} delay={index * 0.05}>
                <article className="professional-surface-strong h-full rounded-md p-6">
                  <Quote aria-hidden="true" className="h-6 w-6 text-primary" />
                  <p className="mt-5 text-sm leading-7 text-muted">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    {testimonial.photo ? (
                      <img
                        src={testimonial.photo}
                        alt={`${testimonial.name} testimonial`}
                        className="h-10 w-10 rounded-md object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                        {testimonial.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="professional-surface-strong rounded-md p-7">
              <Quote aria-hidden="true" className="h-7 w-7 text-primary" />
              <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground">
                {testimonialPlaceholder}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
