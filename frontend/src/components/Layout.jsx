import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { profile } from '../data/profile';

export default function Layout({ children }) {
  useEffect(() => {
    document.title = profile.name + ' — Portfolio';
    // Restore bookmarked sections once React has rendered their targets.
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'instant' });
  }, []);
  return (
    <div className="home" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" className="page-width" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}
