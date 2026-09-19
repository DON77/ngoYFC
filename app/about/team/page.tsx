import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
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
      <PageIntro title="Our Team" eyebrow="About Us" />
      <section className="py-14">
        <Container>
          <div className="max-w-4xl space-y-5">
            {content.about.teamIntroduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{content.about.board}</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="border-t-2 border-teal-600 pt-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-700"
                >
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h2 className="text-xl">{person.name}</h2>
                <p className="mt-2 text-sm">{person.role}</p>
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
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
