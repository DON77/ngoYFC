import {
  Eye,
  Target,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import { aboutVisionMission } from "@/lib/about-content";


export default function AboutVisionMission() {
  return (
    <Section background="soft">

      <Container>

        <SectionHeading
          align="center"
          eyebrow="Our Direction"
          title="Vision And Mission"
          description="Our vision guides where we want to go, while our mission defines the actions we take every day."
        />



        <div
          className="
            mt-16

            grid

            gap-8

            lg:grid-cols-2
          "
        >


          {/* Vision */}

          <Card
            padding="lg"
            className="
              relative

              overflow-hidden

              border-none

              bg-white
            "
          >

            <div
              className="
                absolute

                right-0
                top-0

                h-40
                w-40

                rounded-bl-full

                bg-blue-50
              "
            />


            <div
              className="
                relative
              "
            >

              <div
                className="
                  flex

                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-blue-100

                  text-blue-600
                "
              >

                <Eye size={34}/>

              </div>


              <span
                className="
                  mt-8

                  block

                  text-sm

                  font-semibold

                  uppercase

                  tracking-wider

                  text-blue-600
                "
              >
                Our Vision
              </span>


              <h2
                className="
                  mt-3

                  text-3xl
                "
              >
                A Future With Equal Opportunities
              </h2>


              <p
                className="
                  mt-6

                  text-lg
                "
              >
                {aboutVisionMission.vision}
              </p>


            </div>


          </Card>





          {/* Mission */}

          <Card
            padding="lg"
            className="
              relative

              overflow-hidden

              border-none

              bg-blue-600
            "
          >

            <div
              className="
                absolute

                right-0
                top-0

                h-40
                w-40

                rounded-bl-full

                bg-white/10
              "
            />


            <div
              className="
                relative
              "
            >

              <div
                className="
                  flex

                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-white/20

                  text-white
                "
              >

                <Target size={34}/>

              </div>


              <span
                className="
                  mt-8

                  block

                  text-sm

                  font-semibold

                  uppercase

                  tracking-wider

                  text-blue-100
                "
              >
                Our Mission
              </span>


              <h2
                className="
                  mt-3

                  text-3xl

                  text-white
                "
              >
                Turning Ideas Into Impact
              </h2>


              <p
                className="
                  mt-6

                  text-lg

                  text-white/80
                "
              >
                {aboutVisionMission.mission}
              </p>


            </div>


          </Card>



        </div>


      </Container>


    </Section>
  );
}