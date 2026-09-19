import {
  ArrowRight,
  Newspaper,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function NewsArticleCTA() {

  return (
    <Section
      background="primary"

      className="
        relative

        overflow-hidden
      "
    >


      {/* Decorative background */}

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

            <Newspaper size={32}/>

          </div>




          <h2
            className="
              mt-8

              text-white
            "
          >
            Discover More Of Our Work
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
            Explore more stories, projects and opportunities
            to participate in our community initiatives.
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
              href="/news"

              size="lg"

              className="
                bg-white

                text-blue-600

                hover:bg-slate-100
              "
            >

              More News

              <ArrowRight size={18}/>

            </Button>





            <Button
              href="/get-involved"

              size="lg"

              variant="outline"

              className="
                border-white

                text-white

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