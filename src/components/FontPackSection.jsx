import React from "react";
import FontPackBackgroundOrnaments from "./FontPackBackgroundOrnaments";

function FontPackSection() {
  return (
    <section className="bg-[#fef4e6] relative pt-48">
      {/* Background ornaments */}
      <div className="absolute inset-0 w-full h-full overflow-visible">
        <FontPackBackgroundOrnaments />
      </div>
      <div className="w-full sm:px-6 pb-20 pt-24md:pb-24 relative z-10">
        {/* Product Grid */}
        <div
          className="grid grid-cols-3 grid-rows-4 gap-8 mx-auto max-w-7xl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gridColumnGap: "1rem",
            gridRowGap: "1rem",
          }}
        >
          {/* Main Heading Card */}
          <div
            className="bg-[#1F9C93] rounded-2xl px-5 py-5 md:px-6 md:py-6 flex flex-col"
            style={{ gridArea: "1 / 1 / 2 / 3" }}
          >
            <h1 className="text-4xl font-extrabold text-black mb-3">
              What You Get Inside the Edu-Aid Font Pack
            </h1>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              A comprehensive collection of curriculum-aligned fonts designed specifically for South African Foundation Phase education. From print letters to cursive writing, Edu-Aid ensures consistent, correct letter formation across all your teaching materials.
            </p>
          </div>

          {/* Print Font Card */}
          <div
            className="rounded-2xl bg-[#FDE2CF] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "2 / 1 / 3 / 2" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F6F1]"></div>
              <h3 className="text-sm font-semibold text-[#16130F]">
                Print Font
              </h3>
            </div>

            <ul className="text-xs text-[#16130F]/70 space-y-1 mb-3">
              <li>• Clear, beginner-friendly letterforms</li>
              <li>• Perfect for early writing practice</li>
              <li>• CAPS Foundation Phase aligned</li>
            </ul>

            <p className="text-xs md:text-sm text-[#16130F]/80 leading-relaxed mt-auto">
              Clean, Foundation Phase-aligned letter shapes for everyday
              worksheets and classroom materials.
            </p>
          </div>

          {/* Tracing Font Card */}
          <div
            className="rounded-2xl bg-[#E8F5F2] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "3 / 1 / 4 / 2" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFECE6]"></div>
              <h3 className="text-sm font-semibold text-[#16130F]">
                Tracing Font
              </h3>
            </div>

            <ul className="text-xs text-[#16130F]/70 space-y-1 mb-3">
              <li>• Dotted letters for tracing practice</li>
              <li>• Helps develop fine motor skills</li>
              <li>• Ideal for Grades R-1</li>
            </ul>

            <p className="text-xs md:text-sm text-[#16130F]/80 leading-relaxed mt-auto">
              Dotted letters designed for handwriting practice, perfect for
              tracing activities and early writers.
            </p>
          </div>

          {/* Guided Tracing Font Card */}
          <div
            className="rounded-2xl bg-[#F5E0E0] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "4 / 1 / 5 / 2" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FEF4E6]"></div>
              <h3 className="text-sm font-semibold text-[#16130F]">
                Guided Tracing Font
              </h3>
            </div>

            <ul className="text-xs text-[#16130F]/70 space-y-1 mb-3">
              <li>• Arrows show correct stroke order</li>
              <li>• Builds proper letter formation habits</li>
              <li>• Advanced practice for Grades 1-2</li>
            </ul>

            <p className="text-xs md:text-sm text-[#16130F]/80 leading-relaxed mt-auto">
              Arrows show the correct stroke order so learners see exactly how
              to form each letter.
            </p>
          </div>

          {/* Tall Card - Cursive Font */}
          <div
            className="rounded-2xl bg-[#E0F2FE] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex items-center justify-center h-full"
            style={{ gridArea: "1 / 3 / 4 / 4" }}
          >
            <img
              src="/abstract_figure.png"
              alt="Abstract figure illustration"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Numbers Card */}
          <div
            className="rounded-2xl bg-[#F5EDDD] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex items-center justify-center h-full"
            style={{ gridArea: "2 / 2 / 3 / 3" }}
          >
            <img
              src="/ABC-solid.png"
              alt="Solid ABC letters"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Symbols Card */}
          <div
            className="rounded-2xl bg-[#ECE6DA] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex items-center justify-center h-full"
            style={{ gridArea: "3 / 2 / 4 / 3" }}
          >
            <img
              src="/ABC-dotted.png"
              alt="Dotted ABC letters for tracing"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Bonus Features Card */}
          <div
            className="rounded-2xl bg-[#FDF7EF] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex items-center justify-center h-full"
            style={{ gridArea: "4 / 2 / 5 / 3" }}
          >
            <img
              src="/ABC-dotted-arrows.png"
              alt="Dotted ABC letters with arrows for guided tracing"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          {/* CTA Card - Bottom Right */}
          <div
            className="rounded-2xl bg-white border border-[#E8DFD2] flex flex-row h-full overflow-hidden"
            style={{ gridArea: "4 / 3 / 5 / 4" }}
          >
            <button className="flex-1 inline-flex items-center justify-center bg-[#2CA6FF] text-sm font-semibold text-black hover:bg-[#168DE4] hover:flex-[4] peer-hover:flex-[0.2] transition-all duration-300 flex-col peer">
              <span>View Pricing</span>
              <span>&amp; Licenses</span>
            </button>
            <button className="flex-1 inline-flex items-center justify-center bg-[#8BD889] text-sm font-semibold text-black hover:bg-[#7BC67D] hover:flex-[4] peer-hover:flex-[0.2] transition-all duration-300 flex-col peer max-h-full">
              <span className="whitespace-nowrap">Download</span>
              <span className="whitespace-nowrap">sample font</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FontPackSection;
