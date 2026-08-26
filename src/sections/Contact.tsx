import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { SocialLinks } from "../components/SocialLinks";
import { profile } from "../data/profile";
import { socials } from "../data/socials";

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="professional-surface flex gap-3 rounded-md p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
        <Icon aria-hidden="true" className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 break-words text-sm text-muted">{value}</p>
      </div>
    </div>
  );
}

export function Contact() {
  const hasSocialLinks = Object.values(socials).some(Boolean);

  return (
    <section id="contact" className="section-divider bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Discuss Software, Web or Internship Opportunities."
          description="Use the form for internship conversations, junior software opportunities, academic project reviews, freelance web work or professional networking."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <Reveal>
            <div className="professional-surface-strong rounded-md p-5 sm:p-7">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="grid gap-4">
              <ContactItem icon={Mail} label="Email" value={socials.email || "Available on request"} />
              <ContactItem
                icon={Linkedin}
                label="LinkedIn"
                value={socials.linkedin || "Available on request"}
              />
              <ContactItem icon={Github} label="GitHub" value={socials.github || "Available on request"} />
              <ContactItem icon={MapPin} label="Location" value={profile.location} />
              {hasSocialLinks ? (
                <div className="professional-surface-strong rounded-md p-5">
                  <p className="text-sm font-semibold text-foreground">Professional Profiles</p>
                  <SocialLinks className="mt-4" />
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
