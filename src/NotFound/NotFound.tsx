import { Link } from 'react-router-dom';
import './NotFound.css'

export default function NotFound() {

  return <div className="page-not-found">
    <p>Hoppsan! Sidan kunde inte hittas. Den kan vara borttagen eller flyttad.</p>
    Gå tillbaka till: <Link to="/">Startsidan</Link>
  </div>;
}