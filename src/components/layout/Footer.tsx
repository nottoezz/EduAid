import { Link } from "react-router-dom";
import logoImage from "/logo.png";

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

export default function Footer() {
  return (
    <footer className="relative bg-[#152835] text-white">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Edu-Aid Logo"
                className="h-8 w-auto"
              />
              <div>
                <p className="text-sm font-semibold tracking-wide">EDU-AID</p>
                <p className="text-xs text-[#E5EDF4]/70">Primary School Fonts</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-[#E5EDF4]/90">Supporting South African classrooms with correct handwriting fonts.</p>
              <div className="space-y-1">
                <p className="font-medium text-[#8BD889]">082 853 6516</p>
                <a
                  href="mailto:schoolfonts@gmail.com"
                  className="text-[#E5EDF4]/90 hover:text-white transition-colors"
                >
                  schoolfonts@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/#fonts" className="text-[#E5EDF4]/80 hover:text-white transition-colors">
                Edu-Fonts
              </Link>
              <Link to="/#why" className="text-[#E5EDF4]/80 hover:text-white transition-colors">
                Why Our Fonts Matter
              </Link>
              <Link to="/#pricing" className="text-[#E5EDF4]/80 hover:text-white transition-colors">
                Pricing & Licences
              </Link>
              <Link to="/#faq" className="text-[#E5EDF4]/80 hover:text-white transition-colors">
                FAQ & Support
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Resources</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <button
                onClick={(e) => handlePdfClick("sample-worksheet.pdf", e)}
                className="text-left text-[#E5EDF4]/80 hover:text-white transition-colors"
                type="button"
              >
                Sample Worksheet
              </button>
              <Link to="/#testimonials" className="text-[#E5EDF4]/80 hover:text-white transition-colors">
                Teacher Testimonials
              </Link>
              <button
                onClick={(e) => handlePdfClick("licensing-guide.pdf", e)}
                className="text-left text-[#E5EDF4]/80 hover:text-white transition-colors"
                type="button"
              >
                Licensing Guide
              </button>
              <button
                onClick={(e) => handlePdfClick("font-installation.pdf", e)}
                className="text-left text-[#E5EDF4]/80 hover:text-white transition-colors"
                type="button"
              >
                Installation Guide
              </button>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Connect</h3>
            <div className="space-y-3">
              <p className="text-sm text-[#E5EDF4]/90">
                Stay updated with font improvements and educational resources.
              </p>

              {/* Newsletter signup - simple version */}
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm text-white placeholder-[#E5EDF4]/60 focus:border-[#8BD889] focus:outline-none focus:ring-1 focus:ring-[#8BD889]"
                />
                <button
                  type="button"
                  className="w-full rounded-md bg-[#8BD889] px-3 py-2 text-sm font-medium text-[#152835] hover:bg-[#7BC67D] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[#E5EDF4]/60">
              © 2024 Edu-Aid. Designed for South African Foundation Phase education.
            </p>

            <div className="flex items-center gap-6 text-xs text-[#E5EDF4]/60">
              <a href="/privacy" className="hover:text-[#E5EDF4]/80 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#E5EDF4]/80 transition-colors">
                Terms of Service
              </a>
              <button
                onClick={(e) => handlePdfClick("Edu‑font-License.pdf", e)}
                className="hover:text-[#E5EDF4]/80 transition-colors"
                type="button"
              >
                Licensing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8BD889]/20 to-transparent" />
    </footer>
  );
}
