import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function AboutCTA() {
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

          -right-24
          -top-24

          h-72
          w-72

          rounded-full

          bg-white/10
        "
      />

      <div
        className="
          absolute

          -bottom-32
          -left-20

          h-80
          w-80

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

            <Sparkles size={32}/>

          </div>



          <h2
            className="
              mt-8

              text-white
            "
          >
            Be Part Of The Change We Create
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
            Whether you want to volunteer, collaborate, or support
            our initiatives, your contribution can help create more
            opportunities for young people and communities.
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

              Get Involved

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