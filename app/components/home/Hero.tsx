import Image from "next/image";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

import { hero } from "@/lib/home-content";


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
              {hero.badge}
            </Badge>


            <h1
              className="
                mt-6
                max-w-3xl
              "
            >
              {hero.title}
            </h1>


            <p
              className="
                mt-6
                max-w-xl

                text-lg
              "
            >
              {hero.description}
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
                href={hero.primaryButton.href}
                size="lg"
              >
                {hero.primaryButton.text}
              </Button>


              <Button
                href={hero.secondaryButton.href}
                variant="outline"
                size="lg"
              >
                {hero.secondaryButton.text}
              </Button>

            </div>


            {/* Small trust message */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  -space-x-3
                "
              >

                {[
                  1,
                  2,
                  3,
                ].map((item)=>(
                  <div
                    key={item}
                    className="
                      h-10
                      w-10

                      overflow-hidden

                      rounded-full

                      border-2
                      border-white

                      bg-slate-200
                    "
                  >

                    <Image
                      src={`https://www.wscf-europe.org/wp-content/uploads/2026/03/Screenshot-2026-03-26-at-10.52.58-scaled.png?w=1200`}
                      alt="Volunteer"
                      width={40}
                      height={40}
                    />

                  </div>
                ))}

              </div>


              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Joined by thousands of volunteers worldwide
              </p>


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
                8,500+
              </p>


              <p
                className="
                  text-sm
                  text-slate-600
                "
              >
                young people reached
              </p>


            </div>



          </div>


        </div>


      </Container>


    </Section>
  );
}