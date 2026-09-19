import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  /**
   * Background style
   * default: white
   */
  background?: "white" | "soft" | "primary" | "grid";

  /**
   * Extra Tailwind classes
   */
  className?: string;

  /**
   * Remove default vertical padding
   */
  noPadding?: boolean;
}

export default function Section({
  children,
  background = "white",
  className = "",
  noPadding = false,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    soft: "bg-soft-gradient",
    primary: "bg-primary-gradient text-white",
    grid: "bg-grid bg-white",
  };

  return (
    <section
      className={`
        relative
        overflow-hidden
        ${backgrounds[background]}
        ${noPadding ? "" : "py-24 lg:py-32"}
        ${className}
      `}
    >
      {children}
    </section>
  );
}