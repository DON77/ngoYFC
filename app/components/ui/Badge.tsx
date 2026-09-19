import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;

  variant?:
    | "primary"
    | "success"
    | "warning"
    | "neutral";

  className?: string;
}


const variants = {
  primary: `
    bg-blue-50
    text-blue-600
  `,

  success: `
    bg-green-50
    text-green-600
  `,

  warning: `
    bg-amber-50
    text-amber-600
  `,

  neutral: `
    bg-slate-100
    text-slate-600
  `,
};


export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {

  return (
    <span
      className={`
        inline-flex
        items-center

        rounded-full

        px-3
        py-1

        text-xs
        font-semibold

        ${variants[variant]}

        ${className}
      `}
    >
      {children}
    </span>
  );
}