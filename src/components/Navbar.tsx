import { NavLink } from "react-router-dom";

import "./Navbar.css";

interface NavbarProps {
  id?: number;
  username: string;
}

const classesForSpan = "btn btn-danger"

export default function Navbar(props: NavbarProps) {
  return (
    <div style={{
      display: "flex",
      gap: 20
    }}>
      <NavLink to="/">App</NavLink>
      <NavLink to="/clase1">Clase 1</NavLink>
      <NavLink to="/clase9/8">Clase 9</NavLink>
    </div>
  )
};
