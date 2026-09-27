import { useEffect, useRef } from 'react';

export default function RevealSection({ id, label, children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!('IntersectionObserver' in window)) {
      section.dataset.revealed = 'true';
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        section.dataset.revealed = 'true';
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} aria-label={label} className="reveal-section" onFocusCapture={() => { sectionRef.current.dataset.revealed = 'true'; }}>
      <div className="reveal-content">{children}</div>
    </section>
  );
}
