import PageHeading from '../components/PageHeading';
import ProjectSlider from '../components/ProjectSlider';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <PageHeading eyebrow="Works" title="A few things" accent="I’ve made.">A space for projects, experiments, and ideas brought to life.</PageHeading>
      <section className="work-section" aria-label="Selected projects">
        <div className="section-heading"><p className="eyebrow">01 / Projects</p></div>
        <ProjectSlider projects={projects} />
      </section>
    </>
  );
}

