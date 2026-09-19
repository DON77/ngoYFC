import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";


export default function ContactForm() {


  return (
    <Section
      background="soft"
    >

      <Container>


        <SectionHeading
          align="center"
          eyebrow="Send A Message"
          title="How Can We Help?"
          description="Tell us about your idea, question or collaboration opportunity."
        />




        <form
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

            md:p-10
          "
        >



          <div
            className="
              grid

              gap-6

              md:grid-cols-2
            "
          >


            {/* Name */}

            <div>

              <label
                className="
                  mb-2

                  block

                  text-sm

                  font-medium

                  text-slate-700
                "
              >
                Full Name
              </label>


              <input
                type="text"

                placeholder="Your name"

                className="
                  w-full

                  rounded-xl

                  border

                  border-slate-200

                  px-4

                  py-3

                  outline-none

                  transition

                  focus:border-blue-500

                  focus:ring-2

                  focus:ring-blue-100
                "
              />

            </div>





            {/* Email */}

            <div>

              <label
                className="
                  mb-2

                  block

                  text-sm

                  font-medium

                  text-slate-700
                "
              >
                Email Address
              </label>


              <input
                type="email"

                placeholder="you@example.com"

                className="
                  w-full

                  rounded-xl

                  border

                  border-slate-200

                  px-4

                  py-3

                  outline-none

                  transition

                  focus:border-blue-500

                  focus:ring-2

                  focus:ring-blue-100
                "
              />

            </div>



          </div>






          {/* Organization */}


          <div
            className="
              mt-6
            "
          >

            <label
              className="
                mb-2

                block

                text-sm

                font-medium

                text-slate-700
              "
            >
              Organization (Optional)
            </label>


            <input
              type="text"

              placeholder="Organization name"

              className="
                w-full

                rounded-xl

                border

                border-slate-200

                px-4

                py-3

                outline-none

                transition

                focus:border-blue-500

                focus:ring-2

                focus:ring-blue-100
              "
            />


          </div>






          {/* Subject */}


          <div
            className="
              mt-6
            "
          >

            <label
              className="
                mb-2

                block

                text-sm

                font-medium

                text-slate-700
              "
            >
              Subject
            </label>


            <select

              className="
                w-full

                rounded-xl

                border

                border-slate-200

                bg-white

                px-4

                py-3

                outline-none

                transition

                focus:border-blue-500

                focus:ring-2

                focus:ring-blue-100
              "
            >

              <option>
                General Question
              </option>


              <option>
                Partnership Opportunity
              </option>


              <option>
                Volunteer Interest
              </option>


              <option>
                Project Collaboration
              </option>


            </select>


          </div>






          {/* Message */}


          <div
            className="
              mt-6
            "
          >

            <label
              className="
                mb-2

                block

                text-sm

                font-medium

                text-slate-700
              "
            >
              Message
            </label>


            <textarea

              rows={6}

              placeholder="Write your message..."

              className="
                w-full

                resize-none

                rounded-xl

                border

                border-slate-200

                px-4

                py-3

                outline-none

                transition

                focus:border-blue-500

                focus:ring-2

                focus:ring-blue-100
              "
            />


          </div>






          {/* Submit */}


          <div
            className="
              mt-8

              text-center
            "
          >

            <Button
              size="lg"
            >

              Send Message

            </Button>


          </div>




        </form>


      </Container>


    </Section>
  );
}