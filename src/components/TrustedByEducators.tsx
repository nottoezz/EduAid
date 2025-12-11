"use client";

import { motion } from "framer-motion";
import React from "react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  school: string;
};

const testimonials: Testimonial[] = [
  {
    id: "teacher-1",
    quote:
      "I finally have worksheets that match the handwriting we actually use in class. It keeps my whole grade consistent.",
    name: "Mrs. Naidoo",
    role: "Foundation Phase Teacher",
    school: "Cape Town",
  },
  {
    id: "school-1",
    quote:
      "Edu-Aid has helped us standardise letter formation from Grade R upwards. New teachers plug in without starting from scratch.",
    name: "Mr. Jacobs",
    role: "Head of Department",
    school: "Public Primary School, Gauteng",
  },
  {
    id: "therapist-1",
    quote:
      "The clear arrows and trace lines are perfect for OT and remedial sessions. Parents can keep using the same style at home.",
    name: "Karin S.",
    role: "Remedial / OT Therapist",
    school: "Private Practice, Western Cape",
  },
];

const logoPlaceholders = [
  "Sunrise Primary",
  "Greenfield Prep",
  "Riverpark Academy",
  "Hopeview Primary",
];

export default function TrustedByEducators() {
  return (
    <section className="relative bg-[#fefaf3] py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* Header + stat */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#16130F]/60">
            Trusted by South African educators
          </p>
          <h2 className="text-3xl font-semibold text-[#16130F] md:text-4xl">
            Built with real classrooms in mind.
          </h2>
          <p className="text-sm text-[#16130F]/70 md:text-base">
            Used in South African schools for years to support early handwriting,
            phonics and fine motor development.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, idx) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 260, damping: 26, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm shadow-black/5"
            >
              {/* top quote icon */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-black/5">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 text-black/50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  >
                    <path d="M9 11H6.5C5.12 11 4 9.88 4 8.5V8a4 4 0 0 1 4-4" />
                    <path d="M19 11h-2.5C15.12 11 14 9.88 14 8.5V8a4 4 0 0 1 4-4" />
                  </svg>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#16130F]/85 md:text-[0.95rem]">
                {t.quote}
              </p>

              <div className="mt-5 border-t border-black/5 pt-4 text-sm">
                <p className="font-semibold text-[#16130F]">{t.name}</p>
                <p className="text-xs text-[#16130F]/70">
                  {t.role} • {t.school}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Logo row / usage proof */}
        <div className="mt-4 flex flex-col gap-4 border-t border-black/5 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#16130F]/70">
            Joining hundreds of South African teachers and schools who care about
            correct handwriting from the start.
          </p>

          <div className="flex gap-3 overflow-x-auto pb-1 text-xs text-[#16130F]/60 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {logoPlaceholders.map((label) => (
              <div
                key={label}
                className="whitespace-nowrap rounded-full border border-black/5 bg-black/5 px-3 py-1"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
