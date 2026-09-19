import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  MapPin,
} from "lucide-react";


import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";


import { events } from "@/lib/events-content";


export default function EventsGrid() {


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


          {events.map((event) => (

            <Card
              key={event.id}

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
                  src={event.image}
                  alt={event.title}

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

                    left-5

                    top-5
                  "
                >

                  <Badge>
                    {event.category}
                  </Badge>


                </div>


              </div>





              {/* Content */}

              <div
                className="
                  p-6
                "
              >



                <div
                  className="
                    space-y-3

                    text-sm

                    text-slate-500
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
                      size={16}
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

                    <MapPin
                      size={16}
                      className="text-blue-600"
                    />

                    {event.location}

                  </div>


                </div>





                <h3
                  className="
                    mt-5

                    line-clamp-2
                  "
                >

                  {event.title}

                </h3>




                <p
                  className="
                    mt-3

                    line-clamp-3
                  "
                >

                  {event.description}

                </p>





                <Link
                  href={`/events/${event.slug}`}

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

                  View Event →

                </Link>



              </div>


            </Card>


          ))}


        </div>


      </Container>


    </Section>
  );
}