import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import Button from "@/components/ui/Button";
import PartnerDirectory from "@/components/about/PartnerDirectory";
import content from "@/lib/document-content.json";

export const metadata = { title: "Donors and Partners" };
export default function PartnersPage() {
  return (
    <>
      <PageIntro title="Donors and Partners" eyebrow="About Us" />
      <Container>
        <section className="max-w-4xl py-12">
          <div className="space-y-5">
            {content.about.partnershipIntroduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <PartnerDirectory />
        </section>
      </Container>
      <section className="border-t border-teal-200 bg-teal-50 py-12">
        <Container>
          <h2 className="section-title">Become a Partner</h2>
          <div className="my-6 max-w-4xl space-y-4">
            {content.about.partnershipInvitation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button href="/contact?subject=Partnership">Become a Partner</Button>
        </Container>
      </section>
    </>
  );
}
