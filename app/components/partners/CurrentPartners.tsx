import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import {
  currentPartners,
} from "@/lib/partners-content";



export default function CurrentPartners() {


  return (
    <Section
      background="soft"
    >


      <Container>


        <SectionHeading
          align="center"
          eyebrow="Our Network"
          title="Organizations We Collaborate With"
          description="We are proud to work together with organizations that share our commitment to youth empowerment and community development."
        />




        <div
          className="
            mt-12

            grid

            gap-6

            sm:grid-cols-2

            md:grid-cols-3

            lg:grid-cols-4
          "
        >



          {currentPartners.map(
            (partner) => (

              <div
                key={partner}

                className="
                  flex

                  h-32

                  items-center

                  justify-center

                  rounded-3xl

                  border

                  border-slate-100

                  bg-white

                  px-6

                  text-center

                  text-lg

                  font-semibold

                  text-slate-700

                  shadow-sm

                  transition-all

                  duration-300

                  hover:-translate-y-1

                  hover:shadow-md
                "
              >

                {partner}

              </div>

            )
          )}



        </div>


      </Container>


    </Section>
  );
}