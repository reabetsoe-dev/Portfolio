import { projectFilters, type ProjectCategory } from "../data/projects";
import { cn } from "../utils/cn";

interface ProjectFilterProps {
  activeFilter: "All" | ProjectCategory;
  onChange: (filter: "All" | ProjectCategory) => void;
}

export function ProjectFilter({ activeFilter, onChange }: ProjectFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-border bg-surface p-2" aria-label="Project filters">
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={cn(
              "min-h-10 rounded-md border px-4 text-sm font-semibold transition",
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-transparent bg-transparent text-muted hover:border-border hover:bg-surface-soft hover:text-foreground",
            )}
            aria-pressed={isActive}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
