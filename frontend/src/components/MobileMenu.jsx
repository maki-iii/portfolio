import { useEffect, useRef, useState } from 'react';
import DownloadCV from './DownloadCV';
import ThemeToggle from './ThemeToggle';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

export default function MobileMenu({ activeSection }) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  function close() { dialogRef.current.close(); }

  useEffect(() => {
    const media = window.matchMedia('(min-width: 701px)');
    const handleResize = () => { if (media.matches) dialogRef.current.close(); };
    media.addEventListener('change', handleResize);
    return () => media.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialogRef.current.showModal(); setOpen(true); }}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 12H4m6-6-6 6 6 6" /></svg>
      </button>
      <dialog ref={dialogRef} id="mobile-navigation" className="mobile-drawer" aria-labelledby="mobile-menu-title" onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) close(); }}>
        <div className="drawer-panel">
          <div className="drawer-heading"><span id="mobile-menu-title">Navigation</span><button className="menu-toggle" type="button" aria-label="Close navigation" onClick={close} autoFocus><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></button></div>
          <nav className="drawer-links" aria-label="Mobile navigation">
            {sections.map((section, index) => <a key={section} href={`#${section}`} aria-current={activeSection === section ? 'location' : undefined} onClick={close}><span className="drawer-number">0{index + 1}</span>{section.charAt(0).toUpperCase() + section.slice(1)}</a>)}
          </nav>
          <div className="drawer-actions"><DownloadCV /><ThemeToggle /></div>
        </div>
      </dialog>
    </div>
  );
}

