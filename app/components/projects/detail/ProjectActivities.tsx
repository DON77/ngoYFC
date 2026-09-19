import {
  CalendarCheck,
  Users,
  Rocket,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


type ProjectActivitiesProps = {
  project: {
    activities: string[];
  };
};


const icons = [
  CalendarCheck,
  Users,
  Rocket,
];


export default function ProjectActivities({
  project,
}: ProjectActivitiesProps) {

  return (
    <Section>

      <Container>


        <SectionHeading
          eyebrow="Implementation"
          title="Project Activities"
          description="The key activities and actions carried out as part of this initiative."
          align="center"
        />



        <div
          className="
            mt-12

            grid

            gap-8

            md:grid-cols-3
          "
        >

          {project.activities.map((activity, index) => {

            const Icon =
              icons[index % icons.length];


            return (
              <Card
                key={activity}

                className="
                  relative

                  overflow-hidden

                  transition-all

                  duration-300

                  hover:-translate-y-2
                "
              >


                {/* Number */}

                <div
                  className="
                    absolute

                    right-6

                    top-4

                    text-6xl

                    font-bold

                    text-slate-100
                  "
                >
                  0{index + 1}
                </div>



                <div
                  className="
                    relative
                    z-10
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
                    "
                  >

                    <Icon size={28}/>

                  </div>



                  <h3
                    className="
                      mt-6
                    "
                  >
                    {activity}
                  </h3>



                  <p
                    className="
                      mt-3
                    "
                  >
                    Activities designed to create meaningful participation and measurable impact.
                  </p>


                </div>


              </Card>
            );

          })}


        </div>


      </Container>

    </Section>
  );
}