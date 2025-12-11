import React from 'react';

function FontPackSection() {
  return (
    <section className="bg-[#FFF5EA] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title + Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="h-1 w-12 bg-[#4EC5C1] rounded-full mx-auto mb-4"></div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#152835]">
            What You Get Inside the Edu-Aid Font Pack
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#4B5563]">
            Everything you need to teach correct handwriting in one place. Edu-Aid gives you a complete set of curriculum-aligned fonts and resources so your worksheets, slides, and classroom materials all use the right letter shapes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] items-start">
          {/* Left Column - Font Cards */}
          <div className="space-y-4">
            {/* Print Font Card */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] px-5 py-5 md:px-6 md:py-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6F1]">
                  <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#152835]">Print Font</h3>
              </div>
              <p className="text-xs md:text-sm text-[#6B7280]">
                Clean, Foundation Phase-aligned letter shapes for everyday worksheets and classroom materials.
              </p>
            </div>

            {/* Tracing Font Card */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] px-5 py-5 md:px-6 md:py-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFECE6]">
                  <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5" strokeDasharray="2 2"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#152835]">Tracing Font</h3>
              </div>
              <p className="text-xs md:text-sm text-[#6B7280]">
                Dotted letters designed for handwriting practice, perfect for tracing activities.
              </p>
            </div>

            {/* Arrow-Guided Font Card */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] px-5 py-5 md:px-6 md:py-6">
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
              <p className="text-xs md:text-sm text-[#6B7280]">
                Arrows show the correct stroke order so learners see exactly how to form each letter.
              </p>
            </div>

            {/* Cursive Font Card */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] px-5 py-5 md:px-6 md:py-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF7D9]">
                  <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h6l-3 3-3-3"/>
                    <path d="M9 8h6"/>
                    <path d="M9 16h6"/>
                    <path d="M12 3v18"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#152835]">Cursive Font</h3>
              </div>
              <p className="text-xs md:text-sm text-[#6B7280]">
                A smooth cursive style that supports the transition from print to joined handwriting in Grades 2–3.
              </p>
            </div>
          </div>

          {/* Right Column - Font Previews */}
          <div className="space-y-6">
            {/* Print Font Preview */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[#152835] mb-4">Print Font Preview</h4>
                <div className="bg-[#F9FAFB] border border-dashed border-[#E5E7EB] rounded-2xl p-6 flex items-center justify-center min-h-[120px]">
                  <p className="text-[#9CA3AF] text-sm">Print font image placeholder</p>
                </div>
                <p className="text-xs text-[#6B7280] mt-3 max-w-md mx-auto">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>

            {/* Tracing Font Preview */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[#152835] mb-4">Tracing Font Preview</h4>
                <div className="bg-[#F9FAFB] border border-dashed border-[#E5E7EB] rounded-2xl p-6 flex items-center justify-center min-h-[120px]">
                  <p className="text-[#9CA3AF] text-sm">Tracing font image placeholder</p>
                </div>
                <p className="text-xs text-[#6B7280] mt-3 max-w-md mx-auto">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>

            {/* Arrow-Guided Font Preview */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[#152835] mb-4">Arrow-Guided Font Preview</h4>
                <div className="bg-[#F9FAFB] border border-dashed border-[#E5E7EB] rounded-2xl p-6 flex items-center justify-center min-h-[120px]">
                  <p className="text-[#9CA3AF] text-sm">Arrow-guided font image placeholder</p>
                </div>
                <p className="text-xs text-[#6B7280] mt-3 max-w-md mx-auto">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>

            {/* Cursive Font Preview */}
            <div className="rounded-3xl bg-white border border-[#F1E3D1] shadow-[0_14px_30px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[#152835] mb-4">Cursive Font Preview</h4>
                <div className="bg-[#F9FAFB] border border-dashed border-[#E5E7EB] rounded-2xl p-6 flex items-center justify-center min-h-[120px]">
                  <p className="text-[#9CA3AF] text-sm">Cursive font image placeholder</p>
                </div>
                <p className="text-xs text-[#6B7280] mt-3 max-w-md mx-auto">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-full bg-[#2CA6FF] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#168DE4] transition">
            View Pricing &amp; Licenses
          </button>
          <button className="text-xs md:text-sm text-[#2563EB] hover:underline">
            Download a sample worksheet
          </button>
        </div>
      </div>
    </section>
  );
}

export default FontPackSection;
