"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  donorsAndPartners,
  networksAndCoalitions,
} from "@/lib/partner-directory";

export default function PartnerDirectory() {
  const [index, setIndex] = useState(0);
  const partner = donorsAndPartners[index];
  return (
    <>
      <section className="mt-12" aria-label="Donors and partners">
        <h2 className="section-title">Our donors and partners</h2>
        {partner ? (
          <div className="mt-8" aria-roledescription="carousel">
            <div aria-live="polite" aria-atomic="true">
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm flex-col items-center gap-4"
                aria-label={`${partner.name} (opens in a new tab)`}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="384px"
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-semibold">{partner.name}</span>
              </a>
            </div>
            {donorsAndPartners.length > 1 && (
              <div className="mt-6 flex items-center gap-4">
                <button
                  type="button"
                  title="Previous partner"
                  aria-label="Previous partner"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300"
                  onClick={() =>
                    setIndex(
                      (current) =>
                        (current - 1 + donorsAndPartners.length) %
                        donorsAndPartners.length,
                    )
                  }
                >
                  <ChevronLeft size={22} />
                </button>
                <span className="text-sm">
                  {index + 1} / {donorsAndPartners.length}
                </span>
                <button
                  type="button"
                  title="Next partner"
                  aria-label="Next partner"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300"
                  onClick={() =>
                    setIndex(
                      (current) => (current + 1) % donorsAndPartners.length,
                    )
                  }
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-4">
            Our partner directory will be published soon. Project-specific
            acknowledgments are available on each project page.
          </p>
        )}
      </section>
      <section className="mt-12" aria-label="Networks and coalitions">
        <h2 className="section-title">Networks and coalitions</h2>
        {networksAndCoalitions.length ? (
          <ul className="mt-6 space-y-4">
            {networksAndCoalitions.map((network) => (
              <li key={network.website}>
                <a
                  href={network.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700"
                >
                  {network.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4">
            Details of our networks and coalitions will be published soon.
          </p>
        )}
      </section>
    </>
  );
}
