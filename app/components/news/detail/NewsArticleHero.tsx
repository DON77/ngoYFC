import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";


type NewsArticleHeroProps = {
  article: {
    title: string;
    category: string;
    image: string;
    excerpt: string;
    date: string;
    author: string;
  };
};


export default function NewsArticleHero({
  article,
}: NewsArticleHeroProps) {

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
            mx-auto

            max-w-5xl

            text-center
          "
        >


          <Badge>
            {article.category}
          </Badge>




          <h1
            className="
              mt-6

              mx-auto

              max-w-4xl
            "
          >
            {article.title}
          </h1>




          <p
            className="
              mx-auto

              mt-6

              max-w-3xl

              text-lg
            "
          >
            {article.excerpt}
          </p>





          <div
            className="
              mt-8

              flex

              flex-wrap

              justify-center

              gap-x-8

              gap-y-3

              text-sm

              text-slate-500
            "
          >

            <span>
              Published:{" "}
              <strong
                className="
                  text-slate-700
                "
              >
                {article.date}
              </strong>
            </span>


            <span>
              By:{" "}
              <strong
                className="
                  text-slate-700
                "
              >
                {article.author}
              </strong>
            </span>


          </div>





          <div
            className="
              relative

              mt-12

              h-[420px]

              overflow-hidden

              rounded-3xl

              shadow-xl
            "
          >

            <Image
              src={article.image}
              alt={article.title}

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