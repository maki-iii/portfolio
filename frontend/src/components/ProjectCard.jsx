import { useState } from 'react';
import Arrow from './Arrow';

const placeholder = '/images/project-placeholder.svg';

export default function ProjectCard({ project }) {
  const [failedImage, setFailedImage] = useState(null);
  const screenshot = project.screenshot && failedImage !== project.screenshot ? project.screenshot : placeholder;
  let websiteUrl;
  try {
    const url = new URL(project.websiteUrl);
    if (url.protocol === 'https:' || url.protocol === 'http:') websiteUrl = url.href;
  } catch { /* Unconfigured projects keep their link disabled. */ }

  return (
    <article className="project-card">
      <div className="project-art project-screenshot">
        <img src={screenshot} alt={screenshot === placeholder ? 'Website screenshot placeholder' : (project.screenshotAlt || `${project.title} website screenshot`)} loading="lazy" onError={() => {
          if (screenshot !== placeholder) setFailedImage(project.screenshot);
        }} />
      </div>
      <div className="project-description">
        <div><h2 className="project-title">{project.title}</h2><p>{project.description}</p></div>
        {websiteUrl ? (
          <a className="project-visit" href={websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`} title="Visit website"><Arrow diagonal /></a>
        ) : (
          <button className="project-visit" type="button" disabled aria-label="Website link coming soon" title="Website link coming soon"><Arrow diagonal /></button>
        )}
      </div>
    </article>
  );
}
