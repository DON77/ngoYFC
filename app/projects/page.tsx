import Link from "next/link";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import content from "@/lib/document-content.json";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        title="Our Projects"
        description={content.projectsIntroduction}
      />
      <Container>
        <nav
          aria-label="Project sections"
          className="flex gap-6 border-b border-slate-200 py-6 text-sm font-semibold text-blue-700"
        >
          <a href="#current">Current projects</a>
          <a href="#completed">Completed projects</a>
        </nav>
        {["Current", "Completed"].map((status) => (
          <section key={status} id={status.toLowerCase()} className="py-12">
            <h2 className="section-title">{status} projects</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {content.projects
                .filter((project) => project.status === status)
                .map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col items-start rounded-lg border border-slate-200 p-6"
                  >
                    <p className="text-xs font-semibold text-teal-700">
                      {project.status}
                    </p>
                    <h3 className="mt-3 text-2xl">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-blue-700"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={16} className="shrink-0" />
                        {project.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={16} className="shrink-0" />
                        {project.location}
                      </span>
                    </div>
                    <p className="mb-6 mt-4 line-clamp-3">
                      {project.paragraphs[0]}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-auto inline-flex items-center gap-2 font-semibold text-blue-700"
                      aria-label={`Read about ${project.title}`}
                    >
                      Read project
                      <ArrowRight size={18} />
                    </Link>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
