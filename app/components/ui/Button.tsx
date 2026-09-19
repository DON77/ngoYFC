import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;

  href?: string;

  variant?: 
    | "primary"
    | "secondary"
    | "outline"
    | "ghost";

  size?:
    | "sm"
    | "md"
    | "lg";

  className?: string;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;
}

const variants = {
  primary: `
    bg-blue-600
    text-white
    hover:bg-blue-700
    shadow-md
    hover:shadow-lg
  `,

  secondary: `
    bg-sky-500
    text-white
    hover:bg-sky-600
  `,

  outline: `
    border
    border-slate-300
    bg-white
    text-slate-900
    hover:border-blue-500
    hover:text-blue-600
  `,

  ghost: `
    text-slate-700
    hover:bg-slate-100
  `,
};


const sizes = {
  sm: `
    px-4
    py-2
    text-sm
  `,

  md: `
    px-6
    py-3
    text-base
  `,

  lg: `
    px-8
    py-4
    text-lg
  `,
};


export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {

  const styles = `
    inline-flex
    items-center
    justify-center
    gap-2

    rounded-full

    font-semibold

    transition-all
    duration-300

    hover:-translate-y-0.5

    disabled:pointer-events-none
    disabled:opacity-50

    ${variants[variant]}

    ${sizes[size]}

    ${className}
  `;


  if (href) {
    return (
      <Link
        href={href}
        className={styles}
      >
        {children}
      </Link>
    );
  }


  return (
    <button
      type={type}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}