import Link from "next/link";
import Image from "next/image";
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
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutCTA from "@/components/about/AboutCTA";
import Card from "@/components/ui/Card";
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
      <Section background="soft">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Badge>About Us</Badge>
              <h1 className="mt-6 max-w-3xl">About Youth for Change</h1>
              <p className="mt-6 max-w-xl text-lg">{content.about.paragraphs[0]}</p>
              <Button href="/contact?subject=Partnership" size="lg" className="mt-8">Work With Us</Button>
            </div>
            <figure className="relative pb-16">
              <div className="relative h-[520px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200"
                  alt="Volunteers taking part in a community activity"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-right text-xs text-slate-500">Illustrative photograph</figcaption>
              <div className="absolute bottom-0 left-4 rounded-3xl bg-white p-6 shadow-xl lg:-left-6">
                <p className="text-sm">Working since</p>
                <p className="mt-1 text-3xl font-bold text-blue-600">2017</p>
              </div>
            </figure>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading align="center" eyebrow="Who We Are" title="Empowering young people to shape change" />
          <div className="mt-16 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {content.about.paragraphs.slice(1, -1).map((paragraph) => (
                  <p key={paragraph} className="text-lg">{paragraph}</p>
                ))}
              </div>
              <p className="mt-10 rounded-3xl bg-blue-50 p-8 text-xl font-semibold text-blue-900">{content.about.paragraphs.at(-1)}</p>
            </div>
            <nav aria-label="More about Youth for Change" className="space-y-5 lg:col-span-2">
              {ABOUT_NAVIGATION.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between gap-5 rounded-3xl border border-slate-100 bg-white p-8 font-semibold text-blue-700 shadow-sm hover:shadow-lg">
                  {item.title}<ArrowRight size={24} className="shrink-0" />
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </Section>
      <AboutVisionMission />
      <Section>
        <Container>
          <SectionHeading align="center" title="Our values" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.about.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Card
                  key={value.title}
                  variant="bordered"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl">{value.title}</h3>
                  <p className="mt-3">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
      <AboutCTA />
    </>
  );
}
