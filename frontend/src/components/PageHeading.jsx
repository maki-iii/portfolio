export default function PageHeading({ eyebrow, title, accent, children }) {
  return (
    <header className="page-heading">
      <p className="eyebrow"><span className="small-dot" />{eyebrow}</p>
      <h2 className="section-title">{title}{accent && <><br /><span>{accent}</span></>}</h2>
      {children && <p className="hero-intro">{children}</p>}
    </header>
  );
}

