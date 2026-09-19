"use client";

import Button from "@/components/ui/Button";
import { organization } from "@/lib/organization";

const fields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  {
    name: "birth-date",
    label: "Date of birth",
    type: "date",
    autoComplete: "bday",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    autoComplete: "address-level2",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
  },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  { name: "language", label: "Preferred language", type: "text" },
  {
    name: "occupation",
    label: "Education or current occupation",
    type: "text",
  },
  {
    name: "availability",
    label: "Availability (days and hours)",
    type: "text",
  },
];
const questions = [
  ["experience", "Interests and experience"],
  ["motivation", "Motivation and preferred roles"],
  ["accessibility", "Accessibility or accommodation needs (optional)"],
  ["emergency", "Emergency contact name, relationship and phone number"],
];

export default function VolunteerApplication() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      aria-describedby="application-status"
    >
      <p
        id="application-status"
        className="mb-8 border-l-4 border-teal-600 bg-teal-50 p-5"
      >
        Online applications are not open yet. To ask about volunteering, contact{" "}
        <a
          href={`mailto:${organization.email}?subject=Volunteering`}
          className="font-semibold underline"
        >
          {organization.email}
        </a>
        . Please do not email sensitive personal information. The application
        fields below are inactive and do not collect data.
      </p>
      <fieldset disabled className="space-y-6">
        <legend className="mb-6 text-lg font-semibold">
          Volunteer application
        </legend>
        <div className="grid gap-6 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={`volunteer-${field.name}`}
                className="field-label"
              >
                {field.label}
              </label>
              <input
                id={`volunteer-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                className="form-control mt-2"
              />
            </div>
          ))}
        </div>
        {questions.map(([name, label]) => (
          <div key={name}>
            <label htmlFor={`volunteer-${name}`} className="field-label">
              {label}
            </label>
            <textarea
              id={`volunteer-${name}`}
              name={name}
              rows={3}
              className="form-control mt-2"
            />
          </div>
        ))}
        <div>
          <label htmlFor="volunteer-mode" className="field-label">
            Participation preference
          </label>
          <select id="volunteer-mode" name="mode" className="form-control mt-2">
            <option value="">Select a preference</option>
            <option>Remote</option>
            <option>In person</option>
            <option>Either</option>
          </select>
        </div>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="data-consent"
            className="mt-1 h-4 w-4 shrink-0"
          />
          I consent to processing my personal data for this application. Privacy
          terms are pending publication.
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="values-consent"
            className="mt-1 h-4 w-4 shrink-0"
          />
          I agree to Youth for Change&apos;s values and volunteer policies.
          Volunteer policies are pending publication.
        </label>
        <Button disabled type="submit">
          Submit Application
        </Button>
      </fieldset>
    </form>
  );
}
