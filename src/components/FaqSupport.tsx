"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "multiple-computers",
    question: "Can I use Edu-Aid fonts on multiple computers?",
    answer:
      "Yes, within your licence. A single-teacher licence is meant for you as an individual and typically covers a few of your own devices (for example your laptop and school computer). School and district licences allow the fonts to be installed on multiple staff machines inside that school or group. Sharing the fonts with friends at other schools is not allowed under the standard licence.",
  },
  {
    id: "compatibility",
    question:
      "Are the fonts compatible with Word, PowerPoint, Google Docs, Mac and Windows?",
    answer:
      "Edu-Aid fonts are standard OpenType fonts. They work on both Mac and Windows, and can be used in Word, PowerPoint, Keynote and most other common programs. In Google Docs, you can use them when you generate PDFs or print from a computer where the fonts have been installed. (Google Docs itself doesn't host the font, but your exported documents will keep the correct letterforms.)",
  },
  {
    id: "updates",
    question: "Are updates included?",
    answer:
      "Yes. Your licence includes updates to the Edu-Aid font pack for the duration of your licence period. When we fix small issues or make improvements to the letterforms or spacing, you'll receive updated font files. If we ever release completely new products or major new packs, those may be offered as an optional add-on.",
  },
  {
    id: "digital-products",
    question: "Can I use the fonts in digital products I sell?",
    answer:
      "Classroom worksheets, school materials and internal documents are included in the standard licences. If you want to embed Edu-Aid fonts into commercial digital products that you sell (for example, downloadable worksheet bundles, apps or large online courses), you'll usually need a separate extended licence. Please contact Karen to discuss your specific use case.",
  },
  {
    id: "lost-download",
    question: "What if I lose the download link?",
    answer:
      "No problem. If you lose your original download email, you can contact Karen with your name and, if applicable, your school details. As long as we can find your purchase, we'll resend your download link so you can reinstall the fonts.",
  },
];

export default function FaqSupport() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="relative bg-[#fefaf3] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-8 space-y-3 md:mb-10">
          <h2 className="text-3xl font-semibold text-[#16130F] md:text-4xl">
            FAQ & support
          </h2>
          <p className="text-sm text-[#16130F]/75 md:text-base">
            A few quick answers to the most common questions about using Edu-Aid
            fonts in your classroom or school.
          </p>
        </div>

        {/* Accordion container */}
        <div className="rounded-3xl border border-black/5 bg-white/80 p-3 shadow-sm shadow-black/5 md:p-4">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl ${
                  index > 0 ? "mt-1 border-t border-black/5 pt-1" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-3 py-3 text-left hover:bg-black/[0.02] md:px-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-[#16130F] md:text-base">
                    {item.question}
                  </span>
                  <span
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-black/10 bg-white text-xs text-[#16130F]/70"
                    aria-hidden="true"
                  >
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <div className="px-3 pb-3 text-sm text-[#16130F]/80 md:px-4 md:pb-4 md:text-[0.95rem]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Final support line */}
        <div className="mt-6 text-sm text-[#16130F]/75 md:text-base">
          Still unsure? Email Karen at{" "}
          <a
            href="mailto:schoolfonts@gmail.com"
            className="font-medium text-[#16130F] underline underline-offset-4 hover:opacity-80"
          >
            schoolfonts@gmail.com
          </a>
          .
        </div>
      </div>
    </section>
  );
}
