"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  color: string;
};

const faqs: FaqItem[] = [
  {
    id: "multiple-computers",
    question: "Can I use Edu-Aid fonts on multiple computers?",
    answer:
      "Yes, within your licence. A single-teacher licence is meant for you as an individual and typically covers a few of your own devices (for example your laptop and school computer). School and district licences allow the fonts to be installed on multiple staff machines inside that school or group. Sharing the fonts with friends at other schools is not allowed under the standard licence.",
    color: "#F6B5A8"
  },
  {
    id: "compatibility",
    question:
      "Are the fonts compatible with Word, PowerPoint, Google Docs, Mac and Windows?",
    answer:
      "Edu-Aid fonts are standard OpenType fonts. They work on both Mac and Windows, and can be used in Word, PowerPoint, Keynote and most other common programs. In Google Docs, you can use them when you generate PDFs or print from a computer where the fonts have been installed. (Google Docs itself doesn't host the font, but your exported documents will keep the correct letterforms.)",
    color: "#D8F3F0"
  },
  {
    id: "updates",
    question: "Are updates included?",
    answer:
      "Yes. Your licence includes updates to the Edu-Aid font pack for the duration of your licence period. When we fix small issues or make improvements to the letterforms or spacing, you'll receive updated font files. If we ever release completely new products or major new packs, those may be offered as an optional add-on.",
    color: "#FDE2CF"
  },
  {
    id: "digital-products",
    question: "Can I use the fonts in digital products I sell?",
    answer:
      "Classroom worksheets, school materials and internal documents are included in the standard licences. If you want to embed Edu-Aid fonts into commercial digital products that you sell (for example, downloadable worksheet bundles, apps or large online courses), you'll usually need a separate extended licence. Please contact Karen to discuss your specific use case.",
    color: "#EADBC4"
  },
  {
    id: "lost-download",
    question: "What if I lose the download link?",
    answer:
      "No problem. If you lose your original download email, you can contact Karen with your name and, if applicable, your school details. As long as we can find your purchase, we'll resend your download link so you can reinstall the fonts.",
    color: "#E7E9A0"
  },
];

export default function FaqSupport() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="relative bg-[#E0F2FE] py-24 md:py-32 overflow-hidden">
      {/* Top wavy blend line */}
      <svg
        className="absolute top-0 left-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 Q300,60 600,30 T1200,30 V0 H0 Z"
          fill="#fef4e6"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-xl border border-white/30">
            <h2 className="mb-4 text-4xl font-black text-[#16130F] md:text-5xl lg:text-6xl">
              FAQ & support
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#6B7280] md:text-xl leading-relaxed">
              A few quick answers to the most common questions about using Edu-Aid
              fonts in your classroom or school.
            </p>
          </div>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="backdrop-blur-sm rounded-3xl shadow-xl border border-white/40 overflow-hidden"
                style={{ backgroundColor: item.color + 'E6' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-6 p-8 text-left hover:bg-white/50 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-bold text-[#16130F] pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00827A] text-white"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8">
                        <div className="border-t border-[#E8DFD2] pt-6">
                          <p className="text-lg text-[#6B7280] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#16130F] mb-4">
              Still unsure?
            </h3>
            <p className="text-[#6B7280] mb-6">
              We're here to help you get the most out of Edu-Aid fonts.
            </p>
            <a
              href="mailto:schoolfonts@gmail.com"
              className="inline-flex items-center justify-center rounded-2xl bg-[#00827A] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#006B5E] hover:shadow-xl transition-all duration-200"
            >
              Email Karen at schoolfonts@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wavy blend line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 Q300,0 600,30 T1200,30 V60 H0 Z"
          fill="#fef4e6"
        />
      </svg>
    </section>
  );
}
