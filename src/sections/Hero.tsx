import { ArrowRight, BriefcaseBusiness, Code2, Mail, MapPin, Network, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data/profile";
import { cn } from "../utils/cn";

const focusAreas = [
  {
    title: "Web Development",
    description: "Responsive websites and app interfaces with clean structure.",
    icon: Code2,
  },
  {
    title: "AI Solutions",
    description: "Practical intelligent systems for support and review workflows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Networking & Security",
    description: "Security-aware systems grounded in networking fundamentals.",
    icon: ShieldCheck,
  },
];

function ProfileFrame() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-[410px] lg:mr-0">
      <div
        className="absolute -right-5 top-8 h-[82%] w-[72%] rounded-md border border-primary/20 bg-primary/[0.08]"
        aria-hidden="true"
      />
      <div className="absolute -left-5 bottom-10 z-10 hidden w-44 rounded-md border border-border bg-surface/95 p-4 shadow-premium backdrop-blur sm:block">
        <p className="text-xs font-semibold uppercase text-primary">Academic Track</p>
        <p className="mt-2 text-sm font-semibold text-foreground">BSc Software Engineering</p>
        <p className="mt-1 text-xs leading-5 text-muted">Multimedia, web, data and security foundation.</p>
      </div>
      <div className="absolute -right-3 top-24 z-10 hidden rounded-md border border-border bg-surface/95 px-3 py-2 text-xs font-semibold text-muted shadow-sm backdrop-blur sm:block">
        <Network aria-hidden="true" className="mr-2 inline h-4 w-4 text-secondary" />
        Network Labs
      </div>
      <div className="absolute -right-2 bottom-20 z-10 hidden rounded-md border border-border bg-surface/95 px-3 py-2 text-xs font-semibold text-muted shadow-sm backdrop-blur sm:block">
        <ShieldCheck aria-hidden="true" className="mr-2 inline h-4 w-4 text-primary" />
        Security Focus
      </div>

      <div className="professional-surface-strong relative overflow-hidden rounded-md p-2 shadow-premium">
        <div
          className={cn(
            "relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-surface-soft",
            !hasImage && "bg-surface",
          )}
        >
          {hasImage ? (
            <>
              <img
                src={profile.profileImage}
                alt={`${profile.name} profile`}
                className="h-full w-full object-cover object-center"
                onError={() => setHasImage(false)}
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/35 to-transparent" aria-hidden="true" />
              <div className="absolute left-4 top-4 rounded-md border border-white/[0.22] bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                Open to internships
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-md border border-white/[0.18] bg-black/[0.48] px-4 py-3 text-white backdrop-blur-md">
                <p className="text-base font-semibold">{profile.name}</p>
                <p className="mt-1 text-xs text-white/75">{profile.role}</p>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="grid h-24 w-24 place-items-center rounded-md bg-foreground text-3xl font-bold text-background shadow-sm">
                {profile.initials}
              </span>
              <p className="mt-6 text-sm font-semibold text-foreground">Profile photo unavailable</p>
              <p className="mt-2 max-w-56 text-xs leading-6 text-muted">
                The portfolio will continue to show initials until the image loads.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="hero-stage relative overflow-hidden border-b border-border pt-24 sm:pt-28"
    >
      <div className="section-shell relative grid items-center gap-10 py-14 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          className="min-w-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex max-w-full rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-bold uppercase text-primary">
            {profile.label}
          </p>
          <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl xl:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={profile.contact.email ? `mailto:${profile.contact.email}` : "#home"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Email Me
              <Mail aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface/80 px-5 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              View Projects
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            <span className="inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-surface/80 px-3 py-2 shadow-sm backdrop-blur">
              <BriefcaseBusiness aria-hidden="true" className="h-4 w-4 text-primary" />
              {profile.availability}
            </span>
            <span className="inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-surface/80 px-3 py-2 shadow-sm backdrop-blur">
              <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
          </div>

          <div className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
            {focusAreas.map(({ title, description, icon: Icon }) => (
              <div key={title} className="professional-surface rounded-md p-4">
                <Icon aria-hidden="true" className="mb-4 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-xs leading-5 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="min-w-0"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.68, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileFrame />
        </motion.div>
      </div>
    </section>
  );
}
