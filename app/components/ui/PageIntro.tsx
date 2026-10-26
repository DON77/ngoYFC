import Container from "./Container";
import Badge from "./Badge";
import { ReactNode } from "react";

export default function PageIntro({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-soft-gradient py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && <Badge>{eyebrow}</Badge>}
          <h1 className={eyebrow ? "mt-6" : undefined}>{title}</h1>
          {description && <p className="mx-auto mt-6 max-w-2xl text-lg">{description}</p>}
          {children}
        </div>
      </Container>
    </header>
  );
}
