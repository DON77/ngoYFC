import {
  Users,
  Globe2,
  Lightbulb,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import { whoWeAre } from "@/lib/about-content";


const highlights = [
  {
    icon: Users,
    title: "Youth Empowerment",
    text: "Creating opportunities for young people to learn, grow and lead.",
  },

  {
    icon: Globe2,
    title: "Community Impact",
    text: "Working with communities to create sustainable solutions.",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Developing creative approaches to social challenges.",
  },
];


export default function WhoWeAre() {
  return (
    <Section>

      <Container>

        <SectionHeading
          align="center"
          eyebrow="Who We Are"
          title="Building Communities Through Opportunity And Collaboration"
          description="Our organization connects young people, communities and partners to create meaningful social change."
        />



        <div
          className="
            mt-16

            grid

            gap-10

            lg:grid-cols-5
          "
        >


          {/* Story */}

          <div
            className="
              lg:col-span-3
            "
          >

            <div
              className="
                space-y-6
              "
            >

              {whoWeAre.paragraphs.map(
                (paragraph) => (
                  <p
                    key={paragraph}
                    className="
                      text-lg
                      leading-8
                    "
                  >
                    {paragraph}
                  </p>
                )
              )}

            </div>


            <div
              className="
                mt-10

                rounded-3xl

                bg-blue-50

                p-8
              "
            >

              <p
                className="
                  text-xl

                  font-semibold

                  text-blue-900
                "
              >
                "We believe that empowering young people today creates stronger communities tomorrow."
              </p>

            </div>


          </div>




          {/* Highlights */}

          <div
            className="
              space-y-5

              lg:col-span-2
            "
          >

            {highlights.map(
              (item) => {

                const Icon = item.icon;

                return (

                  <Card
                    key={item.title}
                    padding="md"
                    className="
                      border
                      border-slate-100
                    "
                  >

                    <div
                      className="
                        flex
                        gap-5
                      "
                    >

                      <div
                        className="
                          flex

                          h-12
                          w-12

                          shrink-0

                          items-center
                          justify-center

                          rounded-xl

                          bg-blue-50

                          text-blue-600
                        "
                      >

                        <Icon size={24}/>

                      </div>


                      <div>

                        <h3
                          className="
                            text-lg
                          "
                        >
                          {item.title}
                        </h3>


                        <p
                          className="
                            mt-2

                            text-sm
                          "
                        >
                          {item.text}
                        </p>


                      </div>

                    </div>


                  </Card>

                );

              }
            )}

          </div>


        </div>


      </Container>

    </Section>
  );
}