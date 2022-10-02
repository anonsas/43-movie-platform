import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <h3>Movie Platform</h3>
      <nav className="header__nav">
        <NavLink to="/" end className="header__nav--link">
          Home
        </NavLink>
        <NavLink to="/categories" className="header__nav--link">
          Categories
        </NavLink>
        <NavLink to="/movies" className="header__nav--link">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
