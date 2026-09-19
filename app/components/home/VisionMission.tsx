import {
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";

import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";

import { visionMission } from "@/lib/home-content";

export default function VisionMission() {
  return (
    <Section background="grid">

      <Container>

        <SectionHeading
          align="center"
          eyebrow="Our Purpose"
          title="Guided by Vision, Driven by Mission"
          description="Everything we do is rooted in empowering young people, strengthening communities, and creating sustainable social impact."
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
            className="border border-slate-100"
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

              <Eye size={34} />

            </div>

            <h2 className="mt-8 text-3xl">
              {visionMission.vision.title}
            </h2>

            <p className="mt-6 text-lg">
              {visionMission.vision.text}
            </p>

          </Card>



          {/* Mission */}

          <Card
            padding="lg"
            className="border border-slate-100"
          >

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-sky-100

                text-sky-600
              "
            >

              <Target size={34} />

            </div>

            <h2 className="mt-8 text-3xl">
              {visionMission.mission.title}
            </h2>

            <p className="mt-6 text-lg">
              {visionMission.mission.text}
            </p>

          </Card>

        </div>



        {/* Values */}

        <div
          className="
            mt-20
            text-center
          "
        >

          <h3
            className="
              text-2xl
              font-bold
            "
          >
            Our Core Values
          </h3>

          <p
            className="
              mt-4
              mx-auto
              max-w-2xl
            "
          >
            These principles shape every project, partnership and
            decision we make.
          </p>


          <div
            className="
              mt-10

              flex
              flex-wrap
              justify-center

              gap-4
            "
          >

            {visionMission.values.map((value) => (

              <Badge
                key={value}
                className="
                  px-5
                  py-3

                  text-sm

                  flex
                  items-center
                  gap-2
                "
              >

                <CheckCircle2
                  size={16}
                />

                {value}

              </Badge>

            ))}

          </div>

        </div>



      </Container>

    </Section>
  );
}