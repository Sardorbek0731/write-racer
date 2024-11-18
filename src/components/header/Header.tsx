// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Images
import logo from "../../assets/logo/logo.png";

function Header(): JSX.Element {
  return (
    <div className="header-container">
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
      </header>
    </div>
  );
}

export default Header;
