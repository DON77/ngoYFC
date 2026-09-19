import {
  CalendarHeart,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


import { volunteers } from "@/lib/partners-content";



const icons = [
  CalendarHeart,
  BriefcaseBusiness,
  Sparkles,
];



export default function VolunteerSection() {


  return (
    <Section>


      <Container>


        <SectionHeading
          align="center"
          eyebrow="Volunteer With Us"
          title="Your Time Can Create Impact"
          description="Join our community of volunteers and contribute your skills to meaningful initiatives."
        />




        <div
          className="
            mt-12

            grid

            gap-8

            md:grid-cols-3
          "
        >



          {volunteers.map(
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

                      transition-all

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