
import PageHeading from '../components/PageHeading';


import Arrow from '../components/Arrow';
import { profile } from '../data/profile';

export default function AboutPage() {
  return (
    <>
      <PageHeading eyebrow="A little about me" title="The person" accent="behind the work.">{profile.role}.</PageHeading>
      <section className="about-section" aria-labelledby="story-title">
        <p className="eyebrow">01 / My story</p>
        <div><h2 id="story-title">A little context.</h2>
        <p className="about-copy">
          I’m a fresh graduate from Our Lady of Fatima University with
          a Bachelor of Science in Information Technology.
          Most of my projects were developed during my college years,
          where I gained hands-on experience in designing,
          developing, and improving different software applications.</p></div>
      </section>
      <section className="about-section" aria-labelledby="approach-title">
        <p className="eyebrow">02 / My approach</p>
        <div><h2 id="approach-title">Thoughtful from the start.</h2>
        <p className="about-copy">
          I turn ideas into practical solutions by understanding
          the problem, planning the right approach, and building with attention to detail.
          I value teamwork, clear communication, and continuous learning to create useful
          and reliable applications.</p><a className="button" href="#projects">Explore my work <Arrow /></a></div>
      </section>


    </>
  );
}


