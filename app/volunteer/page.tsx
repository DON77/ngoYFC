import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import Button from "@/components/ui/Button";
import VolunteerApplication from "@/components/contact/VolunteerApplication";
import content from "@/lib/document-content.json";

export const metadata = { title: "Volunteer With Us" };
const volunteer = content.volunteer;
const sections = [
  {
    title: "Who we're looking for",
    items: volunteer.profile,
    note: volunteer.experience,
  },
  { title: "Where you can contribute", items: volunteer.roles },
  {
    title: "What you'll gain",
    items: volunteer.benefits,
    note: volunteer.international,
  },
  { title: "What we ask of volunteers", items: volunteer.expectations },
];

export default function VolunteerPage() {
  return (
    <>
      <PageIntro
        title="Volunteer With Youth for Change"
        description="Show up. Learn. Change something."
      />
      <Container>
        <div className="max-w-4xl py-12">
          <p>{volunteer.introduction}</p>
          <div className="mt-6">
            <Button href="#application">Apply to Volunteer</Button>
          </div>
          {sections.map((section) => (
            <section
              key={section.title}
              className="mt-12 border-t border-slate-200 pt-8"
            >
              <h2 className="section-title">{section.title}</h2>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
                {section.items.map((item) => (
                  <li key={item} className="pl-2 leading-7">
                    {item}
                  </li>
                ))}
              </ul>
              {section.note && <p className="mt-6">{section.note}</p>}
            </section>
          ))}
          <section className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="section-title">How to join</h2>
            <ol className="mt-6 list-decimal space-y-4 pl-6 text-slate-700">
              {volunteer.steps.map((step) => (
                <li key={step} className="pl-2 leading-7">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6">{volunteer.placement}</p>
            <p className="mt-5">{volunteer.inclusion}</p>
          </section>
          <section
            id="application"
            className="mt-14 border-t border-slate-200 pt-10"
          >
            <h2 className="section-title mb-6">Apply to volunteer</h2>
            <VolunteerApplication />
          </section>
        </div>
      </Container>
    </>
  );
}
