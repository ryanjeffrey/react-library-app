import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
  return (
    <>
      <h2>Welcome to Ryan&apos;s CS Library!</h2>
      <p>Check out our amazing library of <Link to="/books">books</Link>.</p>
    </>
  );
}