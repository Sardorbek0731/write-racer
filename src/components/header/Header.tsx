// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Images
import logo from "../../assets/logo/logo.png";

function Header(): JSX.Element {
  return (
    <header className="flex alignCenter justifyBetween">
      <NavLink to="/" className="logo flex alignCenter">
        <img src={logo} alt="Writer Racing Logo" />
        <h1>racer</h1>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/">Bosh sahifa</NavLink>
        <NavLink to="/competition">Musobaqalar</NavLink>
        <NavLink to="/help">Yordam</NavLink>
      </nav>

      <NavLink className="signUp_btn flex alignCenter" to="/register">
        Kirish
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </NavLink>
    </header>
  );
}

export default Header;
