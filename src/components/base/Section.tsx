import type { ReactNode } from "react";
import { themes } from "@/theme/themes";
import type { ThemeName } from "@/theme/themes";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "hero" | "dimmed" | "highlight";

type SectionProps = {
  children: ReactNode;
  theme?: ThemeName;
  variant?: SectionVariant;
  className?: string;
  id?: string;
};

export function Section({
  children,
  theme = "pink",
  variant = "default",
  className,
  id,
}: SectionProps) {
  const selectedTheme = themes[theme];

  return (
    <section
      id={id}
      style={
        {
          "--primary": selectedTheme.primary,
          "--secondary": selectedTheme.secondary,
        } as React.CSSProperties
      }
      className={cn(
        "w-full relative",
        "bg-background",
        "text-foreground",
        "transition-colors duration-500",

        variantStyles[variant],

        className,
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div
          className="
    pointer-events-none
    absolute inset-0
    opacity-20
    blur-3xl
  "
          style={{
            background: `radial-gradient(circle at 50% 30%, var(--primary), transparent 70%)`,
          }}
        />
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
        text-3xl font-semibold mb-12 text-center
        text-[color:var(--primary)]
        drop-shadow-[0_0_12px_var(--primary)]
      "
    >
      {children}
    </h2>
  );
}

const variantStyles: Record<SectionVariant, string> = {
  default: "",

  hero: "min-h-screen flex items-center justify-center bg-[#0B0B0F]",

  dimmed: "opacity-60",

  highlight: "bg-[#181A20]",
};

