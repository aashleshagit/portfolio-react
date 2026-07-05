import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>

      <div className="navbar">

        <div className="logo">
          💻 AS Portfolio
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/services">My Expertise</Link>
          <Link to="/gallery">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button
          className="dark-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

      </div>

    </header>
  );
}

export default Header;