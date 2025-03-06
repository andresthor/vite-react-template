export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        © {new Date().getFullYear()} Andres Saemundsson |
        <a href="https://github.com/andresthor">github.com/andresthor</a>
      </div>
    </footer>
  );
}
