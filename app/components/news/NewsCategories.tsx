import {
  Megaphone,
  FolderOpen,
  CalendarDays,
  Users,
  Newspaper,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { newsCategories } from "@/lib/news-content";


const icons = [
  Newspaper,
  Megaphone,
  FolderOpen,
  CalendarDays,
  Users,
];


export default function NewsCategories() {

  return (
    <Section>

      <Container>


        <div
          className="
            flex

            flex-wrap

            justify-center

            gap-4
          "
        >

          {newsCategories.map((category, index) => {

            const Icon =
              icons[index % icons.length];


            return (
              <button
                key={category}

                className="
                  group

                  flex

                  items-center

                  gap-3

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

                  hover:border-blue-500

                  hover:bg-blue-50

                  hover:text-blue-600
                "
              >

                <Icon
                  size={18}

                  className="
                    transition-transform

                    duration-300

                    group-hover:scale-110
                  "
                />

                {category}

              </button>
            );

          })}


        </div>


      </Container>

    </Section>
  );
}