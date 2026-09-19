import Image from "next/image";
import {
  ArrowRight,
  Users,
  Scale,
  HeartHandshake,
  Equal,
  GraduationCap,
  Landmark,
} from "lucide-react";
import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
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
      <section className="border-b border-slate-100 bg-soft-gradient py-12 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-semibold text-blue-700">
                Empowering Youth. Creating Change.
              </p>
              <h1 className="text-5xl leading-tight lg:text-7xl">
                Youth for Change
              </h1>
              <p className="mt-6 max-w-xl">{content.home.introduction}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/projects">
                  Explore Our Work <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="outline">
                  Get Involved
                </Button>
              </div>
            </div>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
                  alt="People exchanging ideas around a shared table"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-slate-500">
                Illustrative photograph
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>
      <section className="py-16 lg:py-20">
        <Container>
          <p className="eyebrow">Our focus</p>
          <h2 className="section-title">Young people at the heart of change</h2>
          <p className="mt-5 max-w-3xl">{content.home.focusIntroduction}</p>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.home.focusAreas.map((area, index) => {
              const Icon = focusIcons[index];
              return (
                <div
                  key={area}
                  className="flex items-center gap-4 border-t border-slate-200 pt-6"
                >
                  <Icon
                    className={
                      index % 2
                        ? "shrink-0 text-teal-700"
                        : "shrink-0 text-blue-600"
                    }
                    size={28}
                  />
                  <h3 className="text-lg">{area}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="border-y border-blue-100 bg-blue-50 py-14">
        <Container>
          <h2 className="section-title">Our impact</h2>
          <dl className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impact.map(([value, label]) => (
              <div key={label}>
                <dt className="text-sm text-slate-600">{label}</dt>
                <dd className="mt-2 text-4xl font-bold text-blue-700">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <section className="py-16 lg:py-20">
        <Container>
          <p className="eyebrow">Get involved</p>
          <h2 className="section-title">Be part of the change</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {pathways.map((pathway) => (
              <article
                key={pathway.title}
                className="flex flex-col items-start border-t-2 border-teal-600 pt-6"
              >
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
      </section>
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="section-title">Stay connected</h2>
            <p className="mt-4">{content.home.newsletter}</p>
            <form className="mt-6" aria-label="Newsletter subscription">
              <label htmlFor="newsletter-email" className="field-label">
                Email address
              </label>
              <div className="mt-2 flex flex-wrap gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  disabled
                  placeholder="you@example.com"
                  className="form-control max-w-sm"
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
      </section>
    </>
  );
}
