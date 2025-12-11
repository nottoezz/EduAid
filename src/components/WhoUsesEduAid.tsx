"use client";

import React from "react";
import { motion } from "framer-motion";

type Persona = {
  id: string;
  label: string;
  headline: string;
  description: string;
  cta: string;
  tone: "peach" | "mint" | "cream" | "softOrange";
  icon: "teacher" | "therapist" | "school" | "parent";
};

const personas: Persona[] = [
  {
    id: "teachers",
    label: "Foundation Phase Teachers",
    headline: "Create consistent worksheets for your whole grade.",
    description: "Create consistent worksheets for your whole grade.",
    cta: "How we help teachers →",
    tone: "peach",
    icon: "teacher",
  },
  {
    id: "therapists",
    label: "Remedial / OT / Speech Therapists",
    headline: "Support fine motor skills and letter formation in therapy sessions.",
    description: "Support fine motor skills and letter formation in therapy sessions.",
    cta: "How we help therapists →",
    tone: "mint",
    icon: "therapist",
  },
  {
    id: "schools",
    label: "Schools & Districts",
    headline: "Standardise handwriting across all classes and grades.",
    description: "Standardise handwriting across all classes and grades.",
    cta: "How we help schools →",
    tone: "cream",
    icon: "school",
  },
  {
    id: "parents",
    label: "Parents & Homeschoolers",
    headline: "Match what learners see at school, at home.",
    description: "Match what learners see at school, at home.",
    cta: "How we help families →",
    tone: "softOrange",
    icon: "parent",
  },
];

function toneToBg(tone: Persona["tone"]): string {
  switch (tone) {
    case "peach":
      return "bg-[#FFE5E5]"; // soft coral
    case "mint":
      return "bg-[#E6F7F7]"; // soft teal
    case "cream":
      return "bg-[#FEF3E6]"; // soft cream
    case "softOrange":
      return "bg-[#FFF4E5]"; // soft orange
    default:
      return "bg-[#FEF3E6]";
  }
}

function toneToAccent(tone: Persona["tone"]): string {
  switch (tone) {
    case "peach":
      return "bg-[#FF8C88]";
    case "mint":
      return "bg-[#4EC5C1]";
    case "cream":
      return "bg-[#E8DFD2]";
    case "softOrange":
      return "bg-[#F59E0B]";
    default:
      return "bg-[#E8DFD2]";
  }
}

interface PersonaIconProps {
  icon: Persona["icon"];
  className?: string;
}

function PersonaIcon({ icon, className = "" }: PersonaIconProps) {
  const iconProps = {
    viewBox: "0 0 24 24",
    className: `h-5 w-5 text-[#16130F] ${className}`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "teacher":
      return (
        <svg {...iconProps}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 6h8" />
          <path d="M8 10h4" />
          <path d="M8 14h4" />
        </svg>
      );
    case "therapist":
      return (
        <svg {...iconProps}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M16 11l2 2 4-4" />
        </svg>
      );
    case "school":
      return (
        <svg {...iconProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      );
    case "parent":
      return (
        <svg {...iconProps}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 11h-6" />
          <circle cx="16.5" cy="7.5" r="2.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhoUsesEduAid() {
  return (
    <section className="bg-[#fef4e6] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-extrabold text-[#16130F] md:text-3xl">
            Who Uses Edu-Aid?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[#6B7280] md:text-base">
            Built for teachers, therapists, schools, and parents who want to make handwriting instruction
            consistent, effective, and stress-free.
          </p>
        </div>

        {/* Personas */}
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory pb-4 -mx-6 px-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-7">
          {personas.map((persona) => (
            <motion.div
              key={persona.id}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex w-72 shrink-0 snap-center flex-col rounded-3xl border border-black/5 bg-white/70 p-5 shadow-sm shadow-black/5 backdrop-blur-sm md:w-full md:snap-align-none"
            >
              {/* Icon and Label */}
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${toneToBg(persona.tone)}`}>
                  <PersonaIcon icon={persona.icon} />
                </div>
                <h3 className="text-sm font-semibold text-[#16130F]">{persona.label}</h3>
              </div>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm text-[#6B7280] leading-relaxed">
                {persona.description}
              </p>

              {/* CTA */}
              <button className="text-left text-sm text-[#2563EB] hover:underline">
                {persona.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
