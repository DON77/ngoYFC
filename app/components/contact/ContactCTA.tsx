import {
  MessageCircleHeart,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";



export default function ContactCTA() {


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

          -top-40

          h-96

          w-96

          rounded-full

          bg-white/10
        "
      />


      <div
        className="
          absolute

          -left-40

          -bottom-40

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

            <MessageCircleHeart
              size={32}
            />

          </div>





          <h2
            className="
              mt-8

              text-white
            "
          >
            Have An Idea Or Want To Help?
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
            Every conversation can become the beginning
            of a meaningful collaboration. Reach out and
            let's explore how we can create impact together.
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
              href="/partners"

              size="lg"

              className="
                bg-blue-600

                text-white

               

                hover:text-blue-600
                hover:bg-white
              "
            >

              Become A Partner

              <ArrowRight
                size={18}
              />

            </Button>





            <Button
              href="/events"

              size="lg"

              variant="outline"

              className="
                border-white

                text-black

                hover:bg-white

                hover:text-blue-600
              "
            >

              Explore Activities

            </Button>



          </div>



        </div>


      </Container>


    </Section>
  );
}