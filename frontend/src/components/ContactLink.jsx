import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import Arrow from './Arrow';
import { profile } from '../data/profile';

const icons = { Email: LuMail, GitHub: SiGithub, LinkedIn: FaLinkedinIn };
const descriptions = { Email: 'For opportunities, ideas, or a simple hello.', GitHub: 'Explore my code and the things I’m building.', LinkedIn: 'Connect with me professionally.' };

export default function ContactLink({ label, value, email = false }) {
  const Icon = icons[label] || LuMail;
  const display = label === 'LinkedIn' ? profile.name : email ? value : value?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const content = <>
    <span className="contact-card-icon"><Icon aria-hidden="true" /></span>
    <span className="contact-card-copy"><span className="contact-card-label">{label}</span><span className="contact-card-value">{value ? display : 'Coming soon'}</span><span className="contact-card-description">{descriptions[label]}</span></span>
    {value && <span className="contact-card-arrow"><Arrow diagonal /></span>}
  </>;
  return value ? <a className={`contact-card${email ? ' contact-card-email' : ''}`} href={email ? `mailto:${value}` : value} target={email ? undefined : '_blank'} rel={email ? undefined : 'noopener noreferrer'} aria-label={email ? `Email ${value}` : `Visit ${label} (opens in a new tab)`}>{content}</a> : <div className="contact-card contact-card-pending">{content}</div>;
}


