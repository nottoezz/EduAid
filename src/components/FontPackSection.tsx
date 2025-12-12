"use client";

import React from "react";
import FontPackBackgroundOrnaments from "./decorative/FontPackBackgroundOrnaments";

import abcSolidImage from "/ABC-solid.png";
import abcDottedImage from "/ABC-dotted.png";
import abcDottedArrowsImage from "/ABC-dotted-arrows.png";

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
        <FontPackBackgroundOrnaments />
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
                  <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={[
                      "rounded-2xl px-3 py-3 text-left transition",
                      "border",
                      isActive
                        ? "bg-[#1F9C93] border-black/10 text-black shadow-sm"
                        : "bg-white/70 border-black/10 text-black/80 hover:bg-white",
                    ].join(" ")}
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

            {/* Details */}
            <div className="mt-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-[#16130F]">
                    {current.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/70">
                    {current.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/70">
                  {current.badge}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-black/75">
                {current.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1F9C93]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="/Edu‑font-License.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition"
                >
                  View Pricing &amp; Licenses
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#8BD889] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition"
                >
                  Download Sample Font
                </a>
              </div>
            </div>
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
                <img
                  src={current.previewSrc}
                  alt={current.previewAlt}
                  className="w-full h-auto max-h-[220px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}