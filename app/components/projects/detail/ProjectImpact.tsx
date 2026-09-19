import {
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


type ProjectImpactProps = {
  project: {
    results: string[];
  };
};


const icons = [
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
];


export default function ProjectImpact({
  project,
}: ProjectImpactProps) {

  return (
    <Section background="soft">

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Results"
          title="Our Impact"
          description="The measurable outcomes and achievements generated through this project."
        />



        <div
          className="
            mt-12

            grid

            gap-6

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >

          {project.results.map((result, index) => {

            const Icon =
              icons[index % icons.length];


            return (
              <Card
                key={result}

                className="
                  text-center

                  transition-all

                  duration-300

                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    mx-auto

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



                <p
                  className="
                    mt-6

                    text-lg

                    font-semibold

                    text-slate-800
                  "
                >
                  {result}
                </p>


              </Card>
            );

          })}


        </div>


      </Container>

    </Section>
  );
}