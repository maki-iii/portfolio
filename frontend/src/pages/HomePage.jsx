
import { profile } from '../data/profile';
import Arrow from '../components/Arrow';


export default function HomePage() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-dot" /> IT graduate · Full-stack developer</p>
        <h1 id="hero-title">Hi, I’m {profile.name}.<br /><span>I build web applications.</span></h1>
        <p className="hero-intro">I’m an Information Technology graduate building practical web applications with React and Node.js. Explore the projects I’ve developed and the skills behind them.</p>
        <a className="button" href="#projects">Explore my work <Arrow /></a>
      </div>

    </section>
  );
}


