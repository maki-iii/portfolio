
import { profile } from '../data/profile';
import Arrow from '../components/Arrow';


export default function HomePage() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
            <p className="eyebrow"><span className="small-dot" /> A personal portfolio</p>
            <h1 id="hero-title">Thoughtful work.<br /><span>Simple by design.</span></h1>
            <p className="hero-intro">Hi, I’m {profile.name}. This is a space for the things I make, the ideas I explore, and the details in between.</p>
            <a className="button" href="#projects">Explore my work <Arrow /></a>
      </div>

    </section>
  );
}


