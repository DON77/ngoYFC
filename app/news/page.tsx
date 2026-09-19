import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";

export const metadata = { title: "News" };
export default function NewsPage() {
  return (
    <>
      <PageIntro title="News" />
      <Container>
        <section className="min-h-64 py-16">
          <h2 className="section-title">Coming soon</h2>
          <p className="mt-4">
            News and updates from Youth for Change will be published here.
          </p>
        </section>
      </Container>
    </>
  );
}
