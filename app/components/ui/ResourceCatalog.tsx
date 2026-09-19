"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import type { Resource } from "@/lib/resources";

export default function ResourceCatalog({
  resources,
  categories,
  label,
}: {
  resources: Resource[];
  categories: string[];
  label: string;
}) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const filtered = resources
    .filter((resource) => category === "All" || resource.category === category)
    .sort((first, second) =>
      sort === "newest"
        ? second.date.localeCompare(first.date)
        : first.date.localeCompare(second.date),
    );
  return (
    <section aria-label={label} className="py-12">
      <div className="flex flex-wrap items-end gap-5 border-b border-slate-200 pb-6">
        <div>
          <label htmlFor="resource-category" className="field-label">
            Category
          </label>
          <select
            id="resource-category"
            className="form-control mt-2"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {["All", ...categories].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="resource-sort" className="field-label">
            Date
          </label>
          <select
            id="resource-sort"
            className="form-control mt-2"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <p className="text-sm" role="status">
          {filtered.length} {filtered.length === 1 ? "document" : "documents"}
        </p>
      </div>
      {filtered.length ? (
        <div className="divide-y divide-slate-200">
          {filtered.map((resource) => (
            <article key={resource.id} className="py-8">
              <p className="text-sm">
                {resource.category} ·{" "}
                <time dateTime={resource.date}>
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  }).format(new Date(resource.date))}
                </time>
              </p>
              <h2 className="mt-3 text-2xl">{resource.title}</h2>
              <p className="mt-3 max-w-3xl">{resource.description}</p>
              <div className="mt-5 flex gap-6 text-sm font-semibold text-blue-700">
                <a
                  href={resource.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  aria-label={`View ${resource.title} (opens in a new tab)`}
                >
                  <ExternalLink size={18} />
                  View
                </a>
                <a
                  href={resource.downloadUrl}
                  download
                  className="inline-flex items-center gap-2"
                  aria-label={`Download ${resource.title}`}
                >
                  <Download size={18} />
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-16">
          <FileText size={32} className="mb-5 text-teal-700" />
          <h2 className="text-2xl">
            {resources.length
              ? "No matching documents"
              : "Documents coming soon"}
          </h2>
          <p className="mt-3">
            {resources.length
              ? "No documents are available in this category."
              : "Check back for published resources from Youth for Change."}
          </p>
        </div>
      )}
    </section>
  );
}
