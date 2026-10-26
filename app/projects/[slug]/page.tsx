import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ImageIcon, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import content from "@/lib/document-content.json";
import { projectImages } from "@/lib/projects-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return content.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = content.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return { title: project.title, description: project.paragraphs[0] };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = content.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const image = projectImages[slug];
  return (
    <>
      <Section background="soft">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge>{project.status} project</Badge>
              <h1 className="mt-6">{project.title}</h1>
              <p className="mt-6 max-w-xl text-lg">{project.period} | {project.location}</p>
              <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">{project.resultsHeading}</p>
                <p className="mt-3 text-xl font-semibold text-slate-800">{project.results[0]}</p>
              </div>
            </div>
            <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
              {image ? (
                <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
              ) : (
                <ImageIcon size={64} className="text-slate-400" role="img" aria-label="Project photograph not yet supplied" />
              )}
            </div>
          </div>
        </Container>
      </Section>
      <article>
        <Section>
          <Container>
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
          >
            <ArrowLeft size={18} />
            Back to all projects
          </Link>
          <div className="grid gap-10 lg:grid-cols-3">
            <SectionHeading eyebrow="Overview" title="About The Project" />
            <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:col-span-2">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-9">{paragraph}</p>
            ))}
            </div>
          </div>
          </Container>
        </Section>
        <Section background="soft">
          <Container>
          <SectionHeading align="center" title={project.resultsHeading} />
          <ul className="grid gap-6 text-slate-700 md:grid-cols-2">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 leading-7 shadow-sm">
                <CheckCircle2 size={24} className="mt-1 shrink-0 text-blue-600" aria-hidden="true" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
          <aside
            aria-label="Project acknowledgment"
            className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-8"
          >
            <p className="text-sm">{project.acknowledgment}</p>
          </aside>
          {project.status === "Current" && (
            <div className="mt-10 text-center">
              <Button href="/contact?subject=Project%20participation">
                Ask about participating
              </Button>
            </div>
          )}
          </Container>
        </Section>
      </article>
    </>
  );
}
