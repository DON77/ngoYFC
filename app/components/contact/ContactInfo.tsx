import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";


import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";


import {
  contactInfo,
} from "@/lib/contact-content";



const icons = [
  MapPin,
  Mail,
  Phone,
];



export default function ContactInfo() {


  return (
    <Section>


      <Container>


        <SectionHeading
          align="center"
          eyebrow="Contact Information"
          title="Get In Touch With Us"
          description="Reach out through any of the following channels and our team will get back to you."
        />




        <div
          className="
            mt-12

            grid

            gap-8

            md:grid-cols-3
          "
        >



          {contactInfo.map(
            (item, index) => {


              const Icon =
                icons[index];



              return (
                <Card
                  key={item.title}

                  className="
                    text-center

                    transition-all

                    duration-300

                    hover:-translate-y-2
                  "
                >



                  <div
                    className="
                      mx-auto

                      flex

                      h-14

                      w-14

                      items-center

                      justify-center

                      rounded-2xl

                      bg-blue-50

                      text-blue-600
                    "
                  >

                    <Icon
                      size={28}
                    />

                  </div>





                  <h3
                    className="
                      mt-6
                    "
                  >

                    {item.title}

                  </h3>





                  <p
                    className="
                      mt-3

                      font-medium

                      text-slate-800
                    "
                  >

                    {item.value}

                  </p>





                  <p
                    className="
                      mt-2

                      text-sm
                    "
                  >

                    {item.description}

                  </p>



                </Card>
              );

            }
          )}



        </div>


      </Container>


    </Section>
  );
}