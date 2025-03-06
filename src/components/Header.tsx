import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="site-title">
          RavenPack Test Blog
        </Link>
      </div>
    </header>
  );
};
