import Container from "./Container";

export default function PageIntro({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <header className="border-b border-blue-100 bg-soft-gradient py-14 lg:py-20">
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="max-w-5xl text-4xl leading-tight lg:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-6 max-w-3xl text-lg">{description}</p>}
      </Container>
    </header>
  );
}
