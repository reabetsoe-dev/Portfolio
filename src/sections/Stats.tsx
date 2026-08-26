import { stats } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function Stats() {
  return (
    <section aria-label="Professional stats" className="bg-background py-6">
      <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.04}>
            <div className="professional-surface h-full rounded-md px-5 py-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
