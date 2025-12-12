import Hero from '../sections/Hero';
import Header from '../layout/Header';
import WhyFontMattersSection from '../sections/WhyFontMattersSection';
import FontPackSection from '../sections/FontPackSection';
import SeeItInActionSection from '../sections/SeeItInActionSection';
import WhoUsesEduAidSection from '../sections/WhoUsesEduAidSection';
import PricingSection from '../sections/PricingSection';
import TrustedByEducatorsSection from '../sections/TrustedByEducatorsSection';
import FaqSection from '../sections/FaqSection';
import FinalCtaSection from '../sections/FinalCtaSection';
import Footer from '../layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      <Hero />
      <WhyFontMattersSection />
      <section id="fonts">
        <FontPackSection />
      </section>
      <section id="why">
        <SeeItInActionSection />
      </section>
      <WhoUsesEduAidSection />
      <section id="pricing">
        <PricingSection />
      </section>
      <TrustedByEducatorsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

