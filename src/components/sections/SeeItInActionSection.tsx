import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import SeeItInActionOrnaments from "../decorative/SeeItInActionOrnaments";

// Configure PDF.js worker for Vite
// Use public folder worker file which Vite serves at root
if (typeof window !== "undefined") {
  const base = import.meta.env.BASE_URL || "/";
  pdfjs.GlobalWorkerOptions.workerSrc = `${base}pdf.worker.min.mjs`;
}

type Slide = {
  id: number;
  label: string;
  title: string;
  description: string;
  tone: "peach" | "mint" | "cream" | "softOrange";
  pdf: string;
};

const slides: Slide[] = [
  {
    id: 1,
    label: "Dots",
    title: "Dots Alphabet Worksheet",
    description: "Lowercase and uppercase letters with starting dots for tracing practice.",
    tone: "cream",
    pdf: "/Dots Alphabet worksheet LC+UC.pdf",
  },
  {
    id: 2,
    label: "Arrows",
    title: "Dots & Arrows Alphabet Worksheet",
    description: "Lowercase letters with dots and directional arrows for correct letter formation.",
    tone: "mint",
    pdf: "/Dots & Arrows Alphabet worksheet LC.pdf",
  },
  {
    id: 3,
    label: "Cursive",
    title: "Cursive Alphabet Worksheet",
    description: "Lowercase cursive letters for flowing, connected handwriting practice.",
    tone: "peach",
    pdf: "/Cursive Alphabet worksheet LC .pdf",
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
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="mx-3 mb-3 rounded-2xl border border-dashed border-black/15 bg-white/70 overflow-hidden flex-1 flex flex-col min-h-0">
      <style>{`
        .pdf-page-container canvas {
          max-width: 100%;
          max-height: 100%;
          width: auto !important;
          height: auto !important;
          object-fit: contain;
        }
        .pdf-page-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding-top: 8px;
        }
      `}</style>
      <div className="relative w-full flex-1 overflow-hidden pdf-page-container" style={{ position: 'relative' }}>
        <Document
          file={slide.pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-full min-h-[280px]">
              <div className="text-sm text-black/40">Loading...</div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-full min-h-[280px]">
              <div className="text-sm text-red-500">Failed to load PDF</div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={340}
          />
        </Document>
      </div>
    </div>
  );
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

                    {/* PDF worksheet preview */}
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
