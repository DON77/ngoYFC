import {
  Briefcase,
  Building2,
  Users,
  HeartHandshake,
} from "lucide-react";

import Section from "../ui/Section"
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

import { stats } from "@/lib/home-content";

const icons = [
  Briefcase,
  Users,
  HeartHandshake,
  Building2,
];

export default function Stats() {
  return (
    <Section>

      <Container>

        <SectionHeading
          align="center"
          eyebrow="Our Impact"
          title="Numbers That Inspire Confidence"
          description="Every project, partnership and volunteer contributes to stronger communities and better opportunities for young people."
        />

        <div
          className="
            mt-16
            grid
            gap-8

            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <Card
                key={stat.label}
                className="
                  text-center
                  border
                  border-slate-100
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-2xl

                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Icon size={30} />
                </div>

                <h2
                  className="
                    mt-6
                    text-5xl
                    font-extrabold
                    text-blue-600
                  "
                >
                  {stat.value}
                </h2>

                <h3
                  className="
                    mt-3
                    text-xl
                    text-slate-900
                  "
                >
                  {stat.label}
                </h3>

                <p className="mt-3">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

      </Container>

    </Section>
  );
}