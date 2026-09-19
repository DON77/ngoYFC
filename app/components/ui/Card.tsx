import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;

  /**
   * Card style
   */
  variant?:
    | "default"
    | "soft"
    | "bordered";

  /**
   * Padding size
   */
  padding?:
    | "sm"
    | "md"
    | "lg";

  /**
   * Enable hover animation
   */
  hover?: boolean;

  className?: string;
}


const variants = {
  default: `
    bg-white
    shadow-sm
  `,

  soft: `
    bg-slate-50
  `,

  bordered: `
    bg-white
    border
    border-slate-200
  `,
};


const paddings = {
  sm: "p-5",
  md: "p-8",
  lg: "p-10",
};


export default function Card({
  children,
  variant = "default",
  padding = "md",
  hover = true,
  className = "",
}: CardProps) {

  return (
    <div
      className={`
        rounded-3xl

        ${variants[variant]}

        ${paddings[padding]}

        ${
          hover
            ? `
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            `
            : ""
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}