export default function SkillCard({ category, description, skills }) {
  return (
    <article className="detail-card">
      <h2>{category}</h2><p>{description}</p>
      <ul className="skill-list">{skills.map(skill => <li className="tag" key={skill}>{skill}</li>)}</ul>
    </article>
  );
}
