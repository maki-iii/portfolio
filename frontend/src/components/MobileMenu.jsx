import { useEffect, useRef, useState } from 'react';
import { LuHouse, LuUserRound, LuFolderOpen, LuCode, LuMail, LuX, LuArrowLeft } from 'react-icons/lu';
import DownloadCV from './DownloadCV';
import ThemeToggle from './ThemeToggle';

const items = [
  { id: 'contact', label: 'Contact', Icon: LuMail },
  { id: 'skills', label: 'Skills', Icon: LuCode },
  { id: 'projects', label: 'Projects', Icon: LuFolderOpen },
  { id: 'about', label: 'About', Icon: LuUserRound },
  { id: 'home', label: 'Home', Icon: LuHouse },
];

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
      <button className="menu-toggle radial-trigger" type="button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialogRef.current.showModal(); setOpen(true); }}><LuArrowLeft size={20} aria-hidden="true" /></button>
      <dialog ref={dialogRef} id="mobile-navigation" className="radial-dialog" aria-label="Mobile menu" onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) close(); }}>
        <div className="radial-panel">
          <button className="radial-close" type="button" aria-label="Close navigation" onClick={close} autoFocus><LuX size={23} aria-hidden="true" /></button>
          <div className="radial-caption" aria-hidden="true">Explore<span>Choose a section</span></div>
          <nav className="radial-links" aria-label="Mobile navigation">
            {items.map(({ id, label, Icon }, index) => {
              const angle = (index + 1) * Math.PI / 10;
              return <a key={id} className="radial-item" style={{ '--x': `${264 - Math.cos(angle) * 220}px`, '--y': `${44 + Math.sin(angle) * 220}px`, '--order': index + 1 }} href={`#${id}`} aria-label={label} aria-current={activeSection === id ? 'location' : undefined} onClick={close}><Icon size={21} aria-hidden="true" /><span>{label}</span></a>;
            })}
          </nav>
          <div className="radial-theme"><ThemeToggle /></div>
          <div className="radial-download"><DownloadCV /></div>
        </div>
      </dialog>
    </div>
  );
}

