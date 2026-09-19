import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { projects } from "@/lib/projects-content";


export default function ProjectsGrid() {
  return (
    <Section background="soft">

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Portfolio"
          title="Our Featured Projects"
          description="Discover the initiatives, programs and collaborations that create measurable impact."
        />



        <div
          className="
            mt-16

            grid

            gap-8

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {projects.map((project) => (

            <Card
              key={project.id}
              padding="sm"
              className="
                group

                overflow-hidden

                transition-all

                duration-300

                hover:-translate-y-2
              "
            >


              {/* Image */}

              <div
                className="
                  relative

                  h-64

                  overflow-hidden

                  rounded-2xl
                "
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill

                  className="
                    object-cover

                    transition-transform

                    duration-500

                    group-hover:scale-105
                  "
                />

              </div>



              {/* Content */}

              <div
                className="
                  p-4
                "
              >


                <Badge>
                  {project.category}
                </Badge>



                <h3
                  className="
                    mt-5

                    text-2xl
                  "
                >
                  {project.title}
                </h3>



                <p
                  className="
                    mt-3

                    line-clamp-3
                  "
                >
                  {project.description}
                </p>




                {/* Impact */}

                <div
                  className="
                    mt-6

                    flex

                    items-start

                    gap-3

                    rounded-2xl

                    bg-blue-50

                    p-4
                  "
                >

                  <Target
                    size={20}
                    className="
                      mt-0.5

                      text-blue-600
                    "
                  />


                  <div>

                    <p
                      className="
                        text-xs

                        font-semibold

                        uppercase

                        tracking-wide

                        text-blue-600
                      "
                    >
                      Impact
                    </p>


                    <p
                      className="
                        mt-1

                        text-sm

                        font-medium

                        text-slate-700
                      "
                    >
                      {project.impact}
                    </p>

                  </div>


                </div>




                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    mt-6

                    inline-flex

                    items-center

                    gap-2

                    font-semibold

                    text-blue-600

                    transition-colors

                    hover:text-blue-800
                  "
                >

                  View Project

                  <ArrowRight size={18}/>

                </Link>


              </div>


            </Card>

          ))}


        </div>


      </Container>

    </Section>
  );
}