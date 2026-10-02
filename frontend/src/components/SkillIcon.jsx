import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiGithub, SiVite, SiFigma, SiXampp } from 'react-icons/si';
import { LuDatabase, LuWaypoints, LuMonitorSmartphone, LuAccessibility, LuLightbulb, LuFlaskConical, LuCode } from 'react-icons/lu';

const icons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'Next.js': SiNextdotjs,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'REST APIs': LuWaypoints,
  SQL: LuDatabase,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  Figma: SiFigma,
  XAMPP: SiXampp,
  'Responsive design': LuMonitorSmartphone,
  Accessibility: LuAccessibility,
  'Problem solving': LuLightbulb,
  Testing: LuFlaskConical,
};

export default function SkillIcon({ skill }) {
  if (skill === 'HTML & CSS') {
    return <span className="skill-icon skill-icon-pair" aria-hidden="true"><SiHtml5 /><SiCss /></span>;
  }
  const Icon = icons[skill] || LuCode;
  return <Icon className="skill-icon" aria-hidden="true" focusable="false" />;
}
