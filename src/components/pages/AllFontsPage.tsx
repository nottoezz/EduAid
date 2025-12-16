"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// Print font images
import fullFontImage from "/fonts/solid/Full-Font.png";
import numbersImage from "/fonts/solid/Numbers.png";
import fontThinImage from "/fonts/solid/Font-Thin.png";
import dottedImage from "/fonts/solid/Dotted.png";
import hollowImage from "/fonts/solid/Hollow.png";
import dottedHollowImage from "/fonts/solid/Dotted-Hollow.png";
import dottedArrowsImage from "/fonts/solid/Dotted-Arrows.png";
import hollowArrowsImage from "/fonts/solid/Hollow-Arrows.png";
import dottedArrowsLinesImage from "/fonts/solid/Dotted-Arrows-Lines.png";
import fontLinesImage from "/fonts/solid/Font-Lines.png";

// Cursive font images
import cursiveAllImage from "/fonts/cursive/Cursive-All.png";
import cursiveWriteImage from "/fonts/cursive/Cursive-Write.png";
import cursiveDottedImage from "/fonts/cursive/Cursive-Dotted.png";
import cursiveHollowImage from "/fonts/cursive/Cursive-Hollow.png";
import cursiveDottedArrowsImage from "/fonts/cursive/Cursive-Dotted-Arrows.png";
import cursiveDottedLinesImage from "/fonts/cursive/Cursive-Dotted-Lines.png";
import cursiveWriteLinesImage from "/fonts/cursive/Cursive-Write-Lines.png";

// Special font images
import sepediCharactersImage from "/fonts/special/Sepedi-Characters.png";
import tshivendaCharactersImage from "/fonts/special/Tshivenda-Characters.png";

type FontItem = {
  name: string;
  description: string;
  images: string[];
  grade: string;
  type: string; // pill label
  group: "Print" | "Cursive" | "Special";
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

type TabKey = "Print" | "Cursive" | "Special";

export default function AllFontsPage() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<TabKey>("Print");
  const [query, setQuery] = useState("");

  const allFonts: FontItem[] = [
    // PRINT (Variants)
    {
      name: "Solid Print Font",
      description: "Clean, clear letterforms for everyday classroom use.",
      images: [fontThinImage],
      grade: "Grades R–3",
      type: "Print",
      group: "Print",
    },
    {
      name: "Dotted Tracing Font",
      description: "Dotted outlines for guided tracing practice.",
      images: [dottedImage],
      grade: "Grades R–3",
      type: "Tracing",
      group: "Print",
    },
    {
      name: "Hollow Tracing Font",
      description: "Hollow letterforms for intermediate tracing.",
      images: [hollowImage],
      grade: "Grades R–3",
      type: "Tracing",
      group: "Print",
    },
    {
      name: "Dotted Hollow Font",
      description: "Combined dotted and hollow for advanced practice.",
      images: [dottedHollowImage],
      grade: "Grades R–3",
      type: "Advanced Tracing",
      group: "Print",
    },
    {
      name: "Guided Arrows Font",
      description: "Arrow cues showing correct stroke direction.",
      images: [dottedArrowsImage],
      grade: "Grades R–3",
      type: "Guided",
      group: "Print",
    },
    {
      name: "Hollow Arrows Font",
      description: "Hollow letters with directional arrows.",
      images: [hollowArrowsImage],
      grade: "Grades R–3",
      type: "Guided",
      group: "Print",
    },
    {
      name: "Dotted Arrows & Lines",
      description: "Complete guidance with arrows and baseline.",
      images: [dottedArrowsLinesImage],
      grade: "Grades R–3",
      type: "Complete Guidance",
      group: "Print",
    },
    {
      name: "Font Lines",
      description: "Baseline guides for proper letter positioning.",
      images: [fontLinesImage],
      grade: "Grades R–3",
      type: "Positioning",
      group: "Print",
    },

    // CURSIVE (Variants)
    {
      name: "Cursive Write Font",
      description: "Clean, flowing cursive letterforms for everyday use.",
      images: [cursiveWriteImage],
      grade: "Grades R–3",
      type: "Cursive",
      group: "Cursive",
    },
    {
      name: "Cursive Dotted Font",
      description: "Dotted cursive outlines for guided tracing practice.",
      images: [cursiveDottedImage],
      grade: "Grades R–3",
      type: "Tracing",
      group: "Cursive",
    },
    {
      name: "Cursive Hollow Font",
      description: "Hollow cursive letterforms for intermediate practice.",
      images: [cursiveHollowImage],
      grade: "Grades R–3",
      type: "Tracing",
      group: "Cursive",
    },
    {
      name: "Cursive Dotted Arrows",
      description: "Dotted cursive with directional arrows for stroke guidance.",
      images: [cursiveDottedArrowsImage],
      grade: "Grades R–3",
      type: "Guided",
      group: "Cursive",
    },
    {
      name: "Cursive Dotted Lines",
      description: "Cursive with dotted lines for baseline guidance.",
      images: [cursiveDottedLinesImage],
      grade: "Grades R–3",
      type: "Guided",
      group: "Cursive",
    },
    {
      name: "Cursive Write Lines",
      description: "Complete cursive with writing lines for proper positioning.",
      images: [cursiveWriteLinesImage],
      grade: "Grades R–3",
      type: "Complete Guidance",
      group: "Cursive",
    },

    // Placeholder for future special fonts
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
        hidden: { opacity: 0, y: 10, scale: 0.995 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease },
        },
      },
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allFonts
      .filter((f) => f.group === tab)
      .filter((f) => {
        if (!q) return true;
        return (
          f.name.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          f.type.toLowerCase().includes(q)
        );
      });
  }, [allFonts, tab, query]);

  const tabCopy = useMemo(() => {
    switch (tab) {
      case "Print":
        return {
          title: "Print Fonts",
          subtitle:
            "Everything print-focused — core letterforms + numbers + classroom variants.",
        };
      case "Cursive":
        return {
          title: "Cursive Fonts",
          subtitle:
            "Flowing, connected handwriting — cursive letterforms + numbers + practice variants.",
        };
      case "Special":
        return {
          title: "Special Fonts",
          subtitle: "Language support and special-purpose fonts for diverse classroom needs.",
        };
    }
  }, [tab]);

  const showPricingCta = (tab === "Print" || tab === "Cursive") && filtered.length > 0;

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      <main className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero */}
          <motion.section
            variants={v.hero}
            initial="hidden"
            animate="show"
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-black text-[#16130F] mb-3">
              Fonts Library
            </h1>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto">
              A cleaner, faster way to browse the collection. Split into
              <span className="font-semibold text-black/70"> Print</span>,{" "}
              <span className="font-semibold text-black/70">Cursive</span>, and{" "}
              <span className="font-semibold text-black/70">Special</span>.
            </p>
          </motion.section>

          {/* Controls */}
          <motion.section
            variants={v.section}
            initial="hidden"
            animate="show"
            className="rounded-3xl border border-black/10 bg-[#E6F0FF] backdrop-blur p-5 sm:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.07)] mb-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Segmented tabs */}
              <div className="inline-flex rounded-2xl border border-black/10 bg-white/70 p-1">
                {(["Print", "Cursive", "Special"] as TabKey[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    className={cx(
                      "px-4 py-2 rounded-xl text-sm font-semibold transition",
                      tab === k
                        ? "bg-[#2CA6FF] text-black shadow-sm"
                        : "text-black/60 hover:text-black"
                    )}
                    type="button"
                  >
                    {k}
                  </button>
                ))}
              </div>

              {/* Search - only for Print and Cursive */}
              {tab !== "Special" && (
                <div className="flex-1 sm:max-w-sm">
                  <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-3">
                    <span className="text-[12px] font-semibold text-black/40">
                      Search
                    </span>
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={`Search ${tab.toLowerCase()} fonts...`}
                      className="w-full bg-transparent outline-none text-sm text-black/80 placeholder:text-black/30"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Section heading */}
            <div className="mt-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16130F]">
                {tabCopy.title}
              </h2>
              <p className="mt-1 text-[#6B7280]">{tabCopy.subtitle}</p>

              {/* Core alphabet & numbers preview */}
              {tab === "Print" && (
                <div className="mt-6">
                  <div className="mb-3 text-sm font-semibold text-[#16130F]">
                    Complete Alphabet & Numbers
                  </div>
                  <p className="text-sm text-[#6B7280] mb-4">
                    Complete core letterforms and numbers — all variants are based on these shapes.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <img
                        src={fullFontImage}
                        alt="Full alphabet letterforms"
                        className="w-full h-auto max-h-32 object-contain"
                        loading="lazy"
                      />
                      <div className="mt-2 text-[11px] font-semibold text-black/45 text-center">
                        Letters
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <img
                        src={numbersImage}
                        alt="Complete numbers set"
                        className="w-full h-auto max-h-32 object-contain"
                        loading="lazy"
                      />
                      <div className="mt-2 text-[11px] font-semibold text-black/45 text-center">
                        Numbers
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Core cursive alphabet & numbers preview */}
              {tab === "Cursive" && (
                <div className="mt-6">
                  <div className="mb-3 text-sm font-semibold text-[#16130F]">
                    Complete Cursive Alphabet & Numbers
                  </div>
                  <p className="text-sm text-[#6B7280] mb-4">
                    Complete cursive letterforms and numbers — flowing, connected handwriting.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <img
                        src={cursiveAllImage}
                        alt="Complete cursive alphabet"
                        className="w-full h-auto max-h-32 object-contain"
                        loading="lazy"
                      />
                      <div className="mt-2 text-[11px] font-semibold text-black/45 text-center">
                        Letters
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <img
                        src={numbersImage}
                        alt="Complete numbers set"
                        className="w-full h-auto max-h-32 object-contain"
                        loading="lazy"
                      />
                      <div className="mt-2 text-[11px] font-semibold text-black/45 text-center">
                        Numbers
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Special language characters preview */}
              {tab === "Special" && (
                <div className="mt-6">
                  <div className="mb-3 text-sm font-semibold text-[#16130F]">
                    African Language Characters
                  </div>
                  <p className="text-sm text-[#6B7280] mb-4">
                    Special character sets for Sepedi and Tshivenda — supporting South African language instruction.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <img
                        src={sepediCharactersImage}
                        alt="Sepedi language characters"
                        className="w-full h-auto max-h-32 object-contain"
                        loading="lazy"
                      />
                      <div className="mt-2 text-[11px] font-semibold text-black/45 text-center">
                        Sepedi Characters
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <img
                        src={tshivendaCharactersImage}
                        alt="Tshivenda language characters"
                        className="w-full h-auto max-h-32 object-contain"
                        loading="lazy"
                      />
                      <div className="mt-2 text-[11px] font-semibold text-black/45 text-center">
                        Tshivenda Characters
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* Content */}
          <div className="space-y-6">
              {/* “Table” header (desktop) - only for Print and Cursive */}
              {tab !== "Special" && (
                <div className="hidden md:grid grid-cols-12 gap-4 px-3">
                  <div className="col-span-4 text-[11px] font-semibold text-black/45">
                    Font
                  </div>
                  <div className="col-span-3 text-[11px] font-semibold text-black/45">
                    Grade
                  </div>
                  <div className="col-span-2 text-[11px] font-semibold text-black/45">
                    Type
                  </div>
                  <div className="col-span-3 text-[11px] font-semibold text-black/45">
                    Preview
                  </div>
                </div>
              )}

              {/* Rows */}
              <div className="grid gap-4">
                {filtered.map((font) => (
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
                    {/* Desktop row layout */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-5 items-center">
                      <div className="col-span-4 min-w-0">
                        <div className="text-base font-extrabold text-[#16130F] truncate">
                          {font.name}
                        </div>
                        <div className="text-sm text-[#6B7280] line-clamp-2">
                          {font.description}
                        </div>
                      </div>

                      <div className="col-span-3">
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold border border-black/10 bg-white/70 text-black/65">
                          {font.grade}
                        </span>
                      </div>

                      <div className="col-span-2">
                        <span className={typePillClasses(font.type)}>
                          {font.type}
                        </span>
                      </div>

                      <div className="col-span-3">
                        <div
                          className={cx(
                            "grid gap-3",
                            font.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                          )}
                        >
                          {font.images.map((src, i) => (
                            <div
                              key={i}
                              className="rounded-2xl border border-black/10 bg-white p-3"
                            >
                               <img
                                 src={src}
                                 alt={`${font.name} preview ${i + 1}`}
                                 className="w-full h-auto max-h-32 object-contain"
                                 loading="lazy"
                               />
                               <div className="mt-2 text-[10px] font-semibold text-black/45">
                                 {i === 0 ? "Letters" : "Numbers"}
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile card layout */}
                    <div className="md:hidden p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-lg font-extrabold text-[#16130F] leading-tight">
                            {font.name}
                          </h3>
                          <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                            {font.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold border border-black/10 bg-white/70 text-black/65">
                              {font.grade}
                            </span>
                            <span className={typePillClasses(font.type)}>
                              {font.type}
                            </span>
                          </div>
                        </div>

                        <Link
                          to="/#pricing"
                          className="shrink-0 inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
                        >
                          Pricing
                        </Link>
                      </div>

                      <div
                        className={cx(
                          "mt-5 grid gap-3",
                          font.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                        )}
                      >
                        {font.images.map((src, i) => (
                          <div
                            key={i}
                            className="rounded-2xl border border-black/10 bg-white p-4"
                          >
                            <img
                              src={src}
                              alt={`${font.name} preview ${i + 1}`}
                              className="w-full h-auto max-h-40 object-contain"
                              loading="lazy"
                            />
                            <div className="mt-2 text-[11px] font-semibold text-black/45">
                              Preview
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Empty state - only for Print and Cursive */}
              {tab !== "Special" && filtered.length === 0 && (
                <motion.div
                  variants={v.section}
                  initial="hidden"
                  animate="show"
                  className="rounded-3xl border border-black/10 bg-white/70 p-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
                >
                  <h3 className="text-xl font-extrabold text-[#16130F]">
                    No matches
                  </h3>
                  <p className="mt-2 text-[#6B7280]">
                    Try a different search term.
                  </p>
                </motion.div>
              )}
          </div>

          {/* CTA */}
          <motion.section
            variants={v.section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 text-center rounded-3xl border border-black/10 bg-[#E6F0FF] backdrop-blur p-8 shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
          >
            <h3 className="text-2xl font-extrabold text-[#16130F] mb-3">
              Ready to Use These Fonts?
            </h3>
            <p className="text-[#6B7280] mb-6 max-w-2xl mx-auto">
              All Edu-Aid fonts are available through flexible licensing options,
              designed for individual educators, schools, and districts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/#pricing"
                className="inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-8 py-3 text-sm font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
              >
                View Pricing Options
              </Link>
              <Link
                to="/#download"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-8 py-3 text-sm font-semibold text-black/75 hover:bg-white transition shadow-sm"
              >
                Try Trial Font
              </Link>
            </div>

            {showPricingCta && (
              <p className="mt-3 text-[11px] text-black/45">
                Print section populated • Cursive + Special next
              </p>
            )}
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
