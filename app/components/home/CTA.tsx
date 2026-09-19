import {
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

import { cta } from "@/lib/home-content";


export default function CTA() {
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
            <HeartHandshake size={34}/>
          </div>


          <h2
            className="
              mt-8

              text-white
            "
          >
            {cta.title}
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
            {cta.description}
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
              href={cta.buttons[0].href}
              size="lg"
              className="
                bg-blue-600
                text-blue-400

                hover:bg-slate-100
              "
            >

              {cta.buttons[0].text}

              <ArrowRight size={18}/>

            </Button>


            <Button
              href={cta.buttons[1].href}
              size="lg"
              variant="outline"
              className="
                border-white

                bg-transparent

                text-black

                hover:bg-white

                hover:text-blue-600
              "
            >

              {cta.buttons[1].text}

            </Button>


          </div>


        </div>

      </Container>


    </Section>
  );
}