import {
  Users,
  ShieldCheck,
  Lightbulb,
  Handshake,
  GraduationCap,
  Globe2,
} from "lucide-react";


import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import { values } from "@/lib/about-content";


const icons = {
  Users,
  ShieldCheck,
  Lightbulb,
  Handshake,
  GraduationCap,
  Globe2,
};


export default function Values() {
  return (
    <Section>

      <Container>

        <SectionHeading
          align="center"
          eyebrow="Our Values"
          title="The Principles That Guide Our Work"
          description="Our values shape how we collaborate, design programs and create meaningful impact."
        />


        <div
          className="
            mt-16

            grid

            gap-8

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >

          {values.map((value) => {

            const Icon =
              icons[value.icon as keyof typeof icons];


            return (
              <Card
                key={value.title}
                className="
                  group

                  border

                  border-slate-100

                  transition-all

                  duration-300

                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    flex

                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    bg-blue-50

                    text-blue-600

                    transition-colors

                    group-hover:bg-blue-600

                    group-hover:text-white
                  "
                >

                  <Icon size={28}/>

                </div>


                <h3
                  className="
                    mt-6
                  "
                >
                  {value.title}
                </h3>


                <p
                  className="
                    mt-3
                  "
                >
                  {value.description}
                </p>


              </Card>
            );

          })}


        </div>


      </Container>

    </Section>
  );
}