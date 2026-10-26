import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const content = JSON.parse(
  await readFile(
    new URL("../lib/document-content.json", import.meta.url),
    "utf8",
  ),
);
const baseUrl = process.env.TEST_BASE_URL || "http://localhost:3001";
const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;");

test("source archive contains all projects and values", () => {
  assert.equal(content.projects.length, 19);
  assert.equal(
    new Set(content.projects.map((project) => project.slug)).size,
    19,
  );
  assert.equal(
    content.projects.filter((project) => project.status === "Current").length,
    1,
  );
  assert.equal(content.about.values.length, 8);
  for (const project of content.projects) {
    assert.ok(project.period && project.location && project.acknowledgment);
    assert.ok(project.paragraphs.length && project.results.length);
  }
});

test("supplied team and volunteer introductions are preserved", () => {
  assert.equal(content.about.teamHeading, "Meet the people behind Youth for Change");
  assert.deepEqual(content.volunteer.sectionIntroductions.map((section) => section.title), [
    "Is This For You?", "Ways to Get Involved", "What You Take Away", "What We Ask in Return",
  ]);
  for (const section of content.volunteer.sectionIntroductions) {
    assert.ok(section.text.length > 30);
  }
});

test("supplied introductions render on their pages", async () => {
  for (const [path, texts] of [
    ["/about/team", [content.about.teamHeading]],
    ["/volunteer", content.volunteer.sectionIntroductions.flatMap((section) => [section.title, section.text])],
  ]) {
    const response = await fetch(new URL(path, baseUrl), { signal: AbortSignal.timeout(60000) });
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const text of texts) assert.ok(html.includes(escapeHtml(text)), `Missing supplied copy: ${text}`);
  }
});

test("home retains original hero styling and approved content changes", async () => {
  const response = await fetch(new URL("/", baseUrl), {
    signal: AbortSignal.timeout(60000),
  });
  assert.equal(response.status, 200);
  const html = await response.text();
  const main = html.slice(html.indexOf("<main"), html.indexOf("</main>"));
  assert.match(main, /<h1\b[^>]*>\s*Youth for Change\s*<\/h1>/);
  for (const text of [
    "Youth for Change",
    "Empowering Youth. Creating Change.",
    content.home.introduction,
    content.home.focusIntroduction,
    ...content.home.focusAreas,
    "40+", "Projects Implemented", "2,000+", "Direct Participants",
    "100+", "Trainings and Events", "50+", "Communities Reached",
    "Explore Our Work", "Get Involved", "Be part of the change",
    "Find an Opportunity", "Volunteer With Us", "Become a Partner",
    content.home.newsletter,
  ]) {
    assert.ok(main.includes(escapeHtml(text)), `Missing Home copy: ${text}`);
  }
  for (const removed of [
    "Building Tomorrow Through Youth, Innovation & Community",
    "Joined by", "8,500+", "Creating Real Impact Through Action",
    "Guided by Vision, Driven by Mission", "Stories From Our Community",
    "Meet Us At Our Next Events", "Together We Can Create Lasting Change",
    "Trusted by Organizations That Believe in Youth",
  ]) {
    assert.ok(!main.includes(escapeHtml(removed)), `Deleted Home content returned: ${removed}`);
  }
  assert.ok(main.includes("Screenshot-2026-03-26-at-10.52.58-scaled.png"));
  assert.ok(main.includes("h-[520px]"));
  assert.ok(main.includes("animate-fade-up"));
  assert.ok(main.includes("-bottom-6"));
  for (const href of ["/projects", "/contact", "/projects#current", "/volunteer", "/contact?subject=Partnership"]) {
    assert.ok(main.includes(`href="${href}"`), `Missing Home destination: ${href}`);
  }
  assert.match(main, /<input[^>]*id="newsletter-email"[^>]*disabled/);
});

for (const [path, heading] of [
  ["/", "Youth for Change"],
  ["/about", "About Youth for Change"],
  ["/about/team", "Our Team"],
  ["/about/partners", "Donors and Partners"],
  ["/about/reports", "Reports"],
  ["/projects", "Our Projects"],
  ["/publications", "Publications"],
  ["/news", "Coming soon"],
  ["/contact?subject=Partnership", "Contact Us"],
  ["/volunteer", "Volunteer With Youth for Change"],
]) {
  test(`public route ${path}`, async () => {
    const response = await fetch(new URL(path, baseUrl), {
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(heading));
    assert.ok(html.includes('id="main-content"'));
    assert.ok(html.includes("info@yfcngo.org"));
    assert.ok(!html.includes("NGO Name"));
    assert.ok(!html.includes("hello@ngoname.org"));
  });
}

for (const project of content.projects) {
  test(`complete project content: ${project.slug}`, async () => {
    const response = await fetch(
      new URL(`/projects/${project.slug}`, baseUrl),
      { signal: AbortSignal.timeout(60000) },
    );
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const text of [
      project.title,
      ...project.paragraphs,
      ...project.results,
      project.acknowledgment,
    ]) {
      assert.ok(
        html.includes(escapeHtml(text)),
        `Missing project text: ${text}`,
      );
    }
  });
}

for (const [path, destination] of [
  ["/partners", "/about/partners"],
  ["/events", "/projects#current"],
  ["/donate", "/contact"],
  ["/get-involved", "/volunteer"],
]) {
  test(`legacy redirect ${path}`, async () => {
    const response = await fetch(new URL(path, baseUrl), {
      redirect: "manual",
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), destination);
  });
}

for (const path of [
  "/news/demo-story",
  "/events/demo-event",
  "/projects/missing-project",
]) {
  test(`missing content ${path} returns 404`, async () => {
    const response = await fetch(new URL(path, baseUrl), {
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(response.status, 404);
  });
}
