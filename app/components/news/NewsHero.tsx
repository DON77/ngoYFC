import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import { newsHero } from "@/lib/news-content";


export default function NewsHero() {
  return (
    <Section
      background="soft"
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

          bg-blue-100/70
        "
      />


      <div
        className="
          absolute

          -left-24

          bottom-0

          h-72

          w-72

          rounded-full

          bg-sky-100/60
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


          <Badge>
            {newsHero.badge}
          </Badge>



          <h1
            className="
              mt-6
            "
          >
            {newsHero.title}
          </h1>



          <p
            className="
              mx-auto

              mt-6

              max-w-2xl

              text-lg
            "
          >
            {newsHero.description}
          </p>




          <div
            className="
              mt-10

              flex

              flex-wrap

              justify-center

              gap-4
            "
          >

            <div
              className="
                rounded-full

                border

                border-blue-100

                bg-white

                px-6

                py-3

                text-sm

                font-medium

                text-blue-700

                shadow-sm
              "
            >
              Latest Updates
            </div>


            <div
              className="
                rounded-full

                border

                border-blue-100

                bg-white

                px-6

                py-3

                text-sm

                font-medium

                text-blue-700

                shadow-sm
              "
            >
              Community Stories
            </div>


            <div
              className="
                rounded-full

                border

                border-blue-100

                bg-white

                px-6

                py-3

                text-sm

                font-medium

                text-blue-700

                shadow-sm
              "
            >
              Announcements
            </div>


          </div>


        </div>


      </Container>


    </Section>
  );
}