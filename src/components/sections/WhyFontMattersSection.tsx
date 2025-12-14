import abcIncorrectImage from '/ABC-Incorect.webp';
import abcEduImage from '/ABC-edu.webp';

export default function WhyFontMattersSection() {
  return (
    <section className="bg-[#fef4e6] md:pt-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-start">
        {/* Left Column - Content */}
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#152835] mb-5">
            Why the Right Font Matters
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mt-4">
            Handwriting isn't just about neatness — it's the foundation for reading, spelling, and confidence in the classroom. When learners see inconsistent or incorrect letter shapes, they form habits that are difficult to undo later. Edu-Aid fonts follow South African Foundation Phase standards so children see the right shapes from day one.
          </p>

          {/* Feature List */}
          <div className="mt-8 space-y-5">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6F1]">
                <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#152835]">Curriculum Accurate</h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Every letter shape matches South African Foundation Phase handwriting standards.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFECE6]">
                <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#152835]">Designed with Teachers</h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Created with input from classroom teachers and therapists who teach letter formation every day.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F0FF]">
                <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18"/>
                  <path d="M3 6h18"/>
                  <path d="M3 18h18"/>
                  <circle cx="9" cy="12" r="1"/>
                  <circle cx="15" cy="6" r="1"/>
                  <circle cx="15" cy="18" r="1"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#152835]">Prevents Bad Habits Early</h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Children copy what they see. Clear, correct models help avoid reversals and incorrect strokes.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF7D9]">
                <svg className="h-4 w-4 text-[#152835]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#152835]">Easy to Use Everywhere</h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Use Edu-Aid fonts in worksheets, slides, digital activities, and interactive whiteboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Comparison Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-3xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.05)] border border-[#E8DFD2] px-6 py-6 md:px-8 md:py-7 w-full">
            {/* Eyebrow */}
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280] mb-3">
              See the Difference
            </div>

            {/* Incorrect Font Image */}
            <div className="mt-4 rounded-2xl bg-[#FFF1F2] px-4 py-4 mb-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full bg-[#FF8C88] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">✕</span>
                </div>
                <div className="text-xs font-semibold text-[#B91C1C]">
                  incorrect sample font
                </div>
              </div>
              <img
                src={abcIncorrectImage}
                alt="Incorrect font example - generic font with wrong letter shapes"
                className="w-full h-auto rounded-xl max-w-xs mx-auto"
              />
            </div>

            {/* Edu-Aid Font Image */}
            <div className="rounded-2xl bg-[#ECFDF3] px-4 py-4 mb-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-xs font-semibold text-[#166534]">
                  correct edu font
                </div>
              </div>
              <img
                src={abcEduImage}
                alt="Edu-Aid font - SA-approved letter shapes for early writers"
                className="w-full h-auto rounded-xl max-w-xs mx-auto"
              />
            </div>

            {/* Edu-Aid fonts include */}
            <div className="mt-4">
              <p className="text-[11px] font-medium text-[#6B7280] mb-2">Edu-Aid fonts include:</p>
              <div className="flex flex-wrap gap-2">
                {["Tracing fonts", "Arrow-guided letters", "Print & cursive sets", "Numbers & symbols"].map(label => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full bg-[#F3F4FF] px-3 py-1 text-[11px] font-medium text-[#374151] border border-[#E5E7EB]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-3 text-[11px] text-[#9CA3AF]">
              Actual shapes may vary by grade level, but the principle stays the same: clear, consistent models help children learn faster.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

