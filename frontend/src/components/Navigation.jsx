import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import Arrow from './Arrow';
import SectionRail from './SectionRail';
import DownloadCV from './DownloadCV';
import ThemeToggle from './ThemeToggle';
import ActiveNavIndicator from './ActiveNavIndicator';
import MobileMenu from './MobileMenu';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

export default function Navigation() {
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const header = headerRef.current;
    const targets = sections.map(id => document.getElementById(id)).filter(Boolean);
    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      const marker = header.getBoundingClientRect().height + 40;
      let active = targets[0]?.id;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= marker) active = target.id;
      }
      // The final section can be too short to reach the marker.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        active = targets.at(-1)?.id;
      }
      if (active) {
        setActiveSection(active);
        targets.forEach(target => {
          const value = String(target.id === active);
          if (target.dataset.active !== value) target.dataset.active = value;
        });
      }
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    }

    const resizeObserver = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--navigation-height', `${header.getBoundingClientRect().height}px`);
      scheduleUpdate();
    });
    resizeObserver.observe(header);
    targets.forEach(target => resizeObserver.observe(target));
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      document.documentElement.style.removeProperty('--navigation-height');
    };
  }, []);

  return (
    <>
    <header ref={headerRef} className="site-header page-width">
      <a className="wordmark" href="#home" aria-label={profile.name + ', home'}>{profile.name}<span className="wordmark-dot">.</span></a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {sections.map(section => (
          <a key={section} href={`#${section}`} aria-current={activeSection === section ? 'location' : undefined}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {section === 'contact' && <Arrow diagonal />}
          </a>
        ))}
        <DownloadCV />
        <ThemeToggle />
        <ActiveNavIndicator activeSection={activeSection} />
      </nav>
      <div className="mobile-header-actions"><DownloadCV /><MobileMenu activeSection={activeSection} /></div>
    </header>
    <SectionRail activeSection={activeSection} />
    </>
  );
}






