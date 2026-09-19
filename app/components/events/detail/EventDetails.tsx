import {
  CalendarDays,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";


type EventDetailsProps = {
  event: {
    date: string;
    time: string;
    location: string;
    schedule: string[];
    registration: string;
  };
};



export default function EventDetails({
  event,
}: EventDetailsProps) {


  return (
    <Section
      background="soft"
    >

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Details"
          title="Event Information"
          description="Everything you need to know before joining the event."
        />



        <div
          className="
            mt-12

            grid

            gap-8

            lg:grid-cols-3
          "
        >



          {/* Information cards */}


          <div
            className="
              rounded-3xl

              bg-white

              p-8

              shadow-sm

              border

              border-slate-100
            "
          >

            <CalendarDays
              className="text-blue-600"
              size={28}
            />


            <h3
              className="
                mt-5
              "
            >
              Date
            </h3>


            <p
              className="
                mt-2
              "
            >
              {event.date}
            </p>


          </div>




          <div
            className="
              rounded-3xl

              bg-white

              p-8

              shadow-sm

              border

              border-slate-100
            "
          >

            <Clock
              className="text-blue-600"
              size={28}
            />


            <h3
              className="
                mt-5
              "
            >
              Time
            </h3>


            <p
              className="
                mt-2
              "
            >
              {event.time}
            </p>


          </div>





          <div
            className="
              rounded-3xl

              bg-white

              p-8

              shadow-sm

              border

              border-slate-100
            "
          >

            <MapPin
              className="text-blue-600"
              size={28}
            />


            <h3
              className="
                mt-5
              "
            >
              Location
            </h3>


            <p
              className="
                mt-2
              "
            >
              {event.location}
            </p>


          </div>



        </div>





        {/* Schedule */}


        <div
          className="
            mx-auto

            mt-12

            max-w-3xl

            rounded-3xl

            bg-white

            p-8

            shadow-sm

            border

            border-slate-100
          "
        >


          <h3>
            Event Schedule
          </h3>



          <ul
            className="
              mt-6

              space-y-4
            "
          >

            {event.schedule.map((item) => (

              <li
                key={item}

                className="
                  flex

                  items-center

                  gap-3

                  text-slate-700
                "
              >

                <CheckCircle2
                  size={20}

                  className="
                    text-blue-600
                  "
                />

                {item}


              </li>

            ))}


          </ul>


        </div>





        {/* Registration */}


        <div
          className="
            mt-10

            text-center
          "
        >

          <Button
            href={event.registration}

            size="lg"
          >

            Register For Event

          </Button>


        </div>



      </Container>


    </Section>
  );
}