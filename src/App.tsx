import { useState, useEffect } from 'react';
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
import FontDownloadPage from './components/FontDownloadPage';

export default function App() {
  const [showDownloadPage, setShowDownloadPage] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowDownloadPage(window.location.hash === '#download');
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showDownloadPage) {
    return <FontDownloadPage />;
  }

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

