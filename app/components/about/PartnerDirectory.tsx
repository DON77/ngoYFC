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
  const visiblePartners = Array.from(
    { length: Math.min(5, donorsAndPartners.length) },
    (_, offset) => donorsAndPartners[(index + offset) % donorsAndPartners.length],
  );
  return (
    <>
      <section className="mt-12" aria-label="Donors and partners">
        <h2 className="section-title">Our donors and partners</h2>
        {visiblePartners.length ? (
          <div className="mt-8" role="region" aria-label="Partner logos" aria-roledescription="carousel">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5" aria-live="polite" aria-atomic="true">
              {visiblePartners.map((partner) => (
              <a
                key={partner.website}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 flex-col items-center gap-4 text-center"
                aria-label={`${partner.name} (opens in a new tab)`}
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold">{partner.name}</span>
              </a>
              ))}
            </div>
            {donorsAndPartners.length > 5 && (
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
                  Starting at partner {index + 1} of {donorsAndPartners.length}
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
