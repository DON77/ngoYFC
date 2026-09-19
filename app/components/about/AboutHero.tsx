import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { aboutHero } from "@/lib/about-content";


export default function AboutHero() {
  return (
    <Section
      background="soft"
      className="relative overflow-hidden"
    >

      {/* Decorative shapes */}

      <div
        className="
          absolute
          -left-32
          -top-32

          h-96
          w-96

          rounded-full

          bg-blue-100/60
        "
      />

      <div
        className="
          absolute
          -right-20
          bottom-10

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

            grid
            items-center

            gap-12

            lg:grid-cols-2
            lg:gap-20
          "
        >


          {/* Content */}

          <div>

            <Badge>
              {aboutHero.badge}
            </Badge>


            <h1
              className="
                mt-6
                max-w-3xl
              "
            >
              {aboutHero.title}
            </h1>


            <p
              className="
                mt-6

                max-w-xl

                text-lg
              "
            >
              {aboutHero.description}
            </p>


            <div
              className="
                mt-8
              "
            >

              <Button
                href="/contact"
                size="lg"
              >
                Work With Us
              </Button>

            </div>


          </div>



          {/* Image */}

          <div
            className="
              relative
            "
          >

            <div
              className="
                relative

                overflow-hidden

                rounded-3xl

                shadow-2xl
              "
            >

              <Image
                src={aboutHero.image}
                alt="Our organization team"
                width={800}
                height={700}
                priority

                className="
                  h-[520px]

                  w-full

                  object-cover
                "
              />

            </div>



            {/* Floating credibility card */}

            <div
              className="
                absolute

                -bottom-6
                -left-6

                rounded-3xl

                bg-white

                p-6

                shadow-xl
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Working since
              </p>


              <p
                className="
                  mt-1

                  text-3xl

                  font-bold

                  text-blue-600
                "
              >
                2015
              </p>


              <p
                className="
                  text-sm

                  text-slate-600
                "
              >
                Building stronger communities
              </p>


            </div>


          </div>


        </div>


      </Container>


    </Section>
  );
}