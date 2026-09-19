import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";

import { upcomingEvents } from "@/lib/home-content";

export default function UpcomingEvents() {
  return (
    <Section>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Upcoming Events"
          title="Meet Us At Our Next Events"
          description="Join workshops, forums, volunteering activities and community initiatives happening throughout the year."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">

          {/* Timeline line */}

          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-px
              bg-blue-200
            "
          />

          <div className="space-y-10">

            {upcomingEvents.map((event) => (

              <div
                key={event.id}
                className="
                  relative

                  rounded-3xl

                  border
                  border-slate-200

                  bg-white

                  p-8

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-3
                    top-10

                    h-6
                    w-6

                    rounded-full

                    border-4
                    border-white

                    bg-blue-600

                    shadow-md
                  "
                />

                <div className="ml-10">

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-5

                      text-sm
                      text-slate-500
                    "
                  >

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {event.location}
                    </div>

                  </div>

                  <h3 className="mt-4">
                    {event.title}
                  </h3>

                  <p className="mt-4">
                    {event.description}
                  </p>

                  <Button
                    href="/events"
                    variant="ghost"
                    className="mt-6 px-0 text-blue-600 hover:bg-transparent"
                  >
                    Learn More

                    <ArrowRight size={18} />
                  </Button>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-16 text-center">

          <Button
            href="/events"
            size="lg"
          >
            View All Events
          </Button>

        </div>

      </Container>
    </Section>
  );
}