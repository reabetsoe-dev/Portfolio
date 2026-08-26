import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
