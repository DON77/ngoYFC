import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


type EventOverviewProps = {
  event: {
    title: string;
    overview: string;
  };
};


export default function EventOverview({
  event,
}: EventOverviewProps) {


  const paragraphs = event.overview
    .trim()
    .split("\n")
    .filter(Boolean);



  return (
    <Section>


      <Container>


        <div
          className="
            mx-auto

            max-w-4xl
          "
        >


          <SectionHeading
            eyebrow="About The Event"
            title="Event Overview"
            description={`Learn more about ${event.title} and what participants can expect.`}
          />




          <div
            className="
              mt-10

              space-y-6
            "
          >


            {paragraphs.map((paragraph, index) => (

              <p
                key={index}

                className="
                  text-lg

                  leading-9

                  text-slate-700
                "
              >

                {paragraph.trim()}

              </p>

            ))}


          </div>



        </div>


      </Container>


    </Section>
  );
}