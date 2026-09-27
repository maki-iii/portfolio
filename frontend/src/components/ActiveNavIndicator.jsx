import { useLayoutEffect, useRef } from 'react';

export default function ActiveNavIndicator({ activeSection }) {
  const indicatorRef = useRef(null);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const nav = indicator.parentElement;
    let cancelled = false;

    function measure() {
      if (cancelled) return;
      const link = nav.querySelector(`a[href="#${activeSection}"]`);
      if (!link) return;
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop + link.offsetHeight + 5}px)`;
      indicator.style.opacity = '1';
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    nav.querySelectorAll('a').forEach(link => observer.observe(link));
    document.fonts.ready.then(measure);
    return () => { cancelled = true; observer.disconnect(); };
  }, [activeSection]);

  return <span ref={indicatorRef} className="active-nav-indicator" aria-hidden="true" />;
}
