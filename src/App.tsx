import { useState, useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import FontDownloadPage from './components/pages/FontDownloadPage';
import HowWeHelpPage from './components/pages/HowWeHelpPage';
import AllFontsPage from './components/pages/AllFontsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'download' | 'help' | 'all-fonts'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#download') {
        setCurrentPage('download');
      } else if (hash.startsWith('#help')) {
        setCurrentPage('help');
      } else if (hash === '#all-fonts') {
        setCurrentPage('all-fonts');
      } else {
        setCurrentPage('home');
        // Handle section scrolling on home page after a small delay
        if (hash && hash !== '#') {
          setTimeout(() => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'download') {
    return <FontDownloadPage />;
  }

  if (currentPage === 'help') {
    return <HowWeHelpPage />;
  }

  if (currentPage === 'all-fonts') {
    return <AllFontsPage />;
  }

  return <HomePage />;
}

