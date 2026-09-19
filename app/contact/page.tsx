import { MapPin, Mail, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import InquiryForm from "@/components/contact/InquiryForm";
import { organization } from "@/lib/organization";

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
      <PageIntro
        title="Contact Us"
        description="Tell us about your idea, question or collaboration opportunity."
      />
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_1.6fr]">
          <section aria-label="Contact information">
            <h2 className="section-title">Let&apos;s connect</h2>
            <div className="mt-6 flex gap-3">
              <MapPin className="mt-1 shrink-0 text-teal-700" size={22} />
              <address className="not-italic leading-7">
                {organization.address}
              </address>
            </div>
            <a
              href={`mailto:${organization.email}`}
              className="mt-6 flex items-center gap-3 font-semibold text-blue-700"
            >
              <Mail size={22} />
              {organization.email}
            </a>
            <h3 className="mt-10 text-lg">Follow Youth for Change</h3>
            <ul className="mt-4 space-y-4">
              {organization.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700"
                    aria-label={`${social.name} (opens in a new tab)`}
                  >
                    {social.name}
                    <ExternalLink size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section id="contact-form">
            <h2 className="section-title mb-6">Send a message</h2>
            <InquiryForm key={initialSubject} initialSubject={initialSubject} />
          </section>
        </div>
      </Container>
    </>
  );
}
