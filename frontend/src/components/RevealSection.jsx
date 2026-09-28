export default function RevealSection({ id, label, children }) {
  return (
    <section id={id} aria-label={label} className="reveal-section">
      <div className="reveal-content">{children}</div>
    </section>
  );
}
