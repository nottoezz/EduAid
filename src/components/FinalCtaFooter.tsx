import { motion } from "framer-motion";

export default function FinalCtaFooter() {
  return (
    <section className="relative bg-[#fef4e6] py-20 md:py-24">
      {/* subtle background tint / blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-40px] bottom-0 h-40 w-40 rounded-full bg-[#D8F3F0] blur-3xl opacity-50" />
        <div className="absolute right-[-30px] top-4 h-32 w-32 rounded-full bg-[#FDE2CF] blur-3xl opacity-50" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="text-3xl font-semibold text-[#16130F] md:text-4xl"
        >
          Give your learners the right letter shapes from day one.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.05, type: "spring", stiffness: 260, damping: 26 }}
          className="max-w-xl text-sm text-[#16130F]/75 md:text-base"
        >
          Edu-Aid fonts are designed for South African classrooms, so your
          worksheets match what learners see on the board, in their books and at home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.08, type: "spring", stiffness: 260, damping: 26 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary CTA – adjust href as needed */}
          <a
            href="#pricing" // or "/pricing" or your download link
            className="inline-flex items-center justify-center rounded-full bg-[#1F9C93] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#17867F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F9C93]"
          >
            View pricing & licences
          </a>

          {/* Secondary CTA – sample worksheet */}
          <a
            href="/sample-worksheet.pdf" // update to your actual sample URL
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-2.5 text-sm font-medium text-[#16130F] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/10"
          >
            Download a sample worksheet
          </a>
        </motion.div>

        <p className="mt-4 text-xs text-[#16130F]/60">
          No long forms. No confusing bundles. Just the right letter shapes for South African learners.
        </p>
      </div>
    </section>
  );
}
