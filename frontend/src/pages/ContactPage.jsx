import { useEffect, useRef, useState } from 'react';
import { LuCopy, LuCheck } from 'react-icons/lu';
import PageHeading from '../components/PageHeading';
import ContactLink from '../components/ContactLink';
import { profile } from '../data/profile';

export default function ContactPage() {
  const [copyStatus, setCopyStatus] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('Email copied');
    } catch {
      setCopyStatus('Could not copy. Select the email address to copy it.');
    }
    timer.current = setTimeout(() => setCopyStatus(''), 4000);
  }
  return (
    <>
      <PageHeading eyebrow="Get in touch" title="Good things start" accent="with a conversation.">Have a project in mind, an idea to share, or just want to say hello?</PageHeading>
      <section className="contact-details contact-details-enhanced" aria-labelledby="contact-links-title">
        <div className="contact-section-intro"><h2 id="contact-links-title">Let’s connect.</h2><p>Find me here. A conversation is a good place to start.</p></div>
        <div className="contact-card-grid">
          <ContactLink label="Email" value={profile.email} email />
          <ContactLink label="GitHub" value={profile.github} />
          <ContactLink label="LinkedIn" value={profile.linkedin} />
        </div>
        {profile.email && <div className="contact-copy-row"><button className="copy-email-button" type="button" onClick={copyEmail}>{copyStatus === 'Email copied' ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}Copy email address</button><span role="status" className="contact-copy-status">{copyStatus}</span></div>}
      </section>
    </>
  );
}
