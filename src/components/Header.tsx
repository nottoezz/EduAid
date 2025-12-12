import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Trigger at 100px scroll for better UX
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-700 ease-out text-[#16130F] fixed top-0 left-0 right-0 z-30 ${
      isScrolled
        ? 'bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl mx-4 mt-4'
        : 'bg-[#fef4e6]/95 backdrop-blur-sm rounded-none'
    }`}>
      <div className="px-6 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="relative">
              <span className="text-2xl font-black text-[#16130F] tracking-tight">
                EDU-FONT
              </span>
              <span className="absolute -top-1 -right-6 text-xs font-bold text-[#00827A]">
                ™
              </span>
            </div>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#fonts"
              className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-[#16130F] hover:text-[#00827A] hover:bg-[#fef4e6]/60'
                  : 'text-[#16130F] hover:text-[#00827A] hover:bg-white/60'
              }`}
            >
              Font Pack
            </a>
            <a
              href="#why"
              className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-[#16130F] hover:text-[#00827A] hover:bg-[#fef4e6]/60'
                  : 'text-[#16130F] hover:text-[#00827A] hover:bg-white/60'
              }`}
            >
              See It In Action
            </a>
            <a
              href="#pricing"
              className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-[#16130F] hover:text-[#00827A] hover:bg-[#fef4e6]/60'
                  : 'text-[#16130F] hover:text-[#00827A] hover:bg-white/60'
              }`}
            >
              Pricing
            </a>
            <a
              href="mailto:schoolfonts@gmail.com"
              className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-[#16130F] hover:text-[#00827A] hover:bg-[#fef4e6]/60'
                  : 'text-[#16130F] hover:text-[#00827A] hover:bg-white/60'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Side CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#16130F] bg-white/80 backdrop-blur-sm border border-[#E8DFD2] rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Get Font
            </a>
            <a
              href="mailto:schoolfonts@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#00827A] rounded-lg hover:bg-[#006B5E] hover:shadow-lg transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

