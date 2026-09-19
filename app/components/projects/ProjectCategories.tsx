import {
  Layers,
  GraduationCap,
  Leaf,
  Laptop,
  Users,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import { categories } from "@/lib/projects-content";


const categoryData = [
  {
    name: "Education",
    description:
      "Learning opportunities, training programs and leadership development.",
    icon: GraduationCap,
  },

  {
    name: "Environment",
    description:
      "Projects promoting sustainability and environmental awareness.",
    icon: Leaf,
  },

  {
    name: "Technology",
    description:
      "Digital skills and innovation programs for young people.",
    icon: Laptop,
  },

  {
    name: "Community",
    description:
      "Initiatives strengthening communities through participation.",
    icon: Users,
  },
];


export default function ProjectCategories() {
  return (
    <Section>

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Areas Of Work"
          title="Explore Our Project Categories"
          description="Our initiatives focus on education, sustainability, innovation and community development."
        />



        <div
          className="
            mt-12

            flex

            flex-wrap

            justify-center

            gap-3
          "
        >

          {categories.map((category) => (

            <button
              key={category}
              className="
                rounded-full

                border

                border-slate-200

                bg-white

                px-6

                py-3

                text-sm

                font-medium

                text-slate-700

                transition-all

                duration-300

                hover:border-blue-600

                hover:bg-blue-600

                hover:text-white
              "
            >
              {category}
            </button>

          ))}

        </div>




        <div
          className="
            mt-16

            grid

            gap-6

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >

          {categoryData.map((item) => {

            const Icon = item.icon;


            return (

              <Card
                key={item.name}
                className="
                  group

                  transition-all

                  duration-300

                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    flex

                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    bg-blue-50

                    text-blue-600

                    transition-colors

                    group-hover:bg-blue-600

                    group-hover:text-white
                  "
                >

                  <Icon size={28}/>

                </div>



                <h3
                  className="
                    mt-6

                    text-xl
                  "
                >
                  {item.name}
                </h3>



                <p
                  className="
                    mt-3

                    text-sm
                  "
                >
                  {item.description}
                </p>


              </Card>

            );

          })}

        </div>


      </Container>

    </Section>
  );
}