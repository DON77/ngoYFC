"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section aria-label={label} className="grid gap-10 py-12 lg:grid-cols-[14rem_minmax(0,1fr)]">
      <aside className="border-b border-slate-200 pb-6 lg:border-b-0 lg:border-r lg:pr-6">
        <fieldset>
          <legend className="mb-5 text-lg font-semibold">Categories</legend>
          <div className="flex flex-wrap gap-4 lg:flex-col">
            {["All", ...categories].map((value) => (
              <label key={value} className="flex cursor-pointer items-center gap-3 text-sm">
                <input type="radio" name="resource-category" value={value} checked={category === value} onChange={() => setCategory(value)} className="h-4 w-4 shrink-0 accent-blue-600" />
                {value}
              </label>
            ))}
          </div>
        </fieldset>
      </aside>
      <div className="min-w-0">
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-slate-200 pb-6">
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
        <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((resource) => (
            <article key={resource.id} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[3/4] border-b border-slate-200 bg-slate-50">
                {resource.cover ? (
                  <Image src={resource.cover.src} alt={resource.cover.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-contain p-4" />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-400" aria-label="No cover image available">
                    <FileText size={64} aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
              <p className="text-xs">
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
              <h2 className="mt-3 text-xl">{resource.title}</h2>
              {resource.language && <p className="mt-2 text-sm">{resource.language}</p>}
              <p className="mt-3 max-w-3xl">{resource.description}</p>
              <div className="mt-auto flex flex-wrap gap-5 pt-5 text-sm font-semibold text-blue-700">
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
      </div>
    </section>
  );
}
