import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

import { featuredProjects } from "@/lib/home-content";

export default function FeaturedProjects() {
  return (
    <Section background="soft">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Projects"
          title="Creating Real Impact Through Action"
          description="Every initiative is designed to empower young people, strengthen communities, and create long-term positive change."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              padding="sm"
              className="overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="mt-6">
                <Badge>{project.category}</Badge>

                <h3 className="mt-4">
                  {project.title}
                </h3>

                <p className="mt-4">
                  {project.description}
                </p>

                <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">
                    Impact
                  </p>

                  <p className="mt-1 font-semibold text-blue-700">
                    {project.impact}
                  </p>
                </div>

                <Button
                  href="/projects"
                  variant="ghost"
                  className="mt-6 px-0 text-blue-600 hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/projects" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}