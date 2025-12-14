import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FontPackOrnaments from "../decorative/FontPackOrnaments";

import abcSolidImage from "/ABC-solid.webp";
import abcDottedImage from "/ABC-dotted.webp";
import abcDottedArrowsImage from "/ABC-dotted-arrows.webp";

type FontKey = "print" | "tracing" | "guided";

const FONT_ITEMS: Array<{
  key: FontKey;
  title: string;
  badge: string;
  bullets: string[];
  description: string;
  previewSrc: string;
  previewAlt: string;
}> = [
  {
    key: "print",
    title: "Print Font",
    badge: "Everyday worksheets",
    bullets: [
      "Clear, beginner-friendly letterforms",
      "Perfect for early writing practice",
      "CAPS Foundation Phase aligned",
    ],
    description:
      "Clean Foundation Phase-aligned letter shapes for everyday classroom materials.",
    previewSrc: abcSolidImage,
    previewAlt: "Solid ABC letters",
  },
  {
    key: "tracing",
    title: "Tracing Font",
    badge: "Grades R–1",
    bullets: [
      "Dotted letters for tracing practice",
      "Supports fine motor development",
      "Great for handwriting confidence",
    ],
    description:
      "Dotted letters designed for handwriting practice—ideal for tracing and early writers.",
    previewSrc: abcDottedImage,
    previewAlt: "Dotted ABC letters for tracing",
  },
  {
    key: "guided",
    title: "Guided Tracing Font",
    badge: "Grades 1–2",
    bullets: [
      "Arrows show correct stroke order",
      "Builds proper formation habits",
      "Great for structured practice",
    ],
    description:
      "Guided tracing with stroke-direction cues so learners form letters correctly from day one.",
    previewSrc: abcDottedArrowsImage,
    previewAlt: "Dotted ABC letters with arrows for guided tracing",
  },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function FontPackSection() {
  const [active, setActive] = useState<FontKey>("print");
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  const current = useMemo(
    () => FONT_ITEMS.find((x) => x.key === active)!,
    [active]
  );

  const v = useMemo(() => {
    return {
      wrap: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } },
      },
      header: {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      },
      grid: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.08 },
        },
      },
      panel: {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      },
      details: {
        hidden: { opacity: 0, y: 6 },
        show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -4, transition: { duration: 0.15 } },
      },
      bullets: {
        hidden: {},
        show: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
      },
      bullet: {
        hidden: { opacity: 0, x: -6 },
        show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
      },
      img: {
        hidden: { opacity: 0, y: 4 },
        show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -3, transition: { duration: 0.15 } },
      },
    };
  }, []);

  return (
    <section className="relative bg-[#FEF4E6] overflow-hidden">
      {/* ornaments */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <FontPackOrnaments />
      </div>


      <motion.div
        variants={v.wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24"
      >
        {/* Header */}
        <motion.div variants={v.header} className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/70">
            Edu-Aid Font Pack
            <span className="h-1 w-1 rounded-full bg-black/30" />
            CAPS-aligned letter formation
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16130F]">
            Everything you need for consistent handwriting practice
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-black/70">
            A curriculum-aligned set of fonts designed for South African Foundation Phase classrooms—
            from clean print letters to guided tracing that teaches correct stroke order.
          </p>
        </motion.div>

        {/* Main layout */}
        <motion.div
          variants={v.grid}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left: selector + details */}
          <div className="space-y-6">
            {/* Segmented control (shared highlight) - static */}
            <div className="relative grid grid-cols-3 gap-2 rounded-3xl border border-black/10 bg-white/70 p-2">
              {/* active pill */}
              <motion.div
                layout
                layoutId="fontPackActivePill"
                className="absolute top-2 bottom-2 rounded-2xl bg-[#1F9C93]/20 border border-black/10"
                style={{
                  left:
                    active === "print"
                      ? "0.5rem"
                      : active === "tracing"
                      ? "calc(33.333% + 0.25rem)"
                      : "calc(66.666% + 0rem)",
                  width: "calc(33.333% - 0.5rem)",
                }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
              />

              {FONT_ITEMS.map((item) => {
                const isActive = item.key === active;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(item.key)}
                    className={cx(
                      "relative z-10 rounded-2xl px-3 py-3 text-left transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                      isActive ? "text-[#16130F]" : "text-black/70 hover:text-black"
                    )}
                  >
                    <div className="text-sm font-semibold leading-tight">
                      {item.title}
                    </div>
                    <div className="mt-1 text-[11px] leading-tight opacity-80">
                      {item.badge}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Details panel - animated */}
            <motion.div variants={v.panel} className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-5 sm:p-6">
              {/* Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={v.details}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="mt-6"
                >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#16130F]">
                      {current.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/70">
                      {current.description}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/70 border border-black/10">
                    {current.badge}
                  </span>
                </div>

                <motion.ul
                  variants={v.bullets}
                  initial="hidden"
                  animate="show"
                  className="mt-4 space-y-2 text-sm text-black/75"
                >
                  {current.bullets.map((b) => (
                    <motion.li key={b} variants={v.bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1F9C93]" />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <div className="mt-6">
                  <button
                    onClick={() => navigate('/all-fonts')}
                    className="w-full inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-6 py-3 text-sm font-semibold text-black hover:bg-[#168DE4] transition shadow-sm shadow-black/10"
                  >
                    See Available Fonts
                  </button>
                </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right: font preview */}
          <motion.div
            variants={v.panel}
            className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-5 sm:p-6 h-full"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-black/70">Font Preview</p>
                <p className="text-xs text-black/60 mt-1">Updates as you select a font</p>
              </div>

              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] font-semibold text-black/60">
                A–C preview
              </span>
            </div>

            {/* preview frame */}
            <div className="mt-4 relative overflow-hidden rounded-2xl border border-black/10 bg-[#F7FBFA] p-4">
              {/* subtle paper sheen */}
              {!reduce && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="absolute -top-10 left-[-80px] h-28 w-56 rotate-12 bg-white/35 blur-2xl" />
                </motion.div>
              )}

              <div className="flex items-center justify-center min-h-[240px]">
                <img
                  src={current.previewSrc}
                  alt={current.previewAlt}
                  className="w-full h-auto max-h-[260px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* tiny helper line */}
            <p className="mt-3 text-[11px] text-black/55 leading-relaxed">
              Tip: Use <span className="font-semibold">Print</span> for worksheets, <span className="font-semibold">Tracing</span> for early practice,
              and <span className="font-semibold">Guided</span> to teach correct stroke order.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
