import {
  Target,
  CheckCircle2,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


type ProjectGoalsProps = {
  project: {
    goals: string[];
  };
};


export default function ProjectGoals({
  project,
}: ProjectGoalsProps) {

  return (
    <Section background="soft">

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Objectives"
          title="Project Goals"
          description="The main objectives we aim to achieve through this initiative."
        />



        <div
          className="
            mt-12

            grid

            gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {project.goals.map((goal, index) => (

            <Card
              key={goal}
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

                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-50

                  text-blue-600

                  transition-colors

                  group-hover:bg-blue-600

                  group-hover:text-white
                "
              >

                {index === 0 ? (
                  <Target size={24}/>
                ) : (
                  <CheckCircle2 size={24}/>
                )}

              </div>



              <h3
                className="
                  mt-6

                  text-xl
                "
              >
                Goal {index + 1}
              </h3>



              <p
                className="
                  mt-3
                "
              >
                {goal}
              </p>


            </Card>

          ))}


        </div>


      </Container>

    </Section>
  );
}