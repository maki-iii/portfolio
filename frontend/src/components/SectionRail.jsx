const sections = ['home', 'about', 'projects', 'skills', 'contact'];

export default function SectionRail({ activeSection }) {
  return (
    <nav className="section-rail" aria-label="Section shortcuts">
      {sections.map((section, index) => (
        <a key={section} href={`#${section}`} aria-label={`Go to ${section}`} aria-current={activeSection === section ? 'location' : undefined}>
          <span className="rail-bar" style={{ '--bar-width': `${Math.max(14, 30 - Math.abs(index - sections.indexOf(activeSection)) * 5)}px` }} aria-hidden="true" />
          <span className="rail-label">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </a>
      ))}
    </nav>
  );
}

