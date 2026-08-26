import { navItems, profile } from "../data/profile";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-foreground text-sm font-bold text-background">
              {profile.initials}
            </span>
            <div>
              <p className="font-semibold text-foreground">{profile.name}</p>
              <p className="text-sm text-muted">{profile.role}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">{profile.shortHeadline}</p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>{profile.contact.email || "Contact details available on request"}</p>
            <p>{profile.location}</p>
            <p>{profile.availability}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        2026 {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
