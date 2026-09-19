import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";


type ProjectHeroProps = {
  project: {
    title: string;
    category: string;
    image: string;
    shortDescription: string;
    results: string[];
  };
};


export default function ProjectHero({
  project,
}: ProjectHeroProps) {

  return (
    <Section
      background="soft"
      className="
        overflow-hidden
      "
    >

      <Container>


        <div
          className="
            grid

            gap-12

            lg:grid-cols-2

            lg:items-center
          "
        >


          {/* Content */}

          <div>


            <Badge>
              {project.category}
            </Badge>



            <h1
              className="
                mt-6
              "
            >
              {project.title}
            </h1>



            <p
              className="
                mt-6

                max-w-xl

                text-lg
              "
            >
              {project.shortDescription}
            </p>



            {/* Impact preview */}

            <div
              className="
                mt-8

                rounded-2xl

                border

                border-blue-100

                bg-white

                p-6

                shadow-sm
              "
            >

              <p
                className="
                  text-sm

                  font-semibold

                  uppercase

                  tracking-wide

                  text-blue-600
                "
              >
                Project Impact
              </p>



              <p
                className="
                  mt-3

                  text-xl

                  font-semibold

                  text-slate-800
                "
              >
                {project.results[0]}
              </p>


            </div>


          </div>




          {/* Image */}

          <div
            className="
              relative

              h-[420px]

              overflow-hidden

              rounded-3xl

              shadow-xl
            "
          >

            <Image
              src={project.image}
              alt={project.title}
              fill

              priority

              className="
                object-cover
              "
            />

          </div>


        </div>


      </Container>


    </Section>
  );
}