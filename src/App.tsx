import { useState, useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import FontDownloadPage from './components/pages/FontDownloadPage';
import HowWeHelpPage from './components/pages/HowWeHelpPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'download' | 'help'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#download') {
        setCurrentPage('download');
      } else if (hash.startsWith('#help')) {
        setCurrentPage('help');
      } else {
        setCurrentPage('home');
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

  return <HomePage />;
}

