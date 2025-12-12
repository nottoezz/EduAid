import { useState, useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import FontDownloadPage from './components/pages/FontDownloadPage';

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

  return <HomePage />;
}

