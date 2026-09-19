import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`
        mb-12
        ${
          align === "center"
            ? "mx-auto max-w-3xl text-center"
            : "max-w-3xl"
        }
      `}
    >
      {eyebrow && (
        <span
          className="
            mb-4
            inline-flex
            rounded-full
            bg-blue-50
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-600
          "
        >
          {eyebrow}
        </span>
      )}

      <h2>
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            text-lg
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}