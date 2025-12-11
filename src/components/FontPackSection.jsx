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
            <h1 className="text-4xl font-extrabold text-white mb-3">
              What You Get Inside the Edu-Aid Font Pack
            </h1>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              A comprehensive collection of curriculum-aligned fonts designed specifically for South African Foundation Phase education. From print letters to cursive writing, Edu-Aid ensures consistent, correct letter formation across all your teaching materials.
            </p>
          </div>

          {/* Print Font Card */}
          <div
            className="rounded-2xl bg-[#FDE2CF] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "3 / 1 / 4 / 2" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6F1]">
                <svg
                  className="h-4 w-4 text-[#152835]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-[#16130F]">
                Print Font
              </h3>
            </div>

            <div className="rounded-2xl bg-[#FEF4E6] border border-[#E8DFD2] px-4 py-3 mb-3">
              <p className="text-lg font-semibold tracking-wide text-[#16130F]">
                Aa Bb Cc
              </p>
            </div>

            <p className="text-xs md:text-sm text-[#16130F]/80 leading-relaxed mt-auto">
              Clean, Foundation Phase-aligned letter shapes for everyday
              worksheets and classroom materials.
            </p>
          </div>

          {/* Tracing Font Card */}
          <div
            className="rounded-2xl bg-[#E6F4F1] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "2 / 1 / 3 / 2" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFECE6]">
                <svg
                  className="h-4 w-4 text-[#152835]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" strokeDasharray="3 3" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-[#16130F]">
                Tracing Font
              </h3>
            </div>

            <div className="rounded-2xl bg-[#FEF4E6] border border-[#E8DFD2] px-4 py-3 mb-3">
              <p
                className="text-lg font-semibold tracking-wide text-[#16130F]"
                style={{
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                  textDecorationColor: "#9CA3AF",
                }}
              >
                Aa Bb Cc
              </p>
            </div>

            <p className="text-xs md:text-sm text-[#16130F]/80 leading-relaxed mt-auto">
              Dotted letters designed for handwriting practice, perfect for
              tracing activities and early writers.
            </p>
          </div>

          {/* Cursive Font Card */}
          <div
            className="rounded-2xl bg-[#EADBC4] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "4 / 1 / 5 / 2" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F9FF]">
                <svg
                  className="h-4 w-4 text-[#152835]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-[#16130F]">
                Cursive Font
              </h3>
            </div>

            <div className="rounded-2xl bg-[#FEF4E6] border border-[#E8DFD2] px-4 py-3 mb-3">
              <p className="text-lg font-semibold tracking-wide text-[#16130F] italic">
                Aa Bb Cc
              </p>
            </div>

            <p className="text-xs md:text-sm text-[#16130F]/80 leading-relaxed mt-auto">
              Connected cursive letters for intermediate and advanced handwriting
              practice, building fluency and speed.
            </p>
          </div>

          {/* Tall Card - Cursive Font */}
          <div
            className="rounded-2xl bg-[#EADBC4] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex items-center justify-center h-full"
            style={{ gridArea: "1 / 3 / 4 / 4" }}
          >
            <img
              src="/abstract_figure.png"
              alt="Abstract figure illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Numbers Card */}
          <div
            className="rounded-2xl bg-[#F5EDDD] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "2 / 2 / 3 / 3" }}
          ></div>

          {/* Symbols Card */}
          <div
            className="rounded-2xl bg-[#ECE6DA] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "3 / 2 / 4 / 3" }}
          ></div>

          {/* Bonus Features Card */}
          <div
            className="rounded-2xl bg-[#FDF7EF] border border-[#E8DFD2] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full"
            style={{ gridArea: "4 / 2 / 5 / 3" }}
          ></div>
          {/* CTA Card - Bottom Right */}
          <div
            className="rounded-2xl bg-white border border-[#E8DFD2] flex flex-row h-full overflow-hidden"
            style={{ gridArea: "4 / 3 / 5 / 4" }}
          >
            <button className="flex-1 inline-flex items-center justify-center bg-[#2CA6FF] text-sm font-semibold text-black hover:bg-[#168DE4] transition flex-col">
              <span>View Pricing</span>
              <span>&amp; Licenses</span>
            </button>
            <button className="flex-1 inline-flex items-center justify-center bg-[#8BD889] text-sm font-semibold text-black hover:bg-[#7BC67D] transition flex-col">
              <span>Download</span>
              <span>sample font</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FontPackSection;
