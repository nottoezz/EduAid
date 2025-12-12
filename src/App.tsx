import Hero from './components/Hero';
import Header from './components/Header';
import WhyFontMattersSection from './components/WhyFontMattersSection';
import FontPackSection from './components/FontPackSection';
import SeeItInActionCarousel from './components/SeeItInActionCarousel';
import WhoUsesEduAid from './components/WhoUsesEduAid';
import PricingLicenses from './components/PricingLicenses';
import TrustedByEducators from './components/TrustedByEducators';
import FaqSupport from './components/FaqSupport';
import FinalCtaFooter from './components/FinalCtaFooter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      <Hero />
      <WhyFontMattersSection />
      <section id="fonts">
        <FontPackSection />
      </section>
      <section id="why">
        <SeeItInActionCarousel />
      </section>
      <WhoUsesEduAid />
      <section id="pricing">
        <PricingLicenses />
      </section>
      <TrustedByEducators />
      <FaqSupport />
      <FinalCtaFooter />
      <Footer />
    </div>
  );
}

