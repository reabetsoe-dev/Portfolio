import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type ThemePreference } from "../hooks/useTheme";
import { cn } from "../utils/cn";

const options: Array<{ value: ThemePreference; label: string; icon: typeof Sun }> = [
  { value: "light", label: "Light theme", icon: Sun },
  { value: "dark", label: "Dark theme", icon: Moon },
  { value: "system", label: "System theme", icon: Monitor },
];

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div
      className="inline-flex h-10 items-center rounded-md border border-border bg-surface p-1 shadow-sm"
      aria-label="Theme preference"
    >
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = preference === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setPreference(option.value)}
            className={cn(
              "grid h-8 w-8 place-items-center rounded-md text-muted transition hover:text-foreground",
              isActive && "bg-primary text-primary-foreground shadow-sm hover:text-primary-foreground",
            )}
            aria-pressed={isActive}
            aria-label={option.label}
            title={option.label}
          >
            <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.9} />
          </button>
        );
      })}
    </div>
  );
}
