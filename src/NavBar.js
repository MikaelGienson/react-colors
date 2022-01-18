import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink className="navbar-brand" exact to="/home">
        React Colors
      </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/palette">Palette</NavLink>
    </div>
  );
}
