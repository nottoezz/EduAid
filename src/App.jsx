import Hero from './components/Hero'
import WhyFontMattersSection from './components/WhyFontMattersSection'
import FontPackSection from './components/FontPackSection'
import SeeItInActionCarousel from './components/SeeItInActionCarousel'
import WhoUsesEduAid from './components/WhoUsesEduAid'
import PricingLicenses from './components/PricingLicenses'
import TrustedByEducators from './components/TrustedByEducators'
import FaqSupport from './components/FaqSupport'
import FinalCtaFooter from './components/FinalCtaFooter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-[#152835] text-white shadow-lg relative">
        <div className="w-full px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Edu-Aid Logo"
                className="h-12 w-auto"
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

            <nav className="hidden lg:flex items-center gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#fonts"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Edu-Fonts
              </a>
              <a
                href="#why"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Why our font?
              </a>
              <a
                href="#order"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Pricing & Licenses
              </a>
              <a
                href="#contact"
                className="text-[#E5EDF4] hover:text-white transition-colors duration-200 relative group px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Contact
              </a>
            </nav>

            <div className="text-right text-xs sm:text-sm">
              <div className="font-semibold text-[#8BD889]">082 853 6516</div>
              <div className="text-[#E5EDF4]/70">schoolfonts@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Rounded bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#152835] rounded-b-[32px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#fef4e6] rounded-b-[32px] -z-10"></div>
      </header>

      <Hero />
      <WhyFontMattersSection />
      <FontPackSection />
      <SeeItInActionCarousel />
      <WhoUsesEduAid />
      <PricingLicenses />
      <TrustedByEducators />
      <FaqSupport />
      <FinalCtaFooter />
      <Footer />
    </div>
  );
}

export default App;
