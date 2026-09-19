import {
  CheckCircle2,
  Globe2,
  UsersRound,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { partnerBenefits } from "@/lib/partners-content";



const icons = [
  Globe2,
  UsersRound,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
];



export default function PartnerBenefits() {


  return (
    <Section
      background="soft"
    >


      <Container>


        <SectionHeading
          align="center"
          eyebrow="Why Partner With Us"
          title="Creating Value Through Collaboration"
          description="Together with our partners, we build initiatives that create measurable and lasting impact."
        />




        <div
          className="
            mx-auto

            mt-12

            grid

            max-w-5xl

            gap-6

            md:grid-cols-2

            lg:grid-cols-5
          "
        >



          {partnerBenefits.map(
            (benefit, index) => {


              const Icon =
                icons[index];



              return (
                <div
                  key={benefit}

                  className="
                    rounded-3xl

                    bg-white

                    p-6

                    text-center

                    shadow-sm

                    border

                    border-slate-100

                    transition-all

                    duration-300

                    hover:-translate-y-2
                  "
                >


                  <div
                    className="
                      mx-auto

                      flex

                      h-12

                      w-12

                      items-center

                      justify-center

                      rounded-xl

                      bg-blue-50

                      text-blue-600
                    "
                  >

                    <Icon
                      size={24}
                    />

                  </div>




                  <p
                    className="
                      mt-5

                      font-medium

                      text-slate-700
                    "
                  >

                    {benefit}

                  </p>



                </div>
              );

            }
          )}



        </div>


      </Container>


    </Section>
  );
}