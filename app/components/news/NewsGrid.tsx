import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { newsArticles } from "@/lib/news-content";


export default function NewsGrid() {

  return (
    <Section
      background="soft"
    >

      <Container>


        <div
          className="
            grid

            gap-8

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {newsArticles.map((article) => (

            <Card
              key={article.id}

              className="
                group

                overflow-hidden

                p-0

                transition-all

                duration-300

                hover:-translate-y-2
              "
            >


              {/* Image */}

              <div
                className="
                  relative

                  h-64

                  overflow-hidden
                "
              >

                <Image
                  src={article.image}
                  alt={article.title}
                  fill

                  className="
                    object-cover

                    transition-transform

                    duration-500

                    group-hover:scale-110
                  "
                />


              </div>




              {/* Content */}

              <div
                className="
                  p-6
                "
              >


                <div
                  className="
                    flex

                    items-center

                    justify-between

                    gap-4
                  "
                >

                  <Badge>
                    {article.category}
                  </Badge>


                  <span
                    className="
                      text-sm

                      text-slate-500
                    "
                  >
                    {article.date}
                  </span>


                </div>




                <h3
                  className="
                    mt-5

                    line-clamp-2
                  "
                >
                  {article.title}
                </h3>




                <p
                  className="
                    mt-3

                    line-clamp-3
                  "
                >
                  {article.excerpt}
                </p>





                <Link
                  href={`/news/${article.slug}`}

                  className="
                    mt-6

                    inline-flex

                    items-center

                    text-sm

                    font-semibold

                    text-blue-600

                    transition-colors

                    hover:text-blue-800
                  "
                >
                  Read Article →
                </Link>



              </div>


            </Card>

          ))}


        </div>


      </Container>


    </Section>
  );
}