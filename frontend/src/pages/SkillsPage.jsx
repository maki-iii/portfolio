import PageHeading from '../components/PageHeading';
import SkillCard from '../components/SkillCard';
import { skillGroups } from '../data/skills';

export default function SkillsPage() {
  return (
    <>
      <PageHeading eyebrow="Skills & tools" title="The tools." accent="The craft behind them.">A place for the technologies and practices behind my work.</PageHeading>
      <section className="work-section" aria-label="Skills and tools">
        <div className="section-heading"><p className="eyebrow">01 / My toolkit</p></div>
        <div className="project-grid">{skillGroups.map(group => <SkillCard key={group.category} {...group} />)}</div>
      </section>
    </>
  );
}
