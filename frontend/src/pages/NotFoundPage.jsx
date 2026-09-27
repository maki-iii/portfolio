import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import Arrow from '../components/Arrow';

export default function NotFoundPage() {
  return <div className="not-found"><PageHeading eyebrow="404 / Page not found" title="Nothing here." accent="Let’s head back.">The page you’re looking for isn’t available.</PageHeading><Link className="button" to="/">Back to home <Arrow /></Link></div>;
}
