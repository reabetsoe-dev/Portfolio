import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, profile } from "../data/profile";
import { cn } from "../utils/cn";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsCompact(window.scrollY > 32);
    updateSize();
    window.addEventListener("scroll", updateSize, { passive: true });
    return () => window.removeEventListener("scroll", updateSize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-surface/90 backdrop-blur-xl transition-all",
        isCompact ? "py-2 shadow-sm" : "py-4",
      )}
    >
      <nav className="section-shell flex items-center justify-between gap-4" aria-label="Primary navigation">
        <Link
          to="/#home"
          className="flex min-w-0 items-center gap-3 lg:w-[230px] lg:shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-foreground text-sm font-bold text-background shadow-sm">
            {profile.initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-foreground sm:text-base">
              {profile.name}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-muted transition hover:bg-surface-soft hover:text-foreground xl:px-3"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "section-shell overflow-hidden transition-all lg:hidden",
          isMenuOpen ? "max-h-96 pt-3 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="grid gap-1 rounded-md border border-border bg-surface p-2 shadow-premium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm font-semibold text-muted transition hover:bg-surface-soft hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
