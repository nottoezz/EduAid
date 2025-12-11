"use client";

import { motion } from "framer-motion";
import React from "react";

type Tier = {
  id: string;
  name: string;
  priceLabel: string;
  priceNote?: string;
  description: string;
  recommended?: boolean;
  teachers: string;
  devices: string;
  includes: string[];
};

const tiers: Tier[] = [
  {
    id: "single-teacher",
    name: "Single Teacher",
    priceLabel: "R2 000 once-off",
    priceNote: "Per teacher licence.",
    description: "Ideal if you want to use Edu-Aid in your own classroom.",
    teachers: "1 teacher",
    devices: "Up to 3 personal devices",
    includes: [
      "All Edu-Aid fonts",
      "Ongoing font updates",
      "Basic email support",
    ],
  },
  {
    id: "school",
    name: "School licence",
    priceLabel: "From R7 500 per school / year",
    priceNote: "Pricing scales by number of teachers.",
    description:
      "Give every Foundation Phase teacher the same handwriting resources.",
    teachers: "Up to 20 teachers",
    devices: "Use across staff laptops + classroom devices",
    includes: [
      "All Edu-Aid fonts for your school",
      "Ongoing updates + priority support",
      "Permission to share internally with staff",
    ],
    recommended: true,
  },
  {
    id: "district",
    name: "District / bulk",
    priceLabel: "Contact us",
    priceNote: "Custom pricing for districts and groups.",
    description:
      "Roll out a standard handwriting model across multiple schools.",
    teachers: "20+ teachers / multiple schools",
    devices: "Flexible, district-wide use",
    includes: [
      "Bulk licensing for multiple schools",
      "Training & onboarding options",
      "Support for rollout and transitions",
    ],
  },
];

export default function PricingLicenses() {
  return (
    <section className="relative bg-[#fef4e6] py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-[#16130F] md:text-4xl">
            Pricing & licences
          </h2>
          <p className="text-base text-[#16130F]/75 md:text-lg">
            Simple, transparent options for individual teachers, schools and
            districts. No hidden usage fine print.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {tiers.map((tier, index) => {
            const isRecommended = tier.recommended;

            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className={`
                  relative flex flex-col rounded-3xl border bg-white/70 p-6 shadow-sm shadow-black/5 backdrop-blur-sm
                  md:p-7
                  ${
                    isRecommended
                      ? "border-[#1F9C93]/50 bg-[#E6F4F1]"
                      : "border-black/5"
                  }
                `}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-[#1F9C93] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                    Most popular
                  </div>
                )}

                <div className="space-y-2 pb-4">
                  <h3 className="text-lg font-semibold text-[#16130F]">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[#16130F]/70">
                    {tier.description}
                  </p>
                </div>

                <div className="pb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold text-[#16130F]">
                      {tier.priceLabel}
                    </span>
                  </div>
                  {tier.priceNote && (
                    <p className="mt-1 text-xs text-[#16130F]/60">
                      {tier.priceNote}
                    </p>
                  )}
                </div>

                <div className="mt-auto border-t border-black/5 pt-4 text-sm text-[#16130F]/80">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wide text-[#16130F]/65">
                    <span>{tier.teachers}</span>
                    <span>{tier.devices}</span>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1F9C93]" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="mt-4 flex flex-col items-start gap-4 border-t border-black/5 pt-6 text-sm text-[#16130F]/75 md:flex-row md:items-center md:justify-between">
          <p>Need the fine print or a custom quote?</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#1F9C93] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#17867F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F9C93]"
            >
              View full licensing details
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#16130F] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/10"
            >
              Chat to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
