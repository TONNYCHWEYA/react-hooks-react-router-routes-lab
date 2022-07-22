import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink to="/" exact>Home</NavLink>
    <NavBar to="/movies" exact>Movies</NavBar>
    <NavBar to="/directors" exact>Directors</NavBar>
    <NavBar to="/actors" exact>Actors</NavBar>
  </div>;
}

export default NavBar;
