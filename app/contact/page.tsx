import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata = { title: "Contact Us" };
const subjects = [
  "General inquiry",
  "Partnership",
  "Project participation",
  "Volunteering",
  "Media inquiry",
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string | string[] }>;
}) {
  const { subject } = await searchParams;
  const initialSubject =
    typeof subject === "string" && subjects.includes(subject)
      ? subject
      : "General inquiry";
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <Section background="soft">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Send A Message"
            title="How Can We Help?"
            description="Tell us about your idea, question or collaboration opportunity."
          />
          <div id="contact-form" className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
            <InquiryForm key={initialSubject} initialSubject={initialSubject} />
          </div>
        </Container>
      </Section>
      <SocialLinks />
    </>
  );
}
