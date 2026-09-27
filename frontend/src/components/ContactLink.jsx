import Arrow from './Arrow';

export default function ContactLink({ label, value, placeholder, email = false }) {
  return (
    <div className="contact-row">
      <span className="eyebrow">{label}</span>
      {value ? <a href={email ? 'mailto:' + value : value}>{email ? value : 'Visit ' + label}<Arrow diagonal /></a> : <span className="contact-placeholder">{placeholder}</span>}
    </div>
  );
}
