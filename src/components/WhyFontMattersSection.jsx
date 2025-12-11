import React from 'react';

function WhyFontMattersSection() {
  return (
    <section className="bg-[#fef4e6] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        {/* Left Column - Content */}
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#152835] mb-4">
            Why the Right Font Matters
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl">
            Handwriting isn't just about neatness — it's the foundation for reading, spelling, and confidence in the classroom. When learners see inconsistent or incorrect letter shapes, they form habits that are difficult to undo later. Edu-Aid fonts follow South African Foundation Phase standards so children see the right shapes from day one.
          </p>

          {/* Feature List */}
          <div className="mt-8 space-y-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-[#4EC5C1]/10 flex items-center justify-center shrink-0">
                <span className="text-[#152835] font-bold text-sm">A</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#152835] text-sm mb-1">
                  Curriculum Accurate
                </h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Every letter shape matches South African Foundation Phase handwriting standards.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-[#FF8C88]/10 flex items-center justify-center shrink-0">
                <span className="text-[#152835] font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#152835] text-sm mb-1">
                  Designed with Teachers
                </h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Created with input from classroom teachers and therapists who teach letter formation every day.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-[#C7E9B0]/10 flex items-center justify-center shrink-0">
                <span className="text-[#152835] font-bold text-sm">📚</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#152835] text-sm mb-1">
                  Prevents Bad Habits Early
                </h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Children copy what they see. Clear, correct models help avoid reversals and incorrect strokes.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-[#74C0E3]/10 flex items-center justify-center shrink-0">
                <span className="text-[#152835] font-bold text-sm">✨</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#152835] text-sm mb-1">
                  Easy to Use Everywhere
                </h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Use Edu-Aid fonts in worksheets, slides, digital activities, and interactive whiteboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Comparison Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-3xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.05)] border border-[#E8DFD2] px-6 py-6 md:px-8 md:py-7 max-w-sm w-full">
            {/* Eyebrow */}
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280] mb-3">
              See the Difference
            </div>

            {/* Incorrect Row */}
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#FFF1F2] px-4 py-3 mb-3">
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#B91C1C] mb-1">
                  Incorrect example
                </div>
                <div className="text-[11px] text-[#9CA3AF]">
                  Generic font with wrong letter shapes.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FF8C88] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✕</span>
                </div>
                <div className="rounded-xl bg-white px-3 py-2 text-lg font-semibold text-[#9CA3AF] border border-[#FECACA]">
                  aaa
                </div>
              </div>
            </div>

            {/* Correct Row */}
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#ECFDF3] px-4 py-3 mb-3">
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#166534] mb-1">
                  Edu-Aid font
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  SA-approved letter shapes for early writers.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="rounded-xl bg-white px-3 py-2 text-lg font-semibold text-[#152835] border border-[#A7F3D0]">
                  aaa
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-2 text-[11px] text-[#9CA3AF]">
              Actual shapes may vary by grade level, but the principle stays the same: clear, consistent models help children learn faster.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyFontMattersSection;
