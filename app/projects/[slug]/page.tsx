import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import Button from "@/components/ui/Button";
import content from "@/lib/document-content.json";

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
  return (
    <>
      <PageIntro
        title={project.title}
        eyebrow={`${project.status} project`}
        description={`${project.period} | ${project.location}`}
      />
      <Container>
        <article className="max-w-4xl py-12">
          <Link
            href="/projects"
            className="text-sm font-semibold text-blue-700"
          >
            Back to all projects
          </Link>
          <h2 className="section-title mt-10">Overview</h2>
          <div className="mt-6 space-y-5">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="section-title mt-12">{project.resultsHeading}</h2>
          <ul className="mt-6 list-disc space-y-4 pl-6 text-slate-700">
            {project.results.map((result) => (
              <li key={result} className="pl-2 leading-7">
                {result}
              </li>
            ))}
          </ul>
          <aside
            aria-label="Project acknowledgment"
            className="mt-12 border-l-4 border-teal-600 bg-teal-50 p-6"
          >
            <p className="text-sm">{project.acknowledgment}</p>
          </aside>
          {project.status === "Current" && (
            <div className="mt-10">
              <Button href="/contact?subject=Project%20participation">
                Ask about participating
              </Button>
            </div>
          )}
        </article>
      </Container>
    </>
  );
}
