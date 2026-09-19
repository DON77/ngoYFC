import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import ResourceCatalog from "@/components/ui/ResourceCatalog";
import { publications, publicationCategories } from "@/lib/resources";

export const metadata = { title: "Publications" };
export default function PublicationsPage() {
  return (
    <>
      <PageIntro
        title="Publications"
        description="Guidelines, reports, research and online campaigns."
      />
      <Container>
        <ResourceCatalog
          label="Publications"
          resources={publications}
          categories={publicationCategories}
        />
      </Container>
    </>
  );
}
