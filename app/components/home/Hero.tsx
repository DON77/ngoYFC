import Image from "next/image";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

import { hero } from "@/lib/home-content";
import content from "@/lib/document-content.json";


export default function Hero() {
  return (
    <Section
      background="soft"
      className="relative overflow-hidden"
    >

      {/* Decorative blobs */}

      <div
        className="
          blob
          blob-blue
          absolute
          -left-32
          -top-32
          h-96
          w-96
        "
      />

      <div
        className="
          blob
          blob-cyan
          absolute
          right-0
          top-20
          h-80
          w-80
        "
      />


      <Container>

        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* Left Content */}

          <div
            className="
              relative
              z-10

              animate-fade-up
            "
          >

            <Badge>
              Empowering Youth. Creating Change.
            </Badge>


            <h1
              className="
                mt-6
                max-w-3xl
              "
            >
              Youth for Change
            </h1>


            <p
              className="
                mt-6
                max-w-xl

                text-lg
              "
            >
              {content.home.introduction}
            </p>


            <div
              className="
                mt-8

                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >

              <Button
                href="/projects"
                size="lg"
              >
                Explore Our Work
              </Button>


              <Button
                href="/contact"
                variant="outline"
                size="lg"
              >
                Get Involved
              </Button>

            </div>


          </div>




          {/* Right Image */}

          <div
            className="
              relative

              animate-fade-up

              lg:pl-8
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
                src={hero.image}
                alt="Young people working together"
                width={800}
                height={900}
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
                className="
                  h-[520px]
                  w-full

                  object-cover
                "
              />

            </div>



            {/* Floating impact card */}

            <div
              className="
                absolute

                -bottom-6
                -left-6

                rounded-3xl

                bg-white

                p-6

                shadow-xl

                md:left-0
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Our impact
              </p>


              <p
                className="
                  mt-1

                  text-3xl

                  font-bold

                  text-blue-600
                "
              >
                2,000+
              </p>


              <p
                className="
                  text-sm
                  text-slate-600
                "
              >
                Direct Participants
              </p>


            </div>



          </div>


        </div>


      </Container>


    </Section>
  );
}