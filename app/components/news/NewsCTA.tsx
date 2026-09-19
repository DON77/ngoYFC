import {
  BellRing,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function NewsCTA() {

  return (
    <Section
      background="primary"

      className="
        relative

        overflow-hidden
      "
    >


      {/* Decorative elements */}

      <div
        className="
          absolute

          -right-40

          top-0

          h-96

          w-96

          rounded-full

          bg-white/10
        "
      />


      <div
        className="
          absolute

          -left-32

          bottom-0

          h-72

          w-72

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

            max-w-3xl

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

            <BellRing size={32}/>

          </div>




          <h2
            className="
              mt-8

              text-white
            "
          >
            Stay Connected With Our Journey
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
            Receive the latest news, project updates,
            events and opportunities to participate
            in our community activities.
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
              href="/contact"

              size="lg"

              className="
                bg-blue-600

                text-white

                hover:bg-slate-100
                hover:text-blue-600
              
            

                text-blue-600

                hover:bg-slate-100
              "
            >

              Subscribe To Updates

              <ArrowRight size={18}/>

            </Button>




            <Button
              href="/get-involved"

              size="lg"

              variant="outline"

              className="
                border-white

                text-black

                hover:bg-white

                hover:text-blue-600
              "
            >

              Get Involved

            </Button>


          </div>


        </div>


      </Container>


    </Section>
  );
}