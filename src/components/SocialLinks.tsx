import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { socials, type SocialKey } from "../data/socials";
import { cn } from "../utils/cn";

const socialItems: Array<{
  key: SocialKey;
  label: string;
  icon: typeof Github;
  getHref: (value: string) => string;
}> = [
  { key: "email", label: "Email", icon: Mail, getHref: (value) => `mailto:${value}` },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, getHref: (value) => value },
  { key: "github", label: "GitHub", icon: Github, getHref: (value) => value },
  { key: "whatsapp", label: "WhatsApp", icon: MessageCircle, getHref: (value) => value },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialItems.map((item) => {
        const value = socials[item.key];
        const Icon = item.icon;

        if (!value) {
          return null;
        }

        return (
          <a
            key={item.key}
            href={item.getHref(value)}
            target={item.key === "email" ? undefined : "_blank"}
            rel={item.key === "email" ? undefined : "noreferrer"}
            className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-muted transition hover:border-primary hover:text-primary"
            aria-label={item.label}
            title={item.label}
          >
            <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          </a>
        );
      })}
    </div>
  );
}
