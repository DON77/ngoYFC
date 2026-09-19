"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { organization } from "@/lib/organization";

export const inquirySubjects = [
  "General inquiry",
  "Partnership",
  "Project participation",
  "Volunteering",
  "Media inquiry",
];

export default function InquiryForm({
  initialSubject,
}: {
  initialSubject: string;
}) {
  const [draftReady, setDraftReady] = useState(false);
  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organization: ${data.get("organization") || "Not provided"}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${organization.email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  }
  return (
    <form
      onSubmit={openEmailDraft}
      className="space-y-6"
      aria-label="Contact inquiry"
    >
      <p id="inquiry-delivery" className="text-sm">
        This form opens a draft in your email app. Review and send it there.
        Nothing is submitted to this website.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Full name (required)
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            className="form-control mt-2"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="field-label">
            Email address (required)
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="form-control mt-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-organization" className="field-label">
          Organization (optional)
        </label>
        <input
          id="contact-organization"
          name="organization"
          autoComplete="organization"
          maxLength={150}
          className="form-control mt-2"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="field-label">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          defaultValue={initialSubject}
          className="form-control mt-2"
        >
          {inquirySubjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="field-label">
          Message (required)
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={1500}
          rows={6}
          className="form-control mt-2"
          aria-describedby="inquiry-delivery"
        />
      </div>
      <Button type="submit">
        <Mail size={18} />
        Open email draft
      </Button>
      {draftReady && (
        <p role="status" className="text-sm">
          Your message has not been sent by this website. Send the draft in your
          email app, or email{" "}
          <a className="underline" href={`mailto:${organization.email}`}>
            {organization.email}
          </a>{" "}
          directly if no draft opened.
        </p>
      )}
    </form>
  );
}
