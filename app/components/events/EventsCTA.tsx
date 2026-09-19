import {
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function EventsCTA() {

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

          -right-36

          -top-36

          h-96

          w-96

          rounded-full

          bg-white/10
        "
      />


      <div
        className="
          absolute

          -left-36

          -bottom-36

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

            <CalendarCheck size={32}/>

          </div>




          <h2
            className="
              mt-8

              text-white
            "
          >
            Be Part Of Our Next Event
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
            Join our activities, connect with inspiring people,
            and contribute to initiatives that create positive
            change in communities.
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

               

                hover:bg-white
                hover:text-blue-600
              "
            >

              Join Activities

              <ArrowRight size={18}/>

            </Button>




            <Button
              href="/contact"

              size="lg"

              variant="outline"

              className="
                border-white

                text-black

                hover:bg-white

                hover:text-blue-600
              "
            >

              Contact Us

            </Button>


          </div>


        </div>


      </Container>


    </Section>
  );
}