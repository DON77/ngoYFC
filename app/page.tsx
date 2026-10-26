import Image from "next/image";
import {
  ArrowRight,
  Users,
  Scale,
  HeartHandshake,
  Equal,
  GraduationCap,
  Landmark,
  Briefcase,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import Hero from "./components/home/Hero";
import Section from "./components/ui/Section";
import SectionHeading from "./components/ui/SectionHeading";
import Card from "./components/ui/Card";
import content from "@/lib/document-content.json";

const focusIcons = [
  Landmark,
  Scale,
  HeartHandshake,
  Equal,
  GraduationCap,
  Users,
];
const impact = [
  ["40+", "Projects Implemented"],
  ["2,000+", "Direct Participants"],
  ["100+", "Trainings and Events"],
  ["50+", "Communities Reached"],
];
const impactIcons = [Briefcase, Users, CalendarDays, MapPin];
const pathways = [
  {
    title: "Participate",
    text: "Join our programs, training courses, events, discussions, and youth initiatives.",
    action: "Find an Opportunity",
    href: "/projects#current",
  },
  {
    title: "Volunteer",
    text: "Contribute your time, knowledge, creativity, and skills while gaining practical experience and connecting with other young changemakers.",
    action: "Volunteer With Us",
    href: "/volunteer",
  },
  {
    title: "Partner",
    text: "Collaborate with us to develop projects, create opportunities for young people, strengthen communities, and advance shared goals.",
    action: "Become a Partner",
    href: "/contact?subject=Partnership",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section background="soft">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our focus"
            title="Young people at the heart of change"
            description={content.home.focusIntroduction}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.home.focusAreas.map((area, index) => {
              const Icon = focusIcons[index];
              return (
                <div
                  key={area}
                  className={`flex min-h-48 flex-col items-center justify-center gap-5 rounded-lg border-4 bg-white p-7 text-center shadow-sm ${index % 2 ? "border-teal-700" : "border-blue-600"}`}
                >
                  <Icon
                    className={
                      index % 2
                        ? "shrink-0 text-teal-700"
                        : "shrink-0 text-blue-600"
                    }
                    size={36}
                  />
                  <h3 className="text-lg">{area}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading align="center" title="Our impact" />
          <dl className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {impact.map(([value, label], index) => {
              const Icon = impactIcons[index];
              return (
                <Card key={label} className="flex flex-col items-center border border-slate-100 text-center">
                  <dt className="contents">
                    <span className="order-1 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={30} aria-hidden="true" />
                    </span>
                    <span className="order-3 mt-3 text-xl font-semibold text-slate-900">{label}</span>
                  </dt>
                  <dd className="order-2 mt-6 text-5xl font-extrabold text-blue-600">{value}</dd>
                </Card>
              );
            })}
          </dl>
        </Container>
      </Section>
      <Section background="soft">
        <Container>
          <SectionHeading align="center" eyebrow="Get involved" title="Be part of the change" />
          <div className="grid gap-10 md:grid-cols-3">
            {pathways.map((pathway) => (
              <article
                key={pathway.title}
                className="flex flex-col items-start"
              >
                <figure className="mb-6 w-full">
                  <div className="relative aspect-[2.2/1] overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-slate-500">Illustrative photograph</figcaption>
                </figure>
                <h3>{pathway.title}</h3>
                <p className="mb-6 mt-3">{pathway.text}</p>
                <Button
                  href={pathway.href}
                  variant="outline"
                  className="mt-auto text-sm"
                >
                  {pathway.action}
                  <ArrowRight size={16} />
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading align="center" title="Stay connected" description={content.home.newsletter} />
            <form className="mt-6 text-left" aria-label="Newsletter subscription">
              <label htmlFor="newsletter-email" className="field-label">
                Email address
              </label>
              <div className="mt-2 flex flex-wrap gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  disabled
                  placeholder="you@example.com"
                  className="form-control min-w-0 flex-1 basis-56"
                  aria-describedby="newsletter-status"
                />
                <Button disabled type="submit">
                  Subscribe
                </Button>
              </div>
              <p id="newsletter-status" className="mt-3 text-sm">
                Newsletter subscriptions are not open yet. Follow us on social
                media for updates.
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
