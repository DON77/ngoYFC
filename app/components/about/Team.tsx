import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import { team } from "@/lib/about-content";


export default function Team() {
  return (
    <Section background="soft">

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Our Team"
          title="Meet The People Behind Our Mission"
          description="A dedicated group of professionals and changemakers working together to create meaningful impact."
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

          {team.map((member) => (

            <Card
              key={member.name}
              padding="sm"
              className="
                overflow-hidden

                group
              "
            >

              {/* Image */}

              <div
                className="
                  relative

                  h-80

                  overflow-hidden

                  rounded-2xl
                "
              >

                <Image
                  src={member.image}
                  alt={member.name}
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

                <h3>
                  {member.name}
                </h3>


                <p
                  className="
                    mt-1

                    font-medium

                    text-blue-600
                  "
                >
                  {member.role}
                </p>


                <p
                  className="
                    mt-4

                    text-sm
                  "
                >
                  {member.bio}
                </p>


              </div>


            </Card>

          ))}


        </div>


      </Container>


    </Section>
  );
}