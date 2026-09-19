import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


type ProjectOverviewProps = {
  project: {
    title: string;
    description: string;
  };
};


export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {

  return (
    <Section>

      <Container>


        <div
          className="
            grid

            gap-10

            lg:grid-cols-3
          "
        >


          {/* Heading */}

          <div>

            <SectionHeading
              eyebrow="Overview"
              title="About The Project"
            />

          </div>



          {/* Content */}

          <div
            className="
              lg:col-span-2
            "
          >

            <Card
              className="
                border

                border-slate-100
              "
            >

              <p
                className="
                  text-lg

                  leading-9
                "
              >
                {project.description}
              </p>


            </Card>


          </div>


        </div>


      </Container>


    </Section>
  );
}