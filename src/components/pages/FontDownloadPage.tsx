import Header from "../layout/Header";
import Footer from "../layout/Footer";

// Function to handle PDF link clicks to avoid React Router interception
const handlePdfClick = (filename: string, e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  // Construct the correct URL - Vite serves public files from root
  const baseUrl = import.meta.env.BASE_URL || '/';
  const pdfUrl = `${baseUrl}${filename}`.replace(/\/\//g, '/'); // Remove double slashes
  
  // Use window.open for reliable PDF opening
  window.open(pdfUrl, '_blank', 'noopener,noreferrer');
};

export default function FontDownloadPage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/Edu-Aid Trial Grade 1 Font.ttf';
    link.download = 'Edu-Aid Trial Grade 1 Font.ttf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#8BD889]/20">
              <svg className="h-10 w-10 text-[#8BD889]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-[#16130F] sm:text-5xl">
              Download Edu-Aid Trial Font
            </h1>

            <p className="mt-4 text-lg text-black/70 max-w-2xl mx-auto">
              Try our CAPS-aligned Foundation Phase font free. This trial version includes all basic letters and numbers for Grades R-1 practice.
            </p>

            {/* Download Section */}
            <div className="mt-12 rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#16130F]">What's included:</h3>
                  <ul className="mt-4 space-y-3 text-black/75">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#8BD889] flex-shrink-0" />
                      <span>Complete A-Z uppercase and lowercase letters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#8BD889] flex-shrink-0" />
                      <span>CAPS Foundation Phase letter shapes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#8BD889] flex-shrink-0" />
                      <span>Suitable for worksheets, presentations, and digital materials</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#8BD889] px-8 py-4 text-lg font-semibold text-black hover:opacity-95 transition shadow-sm"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Trial Font
                    </button>

                    <button
                      onClick={(e) => handlePdfClick("Edu‑font-License.pdf", e)}
                      className="inline-flex items-center justify-center rounded-2xl border border-black/20 bg-white px-6 py-4 text-lg font-semibold text-black hover:bg-black/5 transition"
                      type="button"
                    >
                      View Full License & Pricing
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <p className="mt-8 text-sm text-black/60">
              This trial font is provided free for evaluation purposes. For commercial use or full access to all font variants,
              please review our licensing options.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
