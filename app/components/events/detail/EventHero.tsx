import Image from "next/image";

import {
  CalendarDays,
  MapPin,
  Clock,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";


type EventHeroProps = {
  event: {
    title: string;
    category: string;
    image: string;
    description: string;
    date: string;
    time: string;
    location: string;
  };
};


export default function EventHero({
  event,
}: EventHeroProps) {


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
            {event.category}
          </Badge>




          <h1
            className="
              mt-6
            "
          >
            {event.title}
          </h1>




          <p
            className="
              mx-auto

              mt-6

              max-w-3xl

              text-lg
            "
          >
            {event.description}
          </p>





          <div
            className="
              mt-8

              flex

              flex-wrap

              justify-center

              gap-6

              text-sm

              text-slate-600
            "
          >


            <div
              className="
                flex

                items-center

                gap-2
              "
            >

              <CalendarDays
                size={18}
                className="text-blue-600"
              />

              {event.date}

            </div>




            <div
              className="
                flex

                items-center

                gap-2
              "
            >

              <Clock
                size={18}
                className="text-blue-600"
              />

              {event.time}

            </div>




            <div
              className="
                flex

                items-center

                gap-2
              "
            >

              <MapPin
                size={18}
                className="text-blue-600"
              />

              {event.location}

            </div>


          </div>





          <div
            className="
              relative

              mt-12

              h-[450px]

              overflow-hidden

              rounded-3xl

              shadow-xl
            "
          >

            <Image
              src={event.image}

              alt={event.title}

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