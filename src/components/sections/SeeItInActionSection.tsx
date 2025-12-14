import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SeeItInActionOrnaments from "../decorative/SeeItInActionOrnaments";

type Slide = {
  id: number;
  label: string;
  title: string;
  description: string;
  tone: "peach" | "mint" | "cream" | "softOrange";
};

const slides: Slide[] = [
  {
    id: 1,
    label: "Tracing",
    title: "Grade 1 Tracing Worksheet",
    description: "Big, friendly letters with starting dots and arrows.",
    tone: "cream",
  },
  {
    id: 2,
    label: "Arrows",
    title: "Letter Formation Arrows",
    description: "Clear step-by-step arrows for correct letter direction.",
    tone: "mint",
  },
  {
    id: 3,
    label: "Cursive",
    title: "Grade 3 Cursive Practice",
    description: "Joined letters with baseline guides and rhythm lines.",
    tone: "peach",
  },
  {
    id: 4,
    label: "Advanced",
    title: "Advanced Letter Tracing",
    description: "Complex letter shapes with directional arrows for mastery.",
    tone: "softOrange",
  },
];

function toneToBg(tone: Slide["tone"]) {
  switch (tone) {
    case "mint":
      return "bg-[#E6F4F1]";
    case "peach":
      return "bg-[#F5E0E0]";
    case "softOrange":
      return "bg-[#FDE2CF]";
    case "cream":
    default:
      return "bg-[#F5EDDD]";
  }
}

function WorksheetPreview({ slide }: { slide: Slide }) {
  switch (slide.label) {
    case "Tracing":
      return (
        <div className="mx-3 mb-3 rounded-2xl border border-dashed border-black/15 bg-white/70 p-3">
          {/* title bar */}
          <div className="mb-3 h-2 w-1/3 rounded-full bg-black/10" />
          {/* big tracing rows */}
          <div className="space-y-3">
            {[0, 1, 2].map((row) => (
              <div
                key={row}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/80 px-3 py-2"
              >
                {/* start dot */}
                <div className="h-3 w-3 rounded-full bg-[#f89f7b]" />
                {/* dashed guide line */}
                <div className="relative flex-1">
                  <div className="h-[2px] w-full border-t border-dashed border-black/30" />
                  {/* ghost letter shape */}
                  <div className="absolute inset-y-[-6px] left-4 flex items-center">
                    <div className="h-6 w-6 rounded-lg border border-black/20 bg-black/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "Arrows":
      return (
        <div className="mx-3 mb-3 rounded-2xl border border-dashed border-black/15 bg-white/70 p-3">
          {/* title bar */}
          <div className="mb-3 h-2 w-1/2 rounded-full bg-black/10" />
          <div className="space-y-3">
            {[0, 1].map((row) => (
              <div
                key={row}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/80 px-3 py-2"
              >
                {/* ghost letter shape */}
                <div className="h-10 w-10 rounded-xl border border-black/20 bg-black/5" />
                {/* arrow steps */}
                <div className="flex flex-1 items-center justify-between gap-2">
                  {[0, 1, 2].map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-1 text-[10px] text-black/50"
                    >
                      <div className="h-4 w-4 rounded-full border border-black/20 bg-white" />
                      {/* tiny arrow */}
                      <div className="h-px w-6 bg-black/30" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "Cursive":
      return (
        <div className="mx-3 mb-3 rounded-2xl border border-dashed border-black/15 bg-white/70 p-3">
          {/* title bar */}
          <div className="mb-3 h-2 w-2/5 rounded-full bg-black/10" />
          <div className="space-y-3">
            {[0, 1, 2].map((row) => (
              <div key={row} className="space-y-1">
                {/* guideline stack */}
                <div className="h-px w-full bg-black/10" />
                <div className="h-px w-full bg-black/5" />
                <div className="flex items-center gap-1 pt-1">
                  {/* flowing "joined letters" as pills */}
                  {[0, 1, 2, 3].map((pill) => (
                    <div
                      key={pill}
                      className="h-4 flex-1 rounded-full bg-black/5"
                    />
                  ))}
                </div>
                <div className="h-px w-full bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      );

    case "Advanced":
    default:
      return (
        <div className="mx-3 mb-3 rounded-2xl border border-dashed border-black/15 bg-white/70 p-3">
          {/* title bar */}
          <div className="mb-3 h-2 w-2/5 rounded-full bg-black/10" />
          <div className="space-y-3">
            {[0, 1].map((row) => (
              <div
                key={row}
                className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/80 px-3 py-2"
              >
                {/* complex letter shape */}
                <div className="h-12 w-12 rounded-lg border-2 border-black/20 bg-black/5" />
                {/* multiple directional arrows */}
                <div className="flex flex-1 items-center justify-between gap-1">
                  {[0, 1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className="flex flex-col items-center gap-1 text-[8px] text-black/50"
                    >
                      <div className="h-3 w-3 rounded-full border border-black/20 bg-white" />
                      {/* curved arrow */}
                      <div className="h-px w-4 bg-black/30 rounded-full" />
                      <div className="h-px w-2 bg-black/30 rounded-full transform rotate-45" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default function SeeItInActionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = slides.length;

  const orderedSlides = useMemo(() => slides, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <>
      <section className="relative bg-[#fef4e6] md:pt-40 pb-32 md:pb-40">
        <SeeItInActionOrnaments />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: stacked card carousel */}
            <div className="relative flex h-112 items-center justify-center overflow-hidden sm:h-128 lg:h-144 lg:order-1">
              {orderedSlides.map((slide, index) => {
                let offset = index - currentIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                if (Math.abs(offset) > 2) return null;

                const distance = Math.abs(offset);

                const x = offset * 20;
                const y = distance * 10;
                const rotate = offset * 3;
                const scale = offset === 0 ? 1 : 0.94;
                const zIndex = 10 - distance;
                const opacity = offset === 0 ? 1 : 0.85;

                return (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity, x, y, rotate, scale }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className={`absolute flex w-[340px] max-w-full flex-col justify-between rounded-3xl border border-black/10 shadow-lg shadow-black/15 sm:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] lg:h-[480px] ${toneToBg(
                      slide.tone
                    )}`}
                    style={{ zIndex }}
                  >
                    <div className="p-4 pb-3">
                      <span className="inline-flex rounded-full bg-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#ECE6DA]">
                        {slide.label}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-black">
                        {slide.title}
                      </h3>
                      <p className="mt-1 text-sm text-black/70">
                        {slide.description}
                      </p>
                    </div>

                    {/* fake but specific worksheet preview */}
                    <WorksheetPreview slide={slide} />
                  </motion.div>
                );
              })}

              {/* Carousel arrows */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous worksheet"
                className="absolute left-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-black/5 px-2 py-2 text-xs text-black/70 backdrop-blur-sm hover:bg-black/10"
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next worksheet"
                className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-black/5 px-2 py-2 text-xs text-black/70 backdrop-blur-sm hover:bg-black/10"
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Right: explanatory text */}
            <div className="flex justify-center items-center h-112 sm:h-128 lg:h-144 lg:order-2 relative z-10 -mt-16 md:mt-0">
              <div className="rounded-3xl backdrop-blur-sm border border-white/30 shadow-lg p-8 md:p-10 max-w-lg w-full">
                <div className="space-y-6">
                  <h2 className="text-4xl font-semibold text-black md:text-5xl">
                    See It in Action
                  </h2>
                  <p className="text-lg text-black/75 md:text-xl leading-relaxed">
                    Browse through examples of worksheets you can create with Edu-Aid fonts –
                    from Grade 1 tracing pages to Grade 3 cursive practice –
                    all built with correct South African letterforms.
                  </p>

                  <ul className="space-y-3 text-base text-black/80 md:text-lg">
                    <li>
                      • Grade 1 tracing sheets with clear start and stop points.
                    </li>
                    <li>
                      • Letter-formation arrows for each new sound or letter.
                    </li>
                    <li>• Cursive practice lines for older grades.</li>
                    <li>• Advanced letter tracing for complex shapes and mastery.</li>
                  </ul>

                  <p className="text-base text-black/60 mt-6">
                    Create your own worksheets, presentations, and teaching materials.
                    Every design can be printed or used on a screen or
                    interactive whiteboard – so you can plug it straight into
                    tomorrow&apos;s lesson.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
