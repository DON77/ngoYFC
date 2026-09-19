import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


type NewsArticleGalleryProps = {
  article: {
    title: string;
    gallery?: string[];
  };
};


export default function NewsArticleGallery({
  article,
}: NewsArticleGalleryProps) {


  if (!article.gallery || article.gallery.length === 0) {
    return null;
  }



  return (
    <Section
      background="soft"
    >

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="Moments From The Story"
          description="Highlights and moments captured during our activities."
        />



        <div
          className="
            mt-12

            grid

            gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {article.gallery
            .filter(Boolean)
            .map((image, index) => (

              <div
                key={index}

                className="
                  group

                  relative

                  h-80

                  overflow-hidden

                  rounded-3xl
                "
              >

                <Image
                  src={image}
                  alt={`${article.title} image ${index + 1}`}

                  fill

                  className="
                    object-cover

                    transition-transform

                    duration-500

                    group-hover:scale-110
                  "
                />


                <div
                  className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-black/30

                    via-transparent

                    opacity-0

                    transition-opacity

                    duration-300

                    group-hover:opacity-100
                  "
                />

              </div>

            ))}


        </div>


      </Container>


    </Section>
  );
}