import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="site-title">
          The RP Blog
        </Link>
        <nav className="site-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
