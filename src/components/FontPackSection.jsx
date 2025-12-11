import React from 'react';
import FontPackBackgroundOrnaments from './FontPackBackgroundOrnaments';

function FontPackSection() {
  return (
    <section className="bg-[#fef4e6] relative pt-24">
      {/* Background ornaments */}
      <div className="absolute inset-0 w-full h-full overflow-visible">
        <FontPackBackgroundOrnaments />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20 md:pt-24 md:pb-24 relative z-10">
        <div className="rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#F1E3D1] px-5 py-10 md:px-10 md:py-14">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="mb-4 h-1 w-12 rounded-full bg-[#4EC5C1]" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#152835]">
              What You Get Inside the Edu-Aid Font Pack
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#4B5563]">
              Everything you need to teach correct handwriting in one place. Edu-Aid gives you a complete set of curriculum-aligned fonts and resources so your worksheets, slides, and classroom materials all use the right letter shapes.
            </p>
          </div>

          {/* Product Grid */}
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* Print Font Card */}
            <div className="rounded-2xl bg-white border border-[#E8DFD2] shadow-[0_14px_30px_rgba(0,0,0,0.03)] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6F1]">
                  <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#152835]">Print Font</h3>
              </div>

              <div className="rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 mb-3">
                <p className="text-lg font-semibold tracking-wide text-[#111827]">Aa Bb Cc</p>
              </div>

              <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed mt-auto">
                Clean, Foundation Phase-aligned letter shapes for everyday worksheets and classroom materials.
              </p>
            </div>

            {/* Tracing Font Card */}
            <div className="rounded-2xl bg-white border border-[#E8DFD2] shadow-[0_14px_30px_rgba(0,0,0,0.03)] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFECE6]">
                  <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5" strokeDasharray="3 3"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#152835]">Tracing Font</h3>
              </div>

              <div className="rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 mb-3">
                <p className="text-lg font-semibold tracking-wide text-[#111827]" style={{textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#9CA3AF'}}>
                  Aa Bb Cc
                </p>
              </div>

              <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed mt-auto">
                Dotted letters designed for handwriting practice, perfect for tracing activities and early writers.
              </p>
            </div>

            {/* Arrow-Guided Font Card */}
            <div className="rounded-2xl bg-white border border-[#E8DFD2] shadow-[0_14px_30px_rgba(0,0,0,0.03)] px-5 py-5 md:px-6 md:py-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F0FF]">
                  <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M12 12v10"/>
                    <path d="M8 16l4-4 4 4"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#152835]">Arrow-Guided Font</h3>
              </div>

              <div className="rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 mb-3 relative">
                <p className="text-lg font-semibold tracking-wide text-[#111827]">Aa Bb Cc</p>
                <svg className="absolute top-1 right-2 h-3 w-3 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </div>

              <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed mt-auto">
                Arrows show the correct stroke order so learners see exactly how to form each letter.
              </p>
            </div>

          </div>

          {/* Wide Preview Banner */}
          <div className="mt-10 rounded-[28px] bg-[#F9FAFB] border border-[#E5E7EB] px-5 py-5 md:px-7 md:py-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-[#152835]">
                See the whole pack working together
              </h4>
              <p className="mt-2 text-xs md:text-sm text-[#6B7280] max-w-md">
                Combine print, tracing, arrows and cursive to build a full progression of handwriting activities from Grade R to Grade 3.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="h-24 md:h-28 rounded-2xl bg-white border border-dashed border-[#E5E7EB] flex items-center justify-center text-[11px] text-[#9CA3AF]">
                Font pack preview goes here
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-full bg-[#2CA6FF] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#168DE4] transition">
              View Pricing &amp; Licenses
            </button>
            <button className="text-xs md:text-sm text-[#2563EB] hover:underline">
              Download a sample worksheet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FontPackSection;