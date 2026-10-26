import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CalendarDays, ImageIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import content from "@/lib/document-content.json";
import { projectImages } from "@/lib/projects-content";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Projects"
        title="Our Projects"
        description={content.projectsIntroduction}
      >
        <nav
          aria-label="Project sections"
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-700"
        >
          <a href="#current" className="rounded-full border border-blue-100 bg-white px-6 py-3 shadow-sm">Current projects</a>
          <a href="#completed" className="rounded-full border border-blue-100 bg-white px-6 py-3 shadow-sm">Completed projects</a>
        </nav>
      </PageIntro>
      <Container>
        {["Current", "Completed"].map((status) => (
          <section key={status} id={status.toLowerCase()} className="py-24 lg:py-32">
            <h2 className="section-title">{status} projects</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {content.projects
                .filter((project) => project.status === status)
                .map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative flex h-56 items-center justify-center bg-slate-100">
                      {projectImages[project.slug] ? (
                        <Image src={projectImages[project.slug].src} alt={projectImages[project.slug].alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" />
                      ) : (
                        <ImageIcon size={40} className="text-slate-400" role="img" aria-label="Project photograph not yet supplied" />
                      )}
                      <p className="absolute left-5 top-5 rounded-full bg-white px-4 py-1 text-xs font-semibold text-blue-700 shadow-sm">{project.status}</p>
                    </div>
                    <div className="flex flex-1 flex-col items-start p-8">
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
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </Container>
      <ProjectsCTA />
    </>
  );
}
