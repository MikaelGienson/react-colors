import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink className="navbar-brand" exact to="/home">
        React Colors
      </NavLink>
      <Link to="/home">Home</Link>
    </div>
  );
}
