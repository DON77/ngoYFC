import {
  ArrowRight,
  HandHeart,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function ProjectsCTA() {
  return (
    <Section
      background="primary"
      className="
        relative

        overflow-hidden
      "
    >

      {/* Decorative circles */}

      <div
        className="
          absolute

          -right-24
          -top-24

          h-80
          w-80

          rounded-full

          bg-white/10
        "
      />


      <div
        className="
          absolute

          -bottom-32
          -left-20

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

            <HandHeart size={32}/>

          </div>




          <h2
            className="
              mt-8

              text-white
            "
          >
            Help Us Create Greater Impact
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
            Our projects grow through collaboration.
            Whether you are a volunteer, donor, or
            organization, you can help us create
            more opportunities for communities.
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

                hover:bg-slate-100
                hover:text-blue-600
              "
            >

              Become A Partner

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