import { profile } from '../data/profile';
import BackToTop from './BackToTop';

export default function Footer() {
  return <footer className="site-footer page-width"><span>© {new Date().getFullYear()} {profile.name}</span><span>Made with intention.</span><BackToTop /></footer>;
}
