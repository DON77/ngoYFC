import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import ResourceCatalog from "@/components/ui/ResourceCatalog";
import { reports, reportCategories } from "@/lib/resources";
import content from "@/lib/document-content.json";

export const metadata = { title: "Reports" };
export default function ReportsPage() {
  return (
    <>
      <PageIntro
        title="Reports"
        eyebrow="About Us"
        description={content.about.reportsIntroduction}
      />
      <Container>
        <ResourceCatalog
          label="Organizational reports"
          resources={reports}
          categories={reportCategories}
        />
      </Container>
    </>
  );
}
