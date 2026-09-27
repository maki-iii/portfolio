
import PageHeading from '../components/PageHeading';
import Arrow from '../components/Arrow';
import { profile } from '../data/profile';

export default function AboutPage() {
  return (
    <>
      <PageHeading eyebrow="A little about me" title="The person" accent="behind the work.">{profile.role}.</PageHeading>
      <section className="about-section" aria-labelledby="story-title">
        <p className="eyebrow">01 / My story</p>
        <div><h2 id="story-title">A little context.</h2><p className="about-copy">Your story goes here. Share how you got started, what you enjoy building, and the experiences that shaped your approach.</p><span className="editor-note">Replace this introduction with your own story.</span></div>
      </section>
      <section className="about-section" aria-labelledby="approach-title">
        <p className="eyebrow">02 / My approach</p>
        <div><h2 id="approach-title">Thoughtful from the start.</h2><p className="about-copy">Use this space to describe how you work: how you turn an idea into something useful, collaborate with others, and pay attention to the details.</p><a className="button" href="#projects">Explore my work <Arrow /></a></div>
      </section>
    </>
  );
}

