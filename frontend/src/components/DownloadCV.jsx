import { profile } from '../data/profile';

export default function DownloadCV() {
  const content = <><span>Download CV</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg></>;
  return profile.cvUrl ? (
    <a className="download-cv" href={profile.cvUrl} download>{content}</a>
  ) : (
    <button className="download-cv" type="button" disabled title="CV coming soon" aria-label="Download CV — coming soon">{content}</button>
  );
}
