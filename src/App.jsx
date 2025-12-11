import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-[#152835] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Edu-Aid Logo"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-wide uppercase">
                  EDU-AID
                </p>
                <p className="text-xs text-[#E5EDF4]/70">
                  Primary School Fonts · South Africa
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#fonts"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group"
              >
                Edu-Fonts
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C88] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#why"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group"
              >
                Why our font?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C88] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#order"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group"
              >
                Pricing & Licenses
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C88] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C88] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="text-right text-xs sm:text-sm">
              <div className="font-semibold text-[#8BD889]">082 853 6516</div>
              <div className="text-[#E5EDF4]/70">schoolfonts@gmail.com</div>
            </div>
          </div>
        </div>
      </header>

      <Hero />
    </div>
  );
}

export default App;
