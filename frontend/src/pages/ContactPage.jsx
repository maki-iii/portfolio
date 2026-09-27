import PageHeading from '../components/PageHeading';
import ContactLink from '../components/ContactLink';
import { profile } from '../data/profile';

export default function ContactPage() {
  return (
    <>
      <PageHeading eyebrow="Get in touch" title="Good things start" accent="with a conversation.">Have a project in mind, an idea to share, or just want to say hello?</PageHeading>
      <section className="contact-details" aria-labelledby="contact-links-title">
        <div className="section-heading"><h2 id="contact-links-title">Let’s connect.</h2></div>
        <ContactLink label="Email" value={profile.email} placeholder="Your email address" email />
        <ContactLink label="GitHub" value={profile.github} placeholder="Your GitHub profile" />
        <ContactLink label="LinkedIn" value={profile.linkedin} placeholder="Your LinkedIn profile" />
      </section>
    </>
  );
}
