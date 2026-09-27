import Layout from './components/Layout';
import RevealSection from './components/RevealSection';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Layout>
      <section id="home" aria-label="Home"><HomePage /></section>
      <RevealSection id="about" label="About"><AboutPage /></RevealSection>
      <RevealSection id="projects" label="Projects"><ProjectsPage /></RevealSection>
      <RevealSection id="skills" label="Skills"><SkillsPage /></RevealSection>
      <RevealSection id="contact" label="Contact"><ContactPage /></RevealSection>
    </Layout>
  );
}

