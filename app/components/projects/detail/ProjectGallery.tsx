import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


type ProjectGalleryProps = {
  project: {
    title: string;
    gallery: string[];
  };
};


export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {

  return (
    <Section>

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="Project Moments"
          description="A glimpse into the activities, people and communities involved in this initiative."
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

          {project.gallery.map((image, index) => (

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
                alt={`${project.title} image ${index + 1}`}
                fill

                className="
                  object-cover

                  transition-transform

                  duration-500

                  group-hover:scale-110
                "
              />


              {/* Overlay */}

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