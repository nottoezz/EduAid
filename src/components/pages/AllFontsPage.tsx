"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Footer from "../layout/Footer";

type FontItem = {
  name: string;
  description: string;
  images: string[];
  grade: string;
  type: string;
};

type FontCollection = {
  name: string;
  description: string;
  fonts: FontItem[];
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function typePillClasses(type: string) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold border border-black/10";
  switch (type) {
    case "Core Structure":
      return cx(base, "bg-black/5 text-black/70");
    case "Print":
      return cx(base, "bg-[#EAF7F5] text-[#0F5E57]");
    case "Tracing":
      return cx(base, "bg-[#FFF3EB] text-[#7A3A1E]");
    case "Advanced Tracing":
      return cx(base, "bg-[#FFF0F5] text-[#7A214B]");
    case "Guided":
      return cx(base, "bg-[#EEF3FF] text-[#1F3A78]");
    case "Complete Guidance":
      return cx(base, "bg-[#F1F8FF] text-[#124B8A]");
    case "Positioning":
      return cx(base, "bg-[#FFF9E6] text-[#6B4E00]");
    default:
      return cx(base, "bg-white/70 text-black/60");
  }
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function AllFontsPage() {
  const reduce = useReducedMotion();

  const handleBackToHome = () => {
    // Simple + reliable: go back if possible, otherwise go home
    if (window.history.length > 1) window.history.back();
    else window.location.href = "/#";
  };

  const fontCollections: FontCollection[] = [
    {
      name: "Complete Edu-Aid Font Family",
      description:
        "All derivatives follow this core structure with letters and numbers.",
      fonts: [
        {
          name: "Full Alphabet & Numbers",
          description:
            "Complete character set — all derivatives are based on these forms.",
          images: ["/fonts/Full-Font.png", "/fonts/Numbers.png"],
          grade: "Grades R–3",
          type: "Core Structure",
        },
      ],
    },
    {
      name: "Font Variants",
      description:
        "Specialized handwriting practice fonts for different learning stages.",
      fonts: [
        {
          name: "Solid Print Font",
          description: "Clean, clear letterforms for everyday classroom use.",
          images: ["/fonts/Font-Thin.png"],
          grade: "Grades R–3",
          type: "Print",
        },
        {
          name: "Dotted Tracing Font",
          description: "Dotted outlines for guided tracing practice.",
          images: ["/fonts/Dotted.png"],
          grade: "Grades R–3",
          type: "Tracing",
        },
        {
          name: "Hollow Tracing Font",
          description: "Hollow letterforms for intermediate tracing.",
          images: ["/fonts/Hollow.png"],
          grade: "Grades R–3",
          type: "Tracing",
        },
        {
          name: "Dotted Hollow Font",
          description: "Combined dotted and hollow for advanced practice.",
          images: ["/fonts/Dotted-Hollow.png"],
          grade: "Grades R–3",
          type: "Advanced Tracing",
        },
        {
          name: "Guided Arrows Font",
          description: "Arrow cues showing correct stroke direction.",
          images: ["/fonts/Dotted-Arrows.png"],
          grade: "Grades R–3",
          type: "Guided",
        },
        {
          name: "Hollow Arrows Font",
          description: "Hollow letters with directional arrows.",
          images: ["/fonts/Hollow-Arrows.png"],
          grade: "Grades R–3",
          type: "Guided",
        },
        {
          name: "Dotted Arrows & Lines",
          description: "Complete guidance with arrows and baseline.",
          images: ["/fonts/Dotted-Arrows-Lines.png"],
          grade: "Grades R–3",
          type: "Complete Guidance",
        },
        {
          name: "Font Lines",
          description: "Baseline guides for proper letter positioning.",
          images: ["/fonts/Font-Lines.png"],
          grade: "Grades R–3",
          type: "Positioning",
        },
      ],
    },
  ];

  const v = useMemo(() => {
    return {
      hero: {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      },
      section: {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
      },
      card: {
        hidden: { opacity: 0, y: 12, scale: 0.995 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
      },
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#fef4e6]/90 backdrop-blur-md border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>

            <div className="relative text-center leading-none">
              <span className="text-xl sm:text-2xl font-black text-[#16130F] tracking-tight">
                EDU-FONT
              </span>
              <span className="absolute -top-1 -right-4 text-[10px] font-bold text-[#00827A]">
                ™
              </span>
            </div>

            <button
              onClick={() => (window.location.href = "/#pricing")}
              className="hidden sm:inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-4 py-2 text-sm font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
            >
              View Pricing
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero */}
          <motion.section
            variants={v.hero}
            initial="hidden"
            animate="show"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black text-[#16130F] mb-4">
              All Available Fonts
            </h1>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto">
              Explore our complete collection of CAPS-aligned educational fonts designed for South African classrooms.
              All variants are based on the same core letterforms — so learners always see consistent shapes.
            </p>
          </motion.section>

          {/* Collections */}
          <div className="space-y-16">
            {fontCollections.map((collection) => (
              <motion.section
                key={collection.name}
                variants={v.section}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="scroll-mt-24"
              >
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16130F]">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-[#6B7280]">{collection.description}</p>
                </div>

                <div className="grid gap-6">
                  {collection.fonts.map((font, fontIndex) => {
                    const isCore = font.type === "Core Structure";

                    return (
                      <motion.article
                        key={font.name}
                        variants={v.card}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={reduce ? undefined : { y: -2 }}
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 260, damping: 22 }
                        }
                        className="rounded-3xl border border-black/10 bg-[#E6F0FF] backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
                      >
                        {/* Card Header */}
                        <div className="p-6 sm:p-7 border-b border-black/5">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h3 className="text-xl sm:text-2xl font-extrabold text-[#16130F] leading-tight">
                                {font.name}
                              </h3>
                              <p className="mt-2 text-sm sm:text-base text-[#6B7280] leading-relaxed">
                                {font.description}
                              </p>

                              <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold border border-black/10 bg-[#E6F0FF] text-[#00827A]">
                                  {font.grade}
                                </span>
                                <span className={typePillClasses(font.type)}>
                                  {font.type}
                                </span>
                              </div>
                            </div>

                            {!isCore && (
                              <div className="sm:pt-1">
                                <button
                                  onClick={() => (window.location.href = "/#pricing")}
                                  className="inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
                                >
                                  View Pricing &amp; Licenses
                                </button>
                                <p className="mt-2 text-[11px] text-black/45 text-center sm:text-left">
                                  Included in licensing plans
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Card Body (previews) */}
                        <div className="p-6 sm:p-7">
                          <div className={cx("grid gap-4", font.images.length > 1 ? "sm:grid-cols-2" : "")}>
                            {font.images.map((imageSrc, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="rounded-2xl border border-black/10 bg-white p-4"
                              >
                                {/* “paper” frame */}
                                <div className="rounded-xl border border-black/10 bg-white/80 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
                                  <img
                                    src={imageSrc}
                                    alt={`${font.name} preview ${imgIndex + 1}`}
                                    className="w-full h-auto max-h-40 object-contain"
                                    loading="lazy"
                                  />
                                </div>

                                <div className="mt-3 flex items-center justify-between">
                                  <span className="text-[11px] font-semibold text-black/55">
                                    {imgIndex === 0 ? "Letters" : "Numbers"}
                                  </span>
                                  <span className="text-[11px] text-black/40">
                                    Preview
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>

          {/* CTA */}
          <motion.section
            variants={v.section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 text-center rounded-3xl border border-black/10 bg-[#E6F0FF] backdrop-blur p-8 shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
          >
            <h3 className="text-2xl font-extrabold text-[#16130F] mb-3">
              Ready to Use These Fonts?
            </h3>
            <p className="text-[#6B7280] mb-6 max-w-2xl mx-auto">
              All Edu-Aid fonts are available through flexible licensing options,
              designed for individual educators, schools, and districts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => (window.location.href = "/#pricing")}
                className="inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-8 py-3 text-sm font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
              >
                View Pricing Options
              </button>
              <button
                onClick={() => (window.location.href = "/#download")}
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-8 py-3 text-sm font-semibold text-black/75 hover:bg-white transition shadow-sm"
              >
                Try Trial Font
              </button>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
