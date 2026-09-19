import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";

import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";

import { latestNews } from "@/lib/home-content";

export default function LatestNews() {
  const [featured, ...articles] = latestNews;

  return (
    <Section background="soft">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Latest News"
          title="Stories From Our Community"
          description="Stay informed about our latest projects, partnerships, achievements and opportunities."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Featured Article */}

          <Card
            className="overflow-hidden lg:col-span-3"
            padding="sm"
          >
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <Badge>Featured</Badge>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={16} />
                {featured.date}
              </div>

              <h3 className="mt-4 text-3xl">
                {featured.title}
              </h3>

              <p className="mt-4">
                {featured.excerpt}
              </p>

              <Button
                href="/news"
                variant="ghost"
                className="mt-6 px-0 text-blue-600 hover:bg-transparent"
              >
                Read Article
                <ArrowRight size={18} />
              </Button>
            </div>
          </Card>

          {/* Secondary Articles */}

          <div className="space-y-8 lg:col-span-2">
            {articles.map((article) => (
              <Card
                key={article.id}
                padding="sm"
                className="overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={15} />
                    {article.date}
                  </div>

                  <h3 className="mt-3 text-xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Button
                    href="/news"
                    variant="ghost"
                    className="mt-4 px-0 text-blue-600 hover:bg-transparent"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button href="/news" size="lg">
            View All News
          </Button>
        </div>
      </Container>
    </Section>
  );
}