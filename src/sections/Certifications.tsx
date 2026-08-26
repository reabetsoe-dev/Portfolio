import { Award, ExternalLink, FileDown, LockKeyhole } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { certifications } from "../data/certifications";
import { cn } from "../utils/cn";

export function Certifications() {
  return (
    <section id="evidence" className="section-divider bg-background py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Evidence"
          title="Academic evidence, not inflated certification claims."
          description="This section presents transcript-backed records and coursework areas. Professional certifications can be added later when proof is available."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={`${certification.name}-${certification.organization}`} delay={index * 0.05}>
              <article className="professional-surface h-full rounded-md p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Award aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-md px-3 py-1 text-xs font-semibold",
                      certification.status === "Academic Record" ||
                      certification.status === "Transcript Evidence" ||
                      certification.status === "Certified"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent",
                    )}
                  >
                    {certification.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{certification.name}</h3>
                <p className="mt-2 text-sm text-muted">{certification.organization}</p>
                <p className="mt-3 text-sm text-muted">Date: {certification.date}</p>
                {certification.credentialId ? (
                  <p className="mt-2 text-sm text-muted">Credential ID: {certification.credentialId}</p>
                ) : null}
                {certification.credentialUrl || certification.documentUrl ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {certification.credentialUrl ? (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                    >
                      <ExternalLink aria-hidden="true" className="h-4 w-4" />
                      Verify
                    </a>
                    ) : null}
                    {certification.documentUrl ? (
                    <a
                      href={certification.documentUrl}
                      className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                    >
                      <FileDown aria-hidden="true" className="h-4 w-4" />
                      Document
                    </a>
                    ) : null}
                  </div>
                ) : (
                  <div className="mt-6 flex items-start gap-3 rounded-md border border-border bg-surface-soft px-4 py-3 text-sm text-muted">
                    <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Private transcript identifiers and documents are not published on this site.</span>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
