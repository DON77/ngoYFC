import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  
} from "react-icons/fa";

import {ExternalLink} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


import {
  socialLinks,
} from "@/lib/contact-content";



const icons = [
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
];



export default function SocialLinks() {


  return (
    <Section>


      <Container>


        <SectionHeading
          align="center"
          eyebrow="Follow Our Work"
          title="Stay Connected"
          description="Follow our channels to discover updates, stories and upcoming initiatives."
        />





        <div
          className="
            mt-10

            flex

            flex-wrap

            justify-center

            gap-5
          "
        >



          {socialLinks.map(
            (social, index) => {


              const Icon =
                icons[index];



              return (
                <a
                  key={social.name}

                  href={social.href}

                  className="
                    group

                    flex

                    items-center

                    gap-3

                    rounded-2xl

                    border

                    border-slate-200

                    bg-white

                    px-6

                    py-4

                    text-slate-700

                    shadow-sm

                    transition-all

                    duration-300

                    hover:-translate-y-1

                    hover:border-blue-200

                    hover:text-blue-600
                  "
                >


                  <Icon
                    size={22}

                    className="
                      transition-colors

                      group-hover:text-blue-600
                    "
                  />



                  <span
                    className="
                      font-medium
                    "
                  >
                    {social.name}
                  </span>



                  <ExternalLink
                    size={16}

                    className="
                      opacity-50
                    "
                  />


                </a>
              );

            }
          )}



        </div>


      </Container>


    </Section>
  );
}