import Link from "next/link";
import {
  Equal,
  Users,
  ShieldCheck,
  Eye,
  Vote,
  Bird,
  Shapes,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import content from "@/lib/document-content.json";
import { ABOUT_NAVIGATION } from "@/lib/navigation";

export const metadata = { title: "About Us" };
const valueIcons = [
  Equal,
  Users,
  ShieldCheck,
  Eye,
  Vote,
  Bird,
  Shapes,
  Handshake,
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About Youth for Change"
        description="Empowering young people to shape change"
      />
      <section className="py-14">
        <Container>
          <div className="max-w-4xl space-y-5">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="section-title">Our vision</h2>
              <p className="mt-5">{content.about.vision}</p>
            </div>
            <div>
              <h2 className="section-title">Our mission</h2>
              <p className="mt-5">{content.about.mission}</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <h2 className="section-title">Our values</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {content.about.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <article
                  key={value.title}
                  className="border-t border-slate-200 pt-6"
                >
                  <Icon size={26} className="mb-4 text-teal-700" />
                  <h3 className="text-xl">{value.title}</h3>
                  <p className="mt-3">{value.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <nav
        aria-label="More about Youth for Change"
        className="border-t border-slate-200 py-10"
      >
        <Container>
          <div className="flex flex-wrap gap-8">
            {ABOUT_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 font-semibold text-blue-700"
              >
                {item.title}
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </Container>
      </nav>
    </>
  );
}
