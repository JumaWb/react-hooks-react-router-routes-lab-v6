import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/actors"
        className="nav-link"
      >
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        className="nav-link"
      >
        Directors
      </NavLink>
      
    </nav>
  );
}

export default NavBar;
