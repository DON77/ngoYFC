import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import Section from "@/components/ui/Section";
import content from "@/lib/document-content.json";

export const metadata = { title: "Our Team" };
const team = [
  {
    name: "Grigor Janikyan",
    role: "Founder and CEO",
    profile: "grigor-janikyan",
  },
  { name: "Arusik Ohanyan", role: "Vice president", profile: "arusik-ohanyan" },
  {
    name: "Nare Minasyan",
    role: "PR and Communication manager",
    profile: "nare-minasyan-726072230",
  },
  {
    name: "Tatev Ghazaryan",
    role: "Board member",
    profile: "tatevik-ghazaryan-7702911aa",
  },
  {
    name: "Seda Hakobyan",
    role: "Board member",
    profile: "seda-hakobyan-048276272",
  },
  {
    name: "Katrin Hakobyan",
    role: "Board member",
    profile: "katrin-hakobyaan",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageIntro title={content.about.teamHeading} eyebrow="Our Team" />
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl space-y-5 text-center text-lg">
            {content.about.teamIntroduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{content.about.board}</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className="flex h-80 items-center justify-center rounded-2xl bg-blue-50 text-5xl font-bold text-blue-700"
                >
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="p-4">
                <h2 className="text-2xl">{person.name}</h2>
                <p className="mt-1 font-medium text-blue-600">{person.role}</p>
                <a
                  href={`https://www.linkedin.com/in/${person.profile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                  aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                >
                  LinkedIn
                  <ExternalLink size={16} />
                </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
