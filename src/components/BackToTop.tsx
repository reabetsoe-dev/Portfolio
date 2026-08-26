import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 680);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-md border border-border bg-surface text-foreground shadow-premium transition",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
