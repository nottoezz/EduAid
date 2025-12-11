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
    <section className="relative bg-[#E0F2FE] py-24 md:py-32 overflow-hidden">
      {/* Top wavy blend line */}
      <svg
        className="absolute top-0 left-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 Q100,60 600,30 T1200,30 V0 H0 Z"
          fill="#fef4e6"
        />
      </svg>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#7EDC89] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-[#00A4FF] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#E7E9A0] rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-xl border border-white/30">
            <h2 className="mb-4 text-4xl font-black text-[#16130F] md:text-5xl lg:text-6xl">
              Pricing & licences
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#6B7280] md:text-xl leading-relaxed">
              Simple, transparent options for individual teachers, schools and
              districts. No hidden usage fine print.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {tiers.map((tier, index) => {
            const isRecommended = tier.recommended;

            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className={`
                  relative flex flex-col rounded-3xl border bg-white/95 p-8 shadow-xl backdrop-blur-sm
                  ${
                    isRecommended
                      ? "border-[#00827A]/30 bg-gradient-to-br from-[#E6F4F1] to-[#F0F9F8] shadow-[#00827A]/10"
                      : "border-white/40 shadow-black/5"
                  }
                `}
              >
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[#00827A] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg">
                    Most popular
                  </div>
                )}

                <div className="space-y-4 pb-6">
                  <h3 className="text-2xl font-bold text-[#16130F]">
                    {tier.name}
                  </h3>
                  <p className="text-base text-[#6B7280] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="pb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-black text-[#16130F]">
                      {tier.priceLabel}
                    </span>
                  </div>
                  {tier.priceNote && (
                    <p className="text-sm text-[#6B7280]">
                      {tier.priceNote}
                    </p>
                  )}
                </div>

                <div className="space-y-4 text-[#16130F]">
                  <div className="flex items-center justify-between py-3 px-4 bg-[#F8FAFC] rounded-xl">
                    <div className="text-sm font-semibold">{tier.teachers}</div>
                    <div className="text-sm text-[#6B7280]">{tier.devices}</div>
                  </div>

                  <ul className="space-y-3">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00827A] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <button
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 ${
                      isRecommended
                        ? "bg-[#00827A] text-white hover:bg-[#006B5E] shadow-lg hover:shadow-xl"
                        : "bg-white text-[#16130F] border-2 border-[#E8DFD2] hover:border-[#00827A] hover:shadow-lg"
                    }`}
                  >
                    {tier.id === 'district' ? 'Contact Us' : 'Get Started'}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#16130F] mb-4">
              Need the fine print or a custom quote?
            </h3>
            <p className="text-[#6B7280] mb-8 max-w-2xl mx-auto">
              We believe in transparent pricing with no hidden fees. Get all the details you need to make the right choice for your school or district.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-[#00827A] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#006B5E] hover:shadow-xl transition-all duration-200"
              >
                View full licensing details
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#00827A] bg-white px-8 py-4 text-lg font-bold text-[#00827A] hover:bg-[#00827A] hover:text-white transition-all duration-200"
              >
                Chat to us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wavy blend line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 Q300,0 600,30 T1200,30 V60 H0 Z"
          fill="#fef4e6"
        />
      </svg>
    </section>
  );
}
