import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";

import { partners } from "@/lib/home-content";

export default function Partners() {
  return (
    <Section>

      <Container>

        <SectionHeading
          align="center"
          eyebrow="Partners"
          title={partners.title}
          description={partners.description}
        />

        <div
          className="
            mt-16

            grid

            grid-cols-2
            gap-6

            md:grid-cols-3

            lg:grid-cols-5
          "
        >
          {partners.logos.map((partner) => (
            <div
              key={partner.name}
              className="
                group

                flex
                h-32

                items-center
                justify-center

                rounded-3xl

                border
                border-slate-200

                bg-white

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={180}
                height={80}
                className="
                  max-h-16
                  w-auto

                  grayscale
                  opacity-70

                  transition-all
                  duration-300

                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">

          <p className="mx-auto max-w-2xl">
            Collaboration is at the heart of our work. We welcome
            partnerships with NGOs, educational institutions,
            businesses and public organizations that share our
            commitment to empowering young people.
          </p>

          <Button
            href="/partners"
            size="lg"
            className="mt-8"
          >
            Become a Partner

            <ArrowRight size={18} />
          </Button>

        </div>

      </Container>

    </Section>
  );
}