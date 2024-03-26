import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Guvi</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/all" className="nav-link">All Courses<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link to="/fsd" className="nav-link">Full Stack Development</Link>
          </li>
          <li className="nav-item">
            <Link to="/db" className="nav-link">Data Base</Link>
          </li>
          <li className="nav-item">
            <Link to="/be" className="nav-link ">Backend Technologies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
