import {
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function ProjectCTA() {

  return (
    <Section
      background="primary"
      className="
        relative

        overflow-hidden
      "
    >


      {/* Decorative shapes */}

      <div
        className="
          absolute

          -right-32
          -top-32

          h-96

          w-96

          rounded-full

          bg-white/10
        "
      />


      <div
        className="
          absolute

          -bottom-40
          -left-32

          h-96

          w-96

          rounded-full

          bg-white/10
        "
      />



      <Container>


        <div
          className="
            relative

            z-10

            mx-auto

            max-w-4xl

            text-center
          "
        >



          <div
            className="
              mx-auto

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

            <HeartHandshake size={32}/>

          </div>




          <h2
            className="
              mt-8

              text-white
            "
          >
            Support This Initiative
          </h2>



          <p
            className="
              mx-auto

              mt-6

              max-w-2xl

              text-lg

              text-white/80
            "
          >
            Together with volunteers, partners and supporters,
            we can expand this project and create greater
            opportunities for communities.
          </p>




          <div
            className="
              mt-10

              flex

              flex-col

              justify-center

              gap-4

              sm:flex-row
            "
          >



            <Button
              href="/get-involved"
              size="lg"

               className="
                bg-blue-600

                text-white

                hover:bg-slate-100
                hover:text-blue-600
              "
            >

              Join The Initiative

              <ArrowRight size={18}/>

            </Button>




            <Button
              href="/partners"
              size="lg"

              variant="outline"

              className="
                border-white

                text-black

                hover:bg-white

                hover:text-blue-600
              "
            >

              Become A Partner

            </Button>


          </div>



        </div>


      </Container>


    </Section>
  );
}