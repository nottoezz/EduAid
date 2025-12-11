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
    description: "Save hours of design time with professionally crafted fonts that match CAPS requirements. Create beautiful, consistent worksheets for your entire grade with print, tracing, and cursive options that develop fine motor skills systematically.",
    cta: "How we help teachers →",
    tone: "peach",
    icon: "teacher",
  },
  {
    id: "therapists",
    label: "Remedial / OT / Speech Therapists",
    headline: "Accelerate handwriting progress in therapy sessions.",
    description: "Target specific letter formations and fine motor challenges with our therapeutic tracing fonts. Help learners with dyslexia, dysgraphia, or developmental delays build confidence through structured, multi-sensory handwriting practice.",
    cta: "How we help therapists →",
    tone: "mint",
    icon: "therapist",
  },
  {
    id: "schools",
    label: "Schools & Districts",
    headline: "Standardise handwriting across all classes and grades.",
    description: "Ensure every teacher uses the same, CAPS-aligned letterforms. Our comprehensive font pack supports your whole school from Grade R tracing dots to Grade 3 cursive, creating a seamless progression that builds on previous learning.",
    cta: "How we help schools →",
    tone: "cream",
    icon: "school",
  },
  {
    id: "parents",
    label: "Parents & Homeschoolers",
    headline: "Match what learners see at school, at home.",
    description: "Bridge the gap between school and home learning. Use the same fonts and worksheets your child encounters at school for homework, practice, and reinforcement. Perfect for homeschooling families following CAPS curriculum.",
    cta: "How we help families →",
    tone: "softOrange",
    icon: "parent",
  },
];

function toneToBg(tone: Persona["tone"]): string {
  switch (tone) {
    case "peach":
      return "bg-[#F6B5A8]"; // rich coral/pink
    case "mint":
      return "bg-[#D8F3F0]"; // rich teal
    case "cream":
      return "bg-[#EADBC4]"; // warm cream
    case "softOrange":
      return "bg-[#FDE2CF]"; // rich apricot
    default:
      return "bg-[#EADBC4]";
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
    <section className="relative bg-[#fef4e6] py-24 md:py-32 z-100">
      {/* Background decorative lines */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Top layer - Lemon */}
        <path
          d="
            M 100 35
            C 80 45, 55 30, 35 50
            S 75 70, 80 85
            S 35 95, 0 95
          "
          className="fill-none stroke-[#E7E9A0] [stroke-width:2.5] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
        {/* Mint-Green layer */}
        <path
          d="
            M 105 30
            C 85 50, 50 20, 30 40
            S 80 60, 85 80
            S 30 90, 0 90
          "
          className="fill-none stroke-[#7EDC89] [stroke-width:4] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
        {/* Coral layer */}
        <path
          d="
            M 115 3
            C 100 65, 35 5, 15 25
            S 95 45, 100 65
            S 15 75, -5 75
          "
          className="fill-none stroke-[#FF9F80] [stroke-width:2] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
        {/* Bright Blue layer */}
        <path
          d="
            M 105 0
            C 90 55, 45 15, 25 35
            S 85 55, 90 75
            S 25 85, -5 85
          "
          className="fill-none stroke-[#00A4FF] [stroke-width:3] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
        {/* Deep Teal layer - bottom */}
        <path
          d="
            M 110 0
            C 95 60, 40 10, 20 30
            S 90 50, 95 70
            S 20 80, 0 80
          "
          className="fill-none stroke-[#00827A] [stroke-width:5] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
      </svg>

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

        {/* Personas - Staggered Layout */}
        <div className="space-y-20">
          {/* Persona 1: Combined Card on Left */}
          <div className="flex justify-start -ml-8">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex gap-6 max-w-4xl rounded-3xl border border-black/5 ${toneToBg(personas[0].tone)} p-8 shadow-sm shadow-black/5 backdrop-blur-sm`}
            >
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneToBg(personas[0].tone)}`}>
                    <PersonaIcon icon={personas[0].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[0].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[0].description}
                </p>

                {/* CTA */}
                <button className="text-left text-base text-[#2563EB] hover:underline font-medium">
                  {personas[0].cta}
                </button>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-black/10 shadow-lg overflow-hidden">
                <img
                  src="/WUE-Teachers.png"
                  alt="Foundation Phase Teachers using Edu-Aid fonts in classroom"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Persona 2: Combined Card on Right */}
          <div className="flex justify-end -mr-8">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex gap-6 max-w-4xl rounded-3xl border border-black/5 ${toneToBg(personas[1].tone)} p-8 shadow-sm shadow-black/5 backdrop-blur-sm`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-black/10 shadow-lg overflow-hidden">
                <img
                  src="/WUE-Therapist.png"
                  alt="Remedial and occupational therapists using Edu-Aid fonts"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneToBg(personas[1].tone)}`}>
                    <PersonaIcon icon={personas[1].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[1].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[1].description}
                </p>

                {/* CTA */}
                <button className="text-left text-base text-[#2563EB] hover:underline font-medium">
                  {personas[1].cta}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Persona 3: Combined Card on Left */}
          <div className="flex justify-start -ml-8">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex gap-6 max-w-4xl rounded-3xl border border-black/5 ${toneToBg(personas[2].tone)} p-8 shadow-sm shadow-black/5 backdrop-blur-sm`}
            >
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneToBg(personas[2].tone)}`}>
                    <PersonaIcon icon={personas[2].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[2].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[2].description}
                </p>

                {/* CTA */}
                <button className="text-left text-base text-[#2563EB] hover:underline font-medium">
                  {personas[2].cta}
                </button>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-black/10 shadow-lg overflow-hidden">
                <img
                  src="/WUE-Schools.png"
                  alt="Schools and districts implementing Edu-Aid fonts across classrooms"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Persona 4: Combined Card on Right */}
          <div className="flex justify-end -mr-8">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex gap-6 max-w-4xl rounded-3xl border border-black/5 ${toneToBg(personas[3].tone)} p-8 shadow-sm shadow-black/5 backdrop-blur-sm`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-black/10 shadow-lg overflow-hidden">
                <img
                  src="/WUE-Homeschool.png"
                  alt="Parents and homeschoolers using Edu-Aid fonts at home"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneToBg(personas[3].tone)}`}>
                    <PersonaIcon icon={personas[3].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[3].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[3].description}
                </p>

                {/* CTA */}
                <button className="text-left text-base text-[#2563EB] hover:underline font-medium">
                  {personas[3].cta}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
