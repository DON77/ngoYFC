import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";


type NewsArticleContentProps = {
  article: {
    content: string;
  };
};


export default function NewsArticleContent({
  article,
}: NewsArticleContentProps) {


  const paragraphs = article.content
    .trim()
    .split("\n")
    .filter(Boolean);



  return (
    <Section>

      <Container>


        <article
          className="
            mx-auto

            max-w-3xl
          "
        >

          {paragraphs.map((paragraph, index) => (

            <p
              key={index}

              className="
                mb-6

                text-lg

                leading-9

                text-slate-700
              "
            >
              {paragraph.trim()}
            </p>

          ))}


        </article>


      </Container>


    </Section>
  );
}