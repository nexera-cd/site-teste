import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-12", {
      "items-start text-left": align === "left",
      "items-center text-center": align === "center",
      "items-end text-right": align === "right",
    }, className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
