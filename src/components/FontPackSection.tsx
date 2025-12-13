"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import FontPackOrnaments from "./decorative/FontPackOrnaments";

import abcSolidImage from "/ABC-solid.png";
import abcDottedImage from "/ABC-dotted.png";
import abcDottedArrowsImage from "/ABC-dotted-arrows.png";

// Function to handle PDF link clicks to avoid React Router interception
const handlePdfClick = (filename: string, e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  // Construct the correct URL - Vite serves public files from root
  const baseUrl = import.meta.env.BASE_URL || '/';
  const pdfUrl = `${baseUrl}${filename}`.replace(/\/\//g, '/'); // Remove double slashes
  
  // Use window.open for reliable PDF opening
  window.open(pdfUrl, '_blank', 'noopener,noreferrer');
};

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

export default function FontPackSection() {
  const [active, setActive] = React.useState<FontKey>("print");
  const current = FONT_ITEMS.find((x) => x.key === active)!;

  return (
    <section className="relative bg-[#FEF4E6]">
      {/* Subtle background ornaments (optional) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]">
        <FontPackOrnaments />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        {/* Header */}
        <div className="max-w-3xl">
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
        </div>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: selector + details */}
          <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-5 sm:p-6 h-full">
            {/* Segmented control */}
            <div className="grid grid-cols-3 gap-2">
              {FONT_ITEMS.map((item) => {
                const isActive = item.key === active;
                return (
                  <motion.button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      backgroundColor: isActive ? "#1F9C93" : "#ffffffb3",
                      color: isActive ? "#000000" : "#1a1a1a",
                    }}
                    transition={{ duration: 0.2 }}
                    className={[
                      "rounded-2xl px-3 py-3 text-left transition",
                      "border",
                      isActive
                        ? "border-black/10 text-black shadow-sm"
                        : "border-black/10 text-black/80 hover:bg-white",
                    ].join(" ")}
                  >
                    <motion.div
                      className="text-sm font-semibold leading-tight"
                      animate={{ opacity: isActive ? 1 : 0.8 }}
                    >
                      {item.title}
                    </motion.div>
                    <motion.div
                      className="mt-1 text-[11px] leading-tight opacity-80"
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                    >
                      {item.badge}
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>

            {/* Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg font-bold text-[#16130F]"
                    >
                      {current.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="mt-1 text-sm text-black/70"
                    >
                      {current.description}
                    </motion.p>
                  </div>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/70"
                  >
                    {current.badge}
                  </motion.span>
                </div>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 space-y-2 text-sm text-black/75"
                >
                  {current.bullets.map((b, index) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex gap-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1F9C93]" />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <button
                    onClick={(e) => handlePdfClick("Edu‑font-License.pdf", e)}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition"
                    type="button"
                  >
                    View Pricing &amp; Licenses
                  </a>
                  <Link
                    to="/#download"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#8BD889] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition"
                  >
                    Download Sample Font
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: font preview */}
          <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-5 sm:p-6 h-full">
            <p className="text-sm font-semibold text-black/70">
              Font Preview
            </p>
            <p className="text-xs text-black/60 mt-1">
              Updates as you select a font
              </p>
              <div className="mt-3 rounded-2xl border border-black/10 bg-[#F7FBFA] p-4 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.previewSrc}
                    src={current.previewSrc}
                    alt={current.previewAlt}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-auto max-h-[220px] object-contain"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}