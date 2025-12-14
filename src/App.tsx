import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import FontDownloadPage from './components/pages/FontDownloadPage';
import HowWeHelpPage from './components/pages/HowWeHelpPage';
import AllFontsPage from './components/pages/AllFontsPage';

// Component to handle scrolling to sections on the home page
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Handle section scrolling on home page
    // With basename, pathname will be '/EduAid' in production, but we want to scroll on home page
    const isHomePage = location.pathname === '/' ||
                      location.pathname === '/EduAid' ||
                      location.pathname === '/EduAid/';

    if (isHomePage && location.hash) {
      // Use requestAnimationFrame for better performance and to avoid forced reflow
      requestAnimationFrame(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Check if element is in viewport before scrolling to avoid unnecessary layout
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

          if (!isVisible) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    }
  }, [location]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<FontDownloadPage />} />
        <Route path="/help" element={<HowWeHelpPage />} />
        <Route path="/all-fonts" element={<AllFontsPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  // Use basename for GitHub Pages deployment
  const basename = import.meta.env.PROD ? '/EduAid' : '';

  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

