import { motion } from "framer-motion";
import WhoUsesEduAidBackgroundOrnaments from "./decorative/WhoUsesEduAidBackgroundOrnaments";
import wueTeachersImage from '/WUE-Teachers.png';
import wueTherapistImage from '/WUE-Therapist.png';
import wueSchoolsImage from '/WUE-Schools.png';
import wueHomeschoolImage from '/WUE-Homeschool.png';

type Persona = {
  id: string;
  label: string;
  description: string;
  cta: string;
  tone: "peach";
  icon: "teacher" | "therapist" | "school" | "parent";
};

const personas: Persona[] = [
  {
    id: "teachers",
    label: "Foundation Phase Teachers",
    description: "Save hours of design time with professionally crafted fonts that match CAPS requirements. Create beautiful, consistent worksheets for your entire grade with print, tracing, and cursive options that develop fine motor skills systematically.",
    cta: "How we help teachers →",
    tone: "peach",
    icon: "teacher",
  },
  {
    id: "therapists",
    label: "Remedial / OT / Speech Therapists",
    description: "Target specific letter formations and fine motor challenges with our therapeutic tracing fonts. Help learners with dyslexia, dysgraphia, or developmental delays build confidence through structured, multi-sensory handwriting practice.",
    cta: "How we help therapists →",
    tone: "peach",
    icon: "therapist",
  },
  {
    id: "schools",
    label: "Schools & Districts",
    description: "Ensure every teacher uses the same, CAPS-aligned letterforms. Our comprehensive font pack supports your whole school from Grade R tracing dots to Grade 3 cursive, creating a seamless progression that builds on previous learning.",
    cta: "How we help schools →",
    tone: "peach",
    icon: "school",
  },
  {
    id: "parents",
    label: "Parents & Homeschoolers",
    description: "Bridge the gap between school and home learning. Use the same fonts and worksheets your child encounters at school for homework, practice, and reinforcement. Perfect for homeschooling families following CAPS curriculum.",
    cta: "How we help families →",
    tone: "peach",
    icon: "parent",
  },
];

function toneStyles(tone: Persona["tone"]) {
  // Only peach tone is used, but keeping structure for potential future use
      return {
        card: "bg-[#FFF1EE]",         // soft peach
        icon: "bg-[#FFD5CC]",         // stronger peach
        accent: "text-[#C2412D]",      // warm red/orange
        border: "border-[#F7C7BE]",
      };
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
    <section className="relative bg-[#fef4e6] py-24 pb-48 z-10">
      {/* Background decorative lines */}
      <WhoUsesEduAidBackgroundOrnaments />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 -mt-8 pb-24">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-white/20">
            <h2 className="mb-3 text-3xl font-black text-[#16130F] md:text-4xl lg:text-5xl">
              Who Uses Edu-Aid?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#6B7280] md:text-lg leading-relaxed">
              Built for teachers, therapists, schools, and parents who want to make handwriting instruction
              consistent, effective, and stress-free.
            </p>
          </div>
        </div>

        {/* Personas - Staggered Layout */}
        <div className="space-y-20">
          {/* Persona 1: Combined Card on Left */}
          <div className="flex justify-start -ml-8">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex gap-6 max-w-4xl rounded-3xl ${toneStyles(personas[0].tone).border} bg-white/80 p-8 shadow-sm shadow-black/5 backdrop-blur`}
            >
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneStyles(personas[0].tone).icon}`}>
                    <PersonaIcon icon={personas[0].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[0].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[0].description}
                </p>

                {/* CTA */}
                <button className={`text-left text-base hover:underline font-medium ${toneStyles(personas[0].tone).accent}`}>
                  {personas[0].cta}
                </button>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden">
                <img
                  src={wueTeachersImage}
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
              className={`flex gap-6 max-w-4xl rounded-3xl ${toneStyles(personas[0].tone).border} bg-white/80 p-8 shadow-sm shadow-black/5 backdrop-blur`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden">
                <img
                  src={wueTherapistImage}
                  alt="Remedial and occupational therapists using Edu-Aid fonts"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneStyles(personas[0].tone).icon}`}>
                    <PersonaIcon icon={personas[1].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[1].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[1].description}
                </p>

                {/* CTA */}
                <button className={`text-left text-base hover:underline font-medium ${toneStyles(personas[0].tone).accent}`}>
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
              className={`flex gap-6 max-w-4xl rounded-3xl ${toneStyles(personas[0].tone).border} bg-white/80 p-8 shadow-sm shadow-black/5 backdrop-blur`}
            >
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneStyles(personas[0].tone).icon}`}>
                    <PersonaIcon icon={personas[2].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[2].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[2].description}
                </p>

                {/* CTA */}
                <button className={`text-left text-base hover:underline font-medium ${toneStyles(personas[0].tone).accent}`}>
                  {personas[2].cta}
                </button>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden">
                <img
                  src={wueSchoolsImage}
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
              className={`flex gap-6 max-w-4xl rounded-3xl ${toneStyles(personas[0].tone).border} bg-white/80 p-8 shadow-sm shadow-black/5 backdrop-blur`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-80 h-64 rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden">
                <img
                  src={wueHomeschoolImage}
                  alt="Parents and homeschoolers using Edu-Aid fonts at home"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                {/* Icon and Label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneStyles(personas[0].tone).icon}`}>
                    <PersonaIcon icon={personas[3].icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#16130F]">{personas[3].label}</h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-base text-[#6B7280] leading-relaxed">
                  {personas[3].description}
                </p>

                {/* CTA */}
                <button className={`text-left text-base hover:underline font-medium ${toneStyles(personas[0].tone).accent}`}>
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
