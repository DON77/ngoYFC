import {
  Handshake,
  Building2,
  Landmark,
  Users,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


import { partnershipTypes } from "@/lib/partners-content";


const icons = [
  Handshake,
  Building2,
  Landmark,
  Users,
];



export default function PartnershipTypes() {


  return (
    <Section>


      <Container>


        <SectionHeading
          align="center"
          eyebrow="Partnership Opportunities"
          title="Ways To Work With Us"
          description="Different partnership models allow organizations and individuals to contribute to meaningful social change."
        />





        <div
          className="
            mt-12

            grid

            gap-8

            md:grid-cols-2

            lg:grid-cols-4
          "
        >



          {partnershipTypes.map(
            (item, index) => {


              const Icon =
                icons[index];



              return (
                <Card
                  key={item.title}

                  className="
                    group

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

                      duration-300

                      group-hover:bg-blue-600

                      group-hover:text-white
                    "
                  >

                    <Icon
                      size={28}
                    />

                  </div>





                  <h3
                    className="
                      mt-6
                    "
                  >

                    {item.title}

                  </h3>





                  <p
                    className="
                      mt-3
                    "
                  >

                    {item.description}

                  </p>



                </Card>
              );

            }
          )}



        </div>


      </Container>


    </Section>
  );
}