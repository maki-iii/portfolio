import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Arrow from './Arrow';

export default function ProjectSlider({ projects }) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const count = projects.length;
  const current = count ? active % count : 0;

  function move(direction) {
    setActive(index => (index + direction + count) % count);
  }

  if (!count) return <p className="section-note">Projects coming soon.</p>;

  return (
    <div className="project-slider" role="region" aria-roledescription="carousel" aria-label="Project showcase"
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}>
      <div className="slider-stage"
        onTouchStart={event => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={event => {
          if (touchStart !== null) {
            const distance = touchStart - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
          }
          setTouchStart(null);
        }}
        onTouchCancel={() => setTouchStart(null)}>
        {projects.map((project, index) => {
          let offset = (index - current + count) % count;
          if (offset > count / 2) offset -= count;
          const position = offset === 0 ? 'active' : offset === -1 ? 'previous' : offset === 1 ? 'next' : 'hidden';
          return (
            <div key={project.id} className={`slider-slide slider-slide--${position}`}
              role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${count}`}
              aria-hidden={offset !== 0} inert={offset !== 0}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
      <div className="slider-controls">
        <button className="slider-arrow slider-arrow--previous" type="button" aria-label="Previous project" onClick={() => move(-1)} disabled={count < 2}><Arrow /></button>
        <p className="slider-status" aria-live="polite" aria-atomic="true"><span>{String(current + 1).padStart(2, '0')}</span> / {String(count).padStart(2, '0')}<span className="sr-only"> — {projects[current].title}</span></p>
        <button className="slider-arrow" type="button" aria-label="Next project" onClick={() => move(1)} disabled={count < 2}><Arrow /></button>
      </div>
    </div>
  );
}
