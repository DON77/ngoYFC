import json
from pathlib import Path
import xml.etree.ElementTree as ElementTree
import zipfile

root_path = Path(__file__).resolve().parents[1]
namespace = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
with zipfile.ZipFile(root_path / "content-source/NGO_Comments_restructure.docx") as document:
    root = ElementTree.fromstring(document.read("word/document.xml"))


def text(element):
    return "".join(node.text or "" for node in element.findall(".//w:t", namespace)).strip()


paragraphs = [text(element) for element in root.findall(".//w:body/w:p", namespace)]


def section(start, end):
    return [paragraph for paragraph in paragraphs[start:end] if paragraph]


assert paragraphs[0] == "Home page"
assert paragraphs[335] == "Publications"
assert paragraphs[418] == "How to Join"

project_definitions = [
    (105, "Democracy Coffee Talks", "democracy-coffee-talks"),
    (119, "Youth-Led Oversight for Transparent 2026 Elections in Armenia", "youth-led-election-oversight"),
    (130, "Digital Shield", "digital-shield"),
    (142, "Voices of Participatory Budgeting", "voices-of-participatory-budgeting"),
    (154, "Equal Voices, Equal Rights", "equal-voices-equal-rights"),
    (165, "Together with Ukraine", "together-with-ukraine"),
    (177, "COVID-19: Civil Society Resilience and Sustainability", "civil-society-resilience"),
    (189, "Youth Inclusion through Employability", "youth-inclusion-through-employability"),
    (201, "GROW Job Expo - Volume 4", "grow-job-expo-4"),
    (215, "Youth for Community Development: Youth Voice Matters", "youth-voice-matters"),
    (227, "Women for Community Development", "women-for-community-development"),
    (239, "GROW Job Expo - Volume 3", "grow-job-expo-3"),
    (253, "Young Women Leadership Academy", "young-women-leadership-academy"),
    (264, "Volunteer Opportunity Fair", "volunteer-opportunity-fair"),
    (276, "GROW Conference & Job Fair - Volume 2", "grow-conference-job-fair-2"),
    (289, "GROW Conference & Job Fair", "grow-conference-job-fair"),
    (301, "Step by Step with Successful People - Volume 5", "step-by-step-5"),
    (313, "TEDxUFAR", "tedxufar"),
    (324, "STEP Femme", "step-femme"),
]
projects = []
for index, (start, title, slug) in enumerate(project_definitions):
    end = project_definitions[index + 1][0] if index + 1 < len(project_definitions) else 335
    if start == 105:
        end = 116
    assert paragraphs[start].startswith(title), title
    metadata = paragraphs[start][len(title):].strip()
    current = metadata.startswith("Ongoing")
    metadata = metadata.removeprefix("Ongoing").removeprefix("Completed").strip(" |")
    period, location = [part.strip() for part in metadata.split("|", 1)]
    body = section(start + 1, end)
    results_heading = "Planned Activities and Expected Results" if current else "Key Results"
    divider = body.index(results_heading)
    projects.append({
        "slug": slug,
        "title": title,
        "status": "Current" if current else "Completed",
        "period": period,
        "location": location,
        "paragraphs": body[:divider],
        "resultsHeading": results_heading,
        "results": body[divider + 1:-1],
        "acknowledgment": body[-1],
    })

values = []
for row in root.findall(".//w:tbl/w:tr", namespace):
    cells = [text(cell) for cell in row.findall("w:tc", namespace)]
    if len(cells) == 2 and cells[0]:
        values.append({"title": cells[0], "description": cells[1]})

content = {
    "home": {
        "introduction": paragraphs[8].removeprefix("Supporting text - "),
        "focusIntroduction": paragraphs[14].removeprefix("Supporting text - "),
        "focusAreas": section(15, 21),
        "newsletter": paragraphs[38],
    },
    "about": {
        "paragraphs": section(57, 61),
        "vision": paragraphs[62].removeprefix("Our vision - "),
        "mission": paragraphs[64].removeprefix("Our mission - "),
        "values": values,
        "teamHeading": paragraphs[70],
        "teamIntroduction": section(71, 73),
        "board": paragraphs[79],
        "partnershipIntroduction": section(86, 89),
        "partnershipInvitation": section(90, 93),
        "reportsIntroduction": paragraphs[98],
    },
    "projectsIntroduction": paragraphs[103],
    "projects": projects,
    "volunteer": {
        "introduction": paragraphs[381],
        "sectionIntroductions": [
            {"title": title, "text": paragraphs[index].removeprefix(title)}
            for index, title in [
                (383, "Is This For You?"),
                (391, "Ways to Get Involved"),
                (398, "What You Take Away"),
                (409, "What We Ask in Return"),
            ]
        ],
        "profile": section(384, 390),
        "experience": paragraphs[390],
        "roles": section(392, 398),
        "benefits": section(399, 408),
        "international": paragraphs[408],
        "expectations": section(410, 418),
        "steps": section(419, 424),
        "placement": paragraphs[424],
        "inclusion": paragraphs[425],
    },
}
assert len(values) == 8
assert len(projects) == 19
assert all(project["results"] and project["acknowledgment"] for project in projects)
output = root_path / "lib/document-content.json"
output.write_text(json.dumps(content, ensure_ascii=True, indent=2) + "\n")
print(f"Imported {len(projects)} projects and {len(values)} values into {output.relative_to(root_path)}")