import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
      "Yes — within your licence tier. The Individual Educator licence is for one educator (teacher or homeschool parent) and covers your own devices used for teaching and learning. The School licence allows installation and internal sharing across staff devices within one school. If you need district-wide rollout, publishing, or app/SaaS use, you'll need a Commercial & District licence — contact us for a tailored agreement. Sharing font files outside your licence scope is not allowed.",
    color: "#F6B5A8"
  },
  {
    id: "compatibility",
    question:
      "Are the fonts compatible with Word, PowerPoint, Google Docs, Mac and Windows?",
    answer:
      "Yes. Edu-Aid fonts are standard font files and work on both Mac and Windows. You can use them in Word, PowerPoint, Keynote and most common design/print tools. For Google Docs, the fonts must be installed on the device you're using — your exported PDFs/prints will keep the correct letterforms.",
    color: "#F8D7A8"
  },
  {
    id: "updates",
    question: "Are updates included in my licence?",
    answer:
      "Generally, no — the fonts are stable and not expected to be updated regularly. If we ever discover a critical issue (for example a file problem affecting printing), we may provide a replacement file. Any new fonts or major new packs would be released as separate products.",
    color: "#FDE2CF"
  },
  {
    id: "sample",
    question: "Is there a free sample I can try?",
    answer:
      "Yes. You can download a free sample to test compatibility and see the letterforms before purchasing. The sample is for evaluation only and may not be redistributed or used in paid products.",
    color: "#F0D8E8"
  },
  {
    id: "digital-products",
    question: "Can I use the fonts in digital products I sell?",
    answer:
      "Standard licences cover classroom and learning use (worksheets, school materials, and documents for your learners). If you want to use the fonts in paid products, publishing workflows, or embed them inside an app, website, or SaaS platform, you'll need a Commercial & District licence. Get in touch and we'll quote based on your use case.",
    color: "#EADBC4"
  },
  {
    id: "lost-download",
    question: "What if I lose the download link?",
    answer:
      "No stress. Email Karen with your purchase details (name, email used, and your school name if relevant). If we can confirm your licence, we'll help you restore access so you can reinstall.",
    color: "#E7E9A0"
  },
];

export default function FaqSection() {
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
          {faqs.map((item) => {
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
                  <div className="shrink-0">
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
              Need help choosing a licence?
            </h3>
            <p className="text-[#6B7280] mb-6">
              Email us for questions about individual or school licences — or request a Commercial & District quote for publishers, apps/SaaS, paid products, or bulk rollouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:schoolfonts@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl bg-[#00827A] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#006B5E] hover:shadow-xl transition-all duration-200"
              >
                Email Karen
              </a>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#E7DCCB] bg-white px-8 py-4 text-lg font-bold text-[#16130F] shadow-sm hover:bg-[#FFF8EF] transition-all duration-200"
              >
                Get a Commercial quote
              </button>
            </div>

            <p className="mt-4 text-sm text-[#6B7280]">
              We usually respond within 1 business day.
            </p>
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
