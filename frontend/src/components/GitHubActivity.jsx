import ContributionHeatmap from './ContributionHeatmap';
import { SiGithub } from 'react-icons/si';
import Arrow from './Arrow';
import { profile } from '../data/profile';

export default function GitHubActivity() {

  let username;
  try {
    const url = new URL(profile.github);
    if (url.hostname === 'github.com') username = url.pathname.split('/').filter(Boolean)[0];
  } catch { /* Hide activity until a GitHub profile is configured. */ }
  if (!username) return null;

  return (
    <section className="github-activity" aria-labelledby="github-activity-title">
      <div className="github-activity-heading">
        <div><p className="eyebrow">02 / GitHub activity</p><h2 id="github-activity-title">my contributions</h2></div>
        <a className="github-profile-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${username} on GitHub (opens in a new tab)`}><SiGithub aria-hidden="true" /> @{username} <Arrow diagonal /></a>
      </div>
      <div className="github-chart-card">
        <ContributionHeatmap username={username} />
        <p className="github-chart-note">Data provided by <a href="https://github.com/grubersjoe/github-contributions-api" target="_blank" rel="noopener noreferrer">GitHub Contributions API</a></p>
      </div>
    </section>
  );
}



