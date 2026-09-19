import {
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


type EventCTAProps = {
  event: {
    registration: string;
  };
};


export default function EventCTA({
  event,
}: EventCTAProps) {


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

            <CalendarCheck
              size={32}
            />

          </div>





          <h2
            className="
              mt-8

              text-white
            "
          >
            Ready To Join This Event?
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
            Take part in our activities, meet new people,
            and contribute to meaningful community
            initiatives.
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
              href={event.registration}

              size="lg"

              className="
                bg-white

                text-blue-600

                hover:bg-slate-100
              "
            >

              Register Now

              <ArrowRight
                size={18}
              />

            </Button>





            <Button
              href="/contact"

              size="lg"

              variant="outline"

              className="
                border-white

                text-white

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